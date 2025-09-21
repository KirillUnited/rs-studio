import { FaClock, FaGlobe, FaMapPin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrContactInfo } from "react-icons/gr";
import { defineField, defineType } from "sanity";

export const contactInfoType = defineType({
    name: "contactInfo",
    title: "Контактная информация",
    type: "object",
    icon: GrContactInfo,
    fields: [
        defineField({
            name: "phones",
            title: "Phones",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    defineField({ name: "number", type: "string", title: "Phone Number" }),
                    defineField({ name: "text", type: "string", title: "Display Text" }),
                    defineField({ name: "link", type: "string", title: "Link" })
                ],
                icon: FaPhone,
            }],
            initialValue: [
                { number: "+375(29) 752-02-04", text: "Call us", link: "tel:+375297520204" },
                { number: "+375(33) 352-46-63", text: "Support", link: "tel:+375333524663" },
                { number: "+375(33) 679-12-22", text: "Sales", link: "tel:+375336791222" }
            ],
        }),
        defineField({
            name: "emails",
            title: "Emails",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    defineField({ name: "email", type: "string", title: "Email", validation: (Rule) => Rule.email().error("Invalid email format") }),
                    defineField({ name: "text", type: "string", title: "Display Text" }),
                    defineField({ name: "link", type: "string", title: "Link" })
                ],
                icon: FiMail,
            }],
            initialValue: [
                { email: "info@artmarketprint.by", text: "Напишите нам", link: "mailto:info@artmarketprint.by" }
            ]
        }),
        defineField({
            name: "address",
            title: "Адрес",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    defineField({ name: "location", type: "string", title: "Локация" }),
                    defineField({ name: "text", type: "string", title: "Текст" }),
                    defineField({ name: "link", type: "url", title: "Ссылка на карту" }),
                    defineField({ name: "mapEmbed", type: "text", title: "Виджет с картой" }),
                ],
                icon: FaMapPin,
            }],
            initialValue: [{
                location: "Минск, ул. Ольшевского, 16Б, корп. 2",
                text: "Visit us",
                link: "https://yandex.by/map-widget/v1/org/art_market_print/100202069960/?ll=27.508390%2C53.918763&z=17"
            }]
        }),
        defineField({
            name: "workingHours",
            title: "Рабочие часы",
            type: "string",
            icon: FaClock,
            initialValue: "Пн-Пт: 9:00 - 18:00"
        }),
        defineField({
            name: "socialLinks",
            title: "Социальные сети",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "platform",
                            type: "string",
                            title: "Platform",
                            options: {
                                list: [
                                    { title: "Instagram", value: "instagram" },
                                    { title: "Telegram", value: "telegram" },
                                    { title: "Viber", value: "viber" },
                                    { title: "WhatsApp", value: "whatsapp" }
                                ]
                            }
                        }),
                        defineField({ name: "url", type: "url", title: "URL" })
                    ],
                    icon: FaGlobe,
                },
            ],
        }),
    ],
});