import { CTABlock } from '@/components/ui'
import { JSX } from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface HeroSectionProps {
	title: string,
	description?: string,
	heroImage?: Sanity.Image,
}

export default function HeroSection({
	title,
	description,
	heroImage,
}: HeroSectionProps): JSX.Element | null {
	if (!title) return null

	const heroImageUrl = heroImage ?
		urlFor(heroImage).width(1200).height(800).crop('center').format('webp').url()
		: '/images/service-hero-background.jpg';

	return (
		<section
			className="relative flex items-center lg:justify-center overflow-hidden"
		>
			<div className="absolute inset-0 bg-black/70 after:absolute after:inset-0 after:bg-black/70">
				<Image
					src={heroImageUrl}
					alt={title}
					fill
					className="object-cover"
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<div className="relative z-10 container py-20 lg:text-center">
				<div className="max-w-4xl mx-auto animate-fade-in-up">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance break-words">
						{title}{' '}
						<span className="text-brand-gradient">LeTech Технологии</span>
					</h1>

					{description && (
						<p className="md:text-lg mb-8 max-w-2xl lg:mx-auto leading-relaxed">
							{description}
						</p>
					)}

					<CTABlock className="justify-center md:mt-16" />

					<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
						<div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 px-3 border border-white/20">
							<div className="text-3xl font-bold text-automotive-gold mb-2">15+</div>
							<div className="text-sm">Лет опыта</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 px-3 border border-white/20">
							<div className="text-3xl font-bold text-automotive-gold mb-2">500+</div>
							<div className="text-sm">Салонов восстановлено</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 px-3 border border-white/20">
							<div className="text-3xl font-bold text-automotive-gold mb-2">100%</div>
							<div className="text-sm">удовлетворенность результатом</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};