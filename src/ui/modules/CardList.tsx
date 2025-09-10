import moduleProps from '@/lib/moduleProps'
import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'
import { cn } from '@/lib/utils'
import { FeaturedServiceCard } from '@/components/service/ui'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { JSX } from 'react'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { SERVICE_PAGE_LIST_LIMIT_QUERY } from '@/components/service/lib/queries'

export default async function CardList({
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
		title: string
		image: Sanity.Image
		content: any
		ctas: Sanity.CTA[]
	}>[]
	layout: 'grid' | 'carousel'
	columns: number
	visualSeparation: boolean
}> &
	Sanity.Module): Promise<JSX.Element> {
	const featuredServices = await fetchSanityLive({
		query: SERVICE_PAGE_LIST_LIMIT_QUERY,
		params: {
			limit: 3,
		}
	})
	const isCarousel = stegaClean(layout) === 'carousel';

	return (
		<section className="section-container space-y-12" {...moduleProps(props)}>
			<div className="container">
				{(pretitle || intro) && (
					<header className="mb-8 md:mb-16 flex flewrap justify-between">
						<div className="richtext max-w-2xl">
							<Pretitle>{pretitle}</Pretitle>
							<PortableText value={intro} />
						</div>
						{
							ctas?.map((cta: Sanity.CTA, index) => (
								<Button as={Link} href={cta.link?.external} key={index} className="self-end group max-md:hidden" radius="full" variant="bordered">
									{cta.link?.label}

									<BsArrowUpRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Button>
							))
						}
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
					{
						featuredServices?.map((service: Partial<{
							title: string
							image: Sanity.Image
							content: any
							ctas: Sanity.CTA[]
						}>) => (
							<FeaturedServiceCard key={service.title} card={service} />
						))
					}
				</div>
				{
					ctas?.map((cta: Sanity.CTA, index) => (
						<Button as={Link} href={cta.link?.external} key={index} className="self-end group mt-4 md:hidden" radius="full" variant="bordered">
							{cta.link?.label}

							<BsArrowUpRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					))
				}
			</div>
			<div className="container">
				{/* Before/After Showcase */}
				<Link href="/projects" className="flex relative rounded-large overflow-hidden">
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
