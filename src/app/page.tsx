import React, { Suspense } from 'react';
import Header from '@/components/Header';
import BookGrid, { BookGridSkeleton } from '@/components/BookGrid';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			{/* Content section - grows to fill available space */}
			<div className='flex-grow grid grid-cols-1 lg:grid-cols-12 w-full h-full'>
				{/* Header - full width on mobile, 4 columns on md+ screens */}
				<header className='bones-page-header col-span-full lg:col-span-4 h-full'>
					<Header />
				</header>

				{/* Main content with BookGrid - full width on mobile, 8 columns on lg+ screens */}
				<main className='bones-page-main col-span-full lg:col-span-8 h-full p-4 lg:p-8 bg-bones-white dark:bg-bones-darkgray'>
					<Suspense
						fallback={<BookGridSkeleton className='h-full' />}>
						<BookGrid className='h-full' />
					</Suspense>
				</main>
			</div>

			{/* Footer section - fixed height */}
			<Footer />
		</>
	);
}
