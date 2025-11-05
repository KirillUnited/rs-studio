'use client'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react'
import { ReCallForm } from '@/components/forms'
import { LabelKey, RU_LABELS } from '@/components/forms/constants'

export interface ModalDialogProps {
	isOpen?: boolean
	onClose: () => void
}

export default function ModalDialog({ isOpen, onClose }: ModalDialogProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<>
					<ModalHeader className="flex flex-col gap-2">
						<h2 className="text-xl font-bold text-balance">
							{RU_LABELS[LabelKey.ORDER_MODAL_TITLE]}
						</h2>
						<p className="text-muted-foreground text-sm text-balance">
							{RU_LABELS[LabelKey.ORDER_MODAL_SUBTITLE]}
						</p>
					</ModalHeader>
					<ModalBody>
						<ReCallForm onSubmitSuccess={onClose} />
					</ModalBody>
				</>
			</ModalContent>
		</Modal>
	)
}
