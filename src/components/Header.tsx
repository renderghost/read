'use client';

import React, { Suspense } from 'react';

// Loading fallback that maintains the same layout
const HeaderSkeleton = () => (
	<div className='bones-header-skeleton'>
		<div className='flex flex-col items-center justify-center text-center p-4 lg:p-8 lg:h-full'>
			<div className='h-14 lg:h-16 w-3/4 bg-bones-gainsboro dark:bg-bones-black animate-pulse rounded mb-4'></div>
			<div className='h-8 w-1/2 bg-bones-gainsboro dark:bg-bones-black animate-pulse rounded'></div>
		</div>
	</div>
);

const HeaderContent = () => {
	return (
		<header className='col-span-full lg:col-span-4 h-full flex flex-col lg:h-full'>
			<div className='bg-bones-linen dark:bg-bones-black w-full flex flex-col items-start justify-center p-4 lg:p-8 lg:h-full mx-auto max-w-4xl gap-4 lg:gap-6'>
				<h1 className='italic font-black text-bones-black dark:text-bones-linen text-4xl lg:text-5xl xl:text-6xl '>
					24 books to reshape how you think about great design
				</h1>
				<p className='font-medium text-bones-black dark:text-bones-linen text-xl lg:text-2xl'>
					A selection by{' '}
					<a
						href='https://links.renderg.host'
						target='_blank'
						rel='noopener noreferrer'
						className='text-bones-blue dark:text-bones-gold hover:underline'>
						Barry Prendergast
					</a>
				</p>
			</div>
		</header>
	);
};

const Header: React.FC = () => {
	return (
		<Suspense fallback={<HeaderSkeleton />}>
			<HeaderContent />
		</Suspense>
	);
};

export default Header;
