'use client'
import { Accordion, AccordionItem, Card } from '@heroui/react'
import { JSX } from 'react'

const faqs = [
	{
		question: 'How long does the repair take?',
		answer: 'Most car interior restoration projects are completed within 1-2 business days, depending on the complexity and extent of the work needed. Simple repairs like small tears or scratches can often be completed in just a few hours.',
	},
	{
		question: 'Do you provide a warranty?',
		answer: 'Yes, all of our services come with a comprehensive 2-year warranty on workmanship and materials. We stand behind our work and use only the highest quality LeTech products to ensure long-lasting results.',
	},
	{
		question: 'What materials can be repaired?',
		answer: 'We specialize in repairing and restoring leather, vinyl, plastic, and fabric car interiors. This includes seats, dashboards, door panels, armrests, steering wheels, and other interior components. Our LeTech technology works on virtually all automotive interior materials.',
	},
	{
		question: 'How much does it cost?',
		answer: 'Pricing varies depending on the extent of damage, size of the repair area, and materials involved. We provide free consultations and detailed quotes before starting any work. Most repairs cost significantly less than replacement while delivering superior results.',
	},
	{
		question: 'Can you match the original color?',
		answer: 'Absolutely! Our color matching process uses advanced LeTech technology to ensure perfect color matches with your vehicle\'s original interior. We maintain an extensive database of automotive color codes and can create custom matches when needed.',
	},
	{
		question: 'Is the restoration permanent?',
		answer: 'When properly maintained, our LeTech restorations can last for many years. The advanced materials and techniques we use provide excellent durability and resistance to wear, UV damage, and everyday use. We also provide care instructions to help maximize longevity.',
	},
]

interface FAQSectionProps {
	items: typeof faqs
}

export default function FAQSection({ items }: FAQSectionProps): JSX.Element | null {
	if (!items) return null;

	return (
		<section className="py-20 bg-gradient-subtle">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Часто задаваемые <span className="text-brand-gradient">вопросы</span>
					</h2>
					<div className="w-20 h-1 brand-gradient rounded-full mx-auto mb-6"></div>
					<p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
						Получите ответы на самые распространенные вопросы о наших услугах по восстановлению салона автомобиля и технологиях <span className="brand-gradient">LeTech</span>.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<Accordion>
						{items?.map((faq, index) => (
							<AccordionItem
								key={index}
								aria-label={faq.question}
								title={faq.question}
							>
								{faq.answer}
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="mt-16 text-center">
					<Card className="p-8 max-w-2xl mx-auto shadow-small">
						<h3 className="text-2xl font-bold text-white mb-4">
							Остались вопросы?
						</h3>
						<p className="text-sm md:text-base text-white/80 mb-6 text-balance">
							Наша команда экспертов готова помочь. Свяжитесь с нами, чтобы получить персональные ответы и бесплатную консультацию по вопросам реставрации салона вашего автомобиля.
						</p>
						<div className="flex flex-col md:flex-row gap-4 justify-center">
							<p className="text-white">
								<span className="font-semibold text-automotive-gold">Call:</span> +1 (555) 123-4567
							</p>
							<p className="text-white">
								<span className="font-semibold text-automotive-gold">Email:</span> info@rs-service.by
							</p>
						</div>
					</Card>
				</div>
			</div>
		</section>
	)
}