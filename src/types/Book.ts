export interface Book {
	title: string;
	authors: {
		name: string;
		url?: string;
	}[];
	coverImage: string;
	metadata: {
		publishYear: number;
		genre: string;
		pages?: number;
		publisher?: string;
	};
	personalComment: string;
	// Optional external links
	wikipediaUrl?: string;
	goodreadsUrl?: string;
	amazonUrl?: string;
	homeUrl?: string;
}
