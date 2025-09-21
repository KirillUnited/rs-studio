import { PortableText } from 'next-sanity'
import Pretitle from '@/ui/Pretitle'
import CTAList from '@/ui/CTAList'
import Asset from './Asset'
import CustomHTML from './CustomHTML'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'
import { FaAward } from 'react-icons/fa'
import { CTABlock } from '@/components/ui'

export default function HeroSplit({
	pretitle,
	content,
	ctas,
	assets,
	assetOnRight,
	assetBelowContent,
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	assets: Array<Sanity.Img | Sanity.Code | Sanity.CustomHTML>
	assetOnRight: boolean
	assetBelowContent: boolean
}>) {
	const asset = assets?.[0]

	return (
		<section className='section-container bg-content1 overflow-hidden'>
			<div className='container'>
				<div className='grid items-center gap-8 md:grid-cols-2 md:gap-x-12'>
					<figure
						className={cn(
							'rounded-medium overflow-hidden',
							asset?._type === 'img' && 'max-md:full-bleed',
							assetOnRight && 'md:order-1',
							assetBelowContent && 'max-md:order-last',
						)}
					>
						<Asset asset={asset} />
					</figure>

					<div className="flex flex-col items-start gap-4 richtext headings:text-balance mx-auto w-full">
						<Pretitle>{pretitle}</Pretitle>
						<PortableText
							value={content}
							components={{
								types: {
									'custom-html': ({ value }) => <CustomHTML {...value} />,
									'reputation-block': ({ value }) => (
										<Reputation className="!mt-4" reputation={value.reputation} />
									),
								},
							}}
						/>
						<div className="w-full grid md:grid-cols-2 gap-6 mb-8">
							<div className="flex flex-col gap-2">
								<h3 className="text-3xl font-bold text-primary">1000+</h3>
								<p className="text-foreground-500 text-sm">Салонов восстановлены</p>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-3xl font-bold text-primary">15+</h3>
								<p className="text-foreground-500 text-sm">Лет опыта</p>
							</div>
							{/* <div className="flex flex-col items-center gap-4">
						<FaAward className="h-8 w-8 text-primary" />
						<p className="text-muted-foreground">Сертифицированные специалисты</p>
					</div> */}
						</div>

						{/* <CTAList ctas={ctas} className="!mt-6" /> */}
						<CTABlock />
					</div>
				</div>
			</div>
		</section>
	)
}
