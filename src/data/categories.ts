export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Necklaces",
    slug: "necklaces",
    description: "Elegant necklaces featuring diamonds, pearls, and gold chains. Perfect for both everyday wear and special occasions.",
    image: "/images/1.jpg",
    productCount: 3
  },
  {
    id: 2,
    name: "Earrings",
    slug: "earrings",
    description: "Beautiful earrings including diamond studs, gold hoops, and pearl drops. Add sparkle to any outfit.",
    image: "/images/4.jpg",
    productCount: 3
  },
  {
    id: 3,
    name: "Rings",
    slug: "rings",
    description: "Stunning rings from engagement rings to statement pieces. Find the perfect ring for any occasion.",
    image: "/images/7.jpg",
    productCount: 3
  },
  {
    id: 4,
    name: "Bracelets",
    slug: "bracelets",
    description: "Elegant bracelets including tennis bracelets, charm bracelets, and bangles. Complete your jewelry collection.",
    image: "/images/10.jpg",
    productCount: 3
  }
]; 