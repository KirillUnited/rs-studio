'use client'
import moduleProps from '@/lib/moduleProps'
import { ResponsiveImg } from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'
import CustomHTML from './CustomHTML'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'
import { Button } from '@heroui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { CallUsBadge } from '@/components/ui'
import { JSX, useState } from 'react'
import { ModalDialog } from '@/components/modal-dialog'
import { BsArrowUpRight } from 'react-icons/bs'

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
	Sanity.Module): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openDialog = () => setIsOpen(true)
	const hasImage = !!assets?.[0]
	const asset = assets?.[0]

	const textAlign = stegaClean(ta)
	const alignItems = stegaClean(ai)

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
					className="size-full object-cover md:max-h-[75vh]"
					width={2400}
					draggable={false}
					loading="eager"
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
								className="border-1 border-default-100 bg-default-50 text-foreground/90"
								startContent={
									<Icon
										className="flex-none outline-none transition-transform [&>path]:stroke-[2] text-secondary"
										icon="solar:star-linear"
										width={18}
									/>
								}
								radius="full"
								variant="bordered"
								size='sm'
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
							<h1 className="hero-section-title bg-clip-text text-transparent !text-[clamp(40px,10vw,64px)] leading-none">
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
										onPress={openDialog}
										className="group brand-gradient font-medium"
										radius="full"
										size='lg'
									>
										<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
											width={18} />
										Заказать
									</Button>

									<ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
								</>
								<Button
									className="group border-1 border-default-100 font-medium text-white"
									endContent={
										<span
											className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
											<BsArrowUpRight size={14} className='text-background' />
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
