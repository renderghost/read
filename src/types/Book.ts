export interface Book {
	title: string;
	authors: {
		name: string;
		link?: string;
	}[];
	coverImage: string;
	metadata: {
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
