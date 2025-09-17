import Pretitle from "@/ui/Pretitle"
import { Alert, Card, CardBody, CardHeader } from '@heroui/react'
import { BsCheckCircle, BsMailbox, BsPhone } from "react-icons/bs"
import { CgLock } from "react-icons/cg"
import { FaMapPin } from "react-icons/fa"
import { OrderForm } from '@/components/forms'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { ContactList } from "./ui"

export default function ContactUs({ className }: { className?: string }) {
	return (
		<section id="contact" className={cn('py-20 bg-background', className)}>
			<div className="container">
				<div className="flex flex-col gap-2 items-start mb-8 max-w-2xl">
					<Pretitle>Свяжитесь с нами</Pretitle>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground">Получите бесплатную оценку</h2>
					<p className="text-foreground-500">
						Готовы отреставрировать салон вашего автомобиля? <br />
						Свяжитесь с нами для бесплатной консультации и получения оценки</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="flex flex-col gap-2">
							<h3 className="text-foreground-500">Контактные данные</h3>
							<ContactList />
						</div>

						<div>
							<h3 className="text-foreground-500 mb-2">Почему выбирают нас?</h3>
							<div className="flex flex-col gap-2">
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary-600" />
									<span className="text-foreground-700 font-semibold">15+ лет опыта</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary-600" />
									<span className="text-foreground-700 font-semibold">Мастера, прошедшие обучение на заводе</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary-600" />
									<span className="text-foreground-700 font-semibold">100% гарантия удовлетворенности</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary-600" />
									<span className="text-foreground-700 font-semibold">Только высококачественные материалы</span>
								</div>
							</div>
						</div>

						<Alert color='default' title='Бесплатная консультация' className='border-1 border-primary/20 rounded-large'>
							<p className="text-foreground-500 text-xs">
								Получите бесплатную подробную оценку салона вашего автомобиля и индивидуальный план реставрации.
							</p>
						</Alert>
					</div>

					<div>
						<Card className="bg-content1 border-1 border-content2 shadow-none">
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