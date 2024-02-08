import cn from 'classnames';
import { FC, ForwardedRef, forwardRef } from 'react';

import styles from './Input.module.scss';
import { IInput } from './input.interface';

const Input: FC<IInput> = forwardRef(
	(
		{ className, type = 'text', error, placeholder, ...rest },
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={cn(styles.inputWrapper, className)}>
				<input
					ref={ref}
					placeholder={placeholder}
					type={type}
					className={cn(styles.common, {
						[styles.error]: error,
					})}
					{...rest}
				/>
				{error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);

Input.displayName = 'Input';

export default Input;
