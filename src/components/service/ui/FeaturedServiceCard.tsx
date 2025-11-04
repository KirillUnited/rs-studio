'use client'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { PortableText, PortableTextBlock } from 'next-sanity'
import { BsArrowUpRightCircle, BsCalendar } from 'react-icons/bs'
import { HTMLAttributes, JSX, useState } from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import { ModalDialog } from '@/components/modal-dialog'
import { urlFor } from '@/sanity/lib/image'

export interface FeaturedServiceCardProps
	extends HTMLAttributes<HTMLDivElement> {
	card: Partial<{
		title: string
		description: string
		heroImage: any
		content: PortableTextBlock[]
		features: string[]
		slug: {
			current: string
		}
	}>
}

const features: string[] = [
	// 'Удаляет грязь и налет',
	// 'Восстанавливает естественные масла',
	// 'Защищает от будущих повреждений',
]

/**
 * @typedef {object} FeaturedServiceCardProps
 * @property {PortableTextBlock[]} content - The content of the card
 */
/**
 * A card component that displays a featured service
 * @param {FeaturedServiceCardProps} props - The props for the component
 * @returns {JSX.Element} The JSX element for the component
 */
export default function FeaturedServiceCard({
	card,
}: FeaturedServiceCardProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const openDialog = () => setIsOpen(true)

	return (
		<Card className="border-content2 border-1">
			{/*{card.image && (*/}
			{/*	<Image src={`${card.image}`} width={300} height={200} alt={card.title} />*/}
			{/*)}*/}
			{card.heroImage && (
				<Image
					className="h-48 w-full object-cover"
					src={`${urlFor(card.heroImage).width(300).height(200).url()}`}
					width={300}
					height={200}
					quality={50}
					placeholder="blur"
					blurDataURL={`${card.heroImage}`}
					alt={`${card.title}`}
				/>
			)}
			<CardHeader className="flex-col items-start gap-2">
				<h3 className="text-foreground text-2xl leading-none font-semibold tracking-tight">
					{card.title}
				</h3>
				{card.content && <PortableText value={card.content} />}
				{card.description && (
					<p className="text-foreground-500 line-clamp-4 text-sm">
						{card.description}
					</p>
				)}
			</CardHeader>
			{Array.isArray(features) && features.length > 0 && (
				<CardBody className="p-4">
					<ul className="space-y-2">
						{features?.map((feature, idx) => (
							<li
								key={idx}
								className="text-foreground-500 flex items-center text-sm font-light"
							>
								<BiCheckCircle className="text-secondary-600 mr-2 h-4 w-4" />
								{feature}
							</li>
						))}
					</ul>
				</CardBody>
			)}
			<CardFooter className="border-content2 mt-auto gap-2 border-t-1">
				<Button
					className="group text-foreground flex items-center font-medium"
					as={Link}
					href={`/services/${card.slug?.current}`}
					radius="full"
				>
					Подробнее
					<BsArrowUpRightCircle className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>
				<>
					<Button
						radius="full"
						color="primary"
						className="group brand-gradient flex-1"
						onPress={openDialog}
					>
						<BsCalendar
							className="transition-transform group-hover:scale-110"
							size={16}
						/>
						Заказать
					</Button>

					<ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
				</>
			</CardFooter>
		</Card>
	)
}
