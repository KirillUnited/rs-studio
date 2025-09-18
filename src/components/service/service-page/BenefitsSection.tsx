import { Card, CardBody } from '@heroui/react'
import { JSX } from 'react'
import { BenefitsSectionIconMap, BenefitsSectionIconType } from '../lib/iconMap'

interface BenefitsSectionProps {
	title: string,
	description: string,
	items?: {
		title: string,
		text: string,
		icon: React.ReactNode
	}[]
}

export default function BenefitsSection({
	title,
	description,
	items,
}: BenefitsSectionProps): JSX.Element | null {
	if (!items) return null;

	return (
		<section className="py-20">
			<div className="container">
				<div className="mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
						Наши <span className="text-brand-gradient">преимущества</span>
					</h2>
					<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
					<p className="text-sm md:text-base text-muted-foreground max-w-2xl">
						Наша передовая технология <span className='brand-gradient'>LeTech</span> обеспечивает непревзойденные результаты при реставрации салона автомобиля, сочетая инновации с проверенным опытом.
					</p>
				</div>

				<div className="flex flex-wrap justify-items-center justify-center items-stretch gap-4">
					{items?.map((benefit, index) => {
						return (
							<Card
								key={index}
								className="transition-all duration-300 transform hover:-translate-y-2 border-0 md:basis-[calc(100%/4-1rem)] "
							>
								<CardBody className="md:p-6 flex-1">
									<div
										className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mb-6">
										{BenefitsSectionIconMap[benefit?.icon as BenefitsSectionIconType]}
									</div>

									<h3 className="md:text-lg font-bold leading-none mb-4">
										{benefit.title}
									</h3>

									<p className="font-light text-sm text-balance text-foreground-500">
										{benefit.text}
									</p>
								</CardBody>
							</Card>
						)
					})}
				</div>

				<div className="mt-16 rounded-xl p-8 md:p-12 lg:text-center bg-content2">
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
						Почувствуйте разницу LeTech
					</h3>
					<p className="text-white/80 mb-6 max-w-2xl lg:mx-auto text-sm md:text-base">
						Наши сертифицированные специалисты используют только лучшие материалы и технологии LeTech, гарантируя, что реставрация салона вашего автомобиля превзойдет все ваши ожидания.
					</p>
					<div className="flex flex-wrap lg:justify-center gap-4">
						<div className="lg:text-center">
							<div className="text-3xl font-bold text-brand-gradient">24 часа</div>
							<div className="text-sm">Среднее время работы</div>
						</div>
						<div className="lg:text-center">
							<div className="text-3xl font-bold text-brand-gradient">5★</div>
							<div className="text-sm">Рейтинг клиентов</div>
						</div>
						<div className="lg:text-center">
							<div className="text-3xl font-bold text-brand-gradient">2 года</div>
							<div className="text-sm">Гарантийный срок</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}