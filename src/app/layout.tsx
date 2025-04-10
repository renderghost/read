import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';

// Configure DM Sans font
const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-dm-sans',
	display: 'swap',
});

// Configure DM Serif Display font
const dmSerifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-dm-serif-display',
	display: 'swap',
});

// Metadata for the site
export const metadata: Metadata = {
	title: 'read: 21 recommendations for books to read',
	description: 'A curated list of 21 books that you should read',
};

// Root layout component with TypeScript typing
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
			<body className='min-h-screen font-sans antialiased bg-bones-linen dark:bg-bones-black'>
				{children}
			</body>
		</html>
	);
}
