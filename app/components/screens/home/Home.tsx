import Button from 'components/ui/button/Button';
import Heading from 'components/ui/heading/Heading';
import Image from 'next/image';
import { FC } from 'react';

import Paragraph from '@/components/ui/paragraph/Paragraph';

import mainImage from '../../../assets/img/promo.png';

import styles from './Home.module.scss';
import { firstLevelMenu } from '../../../helpers/helpers';

const Home: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Heading className={styles.title} tag="h1">
					Лучший агрегатор онлайн курсов
				</Heading>
				<Paragraph size="l">
					Подборки лучших курсов и рейтинги, основанные на реальных отзывах.
				</Paragraph>
			</div>
		</div>
	);
};

export default Home;
