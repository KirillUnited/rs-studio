import { AboutSection, HeroSection, BenefitsSection, ProcessSection } from '@/components/service/service-page'
import { urlFor } from '@/sanity/lib/image'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { SERVICE_PAGE_QUERY } from '@/components/service/lib/queries'
import { JSX } from 'react'
import { CTASection } from '@/components/service'
import { FAQSection } from '@/components/ui'
import { ContactUs } from '@/components/contact-us'
import ProjectsSection from '@/components/service/service-page/ProjectsSection'
import Breadcrumbs from '@/ui/modules/Breadcrumbs'
import NotFound from '@/app/(frontend)/not-found'

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await props.params
	const page = await fetchSanityLive({
		query: SERVICE_PAGE_QUERY,
		params: { slug },
	})

	return {
		title: page?.seo?.metaTitle,
		description: page?.seo?.metaDescription,
		openGraph: {
			title: page?.seo?.metaTitle,
			description: page?.seo?.metaDescription,
			images: [
				{
					url: page?.seo?.ogImage
						? urlFor(page?.seo?.ogImage).quality(100).url()
						: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`,
					width: page?.seo?.ogImage?.asset?.metadata?.dimensions?.width || 1200,
					height: page?.seo?.ogImage?.asset?.metadata?.dimensions?.height || 630,
				},
			],
			locale: 'ru-RU',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: page?.seo?.metaTitle,
			description: page?.seo?.metaDescription,
			images: [page?.seo?.ogImage
				? urlFor(page?.seo?.ogImage).quality(100).url()
				: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`],
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
	const crumbs = [
		{
			internal: {
				slug: {
					current: 'index',
					_type: 'slug',
				},
			},
			label: 'Главная',
			type:
				'internal',
			_key:
				'692634eb5e13',
			_type:
				'link',
		},
		{
			external: '/services',
			label: 'Наши Услуги',
			type:
				'external',
			_key:
				'234234',
			_type:
				'link',
		},
	];

	if (!page) return <NotFound />

	return (
		<>
			<HeroSection title={page?.title} description={page?.description} heroImage={page?.heroImage} />
			<Breadcrumbs crumbs={crumbs as any} currentPage={page} />
			<AboutSection title={page?.title} description={page?.about} />
			<BenefitsSection title={''} description={''} items={page?.benefits} />
			<ProcessSection />
			<ProjectsSection title={''} description={''} projects={page?.relatedProjects} />
			<CTASection className="mb-20" useContactAnchor />
			<FAQSection faqList={page?.faqs?.faqList} pretitle={page?.faqs?.pretitle} intro={page?.faqs?.intro}
									description={page?.faqs?.description} ctas={page?.faqs?.ctas} />
			<ContactUs />
		</>
	)
}
