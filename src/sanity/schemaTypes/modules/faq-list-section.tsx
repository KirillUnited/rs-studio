import { defineField, defineType } from 'sanity'
import { getBlockText } from 'sanitypress-utils'
import { count } from '@/lib/utils'
import { CiCircleQuestion } from 'react-icons/ci'

export default defineType({
	name: 'faq-list-section',
	title: 'Секция списка вопросов/ответов',
	icon: CiCircleQuestion,
	type: 'object',
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'options',
			title: 'Module options',
			type: 'module-options',
			group: 'options',
		}),
		defineField({
			name: 'pretitle',
			title: 'Предзаголовок',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'intro',
			title: 'Заголовок',
			type: 'array',
			of: [{ type: 'block',
				marks: {
					decorators: [
						{
							title: 'Highlight',
							value: 'highlight',
							icon: () => <span style={{ fontWeight: 'bold' }}>H</span>,
							component: ({ children }) => <span style={{ backgroundColor: '#ae7ede' }}>{children}</span>
						}
					]
				} }],
			group: 'content',
		}),
		defineField({
			name: 'description',
			title: 'Описание',
			type: 'text',
			group: 'content',
		}),
		defineField({
			name: "faqList",
			title: "Список вопросов/ответов",
			type: "faq-list",
			group: "content",
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'content',
		}),
	],
	preview: {
		select: {
			intro: 'intro',
			faqs: 'faqList',
		},
		prepare: ({ intro, faqs }) => ({
			title: getBlockText(intro) || count(faqs, 'вопрос/ответ'),
			subtitle: 'Секция списка вопросов/ответов',
		}),
	},
})
