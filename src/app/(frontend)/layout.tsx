// import { GoogleTagManager } from '@next/third-parties/google'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import Root from '@/ui/Root'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import { Header } from '@/components/header'
import Footer from '@/ui/footer'
import VisualEditingControls from '@/ui/VisualEditingControls'
import '@/styles/app.css'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { HeroUIProvider } from '@heroui/react'
import { Banner } from '@/components/banner'

export default async function RootLayout({
																					 children,
																				 }: {
	children: React.ReactNode
}) {
	return (
		<Root>
			{/* <GoogleTagManager gtmId="" /> */}
			<body className={cn('bg-background text-foreground antialiased flex flex-col min-h-screen dark',
				fontSans.variable,
			)}>
			<HeroUIProvider>
				<NuqsAdapter>
					<SkipToContent />
					{/*<Announcement />*/}
					<Banner />
					<Header />
					<main id="main-content" role="main" className="flex-1">
						{children}
					</main>
					<Footer />

					<VisualEditingControls />
				</NuqsAdapter>
			</HeroUIProvider>

			{/*<Analytics />*/}
			{/*<SpeedInsights />*/}
			</body>
		</Root>
	)
}
