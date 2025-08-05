'use client';
import Pretitle from '@/ui/Pretitle';
import { useEffect, useState } from 'react';
import { BiLoader } from 'react-icons/bi';

const InstagramFeed: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		// Load Elfsight script dynamically
		const script = document.createElement('script');
		script.src = 'https://static.elfsight.com/platform/platform.js';
		script.async = true;
		document.body.appendChild(script);

		setIsMounted(true);

		return () => {
			// Cleanup script when component unmounts
			document.body.removeChild(script);
		};
	}, []);

	if (!isMounted) {
		return <BiLoader className="animate-spin block mx-auto" />;
	}

	return (
		<section className="section-container bg-content1 text-center relative overflow-hidden">
			<header className="richtext mb-8 md:mb-16 max-w-2xl mx-auto">
				<Pretitle>Мы в Instagram</Pretitle>
				<h2>
					Следите за нашими новостями в Instagram
				</h2>
			</header>
			<div
				className="elfsight-app-f39cd378-0ff2-4b42-a9ef-f2da8b82e07e after:absolute after:z-[99999] after:left-0 after:bottom-1 after:w-full after:block after:bg-content1 after:h-12"
				data-elfsight-app-lazy
			/>
		</section>
	);
};

export default InstagramFeed;
