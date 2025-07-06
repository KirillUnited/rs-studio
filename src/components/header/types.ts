import type { NavbarProps } from '@heroui/react'

export interface BasicNavbarProps extends NavbarProps {
	/** Logo data */
	logo?: {
		name?: string
		image?: {
			dark?: string
			default?: string
		}
	}
	/** Title of the navbar */
	title?: string
	/** Menu items */
	menuItems?: Array<{
		/** Internal metadata */
		internal: {
			metadata: {
				slug: {
					current: string
				}
				title: string
			}
		}
	}>
}