import { Card, CardBody } from '@heroui/react'
import Pretitle from '@/ui/Pretitle'

export interface HeroStatProps {
	label: string;
	value: string;
	icon: any;
}

export interface HeroSectionProps {
	title: string;
	subtitleHighlight: string;
	stats: HeroStatProps[];
	heroImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitleHighlight, stats, heroImage }) => {
	return (
		<section className="relative bg-automotive-navy text-white py-20 overflow-hidden">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${heroImage})` }}
			></div>
			<div className="absolute inset-0 bg-black/70 opacity-90"></div>
			<div className="container relative z-10">
				<div className="max-w-4xl">
					<Pretitle className='mb-4'>
						Проект
					</Pretitle>
					<h1 className="text-4xl md:text-6xl mb-8 leading-none">
						{title} <span className="text-brand-gradient font-bold">{subtitleHighlight}</span>
					</h1>

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						{stats.map((stat, index) => {
							const Icon = stat.icon
							return (
								<Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
									<CardBody className="md:p-4">
										<Icon className="h-8 w-8 text-secondary mb-3" />
										<div className="text-white/80 text-sm">{stat.label}</div>
										<div className="md:text-2xl font-bold text-white">{stat.value}</div>
									</CardBody>
								</Card>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}