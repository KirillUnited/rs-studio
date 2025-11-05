import React, { forwardRef } from 'react'
import { Input, InputProps } from '@heroui/react'
import { useHookFormMask } from 'use-mask-input'

interface PhoneInputProps extends Omit<InputProps, 'onChange' | 'value' | 'defaultValue'> {
  value?: string
  mask?: string | string[]
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, mask = '+375\ (99) 999 99 99', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="tel"
        inputMode="tel"
        value={value}
        {...props}
      />
    )
  }
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput

// Hook to use with react-hook-form
export const usePhoneInput = (control: any) => {
  const registerWithMask = useHookFormMask(control.register)

  const registerPhone = (name: string, required = true) => {
    return registerWithMask(name, ['+375\ (99) 999 99 99'], {
      required,
    })
  }

  return { registerPhone }
}
