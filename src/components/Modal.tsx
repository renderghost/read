'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book } from '@/types/Book';
import BookCard from './BookCard';

interface ModalProps {
	book: Book | null;
	onClose: () => void;
	isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ book, onClose, isOpen }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	// Handle ESC key press
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	// Focus management
	useEffect(() => {
		if (isOpen) {
			// Save the current active element to restore focus later
			const previousActiveElement = document.activeElement as HTMLElement;

			// Focus the close button when modal opens
			if (closeButtonRef.current) {
				closeButtonRef.current.focus();
			}

			// Create focus trap
			const handleFocusTrap = (event: KeyboardEvent) => {
				if (event.key === 'Tab' && modalRef.current) {
					const focusableElements = modalRef.current.querySelectorAll(
						'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
					);

					const firstElement = focusableElements[0] as HTMLElement;
					const lastElement = focusableElements[
						focusableElements.length - 1
					] as HTMLElement;

					// If shift + tab and focus is on first element, move to last element
					if (
						event.shiftKey &&
						document.activeElement === firstElement
					) {
						event.preventDefault();
						lastElement.focus();
					}
					// If tab and focus is on last element, move to first element
					else if (
						!event.shiftKey &&
						document.activeElement === lastElement
					) {
						event.preventDefault();
						firstElement.focus();
					}
				}
			};

			document.addEventListener('keydown', handleFocusTrap);

			// Restore focus when component unmounts
			return () => {
				document.removeEventListener('keydown', handleFocusTrap);
				if (previousActiveElement) {
					previousActiveElement.focus();
				}
			};
		}
	}, [isOpen]);

	// Body scroll lock
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	if (!book) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className='fixed inset-0 z-50 flex items-center justify-center bg-bones-black/80 dark:bg-bones-black/90'
					role='dialog'
					aria-modal='true'
					aria-labelledby='modal-title'
					onClick={e => {
						if (e.target === e.currentTarget) {
							onClose();
						}
					}}
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
						className='relative w-screen h-screen overflow-y-auto bg-bones-white dark:bg-bones-dimgray'
						ref={contentRef}>
						<button
							ref={closeButtonRef}
							onClick={onClose}
							className='absolute top-4 right-4 p-2 rounded-full bg-bones-linen dark:bg-bones-slategray text-bones-black dark:text-bones-linen hover:bg-bones-gainsboro dark:hover:bg-bones-black transition-colors z-10'
							aria-label='Close modal'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</button>

						<div id='modal-title' className='sr-only'>
							{book.title}
						</div>

						<div className='p-4 md:p-6'>
							<BookCard book={book} />
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
