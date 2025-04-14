import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='flex justify-between items-center px-12 py-8 gap-4 border-t bg-bones-linen dark:bg-bones-dimgray border-bones-gainsboro dark:border-bones-slategray'>
			<div className='col-span-1 sm:col-span-3 md:col-span-6 flex items-center'>
				<p className='text-sm text-bones-dimgray dark:text-bones-gainsboro'>
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
					className='font-medium text-bones-blue dark:text-bones-yellow hover:underline'>
					links.renderg.host
				</a>
			</div>
		</footer>
	);
};

export default Footer;
