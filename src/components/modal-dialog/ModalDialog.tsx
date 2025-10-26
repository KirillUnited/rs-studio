'use client';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react'
import { ReCallForm } from '@/components/forms'

export interface ModalDialogProps {
	isOpen?: boolean;
	onClose: () => void;
}

export default function ModalDialog({ isOpen, onClose }: ModalDialogProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<>
					<ModalHeader className="flex flex-col gap-2">
						<h2 className="text-xl font-bold">Оформить заказ</h2>
						<p className="text-sm text-muted-foreground">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
					</ModalHeader>
					<ModalBody>
						<ReCallForm />
					</ModalBody>
				</>
			</ModalContent>
		</Modal>
	);
}