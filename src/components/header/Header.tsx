import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react'
import styles from './styles.module.css'
import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import { Img } from '@/ui/Img'
import React from 'react'
import { BasicNavbar } from '@/components/header/index'

export default async function Header() {
	const { title, logo, ctas, headerMenu } = await getSite()

	return (
		<BasicNavbar
			classNames={{
				wrapper: cn(styles.Header),
			}}
			logo={{
				name: logo?.name,
				image: {
					dark: logo?.image?.dark?.asset,
					default: logo?.image?.default?.asset
				}
			}}
			title={title}
			menuItems={headerMenu?.items?.map(item => ({
				internal: {
					metadata: {
						slug: { current: 'internal' in item ? item.internal?.metadata?.slug?.current || '' : '' },
						title: ('internal' in item && item.internal?.metadata?.title) || ''
					}
				}
			}))}
		/>
		// <Navbar
		// 	shouldHideOnScroll
		// 	classNames={{
		// 		wrapper: cn(styles.Header),
		// 	}}
		// >
		// 	<div className={cn('container', styles.Container)}>
		// 		{/*<NavbarBrand as={Link} href="/">*/}
		// 		{/*	{logoImage ? (*/}
		// 		{/*		<Img*/}
		// 		{/*			className="inline-block max-h-10 w-auto"*/}
		// 		{/*			image={logoImage}*/}
		// 		{/*			alt={logo?.name || title}*/}
		// 		{/*		/>*/}
		// 		{/*	) : (*/}
		// 		{/*		<span className="text-gradient">{title}</span>*/}
		// 		{/*	)}*/}
		// 		{/*</NavbarBrand>*/}
		// 		{/*<NavbarContent className="hidden sm:flex gap-4" justify="center">*/}
		// 		{/*	/!*{*!/*/}
		// 		{/*	/!*	headerMenu?.items?.map((item, key) => {*!/*/}
		// 		{/*	/!*		return (*!/*/}
		// 		{/*	/!*			<NavbarItem key={key}>*!/*/}
		// 		{/*	/!*				<Link color="foreground" href={item?.internal?.metadata?.slug?.current === 'index' ? '/' : item?.internal?.metadata?.slug?.current || '#'}>*!/*/}
		// 		{/*	/!*					{item?.internal?.metadata?.slug?.current === 'index' ? 'Главная' : item?.internal?.metadata?.title}*!/*/}
		// 		{/*	/!*				</Link>*!/*/}
		// 		{/*	/!*			</NavbarItem>*!/*/}
		// 		{/*	/!*		)*!/*/}
		// 		{/*	/!*	})*!/*/}
		// 		{/*	/!*}*!/*/}
		// 		{/*</NavbarContent>*/}
		// 		{/*<NavbarContent justify="end">*/}
		// 		{/*	<NavbarItem>*/}
		// 		{/*		<Button as={Link} color="primary" href="#" radius="full" className="uppercase">*/}
		// 		{/*			Заказать*/}
		// 		{/*		</Button>*/}
		// 		{/*	</NavbarItem>*/}
		// 		{/*</NavbarContent>*/}
		// 	</div>
		// </Navbar>
	)
}