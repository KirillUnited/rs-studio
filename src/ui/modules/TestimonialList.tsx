import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'
import { Img } from '@/ui/Img'
import { VscSurroundWith } from 'react-icons/vsc'
import { cn } from '@/lib/utils'
import { BsChatLeftQuote, BsQuote } from 'react-icons/bs'
import { Card, CardBody, CardHeader } from '@heroui/react'
import { StarIcon } from '@sanity/icons'

export default function TestimonialList({
																					pretitle,
																					intro,
																					testimonials,
																					layout: l,
																					layoutMobile: lm,
																				}: Partial<{
	pretitle: string
	intro: any
	testimonials: Sanity.Testimonial[]
	layout: 'grid' | 'carousel'
	layoutMobile: 'grid' | 'carousel'
}>) {
	const layout = stegaClean(l)
	const layoutMobile = stegaClean(lm)

	return (
		<section className="section-container">
			<div className="container">
				{(pretitle || intro) && (
					<header className="richtext mb-8 md:mb-16 max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<PortableText value={intro} />
					</header>
				)}

				<div
					className={cn(
						'gap-8',
						layout === 'carousel'
							? 'carousel max-md:full-bleed md:overflow-fade-r pb-4 max-md:px-4'
							: 'grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
						layoutMobile === 'carousel' &&
						'max-md:carousel max-md:full-bleed max-md:px-4 max-md:pb-4',
					)}
				>
					{testimonials?.map(
						(testimonial, key) =>
							testimonial && (
								<Card key={key} className="bg-card border-border">
									<CardHeader className="flex flex-col items-start gap-4">
										<div className="flex items-center justify-between w-full gap-4">
											<div className="flex items-center space-x-2">
												<Img
													className="size-[40px] rounded-full object-cover"
													image={testimonial.author?.image}
													width={80}
													height={80}
													alt={
														[testimonial.author?.name, testimonial.author?.title]
															.filter(Boolean)
															.join(', ') || 'Author'
													}
												/>
												<div className="font-semibold text-foreground">{testimonial.author?.name}</div>
											</div>
											<div className="flex">
												{[...Array(5)].map((_, i) => (
													<StarIcon key={i} className="h-4 w-4 fill-primary text-primary" />
												))}
											</div>
										</div>
									</CardHeader>
									<CardBody className="text-foreground-500 italic font-light">
										<BsQuote className="h-6 w-6 text-primary mb-2" />
										<PortableText value={testimonial.content} />
									</CardBody>
								</Card>
							),
					)}
				</div>
			</div>
		</section>
	)
}
