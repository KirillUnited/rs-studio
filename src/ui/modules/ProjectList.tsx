import moduleProps from '@/lib/moduleProps'
import { stegaClean } from 'next-sanity'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { JSX } from 'react'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { PROJECT_LIST_QUERY } from '@/components/project/lib/queries'
import { ProjectCard, ProjectShowcase } from '@/components/project/ui'
import { ProjectProps } from '@/components/project/ProjectList'
import { CTASection } from '@/components/service'
import { SectionHeader } from '@/components/section'

export default async function CardList({
	pretitle,
	intro,
	projects,
	ctas,
	layout,
	columns = 3,
	visualSeparation,
	...props
}: Partial<{
	pretitle: string
	intro: any
	ctas: Sanity.CTA[]
	projects: ProjectProps[]
	layout: 'grid' | 'carousel'
	columns: number
	visualSeparation: boolean
}> &
	Sanity.Module): Promise<JSX.Element> {
	const featuredProjects = await fetchSanityLive({
		query: PROJECT_LIST_QUERY,
	})
	const isCarousel = stegaClean(layout) === 'carousel'

	console.log(projects)

	return (
		<>
			<section className="py-16 bg-content1" {...moduleProps(props)}>
				<div className="container">
					{/*{(pretitle || intro) && (*/}
					{/*	<header className="mb-8 md:mb-16 flex flewrap justify-between">*/}
					{/*		<div className="richtext max-w-2xl">*/}
					{/*			<Pretitle>{pretitle}</Pretitle>*/}
					{/*			<PortableText value={intro} />*/}
					{/*		</div>*/}
					{/*		{*/}
					{/*			ctas?.map((cta: Sanity.CTA, index) => (*/}
					{/*				<Button as={Link} href={cta.link?.external} key={index} className="self-end group max-md:hidden"*/}
					{/*								radius="full" variant="bordered">*/}
					{/*					{cta.link?.label}*/}

					{/*					<BsArrowUpRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
					{/*				</Button>*/}
					{/*			))*/}
					{/*		}*/}
					{/*	</header>*/}
					{/*)}*/}
					<SectionHeader pretitle={pretitle} title={intro} decription={'Портфолио успешных проектов по восстановлению автомобильных салонов. Каждый проект — это уникальное решение с гарантией качества.'} />

					{/* Before/After Showcase */}
					<ProjectShowcase />

					<div
						className={cn(
							'items-stretch gap-8 mt-12',
							// isCarousel
							// 	? 'max-md:carousel max-md:full-bleed max-md:px-4 max-md:pb-4'
							// 	: 'grid md:grid-cols-[repeat(var(--col,3),minmax(0,1fr))]',
							'max-md:carousel max-md:full-bleed max-md:px-4 max-md:pb-4 md:grid md:grid-cols-[repeat(var(--col,3),minmax(0,1fr))]',
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
							projects?.map((project: ProjectProps) => (
								<ProjectCard key={project.title} project={project} />
							))
						}
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
				</div>
			</section>

			{/* CTA Section */}
			<CTASection className='py-16' />
		</>
	)
}
