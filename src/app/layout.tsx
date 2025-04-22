import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';

// Configure DM Sans font
const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
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

const siteUrl = 'https://read.renderg.host';
const siteTitle = 'Read | Book recommendations by Barry Prendergast.';
const siteDescription =
	'24 books to re-shape how you think about great design.';
const defaultImage = `${siteUrl}/og-default.jpg`; // Add this image to public/og-default.jpg

export const metadata: Metadata = {
	title: siteTitle,
	description: siteDescription,
	metadataBase: new URL(siteUrl),
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		type: 'website',
		url: siteUrl,
		title: siteTitle,
		description: siteDescription,
		images: [
			{
				url: defaultImage,
				width: 1200,
				height: 630,
				alt: 'Book recommendations by Barry Prendergast',
			},
		],
		siteName: 'Read',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
		images: [defaultImage],
	},
	keywords: [
		'book recommendations',
		'design books',
		'Barry Prendergast',
		'creative thinking',
		'best books',
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
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
			<body className='grid grid-cols-1 grid-rows-[1fr_auto] min-h-screen font-sans antialiased bg-bones-linen dark:bg-bones-black'>
				{children}
			</body>
		</html>
	);
}
