import Link from 'next/link';
import { FC } from 'react';

import Card from '@/components/ui/card/Card';
import Heading from '@/components/ui/heading/Heading';

import { TypeProps } from '../../../../pages/[type]/index';
import { firstLevelMenu } from '../../../helpers/helpers';

import styles from './TypePage.module.scss';

const TypePage: FC<TypeProps> = ({ menu, firstCategory }) => {
	const firstCategoryItem = firstLevelMenu.find((m) => m.id === firstCategory);

	return (
		<div className={styles.wrapper}>
			{menu.map((item) => (
				<Card className={styles.card} key={item._id.secondCategory}>
					<Heading className={styles.title} tag="h3">
						{item._id.secondCategory}
					</Heading>
					<ul>
						{item.pages.map((page) => (
							<li className={styles.list_item} key={page._id}>
								<Link href={`/${firstCategoryItem?.route}/${page.alias}`}>
									<a>{page.category}</a>
								</Link>
							</li>
						))}
					</ul>
				</Card>
			))}
		</div>
	);
};

export default TypePage;
