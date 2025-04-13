'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { books } from '@/constants/books';
import { Book } from '@/types/Book';
import Modal from './Modal';

interface BookGridProps {
	className?: string;
}

const BookGrid: React.FC<BookGridProps> = ({ className = '' }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// URL state management
	useEffect(() => {
		const bookSlug = searchParams.get('book');

		if (bookSlug) {
			const foundBook = books.find(
				book =>
					book.title.toLowerCase().replace(/\s+/g, '-') === bookSlug,
			);

			if (foundBook) {
				setSelectedBook(foundBook);
				setIsModalOpen(true);
			}
		} else {
			setIsModalOpen(false);
		}
	}, [searchParams]);

	const handleBookClick = (book: Book) => {
		const bookSlug = book.title.toLowerCase().replace(/\s+/g, '-');
		router.push(`/?book=${bookSlug}`);
		setSelectedBook(book);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		router.push('/');
		setIsModalOpen(false);
	};

	return (
		<>
			<div className={`bones-book-grid w-full ${className}`}>
				<div
					className='
            grid
            w-full
            gap-1
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-7
            max-w-7xl
            mx-auto
          '>
					{books.map((book, index) => (
						<motion.div
							key={`${book.title}-${index}`}
							className='bones-book-card relative aspect-[33/50] w-full overflow-hidden rounded-md cursor-pointer'
							whileHover={{
								scale: 1.05,
								y: -8,
								transition: {
									type: 'spring',
									stiffness: 300,
									damping: 10,
								},
							}}
							whileTap={{ scale: 0.98 }}
							onClick={() => handleBookClick(book)}
							aria-label={`View details for ${book.title}`}>
							<Image
								src={book.coverImage}
								alt={`Cover of ${book.title}`}
								fill
								sizes='(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 14vw'
								className='object-cover w-full h-full border border-black/10 dark:border-white/10 shadow-md'
								priority={index < 7} // Load the first 7 images with priority
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Book Modal */}
			<Modal
				book={selectedBook}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</>
	);
};

// Loading skeleton for the BookGrid component
export const BookGridSkeleton: React.FC<{ className?: string }> = ({
	className = '',
}) => (
	<div className={`bones-book-grid-skeleton flex-grow ${className}`}>
		<div className='grid w-full gap-2 md:gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 max-w-7xl mx-auto'>
			{Array(21)
				.fill(0)
				.map((_, index) => (
					<div
						key={index}
						className='bones-book-card-skeleton relative aspect-[33/50] w-full overflow-hidden rounded-md bg-bones-gainsboro dark:bg-bones-slategray animate-pulse'></div>
				))}
		</div>
	</div>
);

export default BookGrid;
