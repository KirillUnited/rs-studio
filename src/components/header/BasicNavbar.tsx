'use client'

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
import { BasicNavbarProps } from '@/components/header/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ModalDialog } from '@/components/modal-dialog'
import { ContactList } from '../contact-us/ui'
import { ContactListProps } from '../contact-us/ui/ContactList'

const getMenuItemLink = (item: { internal?: { metadata: { slug: { current: string } } }, external?: { slug: string } }) => {
	if (item?.internal?.metadata?.slug?.current === 'index') return '/';
	if (item?.internal?.metadata?.slug?.current) return `/${item?.internal?.metadata?.slug?.current}`;
	if (item?.external?.slug) return item.external.slug;
	return '#';
}

const BasicNavbar = React.forwardRef<HTMLElement, BasicNavbarProps & ContactListProps>(
	({ classNames = {}, logo, title, menuItems, contactInfo, ...props }, ref) => {
		const [isMenuOpen, setIsMenuOpen] = React.useState(false);
		const [isModalOpen, setIsModalOpen] = React.useState(false);
		const logoImage = logo?.image?.dark || logo?.image?.default;

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
				<div className={cn('container', styles.Container)}>
					{/* Left Content */}
					<NavbarBrand as={Link} href="/" className='flex-0'>
						{logoImage ? (
							<Image
								className="inline-block max-h-10 w-10 rounded-full"
								src={urlFor(logoImage as any).url()}
								alt={`${logo?.name}` || `${title}`}
								width={40}
								height={40}
								quality={50}
							/>
						) : (
							<span className="text-gradient">{title}</span>
						)}
					</NavbarBrand>

					{/* Center Content */}
					<NavbarContent justify="center">
						{
							menuItems?.map((item, index) => {
								const link = getMenuItemLink(item);

								return (
									<NavbarItem key={index}>
										<Link className="text-foreground"
											href={link}
											size="sm">
											{item?.internal?.metadata?.slug?.current === 'index' ? 'Главная' : item?.internal?.metadata?.title || item?.external?.title}
										</Link>
									</NavbarItem>
								)
							})
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
								onPress={() => setIsModalOpen(true)}
							>
								Заказать
							</Button>

							<ModalDialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
						</NavbarItem>
					</NavbarContent>

					<NavbarMenuToggle className="text-default-400 md:hidden h-10" />

					<NavbarMenu
						className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150"
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
						{menuItems?.map((item, index) => {
							const link = getMenuItemLink(item);

							return (
								<NavbarMenuItem key={index}>
									<Link className="mb-2 w-full text-default-500"
										href={link}
										size="md">
										{item?.internal?.metadata?.slug?.current === 'index' ? 'Главная' : item?.internal?.metadata?.title || item?.external?.title}
									</Link>
									{index < menuItems.length - 1 && <Divider className="opacity-50" />}
								</NavbarMenuItem>
							)
						})}

						<div className='flex flex-col gap-4 mt-auto'>
							<Divider />
							<ContactList contactInfo={contactInfo} />
						</div>
					</NavbarMenu>
				</div>
			</Navbar>
		)
	},
)

BasicNavbar.displayName = 'BasicNavbar'

export default BasicNavbar
