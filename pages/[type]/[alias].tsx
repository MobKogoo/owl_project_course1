import axios from 'axios';
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '@/components/layout/WithLayout';
import Error404 from '@/components/screens/Error404/Error404';
import TopPageComponent from '@/components/screens/top-page/TopPage.component';

import { MenuItem } from '@/interfaces/menu.interface';
import { ProductModel } from '@/interfaces/product.interface';

import { topApi } from '../../app/configs/api.config';
import { firstLevelMenu } from '../../app/helpers/helpers';
import {
	TopLevelCategory,
	TopPageModel,
} from '../../app/interfaces/top-page.interface';

const TopPage: NextPage<TopPageProps> = ({ firstCategory, page, products }) => {
	if (!products || !page) {
		return <Error404 />;
	}
	return (
		<>
			<Head>
				<title>{page.metaTitle}</title>
				<meta name="description" content={page.metaDescription} />
				<meta property="og:title" content={page.metaTitle} />
				<meta property="og:description" content={page.metaDescription} />
				<meta property="og:locale" content="article" />
			</Head>
			<TopPageComponent
				firstCategory={firstCategory}
				page={page}
				products={products}
			/>
		</>
	);
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	for (const m of firstLevelMenu) {
		const { data: menu } = await topApi.findTopPage(m.id);
		paths = paths.concat(
			menu.flatMap((item: any) =>
				item.pages.map((page: any) => `/${m.route}/${page.alias}`)
			)
		);
	}
	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}
	const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await topApi.findTopPage(firstCategoryItem.id);
		if (!menu.length) {
			return {
				notFound: true,
			};
		}
		const { data: page } = await topApi.byAlias(params.alias);
		const { data: products } = await topApi.findProduct(page.category, 10);

		return {
			props: {
				menu,
				products,
				page,
				firstCategory: firstCategoryItem.id,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
