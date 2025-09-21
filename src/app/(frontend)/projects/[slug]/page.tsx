import { PROJECT_QUERY } from '@/components/project/lib/queries'
import { DescriptionSection, ResultsSection, Stat, StepsSection } from '@/components/project/project-page'
import { HeroSection } from '@/components/project/project-page'
import { Step } from '@/components/project/project-page'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { Button } from '@heroui/react'
import { BiBookContent, BiCalendar, BiCheckCircle, BiShield, BiWrench } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { CgDollar, CgLock } from 'react-icons/cg'
import NotFound from '../../not-found'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { FaServicestack } from 'react-icons/fa'
import { PiSteeringWheel } from 'react-icons/pi'
import { JSX } from 'react'
import Breadcrumbs from '@/ui/modules/Breadcrumbs'

// Example mock data (replace with Sanity later)
const stats: Stat[] = [
	{ label: 'Срок', value: '3-5 дней', icon: CgLock },
	{ label: 'Стоимость', value: '22000 руб.', icon: CgDollar },
	{ label: 'Дата', value: 'Август 2025 года', icon: BiCalendar },
	{ label: 'Гарантия', value: '6 мес.', icon: BiShield },
]

const steps: Step[] = [
	{
		title: 'Согласование',
		description:
			'На первом этапе мы проводим детальную консультацию с клиентом, уточняем все его требования и пожелания. В нашей мастерской имеется широкий ассортимент высококачественных материалов, что позволяет выбрать идеальное решение, соответствующее индивидуальному стилю автомобиля.',
		icon: BsSearch,
	},
	{
		title: 'Демонтаж руля',
		description:
			'При демонтаже руля мы уделяем особое внимание аккуратному снятию всех кнопок и элементов управления. Если клиенту срочно нужен автомобиль, наша мастерская предоставляет подменный руль для удобства.',
		icon: PiSteeringWheel,
	},
	{
		title: 'Подготовка и изготовление лекала',
		description:
			'На этом этапе мастер осторожно распарывает швы и снимает старую кожу. Затем он аккуратно отделяет вставку от руля. После этого берется за лекала, что является одним из ключевых этапов процесса перешивания. Тщательное и корректное создание лекала напрямую влияет на визуальное и тактильное восприятие нового руля.',
		icon: BiBookContent,
	},
	{
		title: 'Перешив руля',
		description:
			'На данном этапе руль обретает свой окончательный вид. В этом проекте не предусмотрена декоративная строчка. Кожа фиксируется исключительно с помощью специального клея и фиксируется вставкой.',
		icon: BiWrench,
	},
	{
		title: 'Установка и проверка',
		description:
			'После завершения всех работ руль устанавливается обратно. Мастер подключает все разъемы и проводит проверку работоспособности всех элементов, чтобы гарантировать безопасность и функциональность.',
		icon: BiCheckCircle,
	},
]

const beforeImages = ['/images/project-before-1.jpg', '/images/project-before-2.jpg']
const afterImages = ['/images/project-after-1.jpg', '/images/project-after-2.jpg']

// ------------------- Interfaces -------------------

export interface CallToActionSectionProps {
	// onContact: () => void;
	// onServices: () => void;
}

// ------------------- Components -------------------
const CallToActionSection: React.FC<CallToActionSectionProps> = () => (
	<section className="py-20 bg-content1">
		<div className="container">
			<div className="bg-secondary/50 rounded-large px-8 py-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">Нужен похожий ремонт?</h2>
				<p className="text-sm md:text-base mb-8 max-w-4xl text-balance">
					Закажите профессиональное восстановление салона вашего автомобиля. Используем только проверенные материалы и
					предоставляем гарантию на все работы.
				</p>
				<div className="flex flex-col md:flex-row gap-4">
					<Button as={Link} href="/#contact" radius="full" color="primary" className="brand-gradient group">
						<BiCalendar className="group-hover:scale-110 transition-transform" size={20} />
						Заказать ремонт
					</Button>
					<Button className="text-foreground group" radius="full" as={Link} href="/services" variant="bordered"
									color="primary">
						Все услуги
						<FaServicestack className="group-hover:scale-110 transition-transform" size={20} />
					</Button>
				</div>
			</div>
		</div>
	</section>
)

// ------------------- Main Page -------------------

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await props.params
	const project = await fetchSanityLive({ query: PROJECT_QUERY, params: { slug } })

	return {
		title: `${project?.seo?.metaTitle} | RS Service` || 'RS Service',
		description: project?.seo?.metaDescription || 'RS Service - автомобильная ремонтная компания',
		keywords: project?.seo?.keywords || 'автомобильная ремонтная компания, ремонт автомобилей, автомобильная компания',
		openGraph: {
			title: `${project?.seo?.metaTitle} | RS Service` || 'RS Service',
			description: project?.seo?.metaDescription || 'RS Service - автомобильная ремонтная компания',
			images: [
				{
					url: urlFor(project?.seo?.ogImage).width(1200).height(630).url(),
					width: project?.seo?.ogImage?.asset?.metadata?.dimensions?.width || 1200,
					height: project?.seo?.ogImage?.asset?.metadata?.dimensions?.height || 630,
					alt: project?.seo?.metaTitle || 'RS Service',
				},
			],
		},
		twitter: {
			title: `${project?.seo?.metaTitle} | RS Service` || 'RS Service',
			description: project?.seo?.metaDescription || 'RS Service - автомобильная ремонтная компания',
			images: [urlFor(project?.seo?.ogImage).width(1200).height(630).url()],
		},
		alternate: {
			canonical: `https://rs-service.by/projects/${slug}`,
		},
	}
}

export default async function ProjectPage(props: {
	params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
	const { slug } = await props.params
	const project = await fetchSanityLive({ query: PROJECT_QUERY, params: { slug } })
	const heroImage = urlFor(project?.image).width(1200).height(630).format('webp').url()
	const description = project?.description
	const crumbs = [
		{
			internal: {
				slug: {
					current: 'index',
					_type: 'slug',
				},
			},
			label: 'Главная',
			type:
				'internal',
			_key:
				'692634eb5e13',
			_type:
				'link',
		},
		{
			external: '/projects',
			label: 'Наши Работы',
			type:
				'external',
			_key:
				'234234',
			_type:
				'link',
		},
	]

	if (!project) return <NotFound />

	return (
		<>
			<HeroSection title="Ремонт и восстановление" subtitleHighlight="кожаного салона" stats={stats}
									 heroImage={heroImage} />
			<Breadcrumbs crumbs={crumbs as any} currentPage={project} />
			<DescriptionSection description={description} />
			<StepsSection steps={steps} />
			<ResultsSection beforeImages={beforeImages} afterImages={afterImages} />
			<CallToActionSection />
		</>
	)
};
