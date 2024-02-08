import { TopLevelCategory } from './top-page.interface';
export interface IMenu extends Record<string, unknown> {
  menu: MenuItem
  firstCategory: number
}

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean
	pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string
	name: string
	icon: JSX.Element
	id: TopLevelCategory
}
