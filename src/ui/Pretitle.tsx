import { cn } from '@/lib/utils'
import { stegaClean } from 'next-sanity'
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
			className={cn("border-1 border-default-100 bg-default-50 text-foreground/90", className)}
			radius="full"
			variant="bordered"
			size='sm'
		>
			{children}
		</Button>
	)
}
