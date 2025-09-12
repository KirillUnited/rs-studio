import { Card, CardBody } from '@heroui/react'

export default function AboutSection() {
	return (
		<section id="about" className="py-20 bg-gradient-subtle">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-automotive-navy mb-4">
								Expert Car Interior Restoration
							</h2>
							<div className="w-20 h-1 bg-automotive-gold rounded-full mb-6"></div>
						</div>

						<p className="text-lg text-muted-foreground leading-relaxed">
							We specialize in premium car salon repair and interior restoration using certified
							<strong className="text-automotive-navy"> LeTech technology</strong>. Our team has over
							15 years of expertise in restoring leather, vinyl, and plastic parts to their original beauty.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Card className="shadow-card hover:shadow-hover transition-all duration-300">
								<CardBody className="p-6">
									<div className="text-2xl font-bold text-automotive-gold mb-2">Certified</div>
									<div className="text-sm text-muted-foreground">LeTech Technology Partners</div>
								</CardBody>
							</Card>

							<Card className="shadow-card hover:shadow-hover transition-all duration-300">
								<CardBody className="p-6">
									<div className="text-2xl font-bold text-automotive-gold mb-2">Premium</div>
									<div className="text-sm text-muted-foreground">Quality Materials Only</div>
								</CardBody>
							</Card>
						</div>

						<div className="flex flex-wrap gap-4 pt-4">
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-automotive-gold rounded-full"></div>
								<span className="text-sm text-muted-foreground">Leather Restoration</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-automotive-gold rounded-full"></div>
								<span className="text-sm text-muted-foreground">Vinyl Repair</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-automotive-gold rounded-full"></div>
								<span className="text-sm text-muted-foreground">Plastic Restoration</span>
							</div>
						</div>
					</div>

					<div className="relative">
						<img
							src={`/images/service-placeholder.png`}
							alt="Professional automotive restoration team at work"
							className="rounded-lg shadow-premium w-full h-auto"
						/>
						<div className="absolute -bottom-6 -right-6 bg-automotive-gold text-automotive-navy p-6 rounded-lg shadow-card">
							<div className="text-2xl font-bold">15+</div>
							<div className="text-sm">Years of Excellence</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};