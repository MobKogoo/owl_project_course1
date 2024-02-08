import cn from 'classnames';
import Button from 'components/ui/button/Button';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import Input from '@/components/ui/input/Input';

import MaterialIcon from '../MaterialIcon';

import { ISearchInput } from './SearchInput.interface';
import styles from './SearchInput.module.scss';

const SearchInput: FC<ISearchInput> = ({ className, ...rest }) => {
	const { push } = useRouter();
	const [search, setSearch] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};

	const goToSearch = () => {
		push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};
	return (
		<div className={cn(styles.search, className)} {...rest}>
			<Input
				placeholder="Поиск по сайту"
				value={search}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<Button onClick={goToSearch} className={styles.btn} appearance="primary">
				<MaterialIcon name="MdSearch" />
			</Button>
		</div>
	);
};

export default SearchInput;
