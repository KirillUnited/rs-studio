import { Card, CardBody } from '@heroui/react'
import { PortableText, PortableTextBlock } from 'next-sanity'
import Image from 'next/image'

interface AboutSectionProps {
	title: string,
	description?: PortableTextBlock[],
}

export default function AboutSection({
																			 title,
																			 description,
																		 }: AboutSectionProps) {
	return (
		<section id="about" className="py-20 bg-gradient-subtle overflow-hidden">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-automotive-navy mb-4">
								<span className="text-brand-gradient font-normal">О услуге</span> {title}
							</h2>
							<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
						</div>

						{
							description && (
								<article className="richtext font-light">
									<PortableText value={description} />
								</article>
							)
						}

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Card className="shadow-card hover:shadow-hover transition-all duration-300">
								<CardBody className="p-6">
									<div className="text-2xl font-bold text-brand-gradient mb-2">Сертификаты</div>
									<div className="text-sm text-muted-foreground capitalize">LeTech Technology партнеры</div>
								</CardBody>
							</Card>

							<Card className="shadow-card hover:shadow-hover transition-all duration-300">
								<CardBody className="p-6">
									<div className="text-2xl font-bold text-brand-gradient mb-2">Премиум</div>
									<div className="text-sm text-muted-foreground capitalize">Только качественные материалы</div>
								</CardBody>
							</Card>
						</div>

						<div className="flex flex-wrap gap-4 pt-4">
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 brand-gradient rounded-full"></div>
								<span className="text-sm text-muted-foreground capitalize">Реставрация кожи</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 brand-gradient rounded-full"></div>
								<span className="text-sm text-muted-foreground capitalize">Ремонт винила</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 brand-gradient rounded-full"></div>
								<span className="text-sm text-muted-foreground capitalize">Пластиковая реставрация</span>
							</div>
						</div>
					</div>

					<div className="relative h-full">
						<Image
							src={`/images/service-hero-background.jpg`}
							alt={title}
							className="rounded-lg shadow-premium w-full h-full object-cover"
							width={1200}
							height={800}
						/>
						<div
							className="absolute -bottom-6 -right-6 brand-gradient p-6 rounded-lg shadow-card">
							<div className="text-2xl font-bold">15+</div>
							<div className="text-sm">Лет совершенства</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};