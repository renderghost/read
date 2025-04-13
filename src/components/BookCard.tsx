import React from 'react';
import Image from 'next/image';
import { Book } from '@/types/Book';

interface BookCardProps {
	book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
	const links = [
		{ label: 'GoodReads', url: book.link?.goodreads },
		{ label: 'Wikipedia', url: book.link?.wikipedia },
		{ label: 'Amazon', url: book.link?.amazon },
		{ label: 'Official Site', url: book.link?.home },
	].filter(link => link.url && link.url !== '#');
	return (
		<div className='grid grid-cols-1 lg:grid-cols-12 w-full gap-16 p-8 sm:p-12 xl:p-16 bg-bones-white dark:bg-bones-dimgray'>
			{/* LEFT COLUMN: Book + Meta */}
			<div className='col-span-12 lg:col-span-3 flex flex-col gap-8'>
				{/* Book Cover */}
				<div className='w-full max-w-xs aspect-[2/3] relative p-1 ring-1 ring-bones-linen dark:ring-bones-dimgray mx-auto'>
					<Image
						src={book.coverImage}
						alt={`Cover of ${book.title}`}
						fill
						className='object-cover p-2 rounded'
						sizes='(max-width: 768px) 100vw, 320px'
						priority
					/>
				</div>

				{/* Genre */}
				<div className='flex flex-wrap gap-2'>
					<span className='px-2 py-1 rounded border border-bones-black dark:border-bones-linen text-bones-black dark:text-bones-linen text-sm font-medium'>
						{book.metadata.genre}
					</span>
				</div>

				{/* Title + Author */}
				<div className='flex flex-col gap-2'>
					<p className='text-2xl font-black text-bones-black dark:text-bones-linen'>
						{book.title}
					</p>
					<div className='flex flex-wrap gap-2 text-base font-medium text-bones-black dark:text-bones-linen'>
						<p>by</p>
						{book.authors.map((author, index) => (
							<React.Fragment key={index}>
								{author.url ? (
									<a
										href={author.url}
										target='_blank'
										rel='noopener noreferrer'
										className='text-bones-blue dark:text-bones-gold hover:underline'>
										{author.name}
									</a>
								) : (
									<p className='text-bones-blue dark:text-bones-gold'>
										{author.name}
									</p>
								)}
							</React.Fragment>
						))}
					</div>
				</div>

				{/* Blurb */}
				{book.metadata.blurb && (
					<p className='text-base font-medium text-bones-black dark:text-bones-linen'>
						{book.metadata.blurb}
					</p>
				)}

				{/* Links */}
				{links.length > 0 && (
					<div className='flex flex-wrap gap-4'>
						{links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								className='text-bones-blue dark:text-bones-gold hover:underline text-base font-medium'>
								{link.label}
							</a>
						))}
					</div>
				)}

				{/* Publisher Info */}
				<p className='text-base font-medium text-bones-black dark:text-bones-linen'>
					Published by {book.metadata.publisher},{' '}
					{book.metadata.publishYear}
				</p>
			</div>

		{/* RIGHT COLUMN: Comment and Quote */}
			<div className='col-span-12 lg:col-span-9 flex flex-col gap-8'>
				{/* Personal Comment */}
				<p className='text-3xl sm:text-4xl xl:text-5xl font-semibold italic text-bones-black dark:text-bones-linen leading-relaxed'>
					&quot;{book.personalComment}&quot;
				</p>

				{/* Book Quote */}
				{book.quote && (
					<div className='mt-8'>
						<blockquote className='text-2xl sm:text-3xl font-medium italic text-bones-black dark:text-bones-linen leading-relaxed'>
							&quot;{book.quote.text}&quot;
						</blockquote>
						{book.quote.attribute && (
							<p className='text-xl font-medium text-bones-black dark:text-bones-linen mt-4'>
								— {book.quote.attribute}
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default BookCard;
