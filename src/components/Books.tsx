'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { books } from '@/constants/books';
import { Book } from '@/types/Book';
import Modal from './Modal';

const TiltWrapper: React.FC<{
	book: Book;
	index: number;
	onClick: () => void;
}> = ({ book, index, onClick }) => {
	const [rotations, setRotations] = useState({ x: 0, y: 0, z: 2 });
	const [isAnimating, setAnimating] = useState(false);
	const isAnimatingRef = useRef(false);

	useEffect(() => {
		isAnimatingRef.current = isAnimating;
	}, [isAnimating]);

	const animate = (e: React.MouseEvent<HTMLDivElement>) => {
		setAnimating(true);
		const rect = e.currentTarget.getBoundingClientRect();

		const absolute = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		};

		const percent = {
			x: Math.round((100 / rect.width) * absolute.x),
			y: Math.round((100 / rect.height) * absolute.y),
		};

		const center = {
			x: percent.x - 50,
			y: percent.y - 50,
		};

		setRotations({
			x: Math.round(center.y / 6), // vertical tilt toward pointer
			y: Math.round(center.x / -6), // horizontal tilt toward pointer
			z: 4,
		});
	};

	const stopAnimating = () => {
		setAnimating(false);

		setTimeout(() => {
			if (isAnimatingRef.current) return;
			setRotations({ x: 0, y: 0, z: 2 }); // <- default rest state
		}, 100);
	};

	return (
		<motion.div
			className='relative aspect-[33/50] w-full overflow-hidden cursor-pointer will-change-transform rounded'
			onMouseMove={animate}
			onMouseLeave={stopAnimating}
			whileHover={{ scale: 1.04, zIndex: 10 }}
			onClick={onClick}
			animate={{
				rotateX: rotations.x,
				rotateY: rotations.y,
				transformPerspective: rotations.z * 100, // <- adjust perspective multiplier
			}}
			transition={{
				type: 'spring',
				stiffness: 120, // <- higher is snappier, lower is softer
				damping: 8, // <- higher is slower to settle, lower is quicker
			}}
			style={{
				transformStyle: 'preserve-3d',
				transformOrigin: 'center',
			}}
			aria-label={`View details for ${book.title}`}>
			<Image
				src={book.coverImage}
				alt={`Cover of ${book.title}`}
				fill
				sizes='(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 14vw'
				className='object-cover w-full h-full border border-black/10 dark:border-white/10 rounded'
				priority={index < 7}
			/>

			{/* Optional glare layer — off by default */}
			<motion.div
				style={{
					display: 'block', // <- turn to 'block' to enable glare effect
					zIndex: 2,
					mixBlendMode: 'overlay',
					position: 'absolute',
					transform: 'translateZ(1px)',
					width: '100%',
					height: '100%',
					borderRadius: '0.5rem',
					transformStyle: 'preserve-3d',
				}}
			/>
		</motion.div>
	);
};

const Books: React.FC<{ className?: string }> = ({ className = '' }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const bookSlug = searchParams.get('book');
		if (bookSlug) {
			const foundBook = books.find(
				book =>
					book.slug.toLowerCase().replace(/\s+/g, '-') === bookSlug,
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
		const bookSlug = book.slug.toLowerCase().replace(/\s+/g, '-');
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
						sm:grid-cols-5
						md:grid-cols-6
						lg:grid-cols-8
						max-w-7xl
						mx-auto
					'>
					{books.map((book, index) => (
						<TiltWrapper
							key={`${book.title}-${index}`}
							book={book}
							index={index}
							onClick={() => handleBookClick(book)}
						/>
					))}
				</div>
			</div>

			<Modal
				book={selectedBook}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onBookChange={(book: Book) => {
					const bookSlug = book.title
						.toLowerCase()
						.replace(/\s+/g, '-');
					router.push(`/?book=${bookSlug}`);
					setSelectedBook(book);
				}}
			/>
		</>
	);
};

export const BooksSkeleton: React.FC<{ className?: string }> = ({
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

export default Books;
