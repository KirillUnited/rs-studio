'use client'
import React from 'react'
import { useActionState } from 'react'
import { submitRecallForm } from './recallFormAction'
import { recallSchema } from './schemas'
import {
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import { useForm, FormProvider } from 'react-hook-form'
import { addToast, Button, Checkbox, Input } from '@heroui/react'
import Link from 'next/link'
import PhoneInput from '@/components/forms/ui/PhoneInput'
import { LabelKey, RU_LABELS } from '@/components/forms/constants'
import { Alert } from '@/components/forms'

export function ReCallForm() {
	const [state, formAction, isPending] = useActionState(submitRecallForm, {
		status: 'idle',
		errors: {},
	}) as any

	// initialize react-hook-form so FormProvider has a valid context
	const form = useForm<typeof recallSchema>({
		// cast to any to satisfy this workspace's type expectations
		defaultValues: {
			name: '',
			phone: '',
			agreement: false,
		} as any,
	} as any)

	// Add this effect to show toast and reset form on success
	React.useEffect(() => {
		if (state.status === 'success') {
			addToast({
				title: 'Успешно отправлено',
				description: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
				color: 'success',
			})
			form.reset()
		}
	}, [state.status, form.reset])

	const handleSubmit = async (formData: FormData) => {
		const result = await formAction(formData)
		console.log(result)
	}

	return (
		// cast methods as any to avoid JSX prop typing issues with FormProvider
		// @ts-ignore - react-hook-form FormProvider requires useForm return props; casted above to any for this workspace
		<FormProvider {...form}>
			<form action={handleSubmit} className="space-y-5" noValidate>
				{state.status === 'success' ? (
					<Alert />
				) : (
					<>
						<FormField
							control={form.control as any}
							name="name"
							defaultValue=""
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
								</FormItem>
							)}
						/>

						<FormField
							control={form.control as any}
							name="phone"
							defaultValue=""
							render={({ field }) => (
								<FormItem>
									<FormControl>
										{/*<Input*/}
										{/*	label={'Телефон'}*/}
										{/*	id="recall-phone"*/}
										{/*	type="tel"*/}
										{/*	required*/}
										{/*	isInvalid={!!state.errors?.phone}*/}
										{/*	isInvalidMessage={state.errors?.phone?.[0]}*/}
										{/*	errorMessage={state.errors?.phone?.[0]}*/}
										{/*	isRequired*/}
										{/*	pattern="^(\\+375|80)(\\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$"*/}
										{/*	aria-invalid={!!state.errors?.phone}*/}
										{/*	aria-describedby="recall-phone-error"*/}
										{/*	placeholder={'+375 (XX) XXX-XX-XX'}*/}
										{/*	labelPlacement={'outside'}*/}
										{/*	radius={'lg'}*/}
										{/*	{...field}*/}
										{/*/>*/}
										<PhoneInput
											name={`phone`}
											label={'Телефон'}
											id="recall-phone"
											required
											isRequired
											isInvalid={!!state.errors?.phone}
											errorMessage={state.errors?.phone?.[0]}
											aria-invalid={!!state.errors?.phone}
											aria-describedby="recall-phone-error"
											placeholder="+375 (29) 123-45-67"
											labelPlacement="outside"
											radius="lg"
											defaultCountry="BY"
											value={field.value}
											onChange={(value, { isValid }) => {
												field.onChange(value)
												// You can use the `isValid` flag for additional validation if needed
											}}
										/>
									</FormControl>
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
												radius={'lg'}
												id="recall-agreement"
												type="checkbox"
												required
												aria-invalid={!!state.errors?.agreement}
												aria-describedby="recall-agreement-error"
												{...field}
											>
												<span className={'text-sm'}>Согласие на </span>
											</Checkbox>
											<Link
												target="_blank"
												tabIndex={1}
												href={'/'}
												className="underline underline-offset-2"
											>
												обработку персональных данных
											</Link>
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
							{isPending ? 'Отправка...' : RU_LABELS[LabelKey.ORDER_MODAL_BUTTON]}
						</Button>
					</>
				)}

			</form>
		</FormProvider>
	)
}
