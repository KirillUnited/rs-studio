import Pretitle from '@/ui/Pretitle'
import { HTMLAttributes, JSX } from 'react'
import { CTABlock } from '@/components/ui'
import { cn } from '@/lib/utils'

interface CTASectionProps extends HTMLAttributes<HTMLDivElement> {
}

export default function CTASection({ className, ...props }: CTASectionProps): JSX.Element {
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
					<div className="relative z-10 text-center flex flex-col items-center gap-4">
						<Pretitle>
							Всегда на связи
						</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold">
							Готовы преобразить салон своего автомобиля?
						</h2>
						<p className="text-white/80 max-w-2xl mx-auto text-pretty">
							Свяжитесь с нами сегодня для бесплатной консультации и узнайте, как технологии <span
								className="brand-gradient font-bold">LeTech</span> помогут восстановить идеальный салон вашего автомобиля
						</p>
						<CTABlock className="md:w-auto mt-4" useContactAnchor />
					</div>
				</div>
			</div>
		</section>
	)
}