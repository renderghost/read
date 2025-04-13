import React from 'react';
import Image from 'next/image';
import { books } from '@/constants/books';

const Header: React.FC = () => {
	return (
		<header>
			<div className='bg-bones-linen dark:bg-bones-black w-full grid p-8 xl:p-16 gap-8 grid-cols-1 lg:grid-cols-12'>
				<div className='flex flex-col justify-between col-span-full lg:col-span-5'>
					<p className='italic font-black text-bones-black dark:text-bones-linen text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-tight py-8'>
						21 books to reshape how you think about design.
					</p>
					<div className='flex flex-col gap-2'>
						<p className='font-black text-bones-black dark:text-bones-linen text-xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-2xl leading-tight'>
							Selection by{' '}
							<a
								href='https://links.renderg.host'
								target='_blank'
								rel='noopener noreferrer'
								className='text-bones-blue dark:text-bones-gold hover:underline'>
								Barry Prendergast
							</a>
						</p>
					</div>
				</div>
				{/* GRID */}
				<div className='flex flex-col justify-between col-span-full lg:col-span-7'>
					<div
						className='
							grid
							w-full
							gap-1
							grid-cols-11
							lg:grid-cols-7
							aspect-auto
						'>
						{books.map((book, index) => (
							<div
								key={`${book.title}-${index}`}
								className='relative aspect-[33/50] w-full overflow-hidden rounded-sm'>
								<Image
									src={book.coverImage}
									alt={`Cover of ${book.title}`}
									fill
									className='object-cover w-full h-full md:border md:border-black/10 md:dark:border-white/10'
								/>
							</div>
						))}
					</div>
				</div>
				{/* END OF GRID */}
			</div>
		</header>
	);
};

export default Header;
