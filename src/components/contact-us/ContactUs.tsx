import Pretitle from "@/ui/Pretitle"
import { Alert, Badge, Button, Card, CardBody, CardHeader, Input, Textarea } from '@heroui/react'
import { BsArrowRight, BsCheckCircle, BsMailbox, BsPhone } from "react-icons/bs"
import { CgLock } from "react-icons/cg"
import { FaMapPin } from "react-icons/fa"
import { OrderForm } from '@/components/forms'

export default function ContactUs() {
	return (
		<section id="contact" className="py-20 bg-background">
			<div className="container">
				<div className="flex flex-col gap-6 items-start mb-16">
					<Pretitle>Свяжитесь с нами</Pretitle>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground">Получите бесплатную оценку</h2>
					<p className="text-foreground-500">Готовы отреставрировать салон вашего автомобиля? Свяжитесь с нами для бесплатной консультации и получения оценки, адаптированной к потребностям вашего автомобиля.</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-semibold text-foreground mb-6">Контактные данные</h3>
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<BsPhone className="h-5 w-5 text-primary" />
									<span className="text-foreground">(555) 123-4567</span>
								</div>
								<div className="flex items-center space-x-4">
									<BsMailbox className="h-5 w-5 text-primary" />
									<span className="text-foreground">info@luxeleatherpro.com</span>
								</div>
								<div className="flex items-center space-x-4">
									<FaMapPin className="h-5 w-5 text-primary" />
									<span className="text-foreground">123 Restoration Way, Auto City, AC 12345</span>
								</div>
								<div className="flex items-center space-x-4">
									<CgLock className="h-5 w-5 text-primary" />
									<span className="text-foreground">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-foreground mb-4">Почему выбирают нас?</h3>
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">15+ лет опыта</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">Мастера, прошедшие обучение на заводе</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">100% гарантия удовлетворенности</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">Только высококачественные материалы</span>
								</div>
							</div>
						</div>

						<Alert color='primary' title='Бесплатная консультация' className='border-1 border-primary/20'>
							<p className="text-foreground-500 text-xs">
								Получите бесплатную подробную оценку салона вашего автомобиля и индивидуальный план реставрации.
							</p>
						</Alert>
					</div>

					<div>
						<Card className="bg-content1 border-border">
							<CardHeader className='flex-col items-start'>
								<h3 className="text-foreground text-2xl font-semibold">Отправьте нам сообщение</h3>
								<p className="text-foreground-500 text-sm">
									Заполните форму ниже и мы свяжемся с вами в ближайшее время
								</p>
							</CardHeader>
							<CardBody className="space-y-4">
								<OrderForm />
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}