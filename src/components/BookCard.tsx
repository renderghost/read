import React from 'react';
import Image from 'next/image';
import { Book } from '@/types/Book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-bones-white border border-bones-gainsboro rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image 
          src={book.coverImage} 
          alt={`Cover of ${book.title} by ${book.author}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-serif text-bones-black mb-1 line-clamp-2">
          {book.title}
        </h2>
        
        <p className="text-sm text-bones-dimgray mb-3">
          by {book.author}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-bones-aliceblue text-bones-midnightblue px-2 py-1 rounded-full">
            {book.metadata.genre}
          </span>
          <span className="text-xs bg-bones-aliceblue text-bones-midnightblue px-2 py-1 rounded-full">
            {book.metadata.publishYear}
          </span>
          {book.metadata.pages && (
            <span className="text-xs bg-bones-aliceblue text-bones-midnightblue px-2 py-1 rounded-full">
              {book.metadata.pages} pages
            </span>
          )}
        </div>
        
        <p className="text-sm text-bones-gray mb-4 line-clamp-3">
          "{book.personalComment}"
        </p>
        
        <a 
          href={book.wikipediaUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-sm text-bones-blue hover:text-bones-midnightblue transition-colors duration-200 underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default BookCard;

