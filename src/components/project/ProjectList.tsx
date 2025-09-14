import { urlFor } from "@/sanity/lib/image"
import { Button, Card, CardBody } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"

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
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			{projects.map((project, index) => (
				<Card
					key={index}
					className="transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
				>
					<CardBody className="p-0">
						<div className="relative">
							<Image
								src={urlFor(project.image).width(300).height(200).format("webp").url()}
								width={300}
								height={200}
								alt={`${project.title} - Professional car interior restoration example`}
								className="w-full h-64 object-cover"
								quality={65}
								placeholder="blur"
								blurDataURL={urlFor(project.image).blur(10).url()}
							/>
							<div className="absolute top-4 right-4 brand-gradient px-3 py-1 rounded-full text-sm font-semibold">
								Completed
							</div>
						</div>

						<div className="p-4 md:p-6">
							<h3 className="text-xl font-bold text-automotive-navy mb-4">
								{project.title}
							</h3>

							<p className="text-muted-foreground mb-6 leading-relaxed">
								{project.description}
							</p>

							<div className="space-y-2 mb-6">
								{project.details?.map((detail, detailIndex) => (
									<div key={detailIndex} className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-automotive-gold rounded-full"></div>
										<span className="text-sm text-muted-foreground">{detail}</span>
									</div>
								))}
							</div>

							<Button
								as={Link}
								href={`/projects/${project.slug?.current}`}
								variant="ghost"
								color="primary"
								size="sm"
								className="w-full"
							>
								Подробнее
							</Button>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	)
}