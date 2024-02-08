import cn from 'classnames';
import { FC } from 'react';

import styles from './Paragraph.module.scss';
import { IParagraph } from './paragraph.interface';

const Paragraph: FC<IParagraph> = ({ children, size, ...rest }) => {
	return (
		<p
			className={cn(styles.p, {
				[styles.small]: size === 's',
				[styles.medium]: size === 'm',
				[styles.large]: size === 'l',
			})}
			{...rest}
		>
			{children}
		</p>
	);
};

export default Paragraph;
