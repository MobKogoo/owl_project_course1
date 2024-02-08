import { useEffect, useState } from 'react';

export const useScroll = (): number => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const isBrowser = typeof window !== 'undefined';

	const handleScroll = () => {
		const currentScrollPosition = isBrowser ? window.scrollY : 0;
		setScrollPosition(currentScrollPosition);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrollPosition;
};
