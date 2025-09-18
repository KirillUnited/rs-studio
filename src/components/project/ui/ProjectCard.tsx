import { urlFor } from "@/sanity/lib/image"
import { Button, Card, CardBody, CardFooter } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import { BsArrowUpRight, BsCalendar, BsCashCoin, BsClock } from "react-icons/bs"

export interface ProjectCardProps {
	project: {
		image: Sanity.Image
		title: string
		description: string
		details: string[],
		slug: {
			current: string
		},
		category?: string
	}
}

export default function ProjectCard({
	project
}: ProjectCardProps) {
	return (
		<Card
			className="group overflow-hidden shadow-small flex-wrap flex-row"
		>
			<div className="relative overflow-hidden flex-shrink-0 flex-grow-1 basis-60">
				<Image
					src={urlFor(project.image).width(300).height(200).format("webp").url()}
					width={300}
					height={200}
					alt={`${project.title} - Professional car interior restoration example`}
					className="w-full h-full min-h-64 object-cover group-hover:scale-110 transition-all duration-300"
					quality={65}
					placeholder="blur"
					blurDataURL={urlFor(project.image).blur(10).url()}
				/>
				<div className="absolute top-4 left-4 brand-gradient px-3 py-1 rounded-full text-xs font-semibold">
					Completed
				</div>
			</div>
			<div className="flex flex-col flex-shrink-0 flex-grow-1 basis-60 p-1">
				<CardBody className="flex-1">
					<h3 className="text-xl font-bold line-clamp-2 mb-4">
						{project.title}
					</h3>

					<ul className="flex flex-wrap items-center gap-3 mb-6 text-xs text-secondary">
						{/* {project.details?.map((detail, detailIndex) => (
							<li key={detailIndex} className="flex items-center space-x-2">
								<div className="w-2 h-2 bg-automotive-gold rounded-full"></div>
								<span className="text-sm text-muted-foreground">{detail}</span>
							</li>
						))} */}
						<li className="flex items-center gap-1">
							<BsClock size={14} />
							<span className="text-foreground">1-3 дня</span>
						</li>
						<li className="flex items-center gap-1">
							<BsCashCoin size={14} />
							<span className="text-foreground">22 000 руб</span>
						</li>
						<li className="flex items-center gap-1">
							<BsCalendar size={14} />
							<span className="text-foreground">Август 2025 года</span>
						</li>
					</ul>

					<p className="text-sm font-light text-foreground-700 line-clamp-2 mb-6 leading-relaxed">
						{project.description}
					</p>
				</CardBody>

				<CardFooter className="border-t-1 border-content2">
					<Button
						as={Link}
						href={`/projects/${project.slug?.current}`}
						color="primary"
						size="sm"
						className="w-full group"
						radius="full"
						endContent={
							<span
								className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
								<BsArrowUpRight size={12} className="text-background" />
							</span>
						}
					>
						Подробнее
					</Button>
				</CardFooter>
			</div>
		</Card>
	)
}
