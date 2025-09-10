'use client'
import { BsArrowRight, BsArrowUpRight, BsCarFront } from "react-icons/bs";
import { BiCar, BiCheckCircle, BiMailSend, BiPalette, BiPhone, BiPhoneCall, BiShield, BiWrench } from "react-icons/bi";
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Table, TableBody, TableCell, TableHeader, TableRow } from "@heroui/react";
import Pretitle from "@/ui/Pretitle";
import { FeaturedServiceCard } from "@/components/service/ui";
import Image from "next/image";
import { CgLock } from "react-icons/cg";
import { useState } from "react";
import { Icon } from '@iconify/react'
import { ModalDialog } from "@/components/modal-dialog";
import Link from "next/link";
import { FeaturedServiceList } from "@/components/service";

const Services = () => {

	const services = [
		{
			icon: <BsCarFront className="h-12 w-12" />,
			title: "Глубокая чистка и кондиционирование",
			description: "Комплексная чистка кожаных поверхностей с использованием специализированных продуктов и техник для удаления грязи и восстановления естественных масел.",
			features: ["Удаление глубокой грязи", "Восстановление натуральных масел", "pH-сбалансированная чистка", "UV-защита", "Устранение запахов"],
			process: ["Оценка и осмотр", "Предварительная обработка пятен", "Глубокая чистка", "Кондиционирование", "Финальное защитное покрытие"]
		},
		{
			icon: <BiPalette className="h-12 w-12" />,
			title: "Восстановление цвета и покраска",
			description: "Профессиональный подбор цвета и покраска для восстановления выцветшей или поврежденной кожи до первоначального состояния или изменения цвета.",
			features: ["Идеальное совпадение цвета", "Стойкие красители", "Равномерное покрытие", "Натуральный финиш", "Индивидуальные цветовые решения"],
			process: ["Анализ цвета", "Подготовка поверхности", "Нанесение базового слоя", "Послойное окрашивание", "Защитная герметизация"]
		},
		{
			icon: <BiWrench className="h-12 w-12" />,
			title: "Ремонт и прошивка",
			description: "Профессиональный ремонт разрывов, трещин и изношенной прошивки с использованием оригинальных материалов для безупречного результата.",
			features: ["Ремонт разрывов и трещин", "Укрепление швов", "Соответствие оригинальному узору", "Невидимый ремонт", "Структурное восстановление"],
			process: ["Оценка повреждений", "Подготовка материалов", "Ремонтные работы", "Восстановление швов", "Контроль качества"]
		},
		{
			icon: <BiShield className="h-12 w-12" />,
			title: "Защитная обработка",
			description: "Современные защитные покрытия и обработки для предотвращения износа, UV-повреждений и загрязнений.",
			features: ["UV-защита", "Защита от пятен", "Водоотталкивающий эффект", "Предотвращение трещин", "Продление срока службы"],
			process: ["Очистка поверхности", "Нанесение защиты", "Процесс отверждения", "Проверка качества", "Рекомендации по уходу"]
		}
	];

	const pricingPlans = [
		{
			title: "Базовое обновление",
			price: "10 000 ₽",
			duration: "2-3 часа",
			description: "Идеально для хорошо сохранившейся кожи, требующей освежения",
			features: [
				"Глубокая чистка и кондиционирование",
				"Удаление мелких царапин",
				"Нанесение UV-защиты",
				"Базовая обработка пятен",
				"Гарантия 30 дней"
			],
			popular: false
		},
		{
			title: "Полное восстановление",
			price: "25 000 ₽",
			duration: "1-2 дня",
			description: "Комплексное восстановление изношенного кожаного салона",
			features: [
				"Глубокая чистка и кондиционирование",
				"Восстановление цвета и подкраска",
				"Ремонт мелких трещин и разрывов",
				"Полная UV-защита",
				"Гарантия 90 дней",
				"Набор по уходу в комплекте"
			],
			popular: true
		},
		{
			title: "Премиум трансформация",
			price: "45 000 ₽",
			duration: "2-3 дня",
			description: "Полная трансформация включая смену цвета и серьезный ремонт",
			features: [
				"Полное изменение цвета",
				"Серьезные ремонтные работы",
				"Восстановление прошивки",
				"Премиум защитное покрытие",
				"Гарантия 1 год",
				"Программа обслуживания",
				"Забор и доставка"
			],
			popular: false
		}
	];

	const portfolioProjects = [
		{
			title: "BMW 7 серии 2020",
			category: "Премиум седан",
			description: "Полное восстановление салона с изменением цвета с бежевого на черный",
			image: '/images/before-after.jpg',
			services: ["Покраска", "Глубокая чистка", "Защитная обработка"]
		},
		{
			title: "Mustang Fastback 1967",
			category: "Классический автомобиль",
			description: "Восстановление винтажной кожи с сохранением оригинального характера",
			image: '/images/before-after.jpg',
			services: ["Ремонт и прошивка", "Восстановление цвета", "Кондиционирование"]
		},
		{
			title: "Mercedes S-Class 2019",
			category: "Представительский автомобиль",
			description: "Премиальное восстановление с индивидуальной отстрочкой и тиснением",
			image: '/images/before-after.jpg',
			services: ["Полное восстановление", "Индивидуальная работа", "Защита"]
		}
	];

	const faqs = [
		{
			question: "Сколько времени занимает процесс восстановления?",
			answer: "Длительность зависит от уровня услуги. Базовое обновление занимает 2-3 часа, полное восстановление требует 1-2 дня, а премиум трансформация может занять 2-3 дня. Точные сроки мы предоставим после оценки."
		},
		{
			question: "Будет ли восстановленная кожа соответствовать оригинальному цвету автомобиля?",
			answer: "Да, мы используем передовые технологии подбора цвета для обеспечения идеального соответствия. Также мы можем изменить цвет кожи на любой желаемый с помощью наших услуг покраски."
		},
		{
			question: "Как долго сохранится результат восстановления?",
			answer: "При правильном уходе наши восстановительные работы сохраняются 3-5 лет и более. Мы предоставляем наборы по уходу и инструкции для продления срока службы восстановленной кожи."
		},
		{
			question: "Работаете ли вы со всеми типами транспортных средств?",
			answer: "Да, мы работаем со всеми типами транспортных средств, включая люксовые автомобили, классические авто, внедорожники, грузовики, катера и самолеты. К каждому проекту применяется индивидуальный подход."
		},
		{
			question: "Что если меня не устроит результат?",
			answer: "Мы гарантируем качество нашей работы и предоставляем гарантию от 30 дней до 1 года в зависимости от услуги. Если вы не полностью удовлетворены, мы исправим все недочеты."
		},
		{
			question: "Можно ли отремонтировать сильно поврежденную кожу?",
			answer: "В большинстве случаев да. Наши опытные специалисты могут устранить разрывы, трещины, прожоги и другие повреждения. Мы проведем оценку и дадим честные рекомендации."
		},
		{
			question: "Предоставляете ли вы выездные услуги?",
			answer: "Мы предлагаем услуги забора и доставки для премиум-услуг. Для большинства стандартных услуг мы работаем в нашем специализированном центре для обеспечения наилучших условий и результатов."
		},
		{
			question: "Как ухаживать за восстановленной кожей?",
			answer: "Мы предоставляем подробные инструкции по уходу и наборы для обслуживания с каждой услугой. Регулярная чистка специальными средствами и защита от прямых солнечных лучей помогут сохранить результат восстановления."
		}
	];

	const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	const [isOpen, setIsOpen] = useState(false);
	const openDialog = () => setIsOpen(true)

	return (
		<>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden after:bg-black/70 after:absolute after:inset-0 after:z-0">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(/images/service-1.jpg)` }}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-luxury-darker/90 to-luxury-dark/60" />

				<div className="relative z-10 container mx-auto px-4 text-center">
					<Pretitle>
						Профессиональные услуги
					</Pretitle>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
						Экспертное
						<span className="text-primary block">восстановление кожи</span>
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
						От глубокой чистки до полного изменения цвета - наши комплексные услуги
						вернут вашему кожаному салону состояние нового автомобиля.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<div className='flex flex-col gap-2 sm:flex-row'>
							<>
								<Button
									onPress={openDialog}
									className="group brand-gradient font-medium"
									radius="full"
									size='lg'
								>
									<Icon className="group-hover:-translate-x-1 transition-transform" icon="bi:calendar-event"
										width={18} />
									Заказать
								</Button>

								<ModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
							</>
							<Button
								className="group border-1 border-default-100 font-medium text-white"
								endContent={
									<span
										className="group-hover:translate-x-1 transition-transform pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-foreground">
										<BsArrowUpRight size={14} className='text-background' />
									</span>
								}
								radius="full"
								variant="bordered"
								as={Link}
								href="/blog/tekhnologiya-litech-revolyuciya-v-restavracii-kozhi"
								size='lg'
								target="_blank"
							>
								Подробнее
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Description Section */}
			<section className="py-20 bg-card">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Pretitle>Наша экспертиза</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground my-6">
							Комплексные решения по уходу за кожей
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Наша команда сертифицированных специалистов использует передовые технологии и премиальные материалы
							для достижения исключительных результатов, превосходящих ожидания.
						</p>
					</div>

					<FeaturedServiceList _type="card-list" _key="card-list" layout="carousel" />
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-10 md:py-20 bg-content1">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Pretitle>Галерея</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground my-6">
							До и После
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Посмотрите на впечатляющие преображения, которых мы достигли для наших клиентов.
							Каждый проект демонстрирует наше стремление к совершенству.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Array.from({ length: 6 }).map((_, index) => (
							<div key={index} className="group cursor-pointer">
								<div className="relative overflow-hidden rounded-lg">
									<Image
										width={500}
										height={500}
										src={'/images/before-after.jpg'}
										alt={`Изображение галереи ${index + 1}`}
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute bottom-4 left-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="text-sm font-semibold">Проект {index + 1}</div>
										<div className="text-xs text-muted-foreground">Восстановление премиум салона</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-12">
						<Button variant="bordered" size="lg">
							Смотреть всю галерею
						</Button>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			{/* <section className="py-20 bg-card">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Pretitle>Цены</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
							Пакеты услуг и стоимость
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Выберите уровень обслуживания, который лучше всего соответствует вашим потребностям. Все пакеты включают
							профессиональную оценку и детальную консультацию.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{pricingPlans.map((plan, index) => (
							<Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-xl' : ''} bg-background border-border`}>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<Pretitle>Популярный выбор</Pretitle>
									</div>
								)}
								<CardHeader className="text-center">
									<h3 className="text-foreground text-xl">{plan.title}</h3>
									<div className="text-3xl font-bold text-primary">{plan.price}</div>
									<div className="flex items-center justify-center text-muted-foreground text-sm">
										<CgLock className="h-4 w-4 mr-1" />
										{plan.duration}
									</div>
									<p className="text-muted-foreground">{plan.description}</p>
								</CardHeader>
								<CardBody>
									<ul className="space-y-3 mb-6">
										{plan.features.map((feature, idx) => (
											<li key={idx} className="flex items-center text-sm text-muted-foreground">
												<BiCheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
												{feature}
											</li>
										))}
									</ul>
									<Button
										className="w-full"
									>
										Выбрать пакет
									</Button>
								</CardBody>
							</Card>
						))}
					</div>
				</div>
			</section> */}

			{/* Portfolio Section */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Pretitle>Портфолио</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground my-6">
							Избранные проекты
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Изучите детальные примеры наших самых впечатляющих проектов по восстановлению,
							демонстрирующих наш опыт работы с различными типами автомобилей и сложностями реставрации.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{portfolioProjects.map((project, index) => (
							<Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-card border-border">
								<div className="relative overflow-hidden">
									<Image
										width={500}
										height={500}
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-4 right-4">
										<Pretitle>
											{project.category}
										</Pretitle>
									</div>
								</div>
								<CardHeader>
									<h2 className="text-foreground">{project.title}</h2>
									<p className="text-muted-foreground">{project.description}</p>
								</CardHeader>
								<CardBody>
									<div className="space-y-3">
										<div>
											<h4 className="font-semibold text-foreground text-sm mb-2">Оказанные услуги:</h4>
											<div className="flex flex-wrap gap-2">
												{project.services.map((service, idx) => (
													<Pretitle key={idx}>
														{service}
													</Pretitle>
												))}
											</div>
										</div>
										<Button variant="bordered" size="sm" className="w-full">
											Подробнее о проекте
										</Button>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-10 md:py-20 bg-content1">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Pretitle>FAQ</Pretitle>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground my-6">
							Часто задаваемые вопросы
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Получите ответы на распространенные вопросы о наших услугах по восстановлению кожи,
							процессах и о том, чего ожидать при работе с нами.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<Accordion>
							{faqs.map((faq, index) => (
								<AccordionItem key={`item-${index}`} title={`${faq.question}`} aria-label={`question-${index + 1}`}>
									{faq.answer}
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;