import { defineType, defineField } from 'sanity'

export const servicePageType = defineType({
	name: 'servicePage',
	title: 'Страница услуги',
	type: 'document',
	groups: [
		{ name: 'content', title: 'Контент' },
		{ name: 'media', title: 'Медиа' },
		{ name: 'seo', title: 'SEO' }
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Заголовок',
			type: 'string',
			description: 'Основной заголовок страницы услуги',
			group: 'content'
		}),
		defineField({
			name: 'slug',
			title: 'Слаг',
			type: 'slug',
			description: 'URL-адрес страницы (генерируется из заголовка)',
			group: 'content',
			options: { source: 'title', maxLength: 96 }
		}),
		defineField({
			name: 'description',
			title: 'Описание',
			type: 'text',
			rows: 3,
			description: 'Краткое описание услуги для SEO и предпросмотра',
			group: 'content'
		}),
		defineField({
			name: 'heroImage',
			title: 'Изображение героя',
			type: 'image',
			description: 'Главное изображение для секции Hero',
			options: { hotspot: true },
			group: 'media'
		}),
		defineField({
			name: 'about',
			title: 'О сервисе',
			type: 'array',
			of: [{ type: 'block' }],
			description: 'Раздел «О нас» или описание услуги',
			group: 'content'
		}),
		defineField({
			name: 'benefits',
			title: 'Преимущества',
			type: 'array',
			description: 'Список преимуществ услуги',
			group: 'content',
			of: [
				{
					name: 'benefit',
					title: 'Преимущество',
					type: 'object',
					fields: [
						{ name: 'title', title: 'Заголовок', type: 'string' },
						{ name: 'text', title: 'Описание', type: 'text' },
						{ name: 'icon', title: 'Иконка (название из набора)', type: 'string' }
					]
				}
			]
		}),
		defineField({
			name: 'gallery',
			title: 'Галерея',
			type: 'array',
			group: 'media',
			of: [{ type: 'image', options: { hotspot: true } }],
			description: 'Фотографии до/после или примеры работ'
		}),
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
		defineField({
			name: 'seo',
			title: 'SEO метаданные',
			type: 'object',
			group: 'seo',
			fields: [
				{ name: 'metaTitle', title: 'Meta Title', type: 'string' },
				{ name: 'metaDescription', title: 'Meta Description', type: 'text' },
				{ name: 'keywords', title: 'Ключевые слова', type: 'array', of: [{ type: 'string' }] },
				{ name: 'ogImage', title: 'OG Image (для соцсетей)', type: 'image', options: { hotspot: true } }
			]
		})
	],
	preview: {
		select: {
			title: 'title',
			media: 'heroImage'
		}
	}
})
