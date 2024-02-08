import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Image from 'next/image';
import { FC } from 'react';

import userLogo from '@/assets/img/user.svg';

import Rating from '../rating/Rating';

import styles from './Review.module.scss';
import { IReview } from './review.interface';

const Review: FC<IReview> = ({ review, className, ...rest }) => {
	return (
		<div {...rest} className={cn(styles.review, className)}>
			<div className={styles.avatar}>
				<Image src={userLogo} alt="User logo" width={30} height={30} />
			</div>
			<div>
				<span className={styles.name}>{review.name}: </span>
				<span> {review.title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(review.createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={styles.rating}>
				<Rating rating={review.rating} />
			</div>
			<div className={styles.description}>{review.description}</div>
		</div>
	);
};

export default Review;
