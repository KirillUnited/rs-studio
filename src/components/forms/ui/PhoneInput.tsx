import React from 'react'
import {
	formatIncompletePhoneNumber,
	parsePhoneNumberFromString,
} from 'libphonenumber-js'
import { Input, InputProps } from '@heroui/react'

interface PhoneInputProps
	extends Omit<InputProps, 'onChange' | 'value' | 'defaultValue'> {
	value?: string
	defaultCountry?: string
	onChange: (
		value: string,
		info: { countryCode?: string; isValid: boolean },
	) => void
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
	({ value = '', defaultCountry = 'BY', onChange, ...props }, ref) => {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const input = e.target.value
			const phoneNumber = parsePhoneNumberFromString(
				input,
				defaultCountry as any,
			)

			// Format the input while typing
			const formattedValue = formatIncompletePhoneNumber(
				input,
				defaultCountry as any,
			)

			onChange(formattedValue, {
				countryCode: phoneNumber?.country,
				isValid: phoneNumber ? phoneNumber.isValid() : false,
			})
		}

		// Format the initial value
		const formattedValue = value
			? formatIncompletePhoneNumber(value, defaultCountry as any)
			: ''

		return (
			<Input
				{...props}
				ref={ref}
				type="tel"
				inputMode="tel"
				value={formattedValue}
				onChange={handleChange}
			/>
		)
	},
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput
