'use client'
import moduleProps from '@/lib/moduleProps'
import { ResponsiveImg } from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'
import CustomHTML from './CustomHTML'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input, Textarea } from '@heroui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { CallUsBadge } from '@/components/ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type OrderFormData = {
  name: string
  phone: string
  email: string
  message?: string
}

export default function Hero({
															 pretitle,
															 title,
															 content,
															 ctas,
															 assets,
															 textAlign: ta = 'center',
															 alignItems: ai,
															 ...props
														 }: Partial<{
	pretitle: string
	title: string
	content: any
	ctas: Sanity.CTA[]
	assets: Sanity.Img[]
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
}> &
	Sanity.Module) {
	const hasImage = !!assets?.[0]
	const asset = assets?.[0]

	const textAlign = stegaClean(ta)
  const alignItems = stegaClean(ai)
  const [isOpen, setIsOpen] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<OrderFormData>()

  const onSubmit = (data: OrderFormData) => {
    console.log('Order submitted:', data)
    // Here you would typically send the data to your API
    setIsOpen(false)
    reset()
  }

  const openDialog = () => setIsOpen(true)
  const closeDialog = () => {
    setIsOpen(false)
    reset()
  }

	return (
		<section
			className={cn(
				hasImage &&
				'min-h-[75vh] relative isolate bg-ink text-canvas grid overflow-hidden *:col-span-full *:row-span-full after:absolute after:z-0 after:inset-0 after:bg-ink/70 after:content-[""]',
			)}
			{...moduleProps(props)}
		>
			{hasImage && (
				<ResponsiveImg
					img={asset}
					className="max-h-fold size-full object-cover"
					width={2400}
					draggable={false}
					style={{
						maxHeight: '75vh',
					}}
				/>
			)}

			{content && (
				<div className="flex w-full flex-col text-balance z-10 dark container">
					<div
						className={cn(
							'headings:text-balance relative isolate py-12',
							'flex flex-col gap-4 items-center',
							hasImage && 'text-shadow',
							{
								'mb-8': alignItems === 'start',
								'my-auto': alignItems === 'center',
								'mt-auto': alignItems === 'end',
								'me-auto': ['left', 'start'].includes(textAlign),
								'mx-auto': textAlign === 'center',
								'ms-auto': ['right', 'end'].includes(textAlign),
								'items-start': ['left', 'start'].includes(textAlign),
								'items-center': textAlign === 'center',
								'items-end': ['left', 'end'].includes(textAlign),
							},
						)}
						style={{ textAlign }}
					>
						{pretitle && (
							<Button
								className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-foreground/90"
								startContent={
									<Icon
										className="flex-none outline-none transition-transform [&>path]:stroke-[2] text-secondary"
										icon="solar:star-linear"
										width={20}
									/>
								}
								radius="full"
								variant="bordered"
							>
								{pretitle}
							</Button>
						)
						}
						<div
							className={cn(
								'text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]',
								{
									'text-right': ['left', 'end'].includes(textAlign),
									'text-left': ['right', 'start'].includes(textAlign),
								},
							)}>
							<h1 className="hero-section-title bg-clip-text text-transparent !text-[clamp(40px,10vw,64px)]">
								{title}
							</h1>
						</div>

						<PortableText
							value={content}
							components={{
								types: {
									'custom-html': ({ value }) => <CustomHTML {...value} />,
									'reputation-block': ({ value }) => (
										<Reputation
											className={cn(
												'!mt-4',
												hasImage && '[&_strong]:text-amber-400',
												{
													'justify-start': ['left', 'start'].includes(
														textAlign,
													),
													'justify-center': textAlign === 'center',
													'justify-end': ['right', 'end'].includes(textAlign),
												},
											)}
											reputation={value.reputation}
										/>
									),
								},
							}}
						/>

						<div className="flex flex-col sm:items-end justify-between w-full gap-6 sm:flex-row mt-10">
							<div className='flex flex-col gap-2 sm:flex-row'>
								<>
									<Button
										onClick={openDialog}
										className="group brand-gradient font-medium"
										radius="full"
										size='lg'
									>
										<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
												width={18} />
										Заказать
									</Button>

									<Modal isOpen={isOpen} onClose={closeDialog}>
										<ModalContent>
											<ModalHeader>
												<h2 className="text-xl font-bold">Оформить заказ</h2>
											</ModalHeader>
											<ModalBody>
												<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
													<Input
														{...register('name', { required: 'Обязательное поле' })}
														label="Ваше имя"
														variant="bordered"
														errorMessage={errors.name?.message}
													/>

													<Input
														{...register('phone', { 
															required: 'Обязательное поле',
															pattern: {
																value: /^[+]?[\s.-]?(\d[\s.-]?){10,}$/,
																message: 'Введите корректный номер телефона'
															}
														})}
														label="Телефон"
														variant="bordered"
														errorMessage={errors.phone?.message}
													/>

													<Input
														{...register('email', { 
															required: 'Обязательное поле',
															pattern: {
																value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
																message: 'Введите корректный email'
															}
														})}
														label="Email"
														variant="bordered"
														errorMessage={errors.email?.message}
													/>

													<Textarea
														{...register('message')}
														label="Дополнительная информация"
														variant="bordered"
														className="col-span-2"
													/>

													<ModalFooter className="mt-6">
														<Button variant="flat" onPress={closeDialog}>
															Отмена
														</Button>
														<Button color="primary" type="submit">
															Отправить заявку
														</Button>
													</ModalFooter>
												</form>
											</ModalBody>
										</ModalContent>
									</Modal>
								</>
								<Button
									className="group border-1 border-default-100 font-medium text-white"
									endContent={
										<span
											className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
										<Icon
											className="text-background [&>path]:stroke-[1.5]"
											icon="solar:arrow-right-linear"
											width={16}
										/>
									</span>
									}
									radius="full"
									variant="bordered"
									as={Link}
									href="/blog/tekhnologiya-litech-revolyuciya-v-restavracii-kozhi"
									size='lg'
									target="_blank"
								>
									Подробнее
								</Button>
							</div>
							<CallUsBadge />
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
