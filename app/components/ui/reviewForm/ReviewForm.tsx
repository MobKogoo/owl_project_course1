import cn from 'classnames';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { topApi } from '@/configs/api.config';

import Button from '../button/Button';
import Input from '../input/Input';
import Rating from '../rating/Rating';
import TextArea from '../textarea/TextArea';

import CloseIcon from './CloseIcon';
import styles from './ReviewForm.module.scss';
import { IReviewFormProps, IReviewProps } from './review-form.interface';

const ReviewForm: FC<IReviewFormProps> = ({
	productId,
	className,
	isOpened,
	...rest
}) => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<IReviewProps>({
		mode: 'onBlur',
	});

	const onSubmit = async (formData: IReviewProps) => {
		try {
			const { data } = await topApi.createReview(formData, productId);
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что то пошло не так');
			}
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div {...rest} className={cn(styles.reviewForm, className)}>
				<Input
					{...register('name', {
						required: 'Заполните имя',
					})}
					placeholder="Имя"
					aria-label="Укажите имя"
					tabIndex={isOpened ? 0 : -1}
					error={errors.name}
					aria-invalid={errors.name ? true : false}
				/>
				<Input
					{...register('title', {
						required: 'Заполните заголовок',
					})}
					className={styles.title}
					placeholder="Заголовок отзыва"
					aria-label="Укажите заголовок"
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.title ? true : false}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name="rating"
						rules={{
							required: 'Укажите оценку',
						}}
						render={({ field }) => (
							<Rating
								rating={field.value}
								isEditable
								setRating={field.onChange}
								ref={field.ref}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<TextArea
					{...register('description', {
						required: 'Заполните описание',
						minLength: {
							value: 15,
							message: 'Отзыв должен быть не менее 15 символов',
						},
					})}
					className={styles.description}
					placeholder="Текст отзыва"
					error={errors.description}
					aria-invalid={errors.description ? true : false}
					aria-label="Текст отзыва"
					tabIndex={isOpened ? 0 : -1}
				/>
				<div className={styles.submit}>
					<Button
						onClick={() => clearErrors()}
						tabIndex={isOpened ? 0 : -1}
						type="submit"
						appearance="primary"
					>
						Отправить
					</Button>
					<span className={styles.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div role="alert" className={styles.success}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо! Ваш отзыв будет опубликован после проверки</div>
					<button
						aria-label="Закрыть оповещение"
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					>
						<CloseIcon />
					</button>
				</div>
			)}
			{error && (
				<div role="alert" className={styles.error}>
					Что то пошло не так, попробуйте обновит страницу
					<button
						aria-label="Закрыть оповещение"
						className={styles.close}
						onClick={() => setError(undefined)}
					>
						<CloseIcon />
					</button>
				</div>
			)}
		</form>
	);
};

export default ReviewForm;
