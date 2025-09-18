import { Card, CardBody } from "@heroui/react";

export interface StepProps {
	title: string;
	description: string;
	icon: any;
}

export interface StepsSectionProps {
	steps: StepProps[];
}

export const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => (
	<section className="py-20 bg-content1">
		<div className="container">
			<div className="mb-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Этапы выполнения <span className="text-brand-gradient">работы</span>
				</h2>
				<div className="w-20 h-1 brand-gradient rounded-full mb-8"></div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{steps.map((step, index) => {
					const Icon = step.icon;
					return (
						<Card
							key={index}
							className="transition-all duration-300 transform hover:-translate-y-2"
						>
							<CardBody className="p-4">
								<div className="relative mb-6">
									<div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center font-bold text-lg">
										{/* <Icon className="h-6 w-6 text-foreground" /> */}
										{index + 1}
									</div>
								</div>
								<h3 className="text-xl font-bold mb-4 leading-none">{step.title}</h3>
								<p className="text-foreground-700 text-sm md:text-base">{step.description}</p>
							</CardBody>
						</Card>
					);
				})}
			</div>
		</div>
	</section>
);