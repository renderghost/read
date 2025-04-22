export interface Book {
	title: string;
	slug: string;
	authors: {
		name: string;
		link?: string;
	}[];
	coverImage: string;
	metadata: {
		shortname: string;
		blurb?: string;
		genre: string;
		pageCount?: number;
		publisher?: string;
		publishYear: number;
	};
	// Optional external links
	link: {
		amazon?: string;
		goodreads?: string;
		home?: string;
		wikipedia?: string;
	};
	quote?: {
		attribute?: string;
		text?: string;
	};
	personalComment: string;
}
