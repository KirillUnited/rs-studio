import Link from "next/link"
import { ProjectCard } from "./ui"


export default function ProjectList({
	projects,
}: {
	projects: {
		image: Sanity.Image
		title: string
		description: string
		details: string[],
		slug: {
			current: string
		}
	}[]
}) {
	if (!projects || !Array.isArray(projects) || projects.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
				<h2 className="text-2xl font-bold mb-4">Проекты не найдены</h2>
				<p className="text-gray-600 mb-6">К сожалению, проекты не найдены</p>
				<Link
					href="/projects"
					className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
				>
					Посмотреть все проекты
				</Link>
			</div>
		);
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
			{projects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	)
}