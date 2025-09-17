import { DescriptionSection, Stat } from "@/components/project/project-page";
import { HeroSection } from "@/components/project/project-page";
import { Badge, Button, Card, CardBody } from "@heroui/react";
import { BiCalendar, BiCheckCircle, BiShield, BiWrench } from "react-icons/bi";
// import { useRouter } from "next/router";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { CgDollar, CgLock } from "react-icons/cg";
import { GrSettingsOption } from "react-icons/gr";

// ------------------- Interfaces -------------------

export interface Step {
	title: string;
	description: string;
	icon: any;
}

export interface StepsSectionProps {
	steps: Step[];
}

export interface ResultsSectionProps {
	beforeImages: string[];
	afterImages: string[];
}

export interface CallToActionSectionProps {
	// onContact: () => void;
	// onServices: () => void;
}

// ------------------- Components -------------------



const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => (
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

const ResultsSection: React.FC<ResultsSectionProps> = ({ beforeImages, afterImages }) => (
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

const CallToActionSection: React.FC<CallToActionSectionProps> = () => (
	<section className="py-20 bg-gradient-premium">
		<div className="container mx-auto px-4 text-center">
			<h2 className="text-3xl md:text-4xl font-bold text-automotive-navy mb-6">Нужен похожий ремонт?</h2>
			<p className="text-lg text-automotive-navy/80 mb-8 max-w-2xl mx-auto">
				Закажите профессиональное восстановление салона вашего автомобиля. Используем только проверенные материалы и
				предоставляем гарантию на все работы.
			</p>
			<div className="flex flex-col md:flex-row gap-4 justify-center">
				<Button size="lg">
					Заказать ремонт
				</Button>
				<Button size="lg">
					Все услуги
				</Button>
			</div>
		</div>
	</section>
);

// ------------------- Main Page -------------------

const ProjectDetail: React.FC = () => {
	// const navigate = useRouter().back;

	// Example mock data (replace with Sanity later)
	const stats: Stat[] = [
		{ label: "Срок", value: "3-5 дней", icon: CgLock },
		{ label: "Стоимость", value: "22000 руб.", icon: CgDollar },
		{ label: "Дата", value: "Август 2025 года", icon: BiCalendar },
		{ label: "Гарантия", value: "6 мес.", icon: BiShield },
	];

	const steps: Step[] = [
		{ title: "Диагностика салона", description: "Определение состояния кожи и пластика.", icon: BsSearch },
		{ title: "Подбор материалов", description: "Используем только сертифицированные материалы.", icon: GrSettingsOption },
		{ title: "Ремонт и восстановление", description: "Проведение работ по восстановлению и покраске.", icon: BiWrench },
		{ title: "Проверка качества", description: "Финальный контроль и выдача автомобиля клиенту.", icon: BiCheckCircle },
	];

	const beforeImages = ["/images/project-before-1.jpg", "/images/project-before-2.jpg"];
	const afterImages = ["/images/project-after-1.jpg", "/images/project-after-2.jpg"];
	const heroImage = "/images/project-hero-bg.jpg";

	return (
		<div className="min-h-screen bg-background">
			<HeroSection title="Ремонт и восстановление" subtitleHighlight="кожаного салона" stats={stats} heroImage={heroImage} />
			<DescriptionSection description="Полное восстановление кожаного салона автомобиля с использованием профессиональных материалов и технологии LeTech..." />
			<StepsSection steps={steps} />
			<ResultsSection beforeImages={beforeImages} afterImages={afterImages} />
			<CallToActionSection />
		</div>
	);
};

export default ProjectDetail;
