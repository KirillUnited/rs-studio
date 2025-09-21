'use client'
import { Button } from '@heroui/react'
import { Icon } from '@iconify/react'
import { ModalDialog } from '../modal-dialog'
import Link from 'next/link'
import { HTMLAttributes, JSX, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { cn } from '@/lib/utils'

interface CTABlockProps extends HTMLAttributes<HTMLDivElement> {
	useContactAnchor?: boolean
}

export const CTAButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openDialog = () => setIsOpen(true);

	return (
		<>
			<Button
				onPress={openDialog}
				className="group brand-gradient font-medium"
				radius="full"
				size='lg'
			>
				<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
							width={18} />
				Заказать
			</Button>

			<ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}

export default function CTABlock({ className, useContactAnchor }: CTABlockProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const openDialog = () => setIsOpen(true)

	return (
		<div className={cn(
			'w-full flex flex-col gap-2 sm:flex-row',
			className
		)}>
			{useContactAnchor ? (
				<Button

					as={Link}
					href="#contact"
					className="group brand-gradient font-medium"
					radius="full"
				>
					<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
						width={18} />
					Заказать
				</Button>
			) : (
				<>
					<Button
						onPress={openDialog}
						className="group brand-gradient font-medium"
						radius="full"
					>
						<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
							width={18} />
						Заказать
					</Button>

					<ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
				</>
			)
			}
			<Button
				className="group border-1 border-default-100 font-medium text-foreground"
				endContent={
					<span
						className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
						<BsArrowUpRight size={14} className="text-background" />
					</span>
				}
				radius="full"
				variant="bordered"
				as={Link}
				href="/projects"
				target="_blank"
			>
				Наши работы
			</Button>
		</div>
	)
}