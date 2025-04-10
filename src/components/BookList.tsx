import React from 'react';
import BookCard from './BookCard';
import { books } from '@/constants/books';

const BookList: React.FC = () => {
	return (
		<section>
			<div className='flex flex-col gap-px'>
				{books.map((book, index) => (
					<BookCard key={`${book.title}-${index}`} book={book} />
				))}
			</div>
		</section>
	);
};

export default BookList;
