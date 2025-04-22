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
		<div className='container mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 py-12'>
			{/* COLUMN -- 1 */}
			<div className='col-span-12  lg:col-span-2 flex flex-col items-start gap-4'>
				<Image
					src={book.coverImage}
					alt={`Cover of ${book.title}`}
					width={0}
					height={0}
					sizes='100vw'
					className='w-full h-auto object-cover border border-bones-black/10'
					priority
				/>
				<p className='font-medium text-bones-dimgray dark:text-bones-linen'>
					{book.metadata.publisher}, {book.metadata.publishYear}
				</p>
			</div>

			{/* COLUMN -- 2 */}
			<div className='col-span-12 lg:col-span-6 overflow-y-auto flex flex-col gap-4 text-xl'>
				<div className='flex flex-wrap gap-2'>
					<span className='px-2 py-1 bg-bones-linen text-bones-black dark:bg-bones-dimgray dark:text-bones-linen font-medium'>
						{book.metadata.genre}
					</span>
				</div>

				{book.metadata.blurb && (
					<p className='italic font-medium text-bones-black dark:text-bones-linen'>
						&quot;{book.metadata.blurb}&quot;
					</p>
				)}

				<p className='font-medium text-bones-black dark:text-bones-linen'>
					{book.personalComment}
				</p>

				{links.length > 0 && (
					<div className='flex flex-wrap gap-4'>
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
				)}
			</div>

			{/* COLUMN -- 3 */}
			<div className='col-span-12 lg:col-span-4 overflow-y-auto max-h-full flex flex-col gap-8'>
				{book.quote && (
					<div>
						<blockquote className='text-3xl leading-tight font-semibold italic text-bones-black dark:text-bones-linen'>
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

export default BookDetail;
