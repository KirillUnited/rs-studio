import { CTASection, FeaturedServiceList } from '@/components/service'
import { JSX, Suspense } from 'react'
import { Button } from '@heroui/react'
import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import Pretitle from '@/ui/Pretitle'
import Breadcrumbs from '@/ui/modules/Breadcrumbs'
import { getBreadcrumbs } from '@/lib/crumbs'

export const generateMetadata = () => {
	const url = `https://rs-service.by/services`;
	const title = 'Услуги | RS Service';
	const description = 'Услуги по восстановлению и защите салона автомобиля в Минске от RS Service';
	const image = '/images/service-placeholder.png'

	return {
		title: title,
		description: description,

		openGraph: {
			title: `${title}`,
			description: `${description}`,
			images: [
				{
					url: `${image}`,
					width: 1200,
					height: 630,
					alt: `${description}`,
				},
			],
			type: 'website',
			locale: 'ru_RU',
			siteName: 'RSService',
			url: `${url}`,
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title}`,
			description: `${description}`,
			images: [`${image}`],
			creator: '@rsservice',
			site: '@rsservice',
			url: `${url}`,
		},
		alternates: {
			canonical: url,
		},
	};
};

export default function ServicesPage(): JSX.Element {
	const {crumbs, currentPage} = getBreadcrumbs('Наши услуги', []);

	return (
		<>
			{/* Hero Section */}
			<section className="relative py-20 after:bg-content1 after:absolute after:inset-0 after:opacity-70 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: 'url(/images/service-placeholder.png)',
				}}
			>
				<div className="container flex flex-col items-start lg:items-center lg:text-center relative z-10">
					<Pretitle className='mb-4'>
						Восстановление и защите салона автомобиля
					</Pretitle>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
						Наши <span>услуги</span>
					</h1>
					<div className="w-24 h-1 brand-gradient rounded-full lg:mx-auto mb-8"></div>
					<p className="md:text-lg max-w-3xl lg:mx-auto mb-8 text-balance">
						Комплексные услуги по <span className="font-bold">восстановлению и защите салона автомобиля</span> с
						использованием передовых технологий <span className="brand-gradient font-bold">LeTech</span>.
					</p>
					<Button
						className="group brand-gradient font-medium"
						endContent={
							<span
								className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
									<BsArrowUpRight size={14} className="text-background" />
								</span>
						}
						radius="full"
						as={Link}
						href="#about"
					>
						Подробнее
					</Button>

				</div>
			</section>

			<Breadcrumbs crumbs={crumbs as any} currentPage={currentPage} />

			{/* Services Grid */}
			<section id="about" className="py-20">
				<div className="container">
					<div className="lg:text-center mb-16">
						<Pretitle className='mb-4'>
							Наши услуги
						</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Комплексные решения
						</h2>
						<p className="max-w-2xl lg:mx-auto text-pretty">
							От мелкого ремонта до полной реставрации — мы предлагаем комплексные услуги, чтобы салон вашего автомобиля
							выглядел и ощущался как новый.
						</p>
					</div>
					<Suspense fallback={<div>Loading...</div>}>
						<FeaturedServiceList _type="card-list" _key="card-list" />
					</Suspense>
				</div>
			</section>
			{/* CTA Section */}
			<CTASection className='mb-20' />
		</>
	)
}