import { CTABlock } from '@/components/ui'

export default function HeroSection() {
	return (
		<section
			className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
			style={{ backgroundImage: `url(/images/service-placeholder.png)` }}
		>
			<div className="absolute inset-0 bg-automotive-navy/60"></div>

			<div className="relative z-10 container mx-auto px-4 py-20 text-center">
				<div className="max-w-4xl mx-auto animate-fade-in-up">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Premium Car Salon Repair with{" "}
						<span className="brand-gradient">LeTech Technology</span>
					</h1>

					<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
						Restore, protect, and extend the life of your car interior with our advanced restoration techniques.
					</p>

					<CTABlock />

					<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<div className="text-3xl font-bold text-automotive-gold mb-2">15+</div>
							<div className="text-sm">Years Experience</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<div className="text-3xl font-bold text-automotive-gold mb-2">500+</div>
							<div className="text-sm">Cars Restored</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
							<div className="text-3xl font-bold text-automotive-gold mb-2">100%</div>
							<div className="text-sm">Satisfaction Rate</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};