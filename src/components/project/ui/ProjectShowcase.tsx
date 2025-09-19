import Image from 'next/image'
import Link from 'next/link'
import { CgArrowTopRight, CgArrowTopRightO } from 'react-icons/cg'

export default function ProjectShowcase() {
	return (
		<Link href="/projects" className="group flex relative rounded-large overflow-hidden">
			<Image
				src={`/images/before-after.jpg`}
				width={1920}
				height={380}
				alt="Before and after restoration"
				className="w-full h-96 object-cover group-hover:scale-110 transition-transform"
				quality={50}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
			<div className="absolute bottom-0 left-0 text-foreground p-4">
				<h3 className="text-2xl font-bold mb-2 leading-none flex items-center gap-2">Увидеть трансформацию <CgArrowTopRightO size={24}/></h3>
				<p className="text-sm md:text-base text-foreground-700">Профессиональные результаты, которые говорят сами за
					себя</p>
			</div>
		</Link>
	)
}