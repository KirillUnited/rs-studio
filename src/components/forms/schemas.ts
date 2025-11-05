import { z } from 'zod'
import { PHONE_REGEX } from './constants'

// Belarus phone regex: +375 (XX) XXX-XX-XX or 80 (XX) XXX-XX-XX
export const recallSchema = z.object({
	name: z.string().min(1, 'Введите ваше имя'),
	phone: z
		.string()
		.regex(
			PHONE_REGEX,
			'Введите корректный номер телефона (например: +375 (29) 123-45-67)',
		),
	agreement: z.boolean().refine((val) => val === true, {
		message: 'Необходимо согласие на обработку персональных данных',
	}),
})

export type RecallFormData = z.infer<typeof recallSchema>

export type FormState = {
	status: 'idle' | 'success' | 'error'
	errors?: Record<string, string[]>
	message?: string
}
