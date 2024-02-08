import cn from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, KeyboardEvent, useCallback, useContext, useMemo } from 'react';

import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';

import { AppContext } from '../../../context/AppContextProvider';
import { firstLevelMenu } from '../../../helpers/helpers';

import styles from './Menu.module.scss';

const Menu: FC = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(AppContext);

	const router = useRouter();
	const shouldReduceMotion = useReducedMotion();

	const openSecondLevel = useCallback(
		(secondCategory: string) => {
			setMenu &&
				setMenu(
					menu.map((m) => {
						if (m._id.secondCategory === secondCategory) {
							m.isOpened = !m.isOpened;
						}
						return m;
					})
				);
		},
		[menu, setMenu]
	);

	const openSecondLevelKey = (key: KeyboardEvent, category: string) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			openSecondLevel(category);
		}
	};

	const variants = {
		visible: {
			marginBottom: 20,
			transition: shouldReduceMotion
				? {}
				: {
						when: 'beforeChildren',
						staggerChildren: 0.1,
				  },
		},
		hidden: {
			marginBottom: 0,
		},
	};
	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 27,
		},
		hidden: {
			opacity: shouldReduceMotion ? 1 : 0,
			height: 0,
		},
	};

	const buildFirstLevel = () => {
		return (
			<ul>
				{firstLevelMenu.map((menu) => (
					<li
						role="menuitem"
						key={menu.route}
						aria-expanded={menu.id === firstCategory}
					>
						<Link href={`/${menu.route}`}>
							<a
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: menu.id === firstCategory,
								})}
							>
								{menu.icon}
								<span>{menu.name}</span>
							</a>
						</Link>
						{menu.id === firstCategory && buildSecondLevel(menu)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu?.map((item) => {
					if (
						item.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])
					) {
						item.isOpened = true;
					}
					return (
						<ul key={item._id.secondCategory}>
							<li
								role="menuitem"
								tabIndex={0}
								onKeyDown={(key: KeyboardEvent) =>
									openSecondLevelKey(key, item._id.secondCategory)
								}
								className={styles.secondLevel}
								aria-expanded={item.isOpened}
								onClick={() => openSecondLevel(item._id.secondCategory)}
							>
								{item._id.secondCategory}
							</li>
							<motion.ul
								layout
								variants={variants}
								initial={item.isOpened ? 'visible' : 'hidden'}
								animate={item.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock)}
							>
								{buildThirdLevel(
									item.pages,
									menuItem.route,
									item.isOpened ?? false
								)}
							</motion.ul>
						</ul>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (
		pages: PageItem[],
		route: string,
		isOpened: boolean
	) => {
		return pages.map((page) => (
			<motion.li
				aria-current={
					`/${route}/${page.alias}` === router.asPath ? 'page' : false
				}
				key={page._id}
				variants={variantsChildren}
			>
				<Link href={`/${route}/${page.alias}`}>
					<a
						tabIndex={isOpened ? 0 : -1}
						className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]:
								`/${route}/${page.alias}` === router.asPath,
						})}
					>
						{page.category}
					</a>
				</Link>
			</motion.li>
		));
	};
	return (
		<nav role="navigation" className={styles.menu}>
			{buildFirstLevel()}
		</nav>
	);
};

export default Menu;
