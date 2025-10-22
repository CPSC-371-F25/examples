import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		page: {
			title: 'Title for a Custom URL',
            slug: params.slug,
		}
	};
};