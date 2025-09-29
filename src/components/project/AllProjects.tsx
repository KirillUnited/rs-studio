'use client';
import { Button } from '@heroui/react';
import React, { useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi';
import { ProjectCard } from './ui';
import { ProjectProps } from './ProjectList';

const CATEGORIES = ["Все проекты", "Премиум восстановление", "Стандартный ремонт", "Комплексный пакет", "Ремонт кожи", "Ремонт пластика"];

const AllProjects = ({ projects = [] }: { projects: ProjectProps[] }) => {
	const [selectedCategory, setSelectedCategory] = useState("Все проекты");

	const filteredProjects = selectedCategory === "Все проекты"
		? projects
		: projects.filter(project => project.category === selectedCategory);

	return (
		<>
			{/* Filter Section */}
			<section className="py-8 border-b border-b-content2">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-start justify-between gap-4">
						<div className="flex items-center space-x-2">
							<BiFilterAlt className="w-5 h-5 text-secondary" />
							<span className="font-semibold">Фильтр по категориям:</span>
						</div>
						<div className="flex flex-wrap gap-2">
							{CATEGORIES.map((category) => (
								<Button
									key={category}
									variant={selectedCategory === category ? "solid" : "bordered"}
									size="sm"
									onPress={() => setSelectedCategory(category)}
								>
									{category}
								</Button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* All Projects */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="md:text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-automotive-navy mb-4">
							{selectedCategory === "Все проекты" ? "Все Проекты" : selectedCategory}
						</h2>
						<p className="text-sm text-foreground-500">
							{filteredProjects.length} {filteredProjects.length === 1 ? "проект" : "проектов"}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project) => (
							<ProjectCard key={project.slug.current} project={project} />
						))}
					</div>

					{filteredProjects.length === 0 && (
						<div className="text-center py-12">
							<p className="text-lg text-muted-foreground mb-4">
								Проекты в данной категории не найдены
							</p>
							<Button
								onPress={() => setSelectedCategory("Все проекты")}
							>
								Показать все проекты
							</Button>
						</div>
					)}
				</div>
			</section>
		</>
	)
}

export default AllProjects