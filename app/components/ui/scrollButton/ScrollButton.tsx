import Button from 'components/ui/button/Button';
import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import { useScroll } from '@/hooks/useScroll';

import styles from './ScrollButton.module.scss';

const ScrollButton: FC = (props) => {
	const controls = useAnimation();
	const scrollPosition = useScroll();

	useEffect(() => {
		controls.start({ opacity: scrollPosition / document.body.scrollHeight });
	}, [controls, scrollPosition]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<motion.div
			onClick={scrollToTop}
			className={styles.scroll_wrapper}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<Button aria-label='Подняться наверх' appearance="primary">
				<MaterialIcon name="MdArrowBackIosNew" />
			</Button>
		</motion.div>
	);
};

export default ScrollButton;
