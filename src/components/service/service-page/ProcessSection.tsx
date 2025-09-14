import { Card, CardBody } from "@heroui/react";
import { BiWrench } from "react-icons/bi";
import { BsClipboard2Check, BsShieldCheck } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";

const processSteps = [
	{
		icon: IoSearchCircle,
		title: "Консультация и диагностика",
		description: "Мы начинаем с тщательной оценки состояния интерьера автомобиля, выявляем все проблемные зоны и предоставляем подробные рекомендации."
	},
	{
		icon: BsClipboard2Check,
		title: "Детальная проверка интерьера",
		description: "Наши специалисты проводят комплексную диагностику с использованием специализированных инструментов, чтобы определить оптимальный способ восстановления именно для вашего автомобиля."
	},
	{
		icon: BiWrench,
		title: "Ремонт и восстановление с LeTech",
		description: "Применяя передовые технологии LeTech и высококачественные материалы, мы восстанавливаем интерьер автомобиля до состояния «как новый» с максимальной точностью и вниманием к деталям."
	},
	{
		icon: BsShieldCheck,
		title: "Защитное покрытие и финальная проверка",
		description: "Мы наносим защитные составы и проводим строгий контроль качества, чтобы гарантировать долговечный результат и полное удовлетворение клиента."
	}
];


export default function ProcessSection() {
	return (
		<section className="py-20 bg-content1">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
						Как мы <span className="text-brand-gradient">работаем</span>
					</h2>
					<div className="w-20 h-1 brand-gradient rounded-full mx-auto mb-6"></div>
					<p className="text-foreground-700 font-light max-w-3xl mx-auto">
						Наш проверенный 4-этапный процесс гарантирует исключительные результаты для любого проекта по реставрации салона автомобиля, сочетая опыт и передовые технологии <span className="brand-gradient">LeTech</span>.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{processSteps.map((step, index) => {
						const IconComponent = step.icon;
						return (
							<div key={index} className="relative">
								<Card className="h-full transition-all duration-300 transform hover:-translate-y-2 border-0 relative z-10 overflow-visible">
									<CardBody className="p-8 text-center overflow-visible">
										<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 brand-gradient rounded-full flex items-center justify-center font-bold text-sm">
											{index + 1}
										</div>

										<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 bg-background">
											<IconComponent className="w-12 h-12 text-secondary" />
										</div>

										<h3 className="text-xl font-bold mb-4 leading-none">
											{step.title}
										</h3>

										<p className="text-foreground-700 leading-relaxed text-sm font-light text-balance">
											{step.description}
										</p>
									</CardBody>
								</Card>

								{/* Connection line */}
								{index < processSteps.length - 1 && (
									<div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 brand-gradient z-0"></div>
								)}
							</div>
						);
					})}
				</div>

				<div className="mt-16 text-center">
					<div className="rounded-xl p-8 max-w-2xl mx-auto bg-content2">
						<h3 className="text-2xl font-bold mb-4">
							Сроки и Результат
						</h3>
						<p className="text-foreground-700 mb-6">
							Большинство проектов по реставрации салона автомобиля завершаются в течение 1–2 рабочих дней, в зависимости от объема необходимой реставрации.
						</p>
						<div className="flex justify-center space-x-8">
							<div className="text-center">
								<div className="text-2xl font-bold text-brand-gradient">День 1</div>
								<div className="text-sm text-foreground-700">Оценка и старт работ</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-brand-gradient">День 2</div>
								<div className="text-sm text-foreground-700">Приёмка выполненных работ</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};