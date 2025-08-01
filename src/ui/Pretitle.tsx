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
			className={cn("border-1 border-secondary-500 bg-default-50 text-foreground/90", className)}
			// startContent={
			// 	<Icon
			// 		className="flex-none outline-none transition-transform [&>path]:stroke-[2] text-secondary"
			// 		icon="solar:star-linear"
			// 		width={18}
			// 	/>
			// }
			radius="full"
			variant="bordered"
			size='sm'
		>
			{stegaClean(children)}
		</Button>
	)
}
