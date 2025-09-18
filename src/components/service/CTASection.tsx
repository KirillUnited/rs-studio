import Pretitle from '@/ui/Pretitle'
import { HTMLAttributes, JSX } from 'react'
import { CTABlock } from '@/components/ui'
import { cn } from '@/lib/utils'

interface CTASectionProps extends HTMLAttributes<HTMLDivElement> {
	useContactAnchor?: boolean
}

export default function CTASection({ className, useContactAnchor, ...props }: CTASectionProps): JSX.Element {
	return (
		<section {...props} className={cn('relative', className)}>
			<div className="container">
				<div className={cn(
					'relative py-20 px-4 rounded-large overflow-hidden bg-cover bg-center bg-no-repeat',
					'after:absolute after:inset-0 after:bg-black/70',
				)}
					style={{
						backgroundImage: 'url(/images/before-after.jpg)',
					}}
				>
					<div className="relative z-10 lg:text-center flex flex-col items-start lg:items-center gap-4">
						<Pretitle>
							Всегда на связи
						</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold leadiing-none">
							Готовы преобразить салон своего автомобиля?
						</h2>
						<p className="text-sm lg:text-base text-white/80 max-w-2xl text-pretty">
							Свяжитесь с нами сегодня для бесплатной консультации и узнайте, как технологии <span
								className="brand-gradient font-bold">LeTech</span> помогут восстановить идеальный салон вашего автомобиля
						</p>
						<CTABlock className="md:w-auto mt-4" useContactAnchor={useContactAnchor} />
					</div>
				</div>
			</div>
		</section>
	)
}