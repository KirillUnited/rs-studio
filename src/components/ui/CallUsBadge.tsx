import Link from 'next/link'
import { Avatar, Button } from '@heroui/react'
import styles from './ui.module.css'
import { cn } from '@/lib/utils'
import { FaPhoneAlt } from 'react-icons/fa'

export default function CallUsBadge({ phone, label="Позвоните нам", className }: { className?: string, phone?: string, label?: string }) {
	return (
		<Button
			as={Link}
			size='lg'
			href={`tel:${phone}`}
			className={cn('bg-gradient-to-r from-[#F871A0] to-[#9353D3] p-3 font-medium text-white shadow-lg transition-transform hover:scale-105 hover:shadow-large',
				styles.callUs,
				className
			)}
			radius='full'
		>
			<div className="flex flex-col">
				{/*<span className="text-xs">{label}</span>*/}
				<div className="flex items-center gap-2">
					<FaPhoneAlt size={18} />
					<span className="font-semibold">{phone}</span>
				</div>
			</div>
			<Avatar src="/images/call-us.webp" size="sm" />
		</Button>
	)
}