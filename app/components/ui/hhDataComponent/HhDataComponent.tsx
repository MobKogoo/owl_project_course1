import { FC } from 'react';



import Card from '../card/Card';

import styles from './IHhDataComponent.module.scss';
import RateIcon from './RateIcon';
import { IHhDataComponent } from './hh-data.interface';
import { priceRu } from '../../../helpers/regexp';

const HhDataComponent: FC<IHhDataComponent> = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}) => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>

			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon filled />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={styles.rate}>
						<RateIcon filled />
						<RateIcon filled />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon filled />
						<RateIcon filled />
						<RateIcon filled />
					</div>
				</div>
			</Card>
		</div>
	);
};

export default HhDataComponent;
