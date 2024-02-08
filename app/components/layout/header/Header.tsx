import cn from 'classnames';
import Button from 'components/ui/button/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import Logo from '@/components/ui/Logo';

import Sidebar from '../sidebar/Sidebar';

import styles from './Header.module.scss';
import { IHeader } from './header.interface';

const Header: FC<IHeader> = ({ className, ...props }): JSX.Element => {
	const router = useRouter();
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
	useEffect(() => {
		setIsOpenedMenu(false);
	}, [router]);

	const variants = {
		opened: {
			x: 0,
		},
		closed: {
			x: 100,
		},
	};
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Logo />
			<Button
				appearance="ghost"
				onClick={() => setIsOpenedMenu(true)}
				className={cn(styles.burgerMenu, {
					[styles.active]: isOpenedMenu,
				})}
			>
				<span></span>
			</Button>
			<AnimatePresence>
				{isOpenedMenu && (
					<motion.div
						className={styles.mobileMenu}
						variants={variants}
						exit={{
							opacity: 0,
							x: 100,
						}}
						initial={'closed'}
						animate={isOpenedMenu ? 'opened' : 'closed'}
					>
						<Sidebar />
						<Button
							appearance="ghost"
							onClick={() => setIsOpenedMenu(false)}
							className={cn(styles.burgerMenu, styles.close)}
						>
							<span></span>
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
