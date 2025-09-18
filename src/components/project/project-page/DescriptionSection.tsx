import { Card, CardBody } from "@heroui/react";

export interface DescriptionSectionProps {
	description: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
	if (!description) return null;

	return (
		<section className="py-20">
			<div className="container">
				<div className="">
					<div className="mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Описание <span className="text-brand-gradient">проекта</span>
						</h2>
						<div className="w-20 h-1 brand-gradient rounded-full mb-8"></div>
					</div>
					<Card>
						<CardBody className="md:p-6">
							<p className="text-sm md:text-base leading-relaxed">{description}</p>
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	)
};