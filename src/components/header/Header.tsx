import styles from './styles.module.css'
import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import React from 'react'
import { BasicNavbar } from '@/components/header/index'

export default async function Header() {
	const { title, logo, ctas, headerMenu } = await getSite();
	const logoImage = {
		name: logo?.name,
		image: {
			dark: logo?.image?.dark?.asset,
			default: logo?.image?.default?.asset
		}
	};
	const menuItems = headerMenu?.items?.map(item => ({
		internal: {
			metadata: {
				slug: { current: 'internal' in item ? item.internal?.metadata?.slug?.current || '' : '' },
				title: ('internal' in item && item.internal?.metadata?.title) || ''
			}
		}
	}));

	return (
		<BasicNavbar
			classNames={{
				wrapper: cn(styles.Header),
			}}
			logo={logoImage}
			title={title}
			menuItems={menuItems}
		/>
	)
}