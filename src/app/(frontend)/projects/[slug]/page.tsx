import { DescriptionSection, ResultsSection, Stat, StepsSection } from "@/components/project/project-page";
import { HeroSection } from "@/components/project/project-page";
import { Step } from "@/components/project/project-page";
import { Button } from "@heroui/react";
import { BiCalendar, BiCheckCircle, BiShield, BiWrench } from "react-icons/bi";
// import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { CgDollar, CgLock } from "react-icons/cg";
import { GrSettingsOption } from "react-icons/gr";

// ------------------- Interfaces -------------------

export interface CallToActionSectionProps {
	// onContact: () => void;
	// onServices: () => void;
}

// ------------------- Components -------------------
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
		<>
			<HeroSection title="Ремонт и восстановление" subtitleHighlight="кожаного салона" stats={stats} heroImage={heroImage} />
			<DescriptionSection description="Полное восстановление кожаного салона автомобиля с использованием профессиональных материалов и технологии LeTech..." />
			<StepsSection steps={steps} />
			<ResultsSection beforeImages={beforeImages} afterImages={afterImages} />
			<CallToActionSection />
		</>
	);
};

export default ProjectDetail;
