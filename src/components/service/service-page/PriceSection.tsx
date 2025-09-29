import React from 'react'
import { PriceTable } from '../ui';

export default function PriceSection({ data }: { data: any }) {
	if (!Array.isArray(data) || data.length === 0) {
		return null;
	}

	return (
		<section className="py-20">
			<div className="container">
				<div className="mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
						Стоимость <span className="text-brand-gradient">работ</span>
					</h2>
					<div className="w-20 h-1 brand-gradient rounded-full mb-6"></div>
					<p className="text-sm md:text-base text-muted-foreground max-w-2xl">
						Без учета реставрационных работ и покраски кожи
					</p>
				</div>
				<div>
					<PriceTable data={data} />
				</div>
			</div>
		</section>
	)
}
