import Heading from 'components/ui/heading/Heading';
import { NextPage } from 'next';

import { withLayout } from '@/components/layout/WithLayout';
import Error404 from '@/components/screens/Error404/Error404';

const Error404Page: NextPage = (props) => {
	return <Error404 />;
};

export default withLayout(Error404Page);
