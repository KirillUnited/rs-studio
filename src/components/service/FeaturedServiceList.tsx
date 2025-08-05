import { PortableTextBlock, stegaClean } from 'next-sanity'
import { cn } from '@/lib/utils'
import { FeaturedServiceCard } from '@/components/service/ui'

export default function FeaturedServiceList({
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
			{items?.map((card, key) => (
				<FeaturedServiceCard card={card} key={key} />
			))}
		</div>
	)
}
