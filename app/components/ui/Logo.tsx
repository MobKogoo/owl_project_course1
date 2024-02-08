import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logo from '../../assets/img/logo.svg';

const Logo: FC<{className?: string}> = ({className}) => {
	return (
		<Link href="/">
			<a className={className}>
				<Image src={logo} alt="Logo" />
			</a>
		</Link>
	);
};

export default Logo;
