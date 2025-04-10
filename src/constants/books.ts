import { Book } from '@/types/Book';

export const books: Book[] = [
	{
		title: 'Designing Interfaces',
		authors: [
			{
				name: 'Jenifer Tidwell',
				url: 'https://www.linkedin.com/in/jenifertidwell/',
			},
		],
		coverImage: '/books/tidwell.jpg',
		metadata: {
			publishYear: 2005,
			genre: 'User Interface Design',
			pages: 368,
			publisher: "O'Reilly Media",
		},
		personalComment:
			'Foundational toolkit for broadening design vocabulary with proven UI patterns: apply it to create stronger, more usable interactions.',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/344724.Designing_Interfaces',
		amazonUrl:
			'https://www.amazon.com/Designing-Interfaces-Patterns-Effective-Interaction/dp/1449379702',
	},
	{
		title: 'The Doors of Perception',
		authors: [
			{
				name: 'Aldous Huxley',
				url: 'https://en.wikipedia.org/wiki/Aldous_Huxley',
			},
		],
		coverImage: '/books/huxley.jpg',
		metadata: {
			publishYear: 1954,
			genre: 'Philosophy',
			pages: 63,
			publisher: 'Chatto & Windus',
		},
		personalComment:
			'Exploration of how perception shapes reality: leverage it to ground designs in genuine human experience.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/The_Doors_of_Perception',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/3188964-the-doors-of-perception',
		amazonUrl: `https://www.amazon.com/Doors-Perception-Aldous-Huxley/dp/0060801719`,
	},
	{
		title: 'The End of the World Is Just the Beginning',
		authors: [
			{
				name: 'Peter Zeihan',
				url: 'https://en.wikipedia.org/wiki/Peter_Zeihan',
			},
		],
		coverImage: '/books/zeihan.jpg',
		metadata: {
			publishYear: 2022,
			genre: 'Geopolitics',
			pages: 512,
			publisher: 'Harper Business',
		},
		personalComment:
			'An analysis of geopolitics, history and economics that describe of how relationsips, behaviours, and long timespans affect complex systems.',
		wikipediaUrl:
			'https://en.wikipedia.org/wiki/The_End_of_the_World_Is_Just_the_Beginning',
		amazonUrl:
			'https://www.amazon.com/End-World-Just-Beginning-Globalization/dp/006323047X',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/58782897-the-end-of-the-world-is-just-the-beginning',
	},
	{
		title: 'Fully Automated Luxury Communism: A Manifesto',
		authors: [
			{
				name: 'Aaron Bastani',
				url: 'https://en.wikipedia.org/wiki/Aaron_Bastani',
			},
		],
		coverImage: '/books/bastani.jpg',
		metadata: {
			publishYear: 2019,
			genre: 'Political Philosophy',
			pages: 288,
			publisher: 'Verso Books',
		},
		personalComment:
			'Forward-looking perspective on tech’s impact on labour transitions: consult it to envision equitable, post-work design solutions.',
		wikipediaUrl:
			'https://en.wikipedia.org/wiki/Fully_Automated_Luxury_Communism',
		amazonUrl: `https://www.amazon.com/Fully-Automated-Luxury-Communism-Bastani/dp/1786632624`,
		goodreadsUrl: `https://www.goodreads.com/book/show/37758635-fully-automated-luxury-communism`,
	},
	{
		title: 'Gödel, Escher, Bach: An Eternal Golden Braid',
		authors: [
			{
				name: 'Douglas R. Hofstadter',
				url: 'https://en.wikipedia.org/wiki/Douglas_Hofstadter',
			},
		],
		coverImage: '/books/hofstadter.jpg',
		metadata: {
			publishYear: 1979,
			genre: 'Cognitive Science',
			pages: 777,
			publisher: 'Basic Books',
		},
		personalComment:
			'Study of recursive logic and interconnected creativity: draw on it to understand how related concepts drive complex design.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach',
		goodreadsUrl: `https://www.goodreads.com/book/show/24113.G_del_Escher_Bach`,
		amazonUrl: `https://www.amazon.de/Godel-Escher-Bach-Eternal-Golden/dp/0465026567`,
	},
	{
		title: 'The Great Wall of China',
		authors: [
			{
				name: 'Franz Kafka',
				url: 'https://en.wikipedia.org/wiki/Franz_Kafka',
			},
		],
		coverImage: '/books/kafka.jpg',
		metadata: {
			publishYear: 1931,
			genre: 'Short Stories',
			pages: 256,
			publisher: 'Penguin Classics',
		},
		personalComment:
			'Allegorical take on bureaucracy and grand visions: reflect on it to recognise the communal cost behind ambitious undertakings.',
		wikipediaUrl:
			'https://en.wikipedia.org/wiki/The_Great_Wall_of_China_(short_story_collection)',
		amazonUrl: `https://www.amazon.de/-/en/Great-Wall-China-Franz-Kafka/dp/1494712083`,
		goodreadsUrl: `https://www.goodreads.com/book/show/177576.The_Great_Wall_of_China_and_other_Stories`,
	},
	{
		title: 'How to Make Sense of Any Mess',
		authors: [{ name: 'Abby Covert', url: 'https://abbycovert.com/' }],
		coverImage: '/books/covert.jpg',
		metadata: {
			publishYear: 2014,
			genre: 'Sensemaking Strategies',
			pages: 174,
			publisher: 'CreateSpace Independent Publishing Platform',
		},
		personalComment:
			'Methoda for clarifying chaos: rely on it to systematically untangle the messy middle of challenging design tasks.',

		homeUrl: 'https://www.howtomakesenseofanymess.com/',
		amazonUrl: `https://www.amazon.de/-/en/How-Make-Sense-Any-Mess/dp/1500615994`,
		goodreadsUrl: `https://www.goodreads.com/book/show/23557020-how-to-make-sense-of-any-mess`,
	},
	{
		title: 'Information Architecture: Blueprints for the Web',
		authors: [
			{
				name: 'Christina Wodtke',
				url: 'https://en.wikipedia.org/wiki/Christina_Wodtke',
			},
		],
		coverImage: '/books/wodtke.jpg',
		metadata: {
			publishYear: 2002,
			genre: 'Content Strategies',
			pages: 224,
			publisher: 'New Riders',
		},
		personalComment:
			'Approach to structuring websites and apps: use it to build clear hierarchies and guide intuitive navigation.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Information_architecture',
		amazonUrl: `https://www.amazon.de/-/en/Information-Architecture-Blueprints-Christina-Wodtke/dp/0735712506`,
		goodreadsUrl: `https://www.goodreads.com/book/show/224130.Information_Architecture`,
	},
	{
		title: 'Information Dashboard Design',
		authors: [
			{
				name: 'Stephen Few',
				url: 'https://www.perceptualedge.com/',
			},
		],
		coverImage: '/books/few.jpg',
		metadata: {
			publishYear: 2006,
			genre: 'Data Visualisation',
			pages: 223,
			publisher: "O'Reilly Media",
		},
		personalComment:
			'Principles of straightforward data presentation: adopt them to ensure clarity and actionable insights over cleverness in visual data stories.',
		amazonUrl: `https://www.amazon.de/-/en/Information-Dashboard-Design-at-glance/dp/1938377001`,
		goodreadsUrl: `https://www.goodreads.com/book/show/3254937-information-dashboard-design`,
	},
	{
		title: 'Intertwingled: Information Changes Everything',
		authors: [
			{
				name: 'Peter Morville',
				url: 'https://en.wikipedia.org/wiki/Peter_Morville',
			},
		],
		coverImage: '/books/morville.jpg',
		metadata: {
			publishYear: 2014,
			genre: 'Information Science',
			pages: 197,
			publisher: 'Semantic Studios',
		},
		personalComment:
			'Assertion that information is deeply interconnected: take it to heart when orchestrating design with the broadest contextual awareness.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Peter_Morville',
		amazonUrl: `https://www.amazon.com/Intertwingled-Information-Everything-Peter-Morville/dp/0692225587`,
		goodreadsUrl: `https://www.goodreads.com/book/show/22931460-intertwingled`,
		homeUrl: `https://intertwingled.org/`,
	},
	{
		title: 'The Laws of Simplicity',
		authors: [
			{
				name: 'John Maeda',
				url: 'https://bsky.app/profile/johnmaeda.bsky.social',
			},
		],
		coverImage: '/books/maeda.jpg',
		metadata: {
			publishYear: 2006,
			genre: 'Design',
			pages: 128,
			publisher: 'The MIT Press',
		},
		personalComment:
			'Concise guide to focusing on essentials: employ it to streamline complexity and keep attention on what actually matters with simple concepts.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/The_Laws_of_Simplicity',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/147000.The_Laws_of_Simplicity',
		amazonUrl:
			'https://www.amazon.de/-/en/Laws-Simplicity-Design-Technology-Business/dp/0262539470',
		homeUrl: `http://lawsofsimplicity.com/`,
	},
	{
		title: 'Mind Design II: Philosophy, Psychology, and Artificial Intelligence',
		authors: [
			{
				name: 'John Haugeland',
				url: 'https://en.wikipedia.org/wiki/John_Haugeland',
			},
		],
		coverImage: '/books/haugeland.jpg',
		metadata: {
			publishYear: 1997,
			genre: 'Artificial Intelligence',
			pages: 488,
			publisher: 'The MIT Press',
		},
		personalComment:
			'Exploration of how humans and machines think: informs design decisions shaped by and for working with evolving intelligence',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/150696.Mind_Design_II',
		amazonUrl:
			'https://www.amazon.de/-/en/Mind-Design-Philosophy-Psychology-Intelligence/dp/0262581531',
		homeUrl: `https://mitpress.mit.edu/9780262581530/mind-design-ii/`,
	},
	{
		title: 'Non-Fiction',
		authors: [
			{
				name: 'Chuck Palahniuk',
				url: 'https://www.chuckpalahniuk.net/',
			},
		],
		coverImage: '/books/palahniuk.jpg',
		metadata: {
			publishYear: 2004,
			genre: 'Essays',
			pages: 256,
			publisher: 'Jonathan Cape',
		},
		personalComment:
			'Reminded me that good storytelling (and the humans those stories are about) is raw, weird, and true—exactly what design needs more of.',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/24820339-non-fiction',
		amazonUrl: 'https://www.amazon.de/-/en/Palahniuk-Chuck/dp/0224063022',
		homeUrl: `https://www.penguin.co.uk/books/357251/non-fiction-by-chuck-palahniuk/9780099437970`,
		wikipediaUrl: `https://en.wikipedia.org/wiki/Stranger_than_Fiction:_True_Stories`,
	},

	{
		title: 'The Sciences of the Artificial',
		authors: [
			{
				name: 'Herbert A. Simon',
				url: 'https://en.wikipedia.org/wiki/Herbert_A._Simon',
			},
		],
		coverImage: '/books/simon.jpg',
		metadata: {
			publishYear: 1969,
			genre: 'Design Theory',
			pages: 216,
			publisher: 'MIT Press',
		},
		personalComment:
			'This seminal work reshaped my understanding of design as a science, emphasising the importance of considering both natural and artificial systems in problem-solving.',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/162138.The_Sciences_of_the_Artificial',
		amazonUrl:
			'https://www.amazon.com/Sciences-Artificial-Herbert-A-Simon/dp/0262691914',
		homeUrl:
			'https://mitpress.mit.edu/9780262691913/the-sciences-of-the-artificial/',
	},
	{
		title: 'Sound by Artists',
		authors: [
			{
				name: 'Dan Lander',
				url: 'https://www.ubu.com/sound/lander.html',
			},
			{
				name: 'Micah Lexier',
				url: 'https://www.micahlexier.com/',
			},
		],
		coverImage: '/books/lander.jpg',
		metadata: {
			publishYear: 1990,
			genre: 'Art',
			pages: 372,
			publisher: 'Charivari Press & Blackwood Gallery',
		},
		personalComment:
			'Expanded my idea of what constitutes "experience"—got me thinking about space, time, and interactions beyond screens.',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/15755476-sound-by-artists',
		amazonUrl:
			'https://www.amazon.de/-/en/Sound-Artists-Dan-Lander/dp/1895166284',
		homeUrl: `https://www.blackwoodgallery.ca/publications/sound-by-artists`,
	},
	{
		title: 'Thinking, Fast and Slow',
		authors: [
			{
				name: 'Daniel Kahneman',
				url: 'https://en.wikipedia.org/wiki/Daniel_Kahneman',
			},
		],
		coverImage: '/books/kahneman.jpg',
		metadata: {
			publishYear: 2011,
			genre: 'Psychology',
			pages: 512,
			publisher: 'Farrar, Straus and Giroux',
		},
		personalComment:
			'Insights into biases and decision-making: apply them to design for how people truly think and act.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
		amazonUrl:
			'https://www.amazon.de/-/en/Thinking-Fast-Slow-Kahneman/dp/0374533555',
	},
	{
		title: 'Transcend: The New Science of Self-Actualisation',
		authors: [
			{
				name: 'Scott Barry Kaufman',
				url: 'https://en.wikipedia.org/wiki/Scott_Barry_Kaufman',
			},
		],
		coverImage: '/books/kaufman.jpg',
		metadata: {
			publishYear: 2020,
			genre: 'Psychology',
			pages: 432,
			publisher: 'TarcherPerigee',
		},
		personalComment:
			'Focus on motivation and emotion: the book addresses deeper psychological needs in that can brought into a behaviour-driven design practice.',
		goodreadsUrl: 'https://www.goodreads.com/book/show/49625550-transcend',
		amazonUrl:
			'https://www.amazon.com/Transcend-Science-Self-Actualization-Scott-Kaufman/dp/0143131206',
		homeUrl: `https://scottbarrykaufman.com/podcast/transcend-with-scott-barry-kaufman/`,
	},
	{
		title: 'The Visual Display of Quantitative Information',
		authors: [
			{
				name: 'Edward R. Tufte',
				url: 'https://en.wikipedia.org/wiki/Edward_Tufte',
			},
		],
		coverImage: '/books/tufte.jpg',
		metadata: {
			publishYear: 1983,
			genre: 'Data Visualisation',
			pages: 197,
			publisher: 'Graphics Press',
		},
		personalComment:
			'The defining document for precise yet-aesthetic data visualisation: Tufte defines principles of clarity and integrity in presenting engaging information at more-clearly',
		goodreadsUrl:
			'https://www.goodreads.com/book/show/17744.The_Visual_Display_of_Quantitative_Information_2nd_Ed_',
		amazonUrl:
			'https://www.amazon.de/-/en/Visual-Display-Quantitative-Information/dp/1930824130',
		homeUrl: `https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/`,
	},
	{
		title: 'Ways of Seeing',
		authors: [
			{
				name: 'John Berger',
				url: 'https://en.wikipedia.org/wiki/John_Berger',
			},
		],
		coverImage: '/books/berger.jpg',
		metadata: {
			publishYear: 1972,
			genre: 'Art Criticism',
			pages: 166,
			publisher: 'Penguin Books',
		},
		personalComment:
			'A critical theoretical look at images, power, and culture: which informs how we can interpret and create interfaces with a deeper cultural and psychological awareness.',
		wikipediaUrl: 'https://en.wikipedia.org/wiki/Ways_of_Seeing',
		goodreadsUrl: 'https://www.goodreads.com/book/show/2784.Ways_of_Seeing',
		amazonUrl:
			'https://www.amazon.de/-/en/Ways-Seeing-Berger-Penguin-Classics/dp/014103579X',
	},
	{
		title: 'What Tech Calls Thinking: An Inquiry into the Intellectual Bedrock of Silicon Valley',
		authors: [
			{
				name: 'Adrian Daub',
				url: 'https://www.adriandaub.com/',
			},
		],
		coverImage: '/books/daub.jpg',
		metadata: {
			publishYear: 2020,
			genre: 'Technology Critique',
			pages: 160,
			publisher: 'Farrar, Straus and Giroux',
		},
		personalComment:
			"Provides a critical examination of Silicon Valley's ideologies, prompting reflection on the tech industry's influence on society.",

		goodreadsUrl:
			'https://www.goodreads.com/book/show/50403471-what-tech-calls-thinking',
		amazonUrl:
			'https://www.amazon.com/What-Tech-Calls-Thinking-Intellectual-ebook/dp/B084M1NCF7',
		homeUrl: `https://www.adriandaub.com/books/what-tech-calls`,
	},
	{
		title: 'The Whole Internet: User’s Guide and Catalog',
		authors: [
			{
				name: 'Ed Krol',
				url: 'https://en.wikipedia.org/wiki/Ed_Krol',
			},
		],
		coverImage: '/books/krol.jpg',
		metadata: {
			publishYear: 1992,
			genre: 'Technology',
			pages: 640,
			publisher: "O'Reilly Media",
		},
		personalComment:
			'A time capsule of the web’s early spirit that reminds me of the openness, curiosity, and DIY spirit of the early internet',
		wikipediaUrl:
			'https://en.wikipedia.org/wiki/Whole_Internet_User%27s_Guide_and_Catalog',
		goodreadsUrl: 'https://www.goodreads.com/book/show/2954315',
		amazonUrl:
			'https://www.amazon.com/Whole-Internet-Catalog-Nutshell-Handbook/dp/1565920252',
	},
	// Add more books here...
];
