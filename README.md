# Jewelry E-Commerce Store

A modern, responsive e-commerce platform for jewelry products built with Next.js, TypeScript, and Tailwind CSS.
![image](https://github.com/user-attachments/assets/27ac2b69-4d2f-4188-8af1-c46a48969615)

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jewelry-store.git
cd jewelry-store
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── cart/              # Cart page
│   ├── products/          # Products pages
│   │   ├── [id]/         # Product detail pages
│   │   └── page.tsx      # Products listing page
│   └── not-found.tsx     # 404 page
├── components/            # React components
│   ├── client/           # Client-side components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Page footer
│   │   ├── ProductCard.tsx # Product card component
│   │   └── ProductCardList.tsx # List view product card
│   └── ui/               # UI components
├── context/              # React context
│   └── CartContext.tsx   # Shopping cart context
└── data/                 # Static data
    └── products.ts       # Product data
```

## Technologies Used

- **Frontend Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Routing**: Next.js App Router

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)
