import Pretitle from '@/ui/Pretitle'
import { PortableText, PortableTextBlock } from 'next-sanity'

export interface SectionHeaderProps {
	pretitle?: string;
	title?: PortableTextBlock[] | PortableTextBlock;
	decription?: string;
}

export default function SectionHeader({ pretitle, title, decription }: SectionHeaderProps) {
	return (
		<header className="mb-12">
			<Pretitle className='mb-4'>{pretitle}</Pretitle>
			{title && (
				<h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
					{/*<PortableText value={title} />*/}
					Наши <span className="text-brand-gradient">Работы</span>
				</h2>
			)}
			<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
			<p className="text-sm md:text-base text-foreground-700 font-light max-w-3xl text-balance">
				{decription}
			</p>
		</header>
	)
}