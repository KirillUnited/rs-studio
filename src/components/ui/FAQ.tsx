'use client'
import { Accordion, AccordionItem, Card } from '@heroui/react'
import { JSX } from 'react'
import Link from 'next/link'
import { SectionHeader } from '@/components/section'

interface FAQSectionProps {
	pretitle: string
	intro: any
	description: string
	ctas: Sanity.CTA[]
	faqList: {
		faqs: {
			question: string
			answer: string
		}[]
	}
}

export default function FAQSection({ faqList, intro, pretitle='FAQ`s', description, ctas }: Partial<FAQSectionProps>): JSX.Element | null {
	if (!faqList) return null;

	return (
		<section className="py-20">
			<div className="container">
				<SectionHeader pretitle={pretitle} title={intro} description={description} ctas={ctas} align='center' />

				<div className="max-w-4xl mx-auto">
					<Accordion variant='splitted' itemClasses={{
						title: 'font-semibold',
						content: 'text-sm leading-relaxed'
					}}>
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
					<h3 className="text-2xl font-bold text-white">
						Всё ещё остались вопросы?
					</h3>
					<p className="text-sm md:text-base text-white/80 mb-4 text-balance">
						Наша команда экспертов готова помочь.
					</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<Link href={`tel:+375 (29) 591 63 86`} className='flex flex-col gap-1'>
							<span className="font-semibold text-brand-gradient">Позвоните нам:</span> +375 (29) 591 63 86
						</Link>
						<Link href={`mailto:info@rs-service.by`} className='flex flex-col gap-1'>
							<span className="font-semibold text-brand-gradient">Напишите на почту:</span> info@rs-service.by
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}