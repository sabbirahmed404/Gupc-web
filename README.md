# GUPC - Green University Photography Club Website

<p align="center">
  <img src="public/assets/logo(black).svg" alt="GUPC Logo" width="150" />
</p>

<p align="center">
  A modern, responsive landing page was built with Next.js and Tailwind CSS for the Green University Photography Club. 
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#folder-structure">Folder Structure</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## Features

### ✨ Modern UI/UX
- Sleek and responsive design
- Smooth animations and transitions
- Optimized for all devices

### 📱 Fully Responsive
- Mobile-first approach
- Adapts to any screen size
- Optimized navigation for small screens

### 🖼️ Dynamic Photo Gallery
- Showcase photography work
- Image slider with smooth transitions
- Instagram-style gallery section

### 👥 Committee Page
- Showcase club members and leadership
- Year-based filtering (2024, 2025)
- Categorized display (Moderators, Advisors, Executives)

### 📞 Contact Section
- Easy to use contact form
- Social media integration
- Location map

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Vercel/Netlify

## Demo

Visit the live demo: [https://gupc.vercel.app](https://gupc.vercel.app)

![Website Preview](public/assets/preview.png)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-tailwind-landing-page.git
cd nextjs-tailwind-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables (if needed):
```
NEXT_PUBLIC_EXAMPLE_VAR=your_value_here
```

## Usage

### Development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production

```bash
npm run build
# or
yarn build
```

### Start production server

```bash
npm start
# or
yarn start
```

## Folder Structure

```
nextjs-tailwind-landing-page/
├── components/           # React components
│   ├── Committee/        # Committee page components
│   ├── Contact/          # Contact form components
│   ├── Footer/           # Footer component
│   ├── Hero/             # Hero section component
│   ├── InstagramGallery/ # Instagram gallery components
│   ├── NavigationBar/    # Navigation components
│   ├── Portfolio/        # Portfolio components
│   └── Slider/           # Image slider components
├── pages/                # Next.js pages
│   ├── _app.tsx          # Custom App component
│   ├── _document.tsx     # Custom Document component
│   ├── index.tsx         # Home page
│   └── committee.tsx     # Committee page
├── public/               # Static assets
│   └── assets/           # Images, SVGs, etc.
├── styles/               # Global styles
│   └── globals.css       # Global CSS
├── .next/                # Next.js build output
├── node_modules/         # Node.js dependencies
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the code style of the project.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Used the template from https://github.com/Ebazhanov/nextjs-tailwind-landing-page
</p>
