import { FeaturedServiceList } from '@/components/service'
import { JSX, Suspense } from 'react'
import { Button } from '@heroui/react'
import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function ServicesPage(): JSX.Element {
	return (
		<>
			{/* Hero Section */}
			<section className="py-20 bg-content1">
				<div className="container text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
						Наши <span className="brand-gradient">услуги</span>
					</h1>
					<div className="w-24 h-1 bg-automotive-gold rounded-full mx-auto mb-8"></div>
					<p className="text-lg max-w-3xl mx-auto mb-8 text-balance">
						Комплексные услуги по <span className="font-bold">восстановлению и защите салона автомобиля</span> с
						использованием передовых технологий <span className="brand-gradient font-bold">LeTech</span>. Преобразите
						салон вашего автомобиля, воспользовавшись нашими <span className="font-bold">профессиональными
						знаниями</span>.
					</p>
					<div>
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

				</div>
			</section>
			{/* Services Grid */}
			<section id="about" className="py-20">
				<div className="container">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-automotive-navy mb-4">
							Комплексные решения
						</h2>
						<p className="text-lg max-w-2xl mx-auto text-pretty">
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
			<section className="py-20 bg-content1">
				<div className="container text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Готовы преобразить салон своего автомобиля?
					</h2>
					<p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
						Свяжитесь с нами сегодня для бесплатной консультации и узнайте, как технологии <span
						className="brand-gradient font-bold">LeTech</span> помогут восстановить идеальный салон вашего автомобиля
					</p>
					<div className="w-full flex flex-col gap-2 sm:flex-row">
						<Button
							as={Link}
							href="/"
							className="group brand-gradient font-medium"
							radius="full"
						>
							<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
										width={18} />
							Заказать звонок
						</Button>
						<Button
							className="group border-1 border-default-100 font-medium text-foreground"
							endContent={
								<span
									className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
											<BsArrowUpRight size={14} className="text-background" />
										</span>
							}
							radius="full"
							variant="bordered"
							as={Link}
							href="/projects"
						>
							Наши Работы
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}