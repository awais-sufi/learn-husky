# Landing Page Template built with Next JS 16+, Tailwind CSS 4 and TypeScript

🚀 Landing Page theme written in Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a [Next js templates demo](https://creativedesignsguru.com/demo/nextjs-landing-page/).

### Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 19
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE theme
- 💯 Maximize lighthouse score

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- pnpm package manager (install with `npm install -g pnpm` or `corepack enable`)

### Why pnpm?

- **Faster installs**: Up to 2x faster than npm/yarn
- **Disk space efficient**: Uses hard links and symlinks to avoid duplication
- **Strict**: Prevents phantom dependencies and ensures reproducible builds
- **Monorepo friendly**: Excellent workspace support

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd alasan-onbarder
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

### Development

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm type-check` - Run TypeScript type checking

### Code Quality

- `pnpm lint` - Run ESLint on all files
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### Package Management

- `pnpm install` - Install all dependencies
- `pnpm add <package>` - Add a new dependency
- `pnpm add -D <package>` - Add a new dev dependency
- `pnpm remove <package>` - Remove a dependency
- `pnpm update` - Update all dependencies
- `pnpm outdated` - Check for outdated packages
- `pnpm audit` - Check for security vulnerabilities

### Useful pnpm Commands

- `pnpm list` - List installed packages
- `pnpm why <package>` - Show why a package is installed
- `pnpm exec <command>` - Run a command in the project context
- `pnpm run <script>` - Run a specific script

## 🔧 Code Quality

This project enforces strict code quality standards:

### ESLint Rules

- TypeScript strict mode enabled
- No `any` types allowed
- Explicit return types required
- Unused variables are errors
- React hooks exhaustive dependencies
- And many more strict rules

### Prettier Configuration

- Single quotes
- Semicolons required
- 2-space indentation
- Trailing commas in ES5
- Print width: 80 characters

### Pre-commit Hooks

- **TypeScript type checking** - Ensures no type errors
- **ESLint** - Runs linting on all files
- **Prettier format check** - Ensures code is properly formatted
- **Lint-staged** - Runs linting and formatting on staged files
- **Commit message validation** - Enforces conventional commit format
- **Pre-push build check** - Ensures project builds successfully

## 🚀 GitHub Actions

This project includes automated lint and format checking:

### Lint and Format Check

Runs on every push and pull request to ensure code quality:

- TypeScript type checking
- ESLint linting
- Prettier format checking

### Workflow File

- `.github/workflows/lint-and-format.yml` - Lint and format checks
- `.github/README.md` - Detailed workflow documentation

### Status Badge

The project includes a status badge that shows the current state of the workflow. Update the repository URL in the badge link to match your repository.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## 🎨 Styling

This project uses Tailwind CSS v4 for styling. The configuration is located in `tailwind.config.ts`.

### Adding New Styles

- Use Tailwind utility classes directly in JSX
- For custom styles, add them to `src/app/globals.css`
- Tailwind CSS v4 uses the new `@tailwindcss/postcss` plugin

## 📦 Package Management

This project uses pnpm for package management. The `packageManager` field in `package.json` ensures consistent package manager usage across the team.

### Key Files

- `package.json` - Project dependencies and scripts
- `pnpm-lock.yaml` - Lockfile for reproducible installs
- `packageManager` field specifies pnpm@10.16.1

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Build for Production

```bash
pnpm build
pnpm start
```

### Deployment Platforms

- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Static site hosting
- **Docker** - Containerized deployment

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

1. Install dependencies: `pnpm install`
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and ensure they pass:
   - `pnpm lint` - No linting errors
   - `pnpm format:check` - Code is properly formatted
   - `pnpm type-check` - No TypeScript errors
   - `pnpm build` - Builds successfully
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is public and proprietary to Awais-sufi.
