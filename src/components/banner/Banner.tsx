import React from 'react'
import { Button, Link } from '@heroui/react'
import { Icon } from '@iconify/react'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq, PortableText } from 'next-sanity'
import { LINK_QUERY } from '@/sanity/lib/queries'
import Scheduler from '@/ui/Scheduler'

export default async function Banner() {
	const announcements = await fetchSanityLive<
		(Sanity.Announcement & Sanity.Module)[]
	>({
		query: groq`*[_type == 'site'][0].announcements[]->{
			...,
			cta{ ${LINK_QUERY} },
		}`,
	})

	if (!announcements) return null

	return (
		<>
			{announcements?.map(({ start, end, content, cta, _id }) => (
				<Scheduler start={start} end={end} key={_id}>
					<aside
						className="dark flex flex-wrap gap-y-2 w-full items-center gap-x-6 border-b-1 border-divider bg-background px-6 py-2 backdrop-blur-xl sm:px-3.5 sm:before:flex-1">
						<div className="text-small text-foreground">
							<PortableText value={content} />
						</div>
						<Button
							as={Link}
							className="group relative h-9 overflow-hidden bg-transparent text-small font-normal"
							color="default"
							endContent={
								<Icon
									className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
									icon="solar:arrow-right-linear"
									width={16}
								/>
							}
							href={`/about`}
							style={{
								border: 'solid 2px transparent',
								backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(to right, #F871A0, #9353D3)`,
								backgroundOrigin: 'border-box',
								backgroundClip: 'padding-box, border-box',
							}}
							variant="bordered"
						>
							{cta?.label}
						</Button>
						<div className="flex flex-1 justify-end">
							{/*<Button isIconOnly className="-m-1" size="sm" variant="light">*/}
							{/*	<span className="sr-only">Close Banner</span>*/}
							{/*	<Icon className="text-default-500" icon="lucide:x" width={20} />*/}
							{/*</Button>*/}
						</div>
					</aside>
				</Scheduler>
			))}
		</>
	)
}
