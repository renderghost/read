import React from 'react';
import Image from 'next/image';
import { books } from '@/constants/books';

const Header: React.FC = () => {
	return (
		<header>
			<div className='flex flex-row w-full gap-32 px-16 py-48 bg-bones-snow dark:bg-bones-dimgray'>
				<div className='flex flex-col items-start justify-between w-full space-y-6 md:w-1/2'>
					<p className='italic font-bold text-black text-7xl'>
						21 books that shaped how I think about design.
					</p>
					<div className='space-y-2'>
						<p className='text-2xl font-black text-left text-black'>
							by Barry Prendergast
						</p>
						<a
							href='https://links.renderg.host'
							target='_blank'
							rel='noopener noreferrer'
							className='text-base font-medium text-blue-600 hover:underline'>
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
								className='object-cover w-full h-full'
							/>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
