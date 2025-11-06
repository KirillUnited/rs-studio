'use client'
import { startTransition, useActionState, useEffect } from 'react'
import { submitRecallForm } from './recallFormAction'
import { type FormState, type RecallFormData, recallSchema } from './schemas'
import {
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addToast, Button, Checkbox, Input } from '@heroui/react'
import Link from 'next/link'
import PhoneInput, { usePhoneInput } from '@/components/forms/ui/PhoneInput'
import { LabelKey, RU_LABELS } from '@/components/forms/constants'
import { Alert } from '@/components/forms'

interface ReCallFormProps {
	onSubmitSuccess?: () => void
}

export function ReCallForm({ onSubmitSuccess }: ReCallFormProps) {
	const [state, formAction, isPending] = useActionState(submitRecallForm, {
		status: 'idle',
		errors: {},
	}) as [FormState, (formData: FormData) => Promise<any>, boolean]

	// initialize react-hook-form so FormProvider has a valid context
	const form = useForm<RecallFormData>({
		resolver: zodResolver(recallSchema),
		defaultValues: {
			name: '',
			phone: '',
			agreement: false,
		},
	} as any) // cast as any to avoid JSX prop typing issues with FormProvider

	const { registerPhone } = usePhoneInput(form.control)

	// Add this effect to show toast and reset form on success
	useEffect(() => {
		if (state.status === 'success') {
			addToast({
				title: 'Успешно отправлено',
				description: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
				color: 'success',
			})
			form.reset()
			if (onSubmitSuccess) {
				onSubmitSuccess()
			}
		}
	}, [state.status, form.reset])

	const onSubmit = async (values: RecallFormData) => {
		const formData = new FormData()

		formData.set('name', values.name)
		formData.set('phone', values.phone)
		formData.set('agreement', String(values.agreement))

		startTransition(async () => {
			await formAction(formData)
		})
	}

	return (
		// cast methods as any to avoid JSX prop typing issues with FormProvider
		// @ts-ignore - react-hook-form FormProvider requires useForm return props; casted above to any for this workspace
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-5"
				noValidate
			>
				{state.status === 'success' ? (
					<Alert />
				) : (
					<>
						<FormField
							control={form.control as any}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											label="Имя"
											id="recall-name"
											type="text"
											required
											isRequired
											errorMessage={state.errors?.name?.[0]}
											isInvalid={!!state.errors?.name}
											aria-invalid={!!state.errors?.name}
											aria-describedby="recall-name-error"
											placeholder={'Ваше имя'}
											labelPlacement={'outside'}
											radius={'lg'}
											{...field}
										/>
									</FormControl>
									<FormMessage
										className="text-danger text-xs"
										id="recall-name-error"
									/>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control as any}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<PhoneInput
											label={'Телефон'}
											id="recall-phone"
											required
											isRequired
											isInvalid={!!state.errors?.phone}
											errorMessage={state.errors?.phone?.[0]}
											aria-invalid={!!state.errors?.phone}
											aria-describedby="recall-phone-error"
											placeholder="+375 (29) 123 45 67"
											labelPlacement="outside"
											radius="lg"
											{...field}
											{...registerPhone('phone')}
										/>
									</FormControl>
									<FormMessage
										className="text-danger text-xs"
										id="recall-phone-error"
									/>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control as any}
							name="agreement"
							defaultValue={false}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex items-center gap-2 text-sm">
											<Checkbox
												className='leading-none'
												radius={'lg'}
												id="recall-agreement"
												type="checkbox"
												required
												aria-invalid={!!state.errors?.agreement}
												aria-describedby="recall-agreement-error"
												{...field}
											>
												<span className={'text-sm'}>Согласие на{' '}</span>
												<Link
													target="_blank"
													tabIndex={1}
													href={'/'}
													className="hover:text-primary-focus relative z-10 text-sm underline underline-offset-2 leading-none"
												>
													обработку персональных данных
												</Link>
											</Checkbox>
										</div>
									</FormControl>
									<FormMessage
										className={'text-danger text-xs'}
										id="recall-agreement-error"
									>
										{state.errors?.agreement?.[0]}
									</FormMessage>
								</FormItem>
							)}
						/>

						{state.errors?.form && (
							<div className="text-danger">{state.errors.form[0]}</div>
						)}
						<Button
							className={'brand-gradient group w-full'}
							color="primary"
							type="submit"
							isDisabled={isPending}
							isLoading={isPending}
							aria-busy={isPending}
							radius={'lg'}
						>
							{isPending
								? 'Отправка...'
								: RU_LABELS[LabelKey.ORDER_MODAL_BUTTON]}
						</Button>
					</>
				)}
			</form>
		</FormProvider>
	)
}
