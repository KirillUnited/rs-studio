import React from 'react'

const PhoneInput = () => {
	return (
		<HeroTelInput
			label="Phone Number"
			placeholder="Enter your phone number"
			defaultCountry="CN"
			onChange={(value, info) => {
				console.log('Value:', value)
				console.log('Country:', info.countryCode)
				console.log('Calling Code:', info.countryCallingCode)
			}}
		/>
	)
}

export default PhoneInput
