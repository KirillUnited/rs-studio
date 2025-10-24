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
					<ModalHeader>
						<h2 className="text-xl font-bold">Оформить заказ</h2>
					</ModalHeader>
					<ModalBody>
						<ReCallForm />
					</ModalBody>
				</>
			</ModalContent>
		</Modal>
	);
}