import cn from 'classnames';
import { FC, ForwardedRef, forwardRef } from 'react';

import styles from './TextArea.module.scss';
import { ITextArea } from './textarea.interface';

const TextArea: FC<ITextArea> = forwardRef(
	(
		{ className, placeholder, error, ...rest },
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					ref={ref}
					placeholder={placeholder}
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

TextArea.displayName = 'TextArea';

export default TextArea;
