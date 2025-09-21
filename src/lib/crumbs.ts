export const getBreadcrumbs = (currentPageTitle: string, externalLink: { label: string, url: string }[] = []) => {
	const BASE_CRUMBS = [
		{
			internal: {
				slug: {
					current: 'index',
					_type: 'slug',
				},
			},
			label: 'Главная',
			type:
				'internal',
			_key:
				'692634eb5e13',
			_type:
				'link',
		},
	];
	const externalLinkCrumb = externalLink.map((link) => {
		return {
			external: link.url,
			label: link.label,
			type: 'external',
			_key: '234234',
			_type: 'link',
		}
	});
	const crumbs = [...BASE_CRUMBS, ...externalLinkCrumb];
	const currentPage: any = {
		title: currentPageTitle,
	}

	return {
		crumbs,
		currentPage,
	}
}