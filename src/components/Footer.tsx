import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='flex justify-between items-center px-8 py-6 gap-4 border-t bg-bones-linen dark:bg-bones-black border-bones-gainsboro dark:border-bones-black'>
			<div className='col-span-1 sm:col-span-3 md:col-span-6 flex items-center'>
				<p className='text-sm text-bones-black dark:text-bones-gainsboro'>
					<span>&copy; {new Date().getFullYear()}</span>{' '}
					<span className='font-semibold'>Read</span>{' '}
					<span>All rights reserved.</span>{' '}
				</p>
			</div>
			<div className='col-span-1 sm:col-span-3 md:col-span-6 flex items-center justify-end'>
				<a
					href='https://links.renderg.host'
					target='_blank'
					rel='noopener noreferrer'
					className='font-medium text-bones-blue dark:text-bones-gold hover:underline'>
					links.renderg.host
				</a>
			</div>
		</footer>
	);
};

export default Footer;
