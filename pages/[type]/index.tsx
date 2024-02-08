import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '@/components/layout/WithLayout';
import TypePage from '@/components/screens/type-page/TypePage';

import { topApi } from '../../app/configs/api.config';
import { firstLevelMenu } from '../../app/helpers/helpers';
import { MenuItem } from '../../app/interfaces/menu.interface';

const Type: NextPage<TypeProps> = ({ menu, firstCategory }) => {
	return <TypePage menu={menu} firstCategory={firstCategory} />;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map((m) => '/' + m.route),
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	const firstCategoryItem = firstLevelMenu.find(
		(m) => m.route === params?.type
	);
	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await topApi.findTopPage(firstCategoryItem.id);

	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id,
		},
	};
};

export interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
