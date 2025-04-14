import React from 'react';
import Image from 'next/image';
import type { Book } from '@/types/Book';

interface BookProps {
	book: Book;
}

const BookDetail: React.FC<BookProps> = ({ book }) => {
	const links = [
		{ label: 'GoodReads', url: book.link?.goodreads },
		{ label: 'Wikipedia', url: book.link?.wikipedia },
		{ label: 'Amazon', url: book.link?.amazon },
		{ label: 'Official Site', url: book.link?.home },
	].filter(link => link.url && link.url !== '#');

	return (
		<div className='w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 p-12'>
			{/* COVER COLUMN */}
			<div className='col-span-12 lg:col-span-3 flex flex-col items-start gap-4'>
				<div className='w-full relative p-1 ring-1 ring-bones-black dark:ring-bones-linen'>
					<Image
						src={book.coverImage}
						alt={`Cover of ${book.title}`}
						width={0}
						height={0}
						sizes='100vw'
						className='w-full h-auto p-2 rounded object-cover'
						priority
					/>
				</div>
				<div className='col-span-12 lg:col-span-3 flex flex-col gap-2'>
					{/* <div className='flex items-center gap-2 mb-6'>
					<span className='px-2 py-1 rounded border border-bones-black dark:border-bones-linen text-bones-black dark:text-bones-linen text-sm font-medium'>
						{book.metadata.genre}
					</span>
				</div> */}
					{/* <h2 className='text-3xl font-black text-bones-black dark:text-bones-linen'>
					{book.title}
				</h2>
				<p className='flex flex-wrap gap-1 font-medium text-bones-black dark:text-bones-linen'>
					<span>by</span>
					{'  '}
					{book.authors.map((author, index) => (
						<React.Fragment key={index}>
							{author.link ? (
								<a
									href={author.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-bones-blue dark:text-bones-gold hover:underline'>
									{author.name}
								</a>
							) : (
								<span>{author.name}</span>
							)}
							{index < book.authors.length - 1 && ', '}
						</React.Fragment>
					))}
				</p> */}
					{book.metadata.blurb && (
						<p className='text-lg font-medium text-bones-black dark:text-bones-linen'>
							{book.metadata.blurb}
						</p>
					)}
					<p className='text-base font-medium text-bones-darkgray dark:text-bones-linen'>
						Published by {book.metadata.publisher},{' '}
						{book.metadata.publishYear}
					</p>

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
				</div>
			</div>

			{/* quote + comment */}
			<div className='col-span-12 lg:col-span-8 overflow-y-auto max-h-full pr-4 flex flex-col gap-8'>
				{book.quote && (
					<div>
						<blockquote className='text-4xl font-semibold italic text-bones-black dark:text-bones-linen'>
							&quot;{book.quote.text}&quot;
						</blockquote>
						{book.quote.attribute && (
							<p className='text-2xl font-medium text-bones-black dark:text-bones-linen mt-4'>
								— {book.quote.attribute}
							</p>
						)}
					</div>
				)}
				<p className='text-2xl font-medium text-bones-black dark:text-bones-linen'>
					{book.personalComment}
				</p>
			</div>

			{/* METADATA COLUMN */}
		</div>
	);
};

export default BookDetail;
