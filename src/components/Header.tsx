'use client';

import React, { Suspense } from 'react';

// Loading fallback that maintains the same layout
const HeaderSkeleton = () => (
	<div className='bones-header-skeleton'>
		<div className='flex flex-col items-center justify-center text-center p-4 lg:p-8 lg:h-full'>
			<div className='h-14 lg:h-16 w-3/4 bg-bones-gainsboro dark:bg-bones-slategray animate-pulse rounded mb-4'></div>
			<div className='h-8 w-1/2 bg-bones-gainsboro dark:bg-bones-slategray animate-pulse rounded'></div>
		</div>
	</div>
);

const HeaderContent = () => {
	return (
		<header className='bones-header flex flex-col lg:h-full'>
			<div className='bg-bones-linen dark:bg-bones-black w-full flex flex-col items-center justify-center p-4 lg:p-8 lg:h-full'>
				{/* Header Text - Flex Column Layout */}
				<div className='flex flex-col items-start justify-center mx-auto max-w-4xl gap-4'>
					<h1 className='italic font-black text-bones-black dark:text-bones-linen text-4xl lg:text-5xl xl:text-6xl leading-tight'>
						21 books to reshape how you think about great design
					</h1>
					<p className='font-medium text-bones-black dark:text-bones-linen text-xl lg:text-2xl'>
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
