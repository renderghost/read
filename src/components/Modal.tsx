'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book } from '@/types/Book';
import BookDetail from './BookDetail';
import { books } from '@/constants/books';
import { X } from 'lucide-react';
import Head from 'next/head';

interface ModalProps {
	book: Book | null;
	onClose: () => void;
	isOpen: boolean;
	onBookChange?: (book: Book) => void;
}

const Modal: React.FC<ModalProps> = ({
	book,
	onClose,
	isOpen,
	onBookChange,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const currentIndex = book
		? books.findIndex(b => b.title === book.title)
		: -1;
	const previousBook = currentIndex > 0 ? books[currentIndex - 1] : undefined;
	const nextBook =
		currentIndex < books.length - 1 ? books[currentIndex + 1] : undefined;

	const handlePrevious = () => {
		if (previousBook && onBookChange) onBookChange(previousBook);
	};

	const handleNext = () => {
		if (nextBook && onBookChange) onBookChange(nextBook);
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) onClose();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose]);

	useEffect(() => {
		if (isOpen) {
			const previousActiveElement = document.activeElement as HTMLElement;
			if (closeButtonRef.current) closeButtonRef.current.focus();

			const handleFocusTrap = (event: KeyboardEvent) => {
				if (event.key === 'Tab' && modalRef.current) {
					const focusable = modalRef.current.querySelectorAll(
						'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
					);
					const first = focusable[0] as HTMLElement;
					const last = focusable[focusable.length - 1] as HTMLElement;
					if (event.shiftKey && document.activeElement === first) {
						event.preventDefault();
						last.focus();
					} else if (
						!event.shiftKey &&
						document.activeElement === last
					) {
						event.preventDefault();
						first.focus();
					}
				}
			};

			document.addEventListener('keydown', handleFocusTrap);
			return () => {
				document.removeEventListener('keydown', handleFocusTrap);
				if (previousActiveElement) previousActiveElement.focus();
			};
		}
	}, [isOpen]);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	if (!book) return null;
	const siteUrl = 'https://read.renderg.host';
	const pageUrl = `${siteUrl}/?book=${encodeURIComponent(book.slug)}`;
	const imageUrl = book.coverImage.startsWith('http')
		? book.coverImage
		: `${siteUrl}${book.coverImage}`;
	const authors = book.authors.map(a => a.name).join(', ');

	return (
		<>
			{book && (
				<Head>
					<title>{`${book.title} by ${authors} | Read`}</title>
					<meta name='description' content={book.metadata.blurb} />
					<link rel='canonical' href={pageUrl} />

					{/* Open Graph */}
					<meta property='og:type' content='book' />
					<meta property='og:url' content={pageUrl} />
					<meta
						property='og:title'
						content={`${book.title} by ${authors}`}
					/>
					<meta
						property='og:description'
						content={book.metadata.blurb}
					/>
					<meta property='og:image' content={imageUrl} />
					<meta property='og:site_name' content='Read' />

					{/* Twitter Card */}
					<meta name='twitter:card' content='summary_large_image' />
					<meta
						name='twitter:title'
						content={`${book.title} by ${authors}`}
					/>
					<meta
						name='twitter:description'
						content={book.metadata.blurb}
					/>
					<meta name='twitter:image' content={imageUrl} />
				</Head>
			)}
			<AnimatePresence>
				{isOpen && book && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 z-50 flex items-center justify-center bg-bones-black/80 dark:bg-bones-black/90'
						role='dialog'
						aria-modal='true'
						aria-labelledby='modal-title'
						onClick={e => e.target === e.currentTarget && onClose()}
						ref={modalRef}>
						<motion.div
							initial={{ scale: 0.9, y: 20 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.9, y: 20 }}
							transition={{
								duration: 0.3,
								type: 'spring',
								stiffness: 200,
								damping: 25,
							}}
							className='grid grid-rows-[auto_1fr_auto] w-screen h-screen bg-bones-white dark:bg-bones-black overflow-hidden'
							ref={contentRef}>
							{/* Header */}
							<div className='flex justify-between items-center px-12 py-8 gap-4 border-b border-bones-whitesmoke dark:border-bones-dimgray'>
								<div className='flex items-center '>
									<h2
										id='modal-title'
										className='text-2xl font-black text-bones-black dark:text-bones-linen'>
										{book.title} by{' '}
										{book.authors.map((author, index) => (
											<React.Fragment
												key={`${book.slug}-${author.name}`}>
												{author.link ? (
													<a
														href={author.link}
														target='_blank'
														rel='noopener noreferrer'
														className='text-bones-blue dark:text-bones-gold hover:underline'>
														{author.name}
													</a>
												) : (
													<span>{author.name}</span>
												)}
												{index <
													book.authors.length - 1 &&
													', '}
											</React.Fragment>
										))}
									</h2>
								</div>

								<button
									ref={closeButtonRef}
									onClick={onClose}
									className='p-2 rounded-full bg-bones-transparent dark:bg-bones-black hover:bg-bones-aliceblue dark:hover:bg-bones-black text-bones-black hover:text-bones-blue dark:hover:text-bones-gold dark:text-bones-linen  transition-colors'>
									<X className='w-5 h-5' />
								</button>
							</div>

							{/* Content */}
							<div className='lg:overflow-y-clip'>
								<BookDetail book={book} />
							</div>

							{/* Pager */}
							<div className='flex justify-between gap-0 border-t border-bones-whitesmoke dark:border-bones-dimgray'>
								<button
									onClick={handlePrevious}
									disabled={!previousBook}
									aria-disabled={!previousBook}
									className='
      flex flex-col flex-grow w-full items-start
      px-12 py-8 gap-1
      bg-bones-white dark:bg-bones-black
      text-bones-black dark:text-bones-linen
      hover:bg-bones-aliceblue dark:hover:bg-bones-black
      hover:text-bones-blue dark:hover:text-bones-gold
      disabled:bg-bones-whitesmoke dark:disabled:bg-bones-black
      disabled:text-bones-gray
      disabled:cursor-not-allowed
      transition-colors
    '>
									<span className='text-xl font-black'>
										{previousBook?.metadata.shortname ??
											'Start'}
									</span>
									<span className='font-medium'>PREV</span>
								</button>

								<button
									onClick={handleNext}
									disabled={!nextBook}
									aria-disabled={!nextBook}
									className='
      flex flex-col flex-grow w-full items-end
      px-12 py-8 gap-1
      bg-bones-white dark:bg-bones-black
      text-bones-black dark:text-bones-linen
      hover:bg-bones-aliceblue dark:hover:bg-bones-black
      hover:text-bones-blue dark:hover:text-bones-gold
      disabled:bg-bones-whitesmoke dark:disabled:bg-bones-darkgray
      disabled:text-bones-gray
      disabled:cursor-not-allowed
      transition-colors
    '>
									<span className='text-xl font-black'>
										{nextBook?.metadata.shortname ?? 'End'}
									</span>
									<span className='font-medium'>NEXT</span>
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;
