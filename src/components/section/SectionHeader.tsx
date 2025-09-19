import Pretitle from '@/ui/Pretitle'
import { PortableText, PortableTextBlock, PortableTextComponents } from 'next-sanity'
import { cn } from '@/lib/utils'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { BsArrowUpRightCircle } from 'react-icons/bs'

export interface SectionHeaderProps {
	pretitle?: string;
	title?: PortableTextBlock[] | PortableTextBlock;
	description?: string;
	ctas?: Sanity.CTA[];
	align?: 'left' | 'center' | 'right';
	className?: string;
}

const RichTextComponents: any = {
	marks: {
		highlight: ({ children }: { children: React.ReactNode }) => <span className="text-brand-gradient">{children}</span>,
	},
}

export default function SectionHeader({ pretitle, title, description, ctas, align, className }: SectionHeaderProps) {
	if (pretitle || title) {

		return (
			<header className={cn(
				'mb-8 md:mb-16 flex flex-wrap justify-between',

				className)}>
				<div className={cn(
					'flex flex-col items-start', {
					['lg:text-center lg:mx-auto lg:items-center']: align === 'center',
				},
				)}>
					{pretitle && <Pretitle className="mb-4">{pretitle}</Pretitle>}
					{title && (
						<div className="text-4xl md:text-5xl font-bold mb-4 capitalize">
							<PortableText value={title} components={RichTextComponents} />
						</div>
					)}
					<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
					{description && (
						<p className="text-sm md:text-base text-foreground-700 font-light max-w-3xl text-balance">
							{description}
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
}