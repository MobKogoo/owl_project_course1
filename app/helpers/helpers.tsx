import { TopLevelCategory } from 'interfaces/top-page.interface';

import MenuIcon from '../components/layout/menu/MenuIcon';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <MenuIcon name="courses" />,
		id: TopLevelCategory.Courses,
	},
	// {
	// 	route: 'services',
	// 	name: 'Сервисы',
	// 	icon: <MenuIcon name="services" />,
	// 	id: TopLevelCategory.Services,
	// },
	// {
	// 	route: 'books',
	// 	name: 'Книги',
	// 	icon: <MenuIcon name="books" />,
	// 	id: TopLevelCategory.Books,
	// },
	// {
	// 	route: 'products',
	// 	name: 'Товары',
	// 	icon: <MenuIcon name="products" />,
	// 	id: TopLevelCategory.Products,
	// },
];
