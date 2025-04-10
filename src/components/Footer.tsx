import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='py-8 border-t bg-bones-snow dark:bg-bones-dimgray border-bones-gainsboro dark:border-bones-slategray'>
			<div className='container flex items-center justify-between mx-auto'>
				<p className='text-sm text-bones-dimgray dark:text-bones-gainsboro'>
					© {new Date().getFullYear()} readerghost. All rights
					reserved.
				</p>
				<div className='flex flex-col items-center justify-center text-sm font-medium'>
					<a
						href='https://links.renderg.host'
						target='_blank'
						rel='noopener noreferrer'
						className='text-bones-blue dark:text-bones-lightsteelblue hover:text-bones-midnightblue dark:hover:text-bones-white'>
						links.renderg.host
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
