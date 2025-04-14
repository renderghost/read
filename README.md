# Readerghost

A personal book collection showcase built with Next.js 15.3, TypeScript, and Tailwind CSS. This application displays a curated collection of influential books that have shaped thoughts and perspectives across various domains including design, technology, philosophy, and art.

## Features

- 📚 **Curated Book Collection**: Showcase of carefully selected books with cover images and detailed metadata
- 📝 **Personal Insights**: Each book entry includes personal comments on its impact and relevance
- 🔗 **External Resources**: Direct links to Amazon, Goodreads, Wikipedia, and official book websites
- 📱 **Responsive Design**: Clean, accessible interface that works across all devices using Tailwind CSS 3
- 🚀 **Modern Stack**: Built with Next.js 15.3, React 19, and TypeScript for optimal performance

## Technical Stack

- **Framework**: Next.js 15.3
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Development**:
  - Turbopack for fast development builds
  - ESLint for code quality
  - Prettier for consistent formatting

## Project Structure

```
read/
├── public/
│   └── books/          # Book cover images
├── src/
│   ├── app/
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Home page component
│   ├── components/     # Reusable components
│   │   ├── Book.tsx
│   │   ├── BookList.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── constants/
│   │   └── books.ts    # Book collection data
│   └── types/
│       └── Book.ts     # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd read
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000` with Turbopack enabled for faster development builds.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This project is optimized for deployment on Vercel. The easiest way to deploy is directly through the [Vercel Platform](https://vercel.com/new).

## Development Guidelines

### Code Style

- Use TypeScript for all components and functions
- Follow ESLint rules for consistent code quality
- Prettier configuration:
  - Print Width: 200
  - Prose Wrap: never

### Component Structure

- Components follow the 'bones' design system naming convention (e.g., 'bones-card')
- Each component should be a standalone module with its own types and styles
- Use TypeScript interfaces for prop definitions

### Asset Management

- Book cover images go in `/public/books/`
- Images should be optimized for web usage
- Follow the established naming convention for new assets

### Security

- SSH access to local development server (192.168.178.100) and GitHub is configured
- Keys are managed through 1Password for enhanced security
- Password authentication is set as the preferred method

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please open an issue in the GitHub repository.

## Additional Technical Notes

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and includes:

- [Geist Font](https://vercel.com/font) automatically optimized via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- Hot module replacement with auto-updating as you edit files

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - comprehensive guides and API references
- [Learn Next.js](https://nextjs.org/learn) - interactive tutorial
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
