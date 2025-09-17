import { Badge, Card, CardBody } from "@heroui/react";

export interface StepProps {
	title: string;
	description: string;
	icon: any;
}

export interface StepsSectionProps {
	steps: StepProps[];
}

export const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => (
	<section className="py-20 bg-gradient-subtle">
		<div className="container mx-auto px-4">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-automotive-navy mb-6">
					Этапы выполнения <span className="text-automotive-gold">работы</span>
				</h2>
				<div className="w-20 h-1 bg-automotive-gold rounded-full mx-auto mb-8"></div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{steps.map((step, index) => {
					const Icon = step.icon;
					return (
						<Card
							key={index}
							className="shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2"
						>
							<CardBody className="p-8 text-center">
								<div className="relative mb-6">
									<div className="w-16 h-16 bg-automotive-gold rounded-full flex items-center justify-center mx-auto mb-4">
										<Icon className="h-8 w-8 text-automotive-navy" />
									</div>
									<Badge className="absolute -top-2 -right-2 bg-automotive-navy text-white">
										{index + 1}
									</Badge>
								</div>
								<h3 className="text-xl font-bold text-automotive-navy mb-4">{step.title}</h3>
								<p className="text-muted-foreground">{step.description}</p>
							</CardBody>
						</Card>
					);
				})}
			</div>
		</div>
	</section>
);