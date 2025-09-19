import moduleProps from '@/lib/moduleProps'
import { stegaClean } from 'next-sanity'
import { cn } from '@/lib/utils'
import { JSX } from 'react'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { PROJECT_LIST_QUERY } from '@/components/project/lib/queries'
import { ProjectCard, ProjectShowcase } from '@/components/project/ui'
import { ProjectProps } from '@/components/project/ProjectList'
import { CTASection } from '@/components/service'
import { SectionHeader } from '@/components/section'

export default async function ProjectList({
																						pretitle,
																						intro,
																						description,
																						projects,
																						ctas,
																						layout,
																						columns = 3,
																						visualSeparation,
																						...props
																					}: Partial<{
	pretitle: string
	intro: any
	description: string
	ctas: Sanity.CTA[]
	projects: ProjectProps[]
	layout: 'grid' | 'carousel'
	columns: number
	visualSeparation: boolean
}> &
	Sanity.Module): Promise<JSX.Element> {
	const isCarousel = stegaClean(layout) === 'carousel'

	console.log(projects)

	return (
		<>
			<section className="py-16 bg-content1" {...moduleProps(props)}>
				<div className="container">
					<SectionHeader pretitle={pretitle} title={intro}
												 decription={description} />

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
				</div>
			</section>

			{/* CTA Section */}
			<CTASection className="py-16" />
		</>
	)
}
