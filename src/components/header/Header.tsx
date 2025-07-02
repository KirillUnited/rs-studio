import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react'
import styles from './styles.module.css'
import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import { Img } from '@/ui/Img'

export default async function Header() {
	const { title, logo, ctas } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Navbar
			shouldHideOnScroll
			classNames={{
				wrapper: cn(styles.Header),
			}}
		>
			<div className={cn('container', styles.Container)}>
				<NavbarBrand as={Link} href="/">
					{logoImage ? (
						<Img
							className="inline-block max-h-10 w-auto"
							image={logoImage}
							alt={logo?.name || title}
						/>
					) : (
						<span className="text-gradient">{title}</span>
					)}
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link color="foreground" href="#">
							Features
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link aria-current="page" href="#">
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Integrations
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem className="hidden lg:flex">
						<Link href="#">Login</Link>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} color="primary" href="#" variant="flat">
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</div>
		</Navbar>
	)
}
