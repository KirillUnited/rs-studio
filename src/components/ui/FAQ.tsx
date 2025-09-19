'use client'
import { Accordion, AccordionItem, Card } from '@heroui/react'
import { JSX } from 'react'
import Link from 'next/link'
import { SectionHeader } from '@/components/section'

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
	pretitle: string
	intro: any
	description: string
	ctas: Sanity.CTA[]
	faqList: { faqs: typeof faqs }
}

export default function FAQSection({ faqList, intro, pretitle, description, ctas }: FAQSectionProps): JSX.Element | null {
	if (!faqList) return null;

	return (
		<section className="py-20">
			<div className="container">
				<SectionHeader pretitle={pretitle} title={intro} description={description} ctas={ctas} align='center' />

				<div className="max-w-4xl mx-auto">
					<Accordion>
						{faqList?.faqs?.map((faq, index) => (
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

				<div className="mt-16 lg:text-center">
					<Card className="p-8 max-w-2xl lg:mx-auto shadow-small">
						<h3 className="text-2xl font-bold text-white mb-4">
							Всё ещё остались вопросы?
						</h3>
						<p className="text-sm md:text-base text-white/80 mb-6 text-balance">
							Наша команда экспертов готова помочь. Свяжитесь с нами, чтобы получить персональные ответы и бесплатную консультацию по вопросам реставрации салона вашего автомобиля.
						</p>
						<div className="flex flex-col md:flex-row gap-4 justify-center">
							<Link href={`tel:+375 (29) 591 63 86`} className='flex flex-col gap-1'>
								<span className="font-semibold text-brand-gradient">Позвонить:</span> +375 (29) 591 63 86
							</Link>
							<Link href={`mailto:info@rs-service.by`} className='flex flex-col gap-1'>
								<span className="font-semibold text-brand-gradient">Написать:</span> info@rs-service.by
							</Link>
						</div>
					</Card>
				</div>
			</div>
		</section>
	)
}