export interface Book {
  title: string;
  author: string;
  coverImage: string;
  wikipediaUrl: string;
  metadata: {
    publishYear: number;
    genre: string;
    pages?: number;
    publisher?: string;
  };
  personalComment: string;
}

