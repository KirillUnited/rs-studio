import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Avatar } from '@heroui/react'
import styles from './ui.module.css'
import { cn } from '@/lib/utils'
import { FaPhone } from 'react-icons/fa'

export default function CallUsBadge() {
	return (
		<Link
			href="tel:+1234567890"
			className={cn('group flex gap-2 justify-between items-center rounded-full bg-gradient-to-r from-[#F871A0] to-[#9353D3] p-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl',
				styles.callUs,
			)}
		>
			<div className="flex flex-col">
				<span className="text-xs">Позвоните нам</span>
				<div className="flex items-center gap-2">
					<Icon
						className="group-hover:translate-x-1 transition-transform"
						icon="solar:phone-call-linear"
						width={20}
						height={20}
					/>
					<FaPhone size={18} />
					<span className="text-lg font-semibold">(123) 456-7890</span>
				</div>
			</div>
			<Avatar src="/images/call-us.png" size="lg" />
		</Link>
	)
}