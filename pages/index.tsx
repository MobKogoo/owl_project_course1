import type { GetStaticProps, NextPage } from 'next';

import { withLayout } from '@/components/layout/WithLayout';
import Home from '@/components/screens/home/Home';


const HomePage: NextPage = () => {
	return <Home />;
};

export default withLayout(HomePage);
