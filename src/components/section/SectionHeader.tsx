import Pretitle from '@/ui/Pretitle'
import { PortableText, PortableTextBlock } from 'next-sanity'
import { cn } from '@/lib/utils'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { BsArrowUpRightCircle } from 'react-icons/bs'

export interface SectionHeaderProps {
	pretitle?: string;
	title?: PortableTextBlock[] | PortableTextBlock;
	decription?: string;
	ctas?: Sanity.CTA[];
	className?: string;
}

export default function SectionHeader({ pretitle, title, decription, ctas, className }: SectionHeaderProps) {
	if (!pretitle || !title) return null

	return (
		<header className={cn('mb-8 md:mb-16 flex flex-wrap justify-between', className)}>
			<div>
				{pretitle && <Pretitle className="mb-4">{pretitle}</Pretitle>}
				{title && (
					<h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
						{/*<PortableText value={title} />*/}
						Наши <span className="text-brand-gradient">Работы</span>
					</h2>
				)}
				<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
				{decription && (
					<p className="text-sm md:text-base text-foreground-700 font-light max-w-3xl text-balance">
						{decription}
					</p>
				)}
			</div>
			{
				ctas?.map((cta: Sanity.CTA, index) => (
					<Button as={Link} href={cta.link?.external} key={index} className="self-end group mt-4 md:hidden"
									radius="full" variant="bordered">
						{cta.link?.label}

						<BsArrowUpRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
					</Button>
				))
			}
		</header>
	)
}