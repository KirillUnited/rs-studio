'use client'
import { Button, Input, ModalFooter, Textarea } from '@heroui/react'
import { useForm } from 'react-hook-form'
import { sendOrderMessage } from '@/lib/messenger'
import { OrderFormDataProps } from '@/components/forms/types'
import { BsArrowRight } from 'react-icons/bs'

export default function OrderForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<OrderFormDataProps>();
	const onSubmit = async (data: OrderFormDataProps) => {
		await sendOrderMessage(data)
		console.log('Order submitted:', data)
		reset()
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<Input
				{...register('name', { required: 'Обязательное поле' })}
				label="Ваше имя"
				variant="bordered"
				errorMessage={errors.name?.message}
			/>

			<Input
				{...register('phone', {
					required: 'Обязательное поле',
					pattern: {
						value: /^\+375(17|29|33|44|25)[0-9]{7}$/,
						message: 'Введите корректный номер телефона в формате +375XXXXXXXXX',
					},
				})}
				label="Телефон"
				variant="bordered"
				errorMessage={errors.phone?.message}
			/>

			<Input
				{...register('email', {
					required: 'Обязательное поле',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Введите корректный email',
					},
				})}
				label="Email"
				variant="bordered"
				errorMessage={errors.email?.message}
			/>

			<Textarea
				{...register('message')}
				label="Дополнительная информация"
				variant="bordered"
				className="col-span-2"
			/>


			<Button color="primary" className="w-full brand-gradient group" type='submit'>
				Отправить
				<BsArrowRight size={16} className='group-hover:translate-x-1 transition-transform'/>
			</Button>
		</form>
	);
}