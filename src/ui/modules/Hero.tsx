import moduleProps from '@/lib/moduleProps'
import { ResponsiveImg } from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'
import CTAList from '@/ui/CTAList'
import Pretitle from '@/ui/Pretitle'
import CustomHTML from './CustomHTML'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'
import { Button } from '@heroui/react'
import { Icon } from '@iconify/react'

export default function Hero({
	pretitle,
	content,
	ctas,
	assets,
	textAlign: ta = 'center',
	alignItems: ai,
	...props
}: Partial<{
	pretitle: string
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

	return (
		<section
			className={cn(
				hasImage &&
				'relative isolate bg-ink text-canvas grid overflow-hidden *:col-span-full *:row-span-full after:absolute after:z-0 after:inset-0 after:bg-ink/50 after:content-[""]',
			)}
			{...moduleProps(props)}
		>
			{hasImage && (
				<ResponsiveImg
					img={asset}
					className="max-h-fold size-full object-cover"
					width={2400}
					draggable={false}
				/>
			)}

			{content && (
				<div className="section flex w-full flex-col text-balance z-10">
					<div
						className={cn(
							'richtext headings:text-balance relative isolate max-w-xl',
							'flex flex-col gap-4 items-center',
							hasImage && 'text-shadow',
							{
								'mb-8': alignItems === 'start',
								'my-auto': alignItems === 'center',
								'mt-auto': alignItems === 'end',
								'me-auto': ['left', 'start'].includes(textAlign),
								'mx-auto': textAlign === 'center',
								'ms-auto': ['right', 'end'].includes(textAlign),
							},
						)}
						style={{ textAlign }}
					>
						{/*<Pretitle className={cn(hasImage && 'text-canvas/70')}>*/}
						{/*	{pretitle}*/}
						{/*</Pretitle>*/}
						<Button
							className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
							endContent={
								<Icon
									className="flex-none outline-none [&>path]:stroke-[2]"
									icon="solar:arrow-right-linear"
									width={20}
								/>
							}
							radius="full"
							variant="bordered"
						>
							{pretitle}
						</Button>
						<div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
							<h1 className="hero-section-title bg-clip-text text-transparent !text-[clamp(40px,10vw,64px)]">
								{pretitle}
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

						{/*<CTAList*/}
						{/*	ctas={ctas}*/}
						{/*	className={cn('!mt-4', {*/}
						{/*		'justify-start': textAlign === 'left',*/}
						{/*		'justify-center': textAlign === 'center',*/}
						{/*		'justify-end': textAlign === 'right',*/}
						{/*	})}*/}
						{/*/>*/}
						<div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
							<Button
								className="h-10 w-[163px] bg-gradient-to-r from-primary to-secondary px-[16px] py-[10px] text-small font-medium leading-5 text-background"
								radius="full"
							>
								Заказать
							</Button>
							<Button
								className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
								endContent={
									<span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
										<Icon
											className="text-default-500 [&>path]:stroke-[1.5]"
											icon="solar:arrow-right-linear"
											width={16}
										/>
									</span>
								}
								radius="full"
								variant="bordered"
							>
								Подробнее
							</Button>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
