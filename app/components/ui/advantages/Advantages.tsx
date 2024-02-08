import Image from 'next/image';
import { FC } from 'react';

import check from '@/assets/img/advantage.svg';

import { IAdvantages } from './Advantages.interface';
import styles from './Advantages.module.scss';

const Advantages: FC<IAdvantages> = ({ advantages }) => {
	return (
		<>
			{advantages.map((item) => (
				<div key={item._id} className={styles.advantage}>
					<Image src={check} alt={item.title} />
					<div className={styles.title}>{item.title}</div>
					<hr className={styles.vline} />
          <div className={styles.description}>{item.description}</div>
				</div>
			))}
		</>
	);
};

export default Advantages;
