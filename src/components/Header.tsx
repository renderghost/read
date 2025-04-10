import React from 'react';
import Image from 'next/image';
import { books } from '@/constants/books';

const Header: React.FC = () => {
	return (
		<header>
			<div className='container flex flex-row w-full gap-16 p-16 mx-auto bg-bones-white dark:bg-bones-dimgray'>
				<div className='flex flex-col items-start justify-between w-full space-y-6 md:w-1/2'>
					<p className='text-3xl italic font-semibold text-left text-black md:text-5xl'>
						21 book reads that shape my perspectives as a designer.
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
				<div className='flex flex-wrap items-start justify-start w-full gap-2 overflow-hidden md:w-1/2'>
					{books.map((book, index) => (
						<Image
							key={`${book.title}-${index}`}
							src={book.coverImage}
							alt={`Cover of ${book.title}`}
							width={68}
							height={125}
							className='flex-grow-0 flex-shrink-0 object-cover'
						/>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
