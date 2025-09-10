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

export interface FeaturedServiceCardProps extends HTMLAttributes<HTMLDivElement> {
	card: Partial<{
		title: string,
		description: string,
		heroImage: any,
		content: PortableTextBlock[],
		features: string[],
		slug: {
			current: string
		}
	}>
}

const features = ['Удаляет грязь и налет', 'Восстанавливает естественные масла', 'Защищает от будущих повреждений']

/**
 * @typedef {object} FeaturedServiceCardProps
 * @property {PortableTextBlock[]} content - The content of the card
 */
/**
 * A card component that displays a featured service
 * @param {FeaturedServiceCardProps} props - The props for the component
 * @returns {JSX.Element} The JSX element for the component
 */
export default function FeaturedServiceCard({ card }: FeaturedServiceCardProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const openDialog = () => setIsOpen(true)

	return (
		<Card className="border-1 border-content2">
			{/*{card.image && (*/}
			{/*	<Image src={`${card.image}`} width={300} height={200} alt={card.title} />*/}
			{/*)}*/}
			{card.heroImage && (
				<Image
					className="object-cover w-full h-48"
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
				<h3 className="text-2xl font-semibold leading-none tracking-tight text-foreground">{card.title}</h3>
				{card.content && <PortableText value={card.content} />}
				{card.description && <p className="text-sm text-foreground-500 line-clamp-2">{card.description}</p>}
			</CardHeader>
			<CardBody className="p-4">
				<ul className="space-y-2">
					{features?.map((feature, idx) => (
						<li key={idx} className="flex items-center text-sm text-foreground-500 font-light">
							<BiCheckCircle className="h-4 w-4 text-secondary-600 mr-2" />
							{feature}
						</li>
					))}
				</ul>
			</CardBody>
			<CardFooter className="gap-2 border-t-1 border-content2">
				<Button className="group flex items-center font-medium text-foreground" as={Link} href={`/services/${card.slug?.current}`} radius="full">
					Подробнее
					<BsArrowUpRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
				</Button>
				<>
					<Button radius="full" color="primary" className="flex-1 group brand-gradient" onPress={openDialog}>
						<BsCalendar className="group-hover:scale-110 transition-transform" size={16} />
						Заказать
					</Button>

					<ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
				</>
			</CardFooter>
		</Card>
	)
}