import cn from 'classnames';
import { FC } from 'react';

import styles from './Sort.module.scss';
import SortIcon from './SortIcon';
import { ISort, SortEnum } from './sort.interface';

const Sort: FC<ISort> = ({ setSort, sort, className, ...rest }) => {
	const handleSort = (sort: SortEnum) => {
		setSort(sort);
	};

	return (
		<div {...rest} className={cn(styles.sort, className)}>
			<div className={styles.sortName} id="sort">
				Сортировка
			</div>
			<button
				id="rating"
				aria-labelledby="sort rating"
				aria-label='По рейтингу'
				aria-selected={sort === SortEnum.Rating}
				onClick={() => handleSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort === SortEnum.Rating,
				})}
			>
				<SortIcon />
				По рейтингу
			</button>
			<button
				id="price"
				aria-labelledby="sort price"
				aria-label='По цене'
				aria-selected={sort === SortEnum.Price}
				onClick={() => handleSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort === SortEnum.Price,
				})}
			>
				<SortIcon />
				По цене
			</button>
		</div>
	);
};

export default Sort;
