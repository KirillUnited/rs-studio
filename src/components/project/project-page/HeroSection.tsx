import { Button, Card, CardBody } from "@heroui/react";
import { BsArrowLeft } from "react-icons/bs";

export interface Stat {
	label: string;
	value: string;
	icon: any;
}

export interface HeroSectionProps {
	title: string;
	subtitleHighlight: string;
	stats: Stat[];
	heroImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitleHighlight, stats, heroImage }) => {
	// const navigate = useRouter().back;
	return (
		<section className="relative bg-automotive-navy text-white py-20 overflow-hidden">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${heroImage})` }}
			></div>
			<div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
			<div className="container mx-auto px-4 relative z-10">
				<Button
					variant="ghost"
					className="mb-8 text-white hover:bg-white/10"
				// onPress={() => navigate()}
				>
					<BsArrowLeft className="mr-2 h-4 w-4" />
					Назад
				</Button>

				<div className="max-w-4xl">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						{title} <span className="text-automotive-gold">{subtitleHighlight}</span>
					</h1>

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
						{stats.map((stat, index) => {
							const Icon = stat.icon;
							return (
								<Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
									<CardBody className="p-6 text-center">
										<Icon className="h-8 w-8 text-automotive-gold mx-auto mb-3" />
										<div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
										<div className="text-white/80 text-sm">{stat.label}</div>
									</CardBody>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};