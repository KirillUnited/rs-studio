import { PortableTextBlock, stegaClean } from 'next-sanity'
import { cn } from '@/lib/utils'
import { FeaturedServiceCard } from '@/components/service/ui'
import { SERVICE_PAGE_LIST_QUERY } from './lib/queries'
import { fetchSanityLive } from '@/sanity/lib/fetch'

export default async function FeaturedServiceList({
	items,
	layout,
	columns = 3,
}: Partial<{
	items: Partial<{
		image: Sanity.Image
		content: PortableTextBlock[],
		title: string
	}>[]
	layout: 'grid' | 'carousel'
	columns: number
}> &
	Sanity.Module) {
	const featuredServiceList = await fetchSanityLive({
		query: SERVICE_PAGE_LIST_QUERY,
	});
	const isCarousel = stegaClean(layout) === 'carousel'

	return (
		<div
			className={cn(
				'items-stretch gap-8',
				isCarousel
					? 'carousel max-md:full-bleed md:overflow-fade-r pb-4 max-md:px-4'
					: [
						'grid *:h-full max-md:pb-4',
						columns
							? 'md:grid-cols-[repeat(var(--col,3),minmax(0,1fr))]'
							: 'sm:grid-cols-[repeat(auto-fill,minmax(var(--size,300px),1fr))]',
					],
			)}
			style={
				columns
					? ({
						'--col': columns,
					} as React.CSSProperties)
					: undefined
			}
		>
			{featuredServiceList?.map((card: Partial<{
				title: string
				image: Sanity.Image
				content: any
				ctas: Sanity.CTA[]
			}>) => (
				<FeaturedServiceCard card={card} key={card.title} />
			))}
		</div>
	)
}
