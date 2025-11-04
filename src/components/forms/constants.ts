// src/constants/labels.ts
export enum LabelKey {
	ORDER_MODAL_TITLE = "ORDER_MODAL_TITLE",
	ORDER_MODAL_SUBTITLE = "ORDER_MODAL_SUBTITLE",
	ORDER_MODAL_BUTTON = "ORDER_MODAL_BUTTON",
	ORDER_MODAL_SUCCESS = "ORDER_MODAL_SUCCESS",
	// extend here for other UI sections
}

type LabelMap = Record<LabelKey, string>;

export const RU_LABELS: LabelMap = {
	[LabelKey.ORDER_MODAL_TITLE]: "Оформить заказ",
	[LabelKey.ORDER_MODAL_SUBTITLE]:
		"Оставьте заявку и мы свяжемся с вами в ближайшее время",
	[LabelKey.ORDER_MODAL_BUTTON]: "Заказать звонок",
	[LabelKey.ORDER_MODAL_SUCCESS]: "Спасибо! Мы свяжемся с вами в ближайшее время.",
};

export const EN_LABELS: LabelMap = {
	[LabelKey.ORDER_MODAL_TITLE]: "Place an Order",
	[LabelKey.ORDER_MODAL_SUBTITLE]:
		"Leave your request and we’ll contact you shortly",
	[LabelKey.ORDER_MODAL_BUTTON]: "Order a Call",
	[LabelKey.ORDER_MODAL_SUCCESS]: "Thank you! We’ll contact you soon.",
};

export const PHONE_REGEX = /^\+375\s?\((29|33|44|25)\)\s?\d{3}\s?\d{2}\s?\d{2}$/;