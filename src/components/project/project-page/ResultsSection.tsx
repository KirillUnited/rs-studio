import { Badge, Card, CardBody } from "@heroui/react";

export interface ResultsSectionProps {
	beforeImages: string[];
	afterImages: string[];
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ beforeImages, afterImages }) => (
	<section className="py-20 bg-background">
		<div className="container mx-auto px-4">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-automotive-navy mb-6">
					Результат <span className="text-automotive-gold">работы</span>
				</h2>
				<div className="w-20 h-1 bg-automotive-gold rounded-full mx-auto mb-8"></div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
				{/* Before */}
				<div>
					<h3 className="text-2xl font-bold text-automotive-navy mb-8 text-center">До восстановления</h3>
					<div className="grid grid-cols-1 gap-6">
						{beforeImages.map((image, index) => (
							<Card key={index} className="overflow-hidden shadow-card">
								<CardBody className="p-0">
									<img src={image} alt={`До восстановления ${index + 1}`} className="w-full h-64 object-cover" />
									<div className="p-4">
										<Badge className="mb-2 bg-danger">
											Требует ремонта
										</Badge>
										<p className="text-sm text-muted-foreground">Видимые повреждения кожи и потертости</p>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>

				{/* After */}
				<div>
					<h3 className="text-2xl font-bold text-automotive-navy mb-8 text-center">После восстановления</h3>
					<div className="grid grid-cols-1 gap-6">
						{afterImages.map((image, index) => (
							<Card key={index} className="overflow-hidden shadow-card">
								<CardBody className="p-0">
									<img src={image} alt={`После восстановления ${index + 1}`} className="w-full h-64 object-cover" />
									<div className="p-4">
										<Badge className="mb-2 bg-green-500">Восстановлено</Badge>
										<p className="text-sm text-muted-foreground">Идеальное состояние, как новый</p>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	</section>
);