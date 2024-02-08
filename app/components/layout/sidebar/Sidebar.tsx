import cn from 'classnames';
import { FC } from 'react';

import Logo from '@/ui/Logo';
import Menu from '../menu/Menu';

import styles from './Sidebar.module.scss';
import { ISidebar } from './sidebar.interface';

const Sidebar: FC<ISidebar> = ({ className, ...props }): JSX.Element => {
	return (
		<aside {...props} className={cn(className, styles.sidebar)}>
			<Logo className={styles.logo} />
			<Menu />
		</aside>
	);
};

export default Sidebar;
