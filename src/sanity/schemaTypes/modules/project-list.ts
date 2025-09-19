import { defineArrayMember, defineField, defineType } from 'sanity'
import { TfiLayoutMediaLeftAlt } from 'react-icons/tfi'
import { getBlockText } from 'sanitypress-utils'
import { count } from '@/lib/utils'

export default defineType({
	name: 'project-list',
	title: 'Project list (Список проектов ДО/ПОСЛЕ)',
	icon: TfiLayoutMediaLeftAlt,
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
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'description',
			title: 'Описание',
			type: 'text',
			group: 'content',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'content',
		}),

		defineField({
			name: "projects",
			title: "Связанные проекты",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "projectPage" }],
				},
			],
			description: "Выберите проекты, которые будут отображаться как связанные",
			group: "content",
		}),
		defineField({
			name: 'layout',
			type: 'string',
			options: {
				list: ['grid', 'carousel'],
				layout: 'radio',
			},
			group: 'options',
			initialValue: 'carousel',
		}),
		defineField({
			name: 'columns',
			type: 'number',
			description: 'Set a fixed number of columns (Tablet and desktop only)',
			validation: (Rule) => Rule.min(1).max(12),
			group: 'options',
		}),
		defineField({
			name: 'visualSeparation',
			type: 'boolean',
			initialValue: true,
			group: 'options',
		}),
	],
	preview: {
		select: {
			intro: 'intro',
			projects: 'projects',
		},
		prepare: ({ intro, projects }) => ({
			title: getBlockText(intro) || count(projects, 'Проект'),
			subtitle: 'Список проектов',
		}),
	},
})
