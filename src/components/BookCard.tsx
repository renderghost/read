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
		<div className='grid grid-cols-1 lg:grid-cols-12 w-full gap-16 p-16 bg-bones-white dark:bg-bones-dimgray'>
			{/* Meta: 8 cols on large screens */}
			<div className='col-span-12 lg:col-span-8 flex flex-col gap-8 py-8'>
				{/* QUOTE */}
				<blockquote className='font-normal italic text-bones-black dark:text-bones-linen text-4xl lg:text-5xl leading-relaxed lg:leading-normal'>
					&quot;{book.personalComment}&quot;
				</blockquote>
				{/* META */}
				<div className='flex flex-col gap-1'>
					{/* TITLE */}
					<h2 className='text-3xl font-black text-bones-black dark:text-bones-linen'>
						{book.title}
					</h2>
					{/* BY LINE */}
					<div className='flex flex-wrap gap-1 text-base font-medium text-bones-black dark:text-bones-linen'>
						<p>by</p>
						{book.authors.map((author, index) => (
							<a
								key={index}
								href={author.url || '#'}
								className='text-bones-blue dark:text-bones-gold hover:underline font-semibold'
								target='_blank'
								rel='noopener noreferrer'>
								{author.name}
							</a>
						))}
					</div>
					<div className='flex flex-wrap gap-2 font-medium text-bones-black dark:text-bones-linen'>
						<p>Published by</p>
						<p>{book.metadata.publisher}</p>
						<p>in</p>
						<p>{book.metadata.publishYear}</p>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<div className='flex flex-wrap gap-2'>
						<span className='px-2 py-1 rounded bg-bones-linen dark:bg-bones-black text-bones-black dark:text-bones-linen'>
							{book.metadata.publishYear}
						</span>
						<span className='px-2 py-1 rounded bg-bones-linen dark:bg-bones-black text-bones-black dark:text-bones-linen'>
							{book.metadata.genre}
						</span>
					</div>
					<div className='flex flex-wrap gap-8'>
						<p>Available on</p>
						{links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								className='text-bones-blue dark:text-bones-gold hover:underline font-semibold'>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Book Cover: 4 cols on large screens */}
			<div className='col-span-12 lg:col-span-4 flex justify-center items-start'>
				<div className='w-full md:w-80 h-[500px] rounded relative p-1 ring-1 ring-bones-linen dark:ring-bones-dimgray'>
					<Image
						src={book.coverImage}
						alt={`Cover of ${book.title}`}
						fill
						className='object-cover p-2 rounded'
						sizes='(max-width: 768px) 100vw, 320px'
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
