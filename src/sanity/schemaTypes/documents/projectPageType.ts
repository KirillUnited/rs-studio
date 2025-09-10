import { defineType, defineField } from "sanity";

export const projectPageType = defineType({
	name: "projectPage",
	title: "Страница проекта",
	type: "document",
	groups: [
		{ name: "content", title: "Контент" },
		{ name: "media", title: "Медиа" },
		{ name: "seo", title: "SEO" },
	],
	fields: [
		defineField({
			name: "title",
			title: "Заголовок",
			type: "string",
			validation: (Rule) => Rule.required(),
			group: "content",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			group: "content",
		}),
		defineField({
			name: "description",
			title: "Описание",
			type: "text",
			group: "content",
		}),
		defineField({
			name: "image",
			title: "Изображение проекта",
			type: "image",
			group: "media",
			options: { hotspot: true },
		}),
		defineField({
			name: "gallery",
			title: "Галерея проекта",
			type: "array",
			of: [{ type: "image", options: { hotspot: true } }],
			group: "media",
		}),
		defineField({
			name: "services",
			title: "Услуги",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "servicePage" }],
				},
			],
			description: "К каким услугам относится проект",
			group: "content",
		}),

		// SEO
		defineField({
			name: "seo",
			title: "SEO",
			type: "object",
			options: { collapsible: true, collapsed: true },
			fields: [
				defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
				defineField({
					name: "metaDescription",
					title: "Meta Description",
					type: "text",
				}),
				defineField({
					name: "keywords",
					title: "Ключевые слова",
					type: "array",
					of: [{ type: "string" }],
				}),
				defineField({
					name: "ogImage",
					title: "OG изображение",
					type: "image",
					options: { hotspot: true },
				}),
			],
			group: "seo",
		}),
	],
});
