import Pretitle from "@/ui/Pretitle";
import Link from "next/link";
import { getSite } from "@/sanity/lib/queries";

export default async function InstagramSection() {
	const { social } = await getSite();
	const instagram: any = social?.items?.find((item: any) => item.label === "Instagram");

	if (!instagram) {
		return null;
	}

	return (
		<section className="section-container bg-content1 text-center relative overflow-hidden">
			<div className="container">
				<header className="richtext mb-8 md:mb-16 max-w-2xl mx-auto">
					<Pretitle>Мы в Instagram</Pretitle>
					<h2>
						Следите за нашими новостями в <Link className='text-brand-gradient' href={`${instagram.external || '#'}`} target="_blank">@Instagram</Link>
					</h2>
				</header>
			</div>
			{/* <InstagramFeed /> */}
		</section>
	);
}
