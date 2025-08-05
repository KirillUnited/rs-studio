import moduleProps from '@/lib/moduleProps'
import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'
import CTAList from '@/ui/CTAList'
import { Img } from '@/ui/Img'
import { cn } from '@/lib/utils'
import { FeaturedServiceCard } from '@/components/service/ui'
import Image from 'next/image'
import Link from 'next/link'

export default function CardList({
																	 pretitle,
																	 intro,
																	 cards,
																	 ctas,
																	 layout,
																	 columns = 3,
																	 visualSeparation,
																	 ...props
																 }: Partial<{
	pretitle: string
	intro: any
	ctas: Sanity.CTA[]
	cards: Partial<{
		image: Sanity.Image
		content: any
		ctas: Sanity.CTA[]
	}>[]
	layout: 'grid' | 'carousel'
	columns: number
	visualSeparation: boolean
}> &
	Sanity.Module) {
	const isCarousel = stegaClean(layout) === 'carousel'

	return (
		<section className="section-container space-y-12" {...moduleProps(props)}>
			<div className="container">
				{(pretitle || intro) && (
					<header className="richtext mb-8 md:mb-16 max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<PortableText value={intro} />
						<CTAList className="justify-center" ctas={ctas} />
					</header>
				)}

				<div
					className={cn(
						'items-stretch gap-8',
						// isCarousel
						// 	? 'max-md:carousel max-md:full-bleed max-md:px-4 max-md:pb-4'
						// 	: 'grid md:grid-cols-[repeat(var(--col,3),minmax(0,1fr))]',
						'max-md:carousel max-md:full-bleed max-md:px-4 max-md:pb-4 md:grid md:grid-cols-[repeat(var(--col,3),minmax(0,1fr))]'
					)}
					style={
						columns
							? ({
								'--col': columns,
							} as React.CSSProperties)
							: undefined
					}
				>
					{/* {cards?.map((card, key) => (
					<article
						className={cn(
							'flex flex-col gap-2',
							visualSeparation && 'border-ink/10 border p-4',
						)}
						key={key}
					>
						{card.image && (
							<figure>
								<Img
									className="aspect-video w-full object-cover"
									image={card.image}
									width={600}
								/>
							</figure>
						)}

						<div className="richtext grow">
							<PortableText value={card.content} />
						</div>
						<CTAList className="mt-auto" ctas={card.ctas} />
					</article>
				))} */}

					{/* TODO: remove */}
					<FeaturedServiceCard card={{
						title: 'Защита кожаного салона',
						image: '/images/service-1.jpg'
					}} />
					<FeaturedServiceCard card={{
						title: 'Матовое покрытие MATT X2',
						image: '/images/service-2.jpg'
					}} />
					<FeaturedServiceCard card={{
						title: 'Покраска кожи автомобиля',
						image: '/images/service-3.jpg'
					}} />
				</div>
			</div>
			<div className="container">
				{/* Before/After Showcase */}
				<Link href="/portfolio" className="flex relative rounded-large overflow-hidden">
					<Image
						src={`/images/before-after.jpg`}
						width={1920}
						height={380}
						alt="Before and after restoration"
						className="w-full h-96 object-cover"
						quality={50}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
					<div className="absolute bottom-8 left-8 text-foreground">
						<h3 className="text-2xl font-bold mb-2">Увидеть трансформацию</h3>
						<p className="text-muted-foreground">Профессиональные результаты, которые говорят сами за себя</p>
					</div>
				</Link>
			</div>
		</section>
	)
}
