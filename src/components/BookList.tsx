import React from 'react';
import BookCard from './BookCard';
import { books } from '@/constants/books';

const BookList: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-bones-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <BookCard 
              key={`${book.title}-${index}`} 
              book={book} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;

