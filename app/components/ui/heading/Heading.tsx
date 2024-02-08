import { FC } from 'react';

import styles from './Heading.module.scss';
import { IHeading } from './heading.interface';
import cn from 'classnames';

const Heading: FC<IHeading> = ({ tag, children, className, ...rest }): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 {...rest} className={cn(styles.h1, className)}>{children}</h1>;
		case 'h2':
			return <h2 {...rest} className={cn(styles.h2, className)}>{children}</h2>;
		case 'h3':
			return <h3 {...rest} className={cn(styles.h3, className)}>{children}</h3>;
		default:
			return <></>;
	}
};

export default Heading;
