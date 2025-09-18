import { PROJECT_QUERY } from "@/components/project/lib/queries";
import { DescriptionSection, ResultsSection, Stat, StepsSection } from "@/components/project/project-page";
import { HeroSection } from "@/components/project/project-page";
import { Step } from "@/components/project/project-page";
import { fetchSanityLive } from "@/sanity/lib/fetch";
import { Button } from "@heroui/react";
import { BiCalendar, BiCheckCircle, BiShield, BiWrench } from "react-icons/bi";
// import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { CgDollar, CgLock } from "react-icons/cg";
import { GrSettingsOption } from "react-icons/gr";
import NotFound from "../../not-found";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FaServicestack } from "react-icons/fa";

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

// ------------------- Interfaces -------------------

export interface CallToActionSectionProps {
	// onContact: () => void;
	// onServices: () => void;
}

// ------------------- Components -------------------
const CallToActionSection: React.FC<CallToActionSectionProps> = () => (
	<section className="py-20 bg-secondary/50">
		<div className="container">
			<h2 className="text-3xl md:text-4xl font-bold mb-6">Нужен похожий ремонт?</h2>
			<p className="text-sm md:text-base mb-8 max-w-4xl text-balance">
				Закажите профессиональное восстановление салона вашего автомобиля. Используем только проверенные материалы и
				предоставляем гарантию на все работы.
			</p>
			<div className="flex flex-col md:flex-row gap-4">
				<Button radius="full" color="primary" className="brand-gradient group">
					<BiCalendar className="group-hover:scale-110 transition-transform" size={20} />
					Заказать ремонт
				</Button>
				<Button className="text-foreground group" radius="full" as={Link} href="/services" variant="bordered" color="primary">
					Все услуги
					<FaServicestack className="group-hover:scale-110 transition-transform" size={20} />
				</Button>
			</div>
		</div>
	</section>
);

// ------------------- Main Page -------------------

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const { slug } = await params;
	const project = await fetchSanityLive({ query: PROJECT_QUERY, params: { slug } });

	return {
		title: `${project?.seo?.metaTitle} | RS Service` || "RS Service",
		description: project?.seo?.metaDescription || "RS Service - автомобильная ремонтная компания",
		keywords: project?.seo?.keywords || "автомобильная ремонтная компания, ремонт автомобилей, автомобильная компания",
		openGraph: {
			title: `${project?.seo?.metaTitle} | RS Service` || "RS Service",
			description: project?.seo?.metaDescription || "RS Service - автомобильная ремонтная компания",
			images: [
				{
					url: urlFor(project?.seo?.ogImage).width(1200).height(630).url(),
					width: project?.seo?.ogImage?.asset?.metadata?.dimensions?.width || 1200,
					height: project?.seo?.ogImage?.asset?.metadata?.dimensions?.height || 630,
					alt: project?.seo?.metaTitle || "RS Service",
				},
			],
		},
		twitter: {
			title: `${project?.seo?.metaTitle} | RS Service` || "RS Service",
			description: project?.seo?.metaDescription || "RS Service - автомобильная ремонтная компания",
			images: [urlFor(project?.seo?.ogImage).width(1200).height(630).url()],
		},
		alternate: {
			canonical: `https://rs-service.by/projects/${slug}`,
		}
	};
}

const ProjectDetail = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const project = await fetchSanityLive({ query: PROJECT_QUERY, params: { slug } });
	const heroImage = urlFor(project?.image).width(1200).height(630).url();
	const description = project?.description;

	console.log(project);

	if (!project) return <NotFound />;

	return (
		<>
			<HeroSection title="Ремонт и восстановление" subtitleHighlight="кожаного салона" stats={stats} heroImage={heroImage} />
			<DescriptionSection description={description} />
			<StepsSection steps={steps} />
			<ResultsSection beforeImages={beforeImages} afterImages={afterImages} />
			<CallToActionSection />
		</>
	);
};

export default ProjectDetail;
