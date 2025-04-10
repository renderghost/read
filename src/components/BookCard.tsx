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
			<div className='flex-shrink-0 w-full md:w-80 h-[500px] rounded relative p-1 ring-1 ring-bones-linen dark:ring-bones-dimgray'>
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
					<blockquote className='font-normal italic text-8xl text-bones-black dark:text-bones-linen md:text-5xl'>
						{book.personalComment}
					</blockquote>
				</div>

				<div className='flex flex-col gap-4 py-8'>
					<div className='flex flex-col gap-1'>
						<h2 className='text-3xl font-black text-bones-black dark:text-bones-linen'>
							{book.title}
						</h2>
						<div className='flex flex-wrap gap-2 text-base font-medium text-bones-black dark:text-bones-linen'>
							<p>by</p>
							{book.authors.map((author, index) => (
								<a
									key={index}
									href={author.url || '#'}
									className='text-bones-blue dark:text-bones-yellow hover:underline'
									target='_blank'
									rel='noopener noreferrer'>
									{author.name}
								</a>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-wrap gap-2'>
							<span className='px-2 py-1 rounded bg-bones-linen dark:bg-bones-black text-bones-black dark:text-bones-linen'>
								{book.metadata.publisher}
							</span>
							<span className='px-2 py-1 rounded bg-bones-linen dark:bg-bones-black text-bones-black dark:text-bones-linen'>
								{book.metadata.publishYear}
							</span>
							<span className='px-2 py-1 rounded bg-bones-linen dark:bg-bones-black text-bones-black dark:text-bones-linen'>
								{book.metadata.genre}
							</span>

							{/* {book.metadata.pages && (
								<span className='px-2 py-1 rounded bg-bones-linen dark:bg-bones-black text-bones-black dark:text-bones-linen'>
									{book.metadata.pages} pages
								</span>
							)} */}
						</div>
						<div className='flex flex-wrap gap-8 font-medium text-bones-blue dark:text-bones-lightsteelblue'>
							{links.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-bones-blue dark:text-bones-yellow hover:underline'>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
