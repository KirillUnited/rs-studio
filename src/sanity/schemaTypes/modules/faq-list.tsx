import { defineField, defineType } from 'sanity'
import { getBlockText } from 'sanitypress-utils'
import { count } from '@/lib/utils'
import { CiCircleQuestion } from 'react-icons/ci'

export default defineType({
	name: 'faq-list',
	title: 'Список вопросов/ответов',
	icon: CiCircleQuestion,
	type: 'object',
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'faqs',
			title: 'Часто задаваемые вопросы',
			type: 'array',
			group: 'content',
			of: [
				{
					name: 'faq',
					title: 'Вопрос',
					type: 'object',
					fields: [
						{ name: 'question', title: 'Вопрос', type: 'string' },
						{ name: 'answer', title: 'Ответ', type: 'text' }
					]
				}
			]
		}),
	],
	preview: {
		select: {
			intro: 'faqs',
			faqs: 'faqs',
		},
		prepare: ({ intro, faqs }) => ({
			title: getBlockText(intro) || count(faqs, 'Вопрос/ответ'),
			subtitle: 'Список вопросов/ответов',
		}),
	},
})
