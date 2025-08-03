'use client';
import { sendOrderMessage } from '@/lib/messenger'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@heroui/react'
import { useForm } from 'react-hook-form'

type OrderFormDataProps = {
	name: string
	phone: string
	email: string
	message?: string
}

export interface ModalDialogProps {
	isOpen?: boolean;
	onClose: () => void;
}

export default function ModalDialog({ isOpen, onClose }: ModalDialogProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<OrderFormDataProps>()

	const onSubmit = async (data: OrderFormDataProps) => {
		await sendOrderMessage(data)
		console.log('Order submitted:', data)
		reset()
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<>
					<ModalHeader>
						<h2 className="text-xl font-bold">Оформить заказ</h2>
					</ModalHeader>
					<ModalBody>
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

							<ModalFooter className="mt-6">
								{errors.message && <p>{errors.message.message}</p>}
								<Button variant="flat" onPress={onClose}>
									Отмена
								</Button>
								<Button color="primary" type="submit">
									Отправить заявку
								</Button>
							</ModalFooter>
						</form>
					</ModalBody>
				</>
			</ModalContent>
		</Modal>
	);
}