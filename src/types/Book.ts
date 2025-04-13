export interface Book {
	title: string;
	authors: {
		name: string;
		url?: string;
	}[];
	coverImage: string;
	metadata: {
		blurb?: string;
		genre: string;
		pages?: number;
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
