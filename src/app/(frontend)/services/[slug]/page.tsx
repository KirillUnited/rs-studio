import { AboutSection, HeroSection } from '@/components/service/service-page'
import { urlFor } from '@/sanity/lib/image'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { SERVICE_PAGE_QUERY } from '@/components/service/lib/queries'
import { JSX } from 'react'
import NotFound from '@/app/(frontend)/not-found'

export async function generatePageMetadata(props: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await props.params
	const page = await fetchSanityLive({
		query: SERVICE_PAGE_QUERY,
		params: { slug },
	})

	return {
		title: page?.meta_title,
		description: page?.meta_description,
		openGraph: {
			title: page?.meta_title,
			description: page?.meta_description,
			images: [
				{
					url: page?.ogImage
						? urlFor(page?.ogImage).quality(100).url()
						: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`,
					width: page?.ogImage?.asset?.metadata?.dimensions?.width || 1200,
					height: page?.ogImage?.asset?.metadata?.dimensions?.height || 630,
				},
			],
			locale: 'ru-RU',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: page?.meta_title,
			description: page?.meta_description,
			images: [page?.ogImage
				? urlFor(page?.ogImage).quality(100).url()
				: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`]
		},
		alternates: {
			canonical: `/services/${slug === 'index' ? '' : slug}`,
		},
	}
}


export default async function ServicePage(props: {
	params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
	const { slug } = await props.params
	const page = await fetchSanityLive({
		query: SERVICE_PAGE_QUERY,
		params: { slug },
	});
	console.log(page)

	return (
		<>
			<HeroSection />
			<AboutSection />
		</>
	)
}
