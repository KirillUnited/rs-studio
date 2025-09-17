import { ProjectList } from "@/components/project";
import { PROJECT_LIST_QUERY } from "@/components/project/lib/queries";
import { fetchSanityLive } from "@/sanity/lib/fetch";

export default async function ProjectsPage() {
	const projects = await fetchSanityLive({ query: PROJECT_LIST_QUERY });

	if (!projects) {
		return (
			<div className="container mx-auto px-4">
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-automotive-navy mb-6">
						Проекты
					</h2>
					<div className="w-20 h-1 bg-automotive-gold rounded-full mx-auto mb-8"></div>
					<p className="text-lg text-muted-foreground">
						Проекты не найдены
					</p>
				</div>
			</div>
		)
	};

	return (
		<ProjectList projects={projects} />
	)
}