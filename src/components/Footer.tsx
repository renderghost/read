import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='h-16 md:h-20 py-4 md:py-6 border-t bg-bones-linen dark:bg-bones-dimgray border-bones-gainsboro dark:border-bones-slategray'>
			<div className='grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-4 h-full mx-auto px-4 md:px-8 max-w-7xl'>
				<div className='col-span-1 sm:col-span-3 md:col-span-6 flex items-center'>
					<p className='text-sm text-bones-dimgray dark:text-bones-gainsboro'>
						© {new Date().getFullYear()} read. All rights reserved.
					</p>
				</div>
				<div className='col-span-1 sm:col-span-3 md:col-span-6 flex items-center justify-end'>
					<a
						href='https://links.renderg.host'
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm font-medium text-bones-blue dark:text-bones-lightsteelblue hover:text-bones-midnightblue dark:hover:text-bones-white'>
						links.renderg.host
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
