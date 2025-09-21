import { AllProjects, ProjectList } from "@/components/project";
import { PROJECT_LIST_QUERY } from "@/components/project/lib/queries";
import { CTASection } from "@/components/service";
import { fetchSanityLive } from "@/sanity/lib/fetch";
import { Button } from "@heroui/react";
import { Metadata } from "next";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import Breadcrumbs from '@/ui/modules/Breadcrumbs'
import { getBreadcrumbs } from '@/lib/crumbs'

export const metadata: Metadata = {
	title: "Проекты | RS Service",
	description: "Портфолио успешных проектов по восстановлению автомобильных салонов в Минске",
	keywords: ["проекты", "восстановление", "автомобильный салон", "Минск"],
	openGraph: {
		title: "Проекты | RS Service",
		description: "Портфолио успешных проектов по восстановлению автомобильных салонов в Минске",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/before-after.jpg`,
				width: 1200,
				height: 630,
				alt: "Портфолио успешных проектов по восстановлению автомобильных салонов в Минске",
			},
		],
	},
	twitter: {
		title: "Проекты | RS Service",
		description: "Портфолио успешных проектов по восстановлению автомобильных салонов в Минске",
		images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/before-after.jpg`],
	},
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
		types: {
			website: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
		},
	},
};

export default async function ProjectsPage() {
	const projects = await fetchSanityLive({ query: PROJECT_LIST_QUERY });
	const {crumbs, currentPage} = getBreadcrumbs('Наши проекты', []);

	if (!projects) {
		return (
			<div className="container py-12">
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
		<>
			{/* Header */}
			<section className="relative py-12 after:bg-content1 after:absolute after:inset-0 after:opacity-70 bg-cover bg-center bg-no-repeat"
							 style={{
								 backgroundImage: 'url(/images/service-placeholder.png)',
							 }}>
				<div className="container">
					<div className="md:text-center flex flex-col items-start md:items-center relative z-10">
						<Button
							size="sm"
							variant="ghost"
							as={Link}
							href="/"
							className="mb-8"
						>
							<BsArrowLeft className="w-4 h-4 mr-2" />
							Вернуться на главную
						</Button>
						<h1 className="text-4xl md:text-6xl font-bold mb-4">
							Наши <span className="text-brand-gradient">Проекты</span>
						</h1>
						<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
						<p className="text-sm md:text-lg text-balance text-white/80 max-w-3xl">
							Портфолио успешных проектов по восстановлению автомобильных салонов.
							Каждый проект — это уникальное решение с гарантией качества.
						</p>
					</div>
				</div>
			</section>

			<Breadcrumbs crumbs={crumbs as any} currentPage={currentPage} />

			{/* All Projects */}
			<AllProjects projects={projects} />

			{/* CTA Section */}
			<CTASection className="my-16" />
		</>
	)
}