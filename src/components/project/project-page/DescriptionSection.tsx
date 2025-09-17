import { Card, CardBody } from "@heroui/react";

export interface DescriptionSectionProps {
	description: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
	if (!description) return null;

	return (
		<section className="py-20">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Описание <span className="text-brand-gradient">проекта</span>
						</h2>
						<div className="w-20 h-1 brand-gradient rounded-full mx-auto mb-8"></div>
					</div>
					<Card className="shadow-card">
						<CardBody className="p-8 md:p-12">
							<p className="text-lg text-muted-foreground leading-relaxed text-center">{description}</p>
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	)
};