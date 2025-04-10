import React from 'react';
import Image from 'next/image';
import { books } from '@/constants/books';

const Header: React.FC = () => {
	return (
		<header>
			<div className='flex flex-row w-full gap-32 px-16 py-48 bg-bones-linen dark:bg-bones-black'>
				<div className='flex flex-col items-start justify-between w-full space-y-6 md:w-1/2'>
					<p className='italic font-black text-bones-black dark:text-bones-linen text-6xl'>
						21 books to re-shape how you think about design.
					</p>
					<div className='flex flex-col gap-2'>
						<p className='text-3xl font-black text-left text-bones-black dark:text-bones-linen'>
							by Barry Prendergast
						</p>
						<a
							href='https://links.renderg.host'
							target='_blank'
							rel='noopener noreferrer'
							className='font-semibold text-lg text-bones-blue dark:text-bones-gold hover:underline'>
							links.renderg.host
						</a>
					</div>
				</div>
				<div className='grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 w-fit'>
					{books.map((book, index) => (
						<div
							key={`${book.title}-${index}`}
							className='w-[68px] h-[100px] overflow-hidden rounded-sm'>
							<Image
								src={book.coverImage}
								alt={`Cover of ${book.title}`}
								width={68}
								height={100}
								className='object-cover w-full h-full border border-black/10'
							/>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
