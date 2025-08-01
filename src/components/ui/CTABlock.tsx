'use client';
import { Button } from '@heroui/react'
import { Icon } from '@iconify/react'
import { ModalDialog } from '../modal-dialog'
import Link from 'next/link'
import { useState } from 'react';


export default function CTABlock() {
	const [isOpen, setIsOpen] = useState(false);
	const openDialog = () => setIsOpen(true);

	return (

		<div className='flex flex-col gap-2 sm:flex-row'>
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
			<Button
				className="group border-1 border-default-100 font-medium text-foreground"
				endContent={
					<span
						className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
						<Icon
							className="text-background [&>path]:stroke-[1.5]"
							icon="solar:arrow-right-linear"
							width={16}
						/>
					</span>
				}
				radius="full"
				variant="bordered"
				as={Link}
				href="/about"
				target="_blank"
			>
				Подробнее
			</Button>
		</div>
	)
}