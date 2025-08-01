import { cn } from '@/lib/utils'
import { stegaClean } from 'next-sanity'
import { Icon } from '@iconify/react'
import { Button } from '@heroui/react'

export default function Pretitle({
	className,
	children
}: {
	className?: string
	children?: React.ReactNode
}) {
	if (!children) return null

	return (
		<Button
			className={cn("h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-foreground/90", className)}
			startContent={
				<Icon
					className="flex-none outline-none transition-transform [&>path]:stroke-[2] text-secondary"
					icon="solar:star-linear"
					width={20}
				/>
			}
			radius="full"
			variant="bordered"
		>
			{stegaClean(children)}
		</Button>
	)
}
