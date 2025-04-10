import React from 'react';
import Image from 'next/image';
import { Book } from '@/types/Book';

interface BookCardProps {
	book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
	const links = [
		{ label: 'GoodReads', url: book.goodreadsUrl },
		{ label: 'Wikipedia', url: book.wikipediaUrl },
		{ label: 'Amazon', url: book.amazonUrl },
		{ label: 'Official Site', url: book.homeUrl },
	].filter(link => link.url && link.url !== '#');

	return (
		<div className='flex flex-col items-start justify-start w-full gap-16 p-16 md:flex-row bg-bones-white dark:bg-bones-dimgray'>
			{/* ——— */}
			{/* Image */}
			<div className='flex-shrink-0 w-full md:w-80 h-[500px] rounded relative p-1 ring-1 ring-bones-gainsboro dark:ring-bones-dimgray'>
				<Image
					src={book.coverImage}
					alt={`Cover of ${book.title}`}
					fill
					className='object-cover p-2 rounded dark:brightness-90'
					sizes='(max-width: 768px) 100vw, 320px'
					priority
				/>
			</div>
			{/* Content */}
			<div className='flex flex-col items-start self-stretch justify-between flex-1'>
				<div className='py-8'>
					<blockquote className='font-bold text-left text-8xl text-bones-black dark:text-bones-whitesmoke md:text-5xl'>
						{book.personalComment}
					</blockquote>
				</div>

				<div className='flex flex-col gap-4'>
					<p className='text-2xl font-black text-left text-bones-black dark:text-bones-whitesmoke'>
						{book.title}
					</p>

					<div className='flex flex-wrap gap-2 text-base font-medium text-bones-black dark:text-bones-whitesmoke'>
						<p>by</p>
						{book.authors.map((author, index) => (
							<a
								key={index}
								href={author.url || '#'}
								className='text-bones-blue dark:text-bones-lightsteelblue hover:underline'
								target='_blank'
								rel='noopener noreferrer'>
								{author.name}
							</a>
						))}
					</div>

					<div className='flex flex-wrap gap-2'>
						<span className='px-2 py-1 border rounded border-bones-black dark:border-bones-gainsboro'>
							{book.metadata.genre}
						</span>
						<span className='px-2 py-1 border rounded border-bones-black dark:border-bones-gainsboro'>
							{book.metadata.publishYear}
						</span>
						{book.metadata.pages && (
							<span className='px-2 py-1 border rounded border-bones-black dark:border-bones-gainsboro'>
								{book.metadata.pages} pages
							</span>
						)}
					</div>

					<div className='flex flex-wrap gap-4 font-medium text-bones-blue dark:text-bones-lightsteelblue'>
						{links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline hover:text-bones-midnightblue dark:hover:text-bones-white'>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
