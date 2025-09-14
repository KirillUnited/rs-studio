import { ProjectList } from "@/components/project";

interface ProjectsSectionProps {
	title: string
	description: string
	projects: any[]
}
export default function ProjectsSection({
	title,
	description,
	projects
}: ProjectsSectionProps) {
	if (!projects) return null;

	return (
		<section className="py-20 bg-background">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Наши <span className="text-brand-gradient">Проекты</span>
					</h2>
					<div className="w-20 h-1 brand-gradient rounded-full mx-auto mb-6"></div>
					<p className="text-sm md:text-base max-w-2xl mx-auto">
						{description}
					</p>
				</div>
				<ProjectList projects={projects} />
			</div>
		</section>
	);
};