import cn from 'classnames';
import { FC, KeyboardEvent, ReactNode, useRef, useState } from 'react';

import ScrollButton from '../ui/scrollButton/ScrollButton';

import styles from './Layout.module.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

interface ILayout {
	children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }): JSX.Element => {
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
		useState<boolean>(false);
		const bodyRef = useRef<HTMLDivElement>(null)

		const skipContentAction = (key: KeyboardEvent) => {
			if (key.code === 'Space' || key.code === 'Enter') {
				key.preventDefault();
				bodyRef.current?.focus()
			}
			setIsSkipLinkDisplayed(false)
		}
	return (
		<div className={styles.wrapper}>
			<a
				onFocus={() => setIsSkipLinkDisplayed(true)}
				tabIndex={0}
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed,
				})}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main ref={bodyRef} className={styles.body} tabIndex={0} role="main">
				{children}
			</main>
			<Footer className={styles.footer} />
			<ScrollButton />
		</div>
	);
};

export default Layout;
