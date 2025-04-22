import { Book } from '@/types/Book';

export const books: Book[] = [
	{
		title: 'Your Guide to Blueprinting the Practical Way',
		slug: `blueprinting-the-practical-way`,
		authors: [
			{
				name: 'Erika Flowers',
				link: 'https://www.helloerikaflowers.com/',
			},
			{
				name: 'Morgan Miller',
				link: 'https://www.linkedin.com/in/morganbrandonmiller/',
			},
		],
		coverImage: '/books/flowers.jpg',
		metadata: {
			shortname: 'Blueprinting the Practical Way',
			blurb: 'A practical guide to blueprinting, covering essential techniques for creating detailed and accurate blueprints for various projects.',
			genre: 'Technical Design',
			pageCount: 250,
			publisher: 'Technical Publications Inc.',
			publishYear: 2024,
		},
		link: {
			amazon: 'https://amzn.to/4lDainY',
			goodreads:
				'https://www.goodreads.com/book/show/64406200-your-guide-to-blueprinting-the-practical-way',
		},
		quote: {
			attribute: 'Erika Flowers & Morgan Miller',
			text: 'Blueprinting is more than just drawing lines; it’s about visualizing the future and making it tangible.',
		},
		personalComment:
			'Flowers and Miller demystify blueprinting with hands-on advice and clear visuals. This book is a boon for students and professionals seeking to master the art of technical drawings. It bridges the gap between theory and practice, ensuring readers can confidently create blueprints that translate into real-world results. A must-read for anyone serious about precision and accuracy in design.',
	},
	{
		title: 'Designing Interfaces: Patterns for Effective Interaction Design',
		slug: `designing-interfaces-patterns-for-effective-interaction-design`,
		authors: [
			{
				name: 'Jenifer Tidwell',
				link: 'https://www.linkedin.com/in/jenifertidwell/',
			},
		],
		coverImage: '/books/tidwell.jpg',
		metadata: {
			shortname: 'Designing Interfaces',
			blurb: "Despite all of the UI toolkits available today, it's still not easy to design good application interfaces. This bestselling book is one of the few reliable sources to help you navigate through the maze of design options. By capturing UI best practices and reusable ideas as design patterns, Designing Interfaces provides solutions to common design problems that you can tailor to the situation at hand.",
			genre: 'User Interface Design',
			pageCount: 368,
			publisher: "O'Reilly Media",
			publishYear: 2005,
		},
		link: {
			amazon: 'https://amzn.to/4cx8Yih',
			goodreads:
				'https://www.goodreads.com/book/show/344724.Designing_Interfaces',
		},
		quote: {
			attribute: 'Jenifer Tidwell',
			text: 'A user interface is well-designed when the program behaves exactly how the user thought it would.',
		},
		personalComment:
			'This book distills decades of interface design wisdom into clear, reusable patterns that solve real-world challenges. It’s not just about making things look good—it’s about making systems understandable, predictable, and humane. For UX designers, this is a reference manual for creating interfaces that align with human expectations and support user goals. It strengthens your design vocabulary and provides a shared language for working across disciplines. If you’re serious about designing with clarity, empathy, and intent, Designing Interfaces is essential—it bridges aesthetics with behavioural insight and shows how small design choices can create big impact.',
	},
	{
		title: 'The Decision Book: Fifty Models for Strategic Thinking',
		slug: `the-decision-book-fifty-models-for-strategic-thinking`,
		authors: [
			{
				name: 'Mikael Krogerus',
			},
			{
				name: 'Roman Tschäppeler',
			},
		],
		coverImage: '/books/krogerus.jpg',
		metadata: {
			shortname: 'The Decision Book',
			blurb: 'A compact guide offering 50 simple yet powerful mental models to assist in decision-making, personal reflection, and strategic thinking for professionals and individuals alike.',
			genre: 'Decision-Making',
			pageCount: 176,
			publisher: 'Profile Books',
			publishYear: 2011,
		},
		link: {
			amazon: 'https://amzn.to/3YvNKLI',
			goodreads:
				'https://www.goodreads.com/book/show/10206987-the-decision-book',
		},
		quote: {
			attribute: 'Mikael Krogerus & Roman Tschäppeler',
			text: 'Complex realities demand simple tools for clear, strategic decisions.',
		},
		personalComment:
			'This compact guide turns abstract strategy into concrete practice. The mental models inside help you make clearer decisions, structure thinking, and communicate ideas persuasively. For UX designers, it’s a versatile toolkit for aligning teams, framing user problems, and navigating complexity with confidence. Each model adds a new lens for systems thinking, user behaviour, or stakeholder alignment. Use it to sharpen facilitation, guide research synthesis, and bring clarity to messy conversations—making you not just a better designer, but a smarter collaborator.',
	},
	{
		title: 'Discussing Design: Improving Communication and Collaboration through Critique',
		slug: 'discussing-design',
		authors: [
			{
				name: 'Adam Connor',
				link: 'https://www.linkedin.com/in/aconnor/',
			},
			{
				name: 'Aaron Irizarry',
				link: 'https://www.linkedin.com/in/aaroni/',
			},
		],
		coverImage: '/books/irizarry.jpg',
		metadata: {
			shortname: 'Discussing Design',
			blurb: "Real critique has become a lost skill among collaborative teams today. Critique is intended to help teams strengthen their designs, products, and services, rather than be used to assert authority or push agendas under the guise of feedback. In this practical guide, authors Adam Connor and Aaron Irizarry teach you techniques, tools, and a framework for helping members of your design team give and receive critique. Using firsthand stories and lessons from prominent figures in the design community, this book examines the good, the bad, and the ugly of feedback. You'll come away with tips, actionable insights, activities, and a cheat sheet for practicing critique as a part of your collaborative process.",
			genre: 'Design, Collaboration, Communication',
			pageCount: 206,
			publisher: "O'Reilly Media",
			publishYear: 2015,
		},
		link: {
			goodreads: 'https://www.goodreads.com/book/show/32049560',
			amazon: 'https://amzn.to/4lMJNwq',
			home: 'https://medium.com/discussing-design',
		},
		quote: {
			text: 'Good critique is comprised of three key elements: It identifies a specific aspect of the idea or a decision in the design being analyzed. It relates that aspect or decision to an objective or best practice. It describes how and why the aspect or decision work to support or not support the objective or best practice.',
			attribute: 'Adam Connor & Aaron Irizarry',
		},
		personalComment:
			'This book is an essential resource for design teams and managers aiming to cultivate a culture of kind and constructive critique. Particularly useful are the anti-patterns for giving and receiving feedback, cultural influences, timing and frequency, facilitation techniques, and strategies for handling difficult situations. Solid foundational insights and a feedback framework: highly valuable for anyone involved in design feedback.',
	},
	{
		title: 'The Doors of Perception',
		slug: `the-doors-of-perception`,
		authors: [
			{
				name: 'Aldous Huxley',
				link: 'https://en.wikipedia.org/wiki/Aldous_Huxley',
			},
		],
		coverImage: '/books/huxley.jpg',
		metadata: {
			shortname: 'Doors of Perception',
			blurb: 'A vivid exploration of perception and consciousness, challenging assumptions about reality and human experience.',
			genre: 'Philosophy',
			pageCount: 63,
			publisher: 'Chatto & Windus',
			publishYear: 1954,
		},
		link: {
			amazon: 'https://amzn.to/4lBMXTy',
			goodreads:
				'https://www.goodreads.com/book/show/3188964-the-doors-of-perception',
			wikipedia: 'https://en.wikipedia.org/wiki/The_Doors_of_Perception',
		},
		quote: {
			attribute: 'Aldous Huxley',
			text: 'To see ourselves as others see us is a most salutary gift. Hardly less important is the capacity to see others as they see themselves.',
		},
		personalComment:
			'Huxley’s exploration of consciousness urges designers to reconsider how perception is constructed—and constrained. By disrupting your default assumptions, it invites a more inclusive, imaginative design mindset. This book is a powerful reminder that not all users experience reality the same way. For UX practitioners, it’s a prompt to design beyond convention, embrace difference, and rethink what “intuitive” really means. It won’t teach interface patterns, but it will stretch your empathy and perception—critical tools for creating meaningful, human-centred experiences.',
	},
	{
		title: 'Gamestorming: A Playbook for Innovators, Rulebreakers, and Changemakers',
		slug: `gamestorming`,
		authors: [
			{
				name: 'Dave Gray',
				link: 'https://xplaner.com/',
			},
			{
				name: 'Sunni Brown',
				link: 'https://sunnibrown.com/',
			},
			{
				name: 'James Macanufo',
				link: 'https://www.linkedin.com/in/macgeo/',
			},
		],
		coverImage: '/books/gray.jpg',
		metadata: {
			shortname: 'Gamestorming',
			blurb: 'A playbook for innovators, rule breakers, and changemakers, offering a collection of games and activities to unlock creativity and drive better collaboration.',
			genre: 'Business',
			pageCount: 288,
			publisher: 'O’Reilly Media',
			publishYear: 2010,
		},
		link: {
			wikipedia: 'https://en.wikipedia.org/wiki/Gamestorming',
			amazon: 'https://amzn.to/3Y1mJzB',
			goodreads:
				'https://www.goodreads.com/book/show/9364936-gamestorming',
			home: 'https://gamestorming.com/',
		},
		quote: {
			attribute: 'Dave Gray',
			text: 'Games are a form of structured play that can create a safe environment for innovation and change.',
		},
		personalComment:
			'Gray et al. present a dynamic toolkit for fostering innovation through play. This book provides a wealth of collaborative techniques that break down barriers and encourage creative problem-solving. It’s perfect for teams looking to inject energy into their brainstorming sessions and generate fresh ideas. Whether you’re a designer, manager, or entrepreneur, this book will help you harness the power of games to transform your work.',
	},
	{
		title: 'The End of the World Is Just the Beginning',
		slug: `the-end-of-the-world-is-just-the-beginning`,
		authors: [
			{
				name: 'Peter Zeihan',
				link: 'https://en.wikipedia.org/wiki/Peter_Zeihan',
			},
		],
		coverImage: '/books/zeihan.jpg',
		metadata: {
			shortname: 'The End of the World Is Just the Beginning',
			blurb: 'Peter Zeihan analyses shifting demographics, geopolitical tensions, and economic transitions to show how the unraveling of globalisation will reshape the balance of power and daily life around the world.',
			genre: 'Geopolitics',
			pageCount: 512,
			publisher: 'Harper Business',
			publishYear: 2022,
		},
		link: {
			amazon: 'https://amzn.to/4ieY8i9',
			goodreads:
				'https://www.goodreads.com/book/show/58782897-the-end-of-the-world-is-just-the-beginning',
			wikipedia:
				'https://en.wikipedia.org/wiki/The_End_of_the_World_Is_Just_the_Beginning',
		},
		quote: {
			attribute: 'Peter Zeihan',
			text: 'Geography does not change. Demographics do not lie. And we have a historyful of history as to how countries and peoples react to their environment.',
		},
		personalComment:
			'Zeihan offers a geopolitical systems view that reshapes how we think about design’s context. As the global order shifts, so do infrastructures, markets, and user needs. This book equips UX designers with a macro lens—helping us anticipate how demographic and political forces influence access, equity, and sustainability. Whether you’re working on international products or local services, this book pushes you to design for the long term, beyond the current hype cycle. Think of it as future-proofing your mindset.',
	},
	{
		title: 'Fully Automated Luxury Communism: A Manifesto',
		slug: `fully-automated-luxury-communism-a-manifesto`,
		authors: [
			{
				name: 'Aaron Bastani',
				link: 'https://en.wikipedia.org/wiki/Aaron_Bastani',
			},
		],
		coverImage: '/books/bastani.jpg',
		metadata: {
			shortname: 'Fully Automated Luxury Communism',
			blurb: 'Aaron Bastani explores how advanced automation could radically transform economic structures, suggesting a future of shared abundance beyond traditional capitalist models.',
			genre: 'Political Philosophy',
			pageCount: 288,
			publisher: 'Verso Books',
			publishYear: 2019,
		},
		link: {
			amazon: 'https://amzn.to/4ilCPvp',
			goodreads:
				'https://www.goodreads.com/book/show/37758635-fully-automated-luxury-communism',
			wikipedia:
				'https://en.wikipedia.org/wiki/Fully_Automated_Luxury_Communism',
		},
		quote: {
			attribute: 'Aaron Bastani',
			text: 'We have a world to win.',
		},
		personalComment:
			'This provocative read imagines a future where automation creates abundance, not scarcity. It challenges designers to move beyond optimising for profit and instead ask: what does equity look like in digital systems? For UX professionals, it reframes technology’s purpose—prompting questions about ownership, access, and ethical design. It’s not a how-to book, but it invites bold rethinking of what design could be in service of. Read it if you see design as a force for shaping systems, not just screens.',
	},
	{
		title: 'Gödel, Escher, Bach: An Eternal Golden Braid',
		slug: `godel-escher-bach-an-eternal-golden-braid`,
		authors: [
			{
				name: 'Douglas R. Hofstadter',
				link: 'https://en.wikipedia.org/wiki/Douglas_Hofstadter',
			},
		],
		coverImage: '/books/hofstadter.jpg',
		metadata: {
			shortname: 'An Eternal Golden Braid',
			blurb: 'A captivating exploration of recursion, artificial intelligence, and the nature of consciousness, weaving themes from music, mathematics, and art to reveal the common threads underlying complex systems.',
			genre: 'Cognitive Science',
			pageCount: 777,
			publisher: 'Basic Books',
			publishYear: 1979,
		},
		link: {
			wikipedia: 'https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach',
			goodreads:
				'https://www.goodreads.com/book/show/24113.G_del_Escher_Bach',
			amazon: 'https://amzn.to/3RPWBnH',
		},
		quote: {
			attribute: 'Douglas R. Hofstadter',
			text: 'The "Strange Loop" phenomenon occurs whenever, by moving upwards (or downwards) through levels of some hierarchical system, we unexpectedly find ourselves right back where we started.',
		},
		personalComment:
			'Hofstadter’s masterpiece is an intellectual playground that reveals the deep patterns connecting logic, art, and self-reference. For UX designers, it’s less about practical tips and more about pattern recognition, systems thinking, and recursive insight. It helps you see how meaning emerges from structure—critical when designing for complex workflows, adaptive content, or AI systems. It also cultivates a cross-disciplinary fluency that sharpens creativity. It’s dense but rewarding: a book that rewires your mental models.',
	},
	{
		title: 'The Great Wall of China',
		slug: `the-great-wall-of-china`,
		authors: [
			{
				name: 'Franz Kafka',
				link: 'https://en.wikipedia.org/wiki/Franz_Kafka',
			},
		],
		coverImage: '/books/kafka.jpg',
		metadata: {
			shortname: 'The Great Wall of China',
			blurb: 'A short allegory that examines ambition, bureaucracy, and the human desire for grand achievement through the lens of an enormous construction project.',
			genre: 'Short Story',
			pageCount: 256,
			publisher: 'Penguin',
			publishYear: 1931,
		},
		personalComment:
			'Kafka’s parable is a mirror for the modern designer: grand visions often falter in the trenches of disjointed execution. It speaks to the friction between strategic ambition and real-world constraints—hierarchies, silos, and misaligned incentives. For UX designers, it’s a cautionary tale about forgetting the user and the worker amid lofty goals. It prompts reflection on power, purpose, and how systemic forces shape design outcomes. Read it to stay grounded, human-centred, and skeptical of the myth of perfect systems.',
		quote: {
			attribute: 'Franz Kafka',
			text: 'Human nature, essentially changeable, unstable as the dust, can endure no restraint; if it binds itself it soon begins to tear madly at its bonds, until it rends everything asunder, the wall, the bonds, and its very self.',
		},
		link: {
			wikipedia:
				'https://en.wikipedia.org/wiki/The_Great_Wall_of_China_(short_story_collection)',
			amazon: 'https://amzn.to/3GakrIt',
			goodreads:
				'https://www.goodreads.com/book/show/177576.The_Great_Wall_of_China_and_other_Stories',
		},
	},
	{
		title: 'How to Make Sense of Any Mess',
		slug: `how-to-make-sense-of-any-mess`,
		authors: [
			{
				name: 'Abby Covert',
				link: 'https://abbycovert.com/',
			},
		],
		coverImage: '/books/covert.jpg',
		metadata: {
			shortname: 'How to Make Sense of Any Mess',
			blurb: 'Abby Covert provides strategies to tackle ambiguity and organise information so that people can engage with clarity and confidence.',
			genre: 'Sensemaking Strategies',
			pageCount: 174,
			publisher: 'CreateSpace Independent Publishing Platform',
			publishYear: 2014,
		},
		link: {
			amazon: 'https://amzn.to/4je3ifw',
			goodreads:
				'https://www.goodreads.com/book/show/23557020-how-to-make-sense-of-any-mess',
			home: 'https://www.howtomakesenseofanymess.com/',
		},
		quote: {
			attribute: 'Abby Covert',
			text: 'Information architecture is the way that we arrange the parts of something to make it understandable.',
		},
		personalComment:
			'The go-to guide for anyone confronting ambiguity. Covert’s book demystifies the practice of information architecture, offering plain-language steps to bring clarity to messy content and ideas. For UX designers, it’s a practical manual for untangling complexity—whether in product ecosystems, navigation, or stakeholder conversations. The tools here sharpen your ability to frame problems, define scope, and make information usable. It’s also one of the most human, generous design books out there—rooted in making things better, not just shinier.',
	},
	{
		title: 'Indistractable',
		slug: `indistractable`,
		authors: [
			{
				name: 'Nir Eyal',
				link: 'https://www.nirandfar.com/',
			},
		],
		coverImage: '/books/eyal.jpg',
		metadata: {
			shortname: 'Psychology',
			blurb: 'A guide to controlling your attention and choosing your life, teaching how to become indistractable in an increasingly distracting world.',
			genre: 'Self-Help',
			pageCount: 304,
			publisher: 'Portfolio',
			publishYear: 2019,
		},
		link: {
			amazon: 'https://amzn.to/4cx4uYZ',
			goodreads:
				'https://www.goodreads.com/book/show/44595007-indistractable',
			home: 'https://www.nirandfar.com/indistractable/',
		},
		quote: {
			attribute: 'Nir Eyal',
			text: 'The goal is not to resist every distraction, but to manage them.',
		},
		personalComment:
			'Eyal provides a practical toolkits for reclaiming focus (and as designers, not stealing it from others). In an age of constant pings and notifications, this book offers a framework for understanding the root causes of distraction and actionable strategies for building habits that stick. It talks about connecting action with intention, and controlling time and attention.',
	},
	{
		title: 'Information Architecture: Blueprints for the Web',
		slug: `information-architecture-blueprints-for-the-web`,
		authors: [
			{
				name: 'Christina Wodtke',
				link: 'https://en.wikipedia.org/wiki/Christina_Wodtke',
			},
		],
		coverImage: '/books/wodtke.jpg',
		metadata: {
			shortname: 'Information Architecture',
			blurb: 'A practical guide to structuring websites and apps so that users can easily find what they need, focusing on clarity, usability, and best practices in organising information.',
			genre: 'Content Strategies',
			pageCount: 224,
			publisher: 'New Riders',
			publishYear: 2002,
		},
		link: {
			wikipedia: 'https://en.wikipedia.org/wiki/Information_architecture',
			amazon: 'https://amzn.to/3REw6BT',
			goodreads:
				'https://www.goodreads.com/book/show/224130.Information_Architecture',
		},
		quote: {
			attribute: 'Christina Wodtke',
			text: 'Information architecture is the art and science of structuring and organizing the information in products and services, supporting usability and findability.',
		},
		personalComment:
			'A practical introduction to structuring digital spaces so people can find what they need. Wodtke grounds information architecture in usability and content clarity, making it essential for UX designers working on content-heavy systems. While dated in parts, its core principles still hold: structure is invisible until it fails. Use this book to strengthen your skills in navigation design, taxonomy, and planning for scale. It’s especially helpful for bridging the gap between design, dev, and content.',
	},
	{
		title: 'Information Dashboard Design',
		slug: `information-dashboard-design`,
		authors: [
			{
				name: 'Stephen Few',
				link: 'https://www.perceptualedge.com/',
			},
		],
		coverImage: '/books/few.jpg',
		metadata: {
			shortname: 'Information Dashboard Design',
			blurb: 'A concise, practical guide to designing dashboards for effective data presentation. Stephen Few emphasises clarity, efficiency, and user-centric layout to drive insightful decision-making.',
			genre: 'Data Visualisation',
			pageCount: 223,
			publisher: "O'Reilly Media",
			publishYear: 2006,
		},
		link: {
			amazon: 'https://amzn.to/3XZC7MS',
			goodreads:
				'https://www.goodreads.com/book/show/3254937-information-dashboard-design',
		},
		quote: {
			attribute: 'Stephen Few',
			text: 'Dashboards are not reports; they are visual displays of the most important information needed to achieve one or more objectives.',
		},
		personalComment:
			'Few’s guide to dashboards is a masterclass in visual clarity. It teaches how to present complex data simply, truthfully, and without distraction—skills that go far beyond dashboards. For UX designers, it’s a primer on visual hierarchy, attention management, and user cognition. Whether you work with metrics, admin panels, or data reports, this book shows how to design for decisions, not decoration. Use it to fight data clutter and advocate for users who need fast, confident insight.',
	},
	{
		title: 'Intertwingled: Information Changes Everything',
		slug: `intertwingled-information-changes-everything`,
		authors: [
			{
				name: 'Peter Morville',
				link: 'https://en.wikipedia.org/wiki/Peter_Morville',
			},
		],
		coverImage: '/books/morville.jpg',
		metadata: {
			shortname: 'Intertwingled',
			blurb: 'A look at how information architecture and design intersect, showing how interconnected data shapes our world and underlining the importance of designing for complexity.',
			genre: 'Information Science',
			pageCount: 197,
			publisher: 'Semantic Studios',
			publishYear: 2014,
		},
		link: {
			amazon: 'https://amzn.to/42bU3GC',
			goodreads:
				'https://www.goodreads.com/book/show/22931460-intertwingled',
			home: 'https://intertwingled.org/',
		},
		quote: {
			attribute: 'Peter Morville',
			text: 'In the beginning was the word. But where do words begin? And where do they lead? Our expedition is fueled by questions.',
		},
		personalComment:
			'Morville weaves design, systems, and language into a compelling meditation on complexity. This book helps UX designers see the web (and the world) as deeply interconnected—where choices ripple outward, and meaning is context-bound. It encourages thinking in systems, not silos; in relationships, not rows. It’s ideal for those working in large organisations or ecosystems. Read it to strengthen your conceptual understanding of information architecture and to articulate why structure is design.',
	},
	{
		title: 'The Laws of Simplicity',
		slug: `the-laws-of-simplicity`,
		authors: [
			{
				name: 'John Maeda',
				link: 'https://bsky.app/profile/johnmaeda.bsky.social',
			},
		],
		coverImage: '/books/maeda.jpg',
		metadata: {
			shortname: 'Laws of Simplicity',
			genre: 'Design',
			pageCount: 128,
			publisher: 'The MIT Press',
			publishYear: 2006,
		},
		link: {
			goodreads:
				'https://www.goodreads.com/book/show/225111.The_Laws_of_Simplicity',
			amazon: 'https://amzn.to/4cyzQ15',
			home: 'http://lawsofsimplicity.com/',
		},
		quote: {
			attribute: 'John Maeda',
			text: 'Simplicity is about subtracting the obvious and adding the meaningful.',
		},
		personalComment:
			'Maeda’s ten laws are a compass for cutting through noise. In a world that generates complexity, this book argues for restraint, clarity, and elegance. Designers will appreciate its emphasis on designing what matters, not everything that’s possible. While short, it offers lasting ideas on minimalism, trade-offs, and meaningful reduction. Use it as a lens to assess your work—and as a reminder that good design often means removing, not adding.',
	},
	{
		title: 'Mind Design II: Philosophy, Psychology, and Artificial Intelligence',
		slug: `mind-design-ii-philosophy-psychology-and-artificial-intelligence`,
		authors: [
			{
				name: 'John Haugeland',
				link: 'https://en.wikipedia.org/wiki/John_Haugeland',
			},
		],
		coverImage: '/books/haugeland.jpg',
		metadata: {
			shortname: 'Mind Design II',
			blurb: 'A philosophical look at artificial intelligence, uniting psychology and computation to examine the nature of cognition and what truly defines a mind.',
			genre: 'Artificial Intelligence',
			pageCount: 488,
			publisher: 'The MIT Press',
			publishYear: 1997,
		},
		link: {
			goodreads:
				'https://www.goodreads.com/book/show/150696.Mind_Design_II',
			amazon: 'https://amzn.to/43Vllm2',
			home: 'https://mitpress.mit.edu/9780262581530/mind-design-ii/',
		},
		quote: {
			attribute: 'John Haugeland',
			text: 'Minds are simply what brains do.',
		},
		personalComment:
			"This collection unpacks the philosophical underpinnings of AI—what it means to think, to understand, to be 'a mind'. For designers working with intelligent systems, it offers crucial perspective on cognition, machine logic, and the limits of simulation. It’s not a light read, but it sharpens ethical and conceptual awareness. If you’re designing with or around AI, this book helps you grapple with what’s actually being built—and what’s merely being predicted.",
	},
	{
		title: 'The Sciences of the Artificial',
		slug: `the-sciences-of-the-artificial`,
		authors: [
			{
				name: 'Herbert A. Simon',
				link: 'https://en.wikipedia.org/wiki/Herbert_A._Simon',
			},
		],
		coverImage: '/books/simon.jpg',
		metadata: {
			shortname: 'The Sciences of the Artificial',
			blurb: 'A foundational text bridging engineering, economics, and cognition, outlining a broad framework for how we design and understand artificial systems.',
			genre: 'Design Theory',
			pageCount: 216,
			publisher: 'MIT Press',
			publishYear: 1969,
		},
		link: {
			goodreads:
				'https://www.goodreads.com/book/show/676046.The_Sciences_of_the_Artificial',
			amazon: 'https://amzn.to/3Y2XOM1',
			home: 'https://mitpress.mit.edu/9780262690232/the-sciences-of-the-artificial/',
		},
		quote: {
			text: 'Everyone designs who devises courses of action aimed at changing existing situations into preferred ones.',
			attribute: 'Herbert A. Simon',
		},
		personalComment:
			"Simon’s classic reframes design as a way of changing the world—not just styling it. He connects engineering, cognition, and systems theory into a unified design philosophy. For any designer or engineer, this is a foundational text: it legitimises our work as a 'science' of human-made systems, shaped by feedback loops and purpose. He offers tools for understanding complexity, iteration, and problem-solving at scale.",
	},
	{
		title: 'Thinking, Fast and Slow',
		slug: `thinking-fast-and-slow`,
		authors: [
			{
				name: 'Daniel Kahneman',
				link: 'https://en.wikipedia.org/wiki/Daniel_Kahneman',
			},
		],
		coverImage: '/books/kahneman.jpg',
		metadata: {
			shortname: 'Thinking, Fast and Slow',
			blurb: 'An in-depth look at the dual processes of thought—automatic intuition and deliberate reasoning—revealing how these systems shape our choices and biases.',
			genre: 'Psychology',
			pageCount: 512,
			publisher: 'Farrar, Straus and Giroux',
			publishYear: 2011,
		},
		link: {
			wikipedia: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow',
			goodreads:
				'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
			amazon: 'https://amzn.to/3EipBBB',
		},
		quote: {
			text: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.',
			attribute: 'Daniel Kahneman',
		},
		personalComment:
			'Kahneman’s research into the two modes of thinking —intuitive(fast) and deliberate (slow)— is essential for understanding human behaviour. It’s a cornerstone for behavioural design, helping UX practitioners recognise cognitive biases, mental shortcuts, and decision friction in themselves and their users. The book deepens empathy for how people process information, make mistakes, and form habits. Useful for guiding research, interface design, and ethical behavioural design. It’s dense, but transformative—grounding design in more-accessible human psychology.',
	},
	{
		title: 'Transcend: The New Science of Self-Actualisation',
		slug: `transcend-the-new-science-of-self-actualisation`,
		authors: [
			{
				name: 'Scott Barry Kaufman',
				link: 'https://en.wikipedia.org/wiki/Scott_Barry_Kaufman',
			},
		],
		coverImage: '/books/kaufman.jpg',
		metadata: {
			shortname: 'Transcend',
			blurb: 'A deep exploration of the science of self-actualisation, blending psychology, philosophy, and personal development to provide a roadmap for achieving transcendence.',
			genre: 'Psychology',
			pageCount: 432,
			publisher: 'TarcherPerigee',
			publishYear: 2020,
		},
		link: {
			goodreads: 'https://www.goodreads.com/book/show/49625550-transcend',
			amazon: 'https://amzn.to/4cDgzvE',
			home: 'https://scottbarrykaufman.com/books/transcend/',
		},
		quote: {
			text: 'Growth is a messy, nonlinear process.',
			attribute: 'Scott Barry Kaufman',
		},
		personalComment:
			'Kaufman updates Maslow’s well-known hierarchy, grounding self-actualisation in modern psychology (and supported by evidence). It’s a guide to human potential—and to designing experiences that support it. In design, this means going beyond utility to support meaning, growth, and well-being. It’s particularly relevant in health, education, and mission-driven design. Use it to expand your sense of what user needs can include, and to remind yourself that great design nurtures a real person, not just the stuff on screen.',
	},
	{
		title: 'The Visual Display of Quantitative Information',
		slug: `the-visual-display-of-quantitative-information`,
		authors: [
			{
				name: 'Edward R. Tufte',
				link: 'https://en.wikipedia.org/wiki/Edward_Tufte',
			},
		],
		coverImage: '/books/tufte.jpg',
		metadata: {
			shortname: 'Visual Display of Quantitative Information',
			blurb: 'The defining document for precise yet aesthetic data visualisation: Tufte creates principles of clarity and integrity in presenting engaging actionable information.',
			genre: 'Data Visualisation',
			pageCount: 197,
			publisher: 'Graphics Press',
			publishYear: 1983,
		},
		link: {
			goodreads:
				'https://www.goodreads.com/book/show/17744.The_Visual_Display_of_Quantitative_Information_2nd_Ed_',
			amazon: 'https://amzn.to/4lLJZfk',
			home: 'https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/',
		},
		quote: {
			text: 'Excellence in statistical graphics consists of complex ideas communicated with clarity, precision, and efficiency.',
			attribute: 'Edward R. Tufte',
		},
		personalComment:
			'Tufte’s seminal work defines excellence in data visualisation: clarity, integrity, and minimalism. Essential reading for any interface involving metrics, graphs, or structured data. It teaches how to reduce noise, honour the data, and communicate actionable insights in dashboards, research reports, or data-heavy content that empowers—not overwhelms—users. This book has shaped generations of designers and analysts for a reason.',
	},
	{
		title: 'Ways of Seeing',
		slug: `ways-of-seeing`,
		authors: [
			{
				name: 'John Berger',
				link: 'https://en.wikipedia.org/wiki/John_Berger',
			},
		],
		coverImage: '/books/berger.jpg',
		metadata: {
			shortname: 'Ways of Seeing',
			blurb: 'A seminal work that challenges traditional perceptions of art and culture, encouraging readers to question the ways in which we see and interpret the world around us.',
			genre: 'Art Criticism',
			pageCount: 166,
			publisher: 'Penguin Books',
			publishYear: 1972,
		},
		link: {
			wikipedia: 'https://en.wikipedia.org/wiki/Ways_of_Seeing',
			goodreads:
				'https://www.goodreads.com/book/show/2784.Ways_of_Seeing',
			amazon: 'https://amzn.to/3G96pqt',
		},
		quote: {
			text: 'The way we see things is affected by what we know or what we believe.',
			attribute: 'John Berger',
		},
		personalComment:
			'A groundbreaking work that teaches us that seeing is never neutral—it’s shaped by culture, context, and power. Berger prompts readers to question assumptions about beauty, authority, and audience. It encourages a critical lens on visual language, representation in media, and both the politics and psychology of perception. Challenge your defaults and design decisions with a greater awareness of who’s being seen, who’s seeing, and who’s left out.',
	},
	{
		title: 'What Tech Calls Thinking: An Inquiry into the Intellectual Bedrock of Silicon Valley',
		slug: `what-tech-calls-thinking`,
		authors: [
			{
				name: 'Adrian Daub',
				link: 'https://www.adriandaub.com/',
			},
		],
		coverImage: '/books/daub.jpg',
		metadata: {
			shortname: 'What Tech Calls Thinking',
			blurb: "Provides a critical examination of Silicon Valley's ideologies, prompting reflection on the tech industry's influence on society.",
			genre: 'Technology Critique',
			pageCount: 160,
			publisher: 'Farrar, Straus and Giroux',
			publishYear: 2020,
		},
		link: {
			goodreads:
				'https://www.goodreads.com/book/show/50403471-what-tech-calls-thinking',
			amazon: 'https://amzn.to/4ilurvz',
			home: 'https://www.adriandaub.com/books/what-tech-calls',
		},
		quote: {
			text: "Silicon Valley's rhetoric often starts by invoking the future to better dismiss the claims of the present.",
			attribute: 'Adrian Daub',
		},
		personalComment:
			'Daub unpacks the ideologies behind the tech industry—its myths, mantras, and blind spots. For UX designers, it’s a necessary critique of the narratives that shape product decisions and workplace culture. It helps you spot the limits of disruption, question ethical blind spots, and understand your role in larger systems. As a participant in (and benficiary of) the proliferation of digital platforms, designers must develop a critical distance from the hype and design with integrity. A challenge in an industry that prizes scale over sense.',
	},
	{
		title: "The Whole Internet: User's Guide and Catalog",
		slug: `the-whole-internet-users-guide-and-catalog`,
		authors: [
			{
				name: 'Ed Krol',
				link: 'https://en.wikipedia.org/wiki/Ed_Krol',
			},
		],
		coverImage: '/books/krol.jpg',
		metadata: {
			shortname: 'The Whole Internet',
			blurb: "A time capsule of the web's early spirit that reveals openness, curiosity, and the DIY approach that characterised the birth of the internet.",
			genre: 'Technology',
			pageCount: 640,
			publisher: "O'Reilly Media",
			publishYear: 1992,
		},
		link: {
			wikipedia:
				'https://en.wikipedia.org/wiki/Whole_Internet_User%27s_Guide_and_Catalog',
			goodreads: 'https://www.goodreads.com/book/show/2954315',
			amazon: 'https://amzn.to/42JTG6d',
		},
		quote: {
			text: 'The Internet connects thousands of computer networks around the world. The fact that all these networks can talk to each other is a marvel of modern technology.',
			attribute: 'Ed Krol',
		},
		personalComment:
			"The first book published by O’Reilly Books, 'The Whole Internet' is a a snapshot of the early web: messy, open, and full of possibility. A reminder of the internet’s original spirit: decentralised, user-driven, and experimental. While very outdated, it offers a perspective on how far we’ve come—and what we may have lost. It's important for people building on the internet to reconnect with a more human, curious, and DIY approach to designing spaces.",
	},
];
