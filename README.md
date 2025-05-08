# E-commerce Store

A modern e-commerce platform built with Next.js, TypeScript, and Stripe integration.

## Features

- 🛍️ Product browsing and search
- 🛒 Shopping cart functionality
- 💳 Secure checkout with Stripe
- 🔐 User authentication
- 📱 Responsive design
- 🔔 Real-time notifications
- 📦 Order management
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Stripe
- **Icons**: Lucide Icons
- **State Management**: React Context
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Database (if using)
DATABASE_URL=your_database_url
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-commerce.git
cd e-commerce
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
│   ├── api/               # API routes
│   ├── checkout/          # Checkout pages
│   └── products/          # Product pages
├── components/            # React components
│   ├── client/           # Client-side components
│   └── server/           # Server-side components
├── context/              # React Context providers
├── lib/                  # Utility functions
└── types/               # TypeScript type definitions
```

## Key Features Implementation

### Shopping Cart
- Persistent cart state using React Context
- Add/remove items
- Update quantities
- Price calculations

### Checkout Process
1. Cart review
2. Shipping information
3. Payment with Stripe
4. Order confirmation
5. Email notifications

### Notifications
- Toast notifications for:
  - Successful payments
  - Order updates
  - Error messages
- Real-time updates using webhooks

## Testing

```bash
# Run tests
npm run test
# or
yarn test
```

## Deployment

The project can be deployed to Vercel:

```bash
npm run build
# or
yarn build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Stripe](https://stripe.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
