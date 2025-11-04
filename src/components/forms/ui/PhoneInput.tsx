import React from 'react'
import { Input, InputProps } from '@heroui/react'
import { withMask } from 'use-mask-input'
import { PHONE_REGEX } from '../constants'

interface PhoneInputProps
	extends Omit<InputProps, 'onChange' | 'value' | 'defaultValue'> {
	value?: string
	onChange: (
		value: string,
		info: { countryCode?: string; isValid: boolean },
	) => void
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
	({ value = '', onChange, ...props }, ref) => {
		const refWithMask = withMask('+375\\ (99) 999 99 99', {
			prefix: '+375',
			inputmode: 'tel',
			regex: PHONE_REGEX.toString(),
		});

		return (
			<Input
				ref={refWithMask}
				type="tel"
				inputMode="tel"
				{...props}
			/>
		)
	},
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput
