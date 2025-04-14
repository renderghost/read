import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Books, { BooksSkeleton } from '@/components/Books';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			{/* Content section - grows to fill available space */}
			<div className='flex-grow grid grid-cols-1 lg:grid-cols-12 w-full h-full'>
				{/* Header - full width on mobile, 4 columns on md+ screens */}
				<Header />

				{/* Main content with Books - full width on mobile, 8 columns on lg+ screens */}
				<main className='bones-page-main col-span-full lg:col-span-8 min-h-[60vh] p-4 lg:p-8 bg-bones-linen dark:bg-bones-darkgray flex'>
					<div className='flex flex-col justify-center flex-grow'>
						<Suspense
							fallback={<BooksSkeleton className='h-full' />}>
							<Books className='h-auto' />
						</Suspense>
					</div>
				</main>
			</div>

			{/* Footer section - fixed height */}
			<Footer />
		</>
	);
}
