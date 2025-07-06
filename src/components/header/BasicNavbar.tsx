'use client'

import type { NavbarProps } from '@heroui/react'

import React from 'react'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Link,
	Button,
	Divider,
	cn,
} from '@heroui/react'
import { Icon } from '@iconify/react'

import styles from './styles.module.css'
import { Img } from '@/ui/Img'

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

const BasicNavbar = React.forwardRef<HTMLElement, BasicNavbarProps>(
	({ classNames = {}, logo, title, menuItems, ...props }, ref) => {
		const [isMenuOpen, setIsMenuOpen] = React.useState(false)
		const logoImage = logo?.image?.dark || logo?.image?.default

		return (
			<Navbar
				ref={ref}
				{...props}
				classNames={{
					base: cn('border-default-100 bg-transparent', {
						'bg-default-200/50 dark:bg-default-100/50': isMenuOpen,
					}),
					wrapper: 'w-full justify-center',
					item: 'hidden md:flex',
					...classNames,
				}}
				height="60px"
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				shouldHideOnScroll
			>
				<div className={cn('container', styles.Container)}>{/* Left Content */}
					<NavbarBrand as={Link} href="/">
						{logoImage ? (
							<Img
								className="inline-block max-h-10 w-auto"
								image={`${logoImage}`}
								alt={logo?.name || title}
							/>
						) : (
							<span className="text-gradient">{title}</span>
						)}
					</NavbarBrand>

					{/* Center Content */}
					<NavbarContent justify="center">
						{
							menuItems.map((item, index) => (
								<NavbarItem key={index}>
									<Link className="text-default-500"
												href={item?.internal?.metadata?.slug?.current === 'index' ? '/' : item?.internal?.metadata?.slug?.current || '#'}
												size="sm">
										{item?.internal?.metadata?.slug?.current === 'index' ? 'Главная' : item?.internal?.metadata?.title}
									</Link>
								</NavbarItem>
							))
						}
					</NavbarContent>

					{/* Right Content */}
					<NavbarContent className="hidden md:flex" justify="end">
						<NavbarItem className="ml-2 !flex gap-2">
							<Button
								className="bg-default-foreground font-medium text-background"
								color="secondary"
								endContent={<Icon icon="solar:alt-arrow-right-linear" />}
								radius="full"
								variant="flat"
							>
								Заказать
							</Button>
						</NavbarItem>
					</NavbarContent>

					<NavbarMenuToggle className="text-default-400 md:hidden" />

					<NavbarMenu
						className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
						motionProps={{
							initial: { opacity: 0, y: -20 },
							animate: { opacity: 1, y: 0 },
							exit: { opacity: 0, y: -20 },
							transition: {
								ease: 'easeInOut',
								duration: 0.2,
							},
						}}
					>
						{menuItems.map((item, index) => (
							<NavbarMenuItem key={index}>
								<Link className="mb-2 w-full text-default-500"
											href={item?.internal?.metadata?.slug?.current === 'index' ? '/' : item?.internal?.metadata?.slug?.current || '#'}
											size="md">
									{item?.internal?.metadata?.slug?.current === 'index' ? 'Главная' : item?.internal?.metadata?.title}
								</Link>
								{index < menuItems.length - 1 && <Divider className="opacity-50" />}
							</NavbarMenuItem>
						))}
					</NavbarMenu>
				</div>
			</Navbar>
		)
	},
)

BasicNavbar.displayName = 'BasicNavbar'

export default BasicNavbar
