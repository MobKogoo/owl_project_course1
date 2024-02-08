import cn from 'classnames';
import { format } from 'date-fns';
import { FC } from 'react';

import styles from './Footer.module.scss';
import { IFooter } from './footer.interface';

const Footer: FC<IFooter> = ({ className, ...props }): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href="#" target='_blank'>Пользовательское соглашение</a>
			<a href="#" target='_blank'>Политика конфиденциальности</a>
		</footer>
	);
};

export default Footer;
