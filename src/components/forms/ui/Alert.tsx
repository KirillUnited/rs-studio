import { LabelKey, RU_LABELS } from "../constants"

export const Alert = () => {
	return (
		<p className="text-success text-balance mb-4">
			{RU_LABELS[LabelKey.ORDER_MODAL_SUCCESS]}
		</p>
	)
}
