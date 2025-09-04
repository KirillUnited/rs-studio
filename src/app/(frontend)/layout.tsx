import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Root from '@/ui/Root'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import SkipToContent from '@/ui/SkipToContent'
import { Header } from '@/components/header'
import Footer from '@/ui/footer'
import VisualEditingControls from '@/ui/VisualEditingControls'
import '@/styles/app.css'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { HeroUIProvider } from '@heroui/react'
import { Banner } from '@/components/banner'
import Script from 'next/script'
import { jsonLd } from '@/lib/json-ld'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Root>
			{/* ✅ GTM + GA4 */}
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
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
				<Script
					id="json-ld-car-service"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd({})) }}
				/>
			</body>
		</Root>
	)
}
