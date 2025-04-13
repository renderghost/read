import React from 'react';
import Image from 'next/image';
import { Book } from '@/types/Book';

interface BookCardProps {
	book: Book;
	previousBook?: Book;
	nextBook?: Book;
	onPrevious?: () => void;
	onNext?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
	book,
	previousBook,
	nextBook,
	onPrevious,
	onNext,
}) => {
	const links = [
		{ label: 'GoodReads', url: book.link?.goodreads },
		{ label: 'Wikipedia', url: book.link?.wikipedia },
		{ label: 'Amazon', url: book.link?.amazon },
		{ label: 'Official Site', url: book.link?.home },
	].filter(link => link.url && link.url !== '#');

	return (
		<div className='min-h-screen bg-bones-white dark:bg-bones-dimgray flex flex-col'>
			{/* Main Content */}
			<div className='grid grid-cols-1 lg:grid-cols-12 w-full gap-16 p-16 flex-grow'>
				{/* LEFT COLUMN: Book Cover and Meta */}
				<div className='col-span-12 lg:col-span-3 flex flex-col gap-8'>
					{/* Book Cover */}
					<div className='w-full max-w-xs aspect-[2/3] relative p-1 ring-1 ring-bones-black dark:ring-bones-linen'>
						<Image
							src={book.coverImage}
							alt={`Cover of ${book.title}`}
							fill
							className='object-cover p-2 rounded'
							sizes='(max-width: 768px) 100vw, 320px'
							priority
						/>
					</div>
					{/* Title, Authors, Blurb & Links */}
					<div className='flex flex-col gap-4'>
						<h2 className='text-2xl font-black text-bones-black dark:text-bones-linen'>
							{book.title}
						</h2>
						<p className='flex flex-wrap font-medium text-bones-black dark:text-bones-linen'>
							by{' '}
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
						</p>
						{book.metadata.blurb && (
							<p className='text-base font-medium text-bones-black dark:text-bones-linen'>
								{book.metadata.blurb}
							</p>
						)}
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
						<p className='text-base font-medium text-bones-darkgray dark:text-bones-linen'>
							Published by {book.metadata.publisher},{' '}
							{book.metadata.publishYear}
						</p>
					</div>
				</div>

				{/* RIGHT COLUMN: Quote and Personal Comment */}
				<div className='col-span-12 lg:col-span-9 flex flex-col gap-8'>
					<div className='flex items-center gap-2 mb-2'>
						<span className='px-2 py-1 rounded border border-bones-black dark:border-bones-linen text-bones-black dark:text-bones-linen text-sm font-medium'>
							{book.metadata.genre}
						</span>
					</div>
					{book.quote && (
						<div className='p-8 bg-[#fcf0e5]'>
							<blockquote className='text-4xl xl:text-5xl font-semibold italic text-bones-black dark:text-bones-linen'>
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
			</div>

			{/* Fixed Bottom Navigation */}

			<div className='max-w-screen-xl mx-auto flex justify-between'>
				<button
					onClick={onPrevious}
					disabled={!previousBook}
					aria-disabled={!previousBook}
					className={`flex flex-col justify-center items-start p-4 rounded bg-white border border-bones-black dark:border-bones-linen ${
						!previousBook
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-gray-100'
					}`}>
					<span className='text-base font-medium text-bones-black dark:text-bones-linen'>
						PREVIOUS
					</span>
					<span className='text-2xl font-black text-bones-blue dark:text-bones-gold'>
						{previousBook?.title || ''}
					</span>
				</button>
				<button
					onClick={onNext}
					disabled={!nextBook}
					aria-disabled={!nextBook}
					className={`flex flex-col justify-center items-end p-4 rounded bg-white border border-bones-black dark:border-bones-linen ${
						!nextBook
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-gray-100'
					}`}>
					<span className='text-base font-medium text-bones-black dark:text-bones-linen'>
						NEXT
					</span>
					<span className='text-2xl font-black text-bones-blue dark:text-bones-gold'>
						{nextBook?.title || ''}
					</span>
				</button>
			</div>
		</div>
	);
};

export default BookCard;
