'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error('App Error:', error);
	}, [error]);

	return (
		<div className="grid place-content-center gap-4 text-center py-10 min-h-96">
			<h1 className="text-2xl font-bold">Что-то пошло не так</h1>
			<p className="text-gray-700">{'Произошла непредвиденная ошибка. Попробуйте еще раз.'}</p>
			<button type="button" onClick={reset} className='w-fit mx-auto'>Попробовать еще раз</button>
		</div>
	);
}
