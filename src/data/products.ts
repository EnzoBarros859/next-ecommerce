export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const products: Product[] = [
  // Necklaces (25 products)
  {
    id: 1,
    title: "Diamond Solitaire Necklace",
    price: 999.99,
    description: "Elegant 14K white gold necklace featuring a brilliant-cut diamond solitaire.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.9,
      count: 280
    }
  },
  {
    id: 2,
    title: "Pearl Pendant Necklace",
    price: 299.99,
    description: "Classic 14K gold necklace with a lustrous freshwater pearl pendant.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 190
    }
  },
  {
    id: 3,
    title: "Gold Chain Necklace",
    price: 199.99,
    description: "18K gold chain necklace with a delicate and timeless design.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.6,
      count: 320
    }
  },
  {
    id: 4,
    title: "Diamond Tennis Necklace",
    price: 2499.99,
    description: "Luxurious 14K white gold necklace with a continuous line of brilliant-cut diamonds.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 150
    }
  },
  {
    id: 5,
    title: "Pearl Strand Necklace",
    price: 399.99,
    description: "Classic strand of freshwater pearls with a 14K gold clasp.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 210
    }
  },
  {
    id: 6,
    title: "Gold Rope Chain Necklace",
    price: 299.99,
    description: "18K gold rope chain necklace with a secure lobster clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.5,
      count: 180
    }
  },
  {
    id: 7,
    title: "Diamond Heart Pendant",
    price: 799.99,
    description: "14K white gold heart pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 240
    }
  },
  {
    id: 8,
    title: "Pearl Drop Necklace",
    price: 349.99,
    description: "Elegant 14K gold necklace with a pearl drop pendant.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.6,
      count: 170
    }
  },
  {
    id: 9,
    title: "Gold Figaro Chain",
    price: 249.99,
    description: "Classic 18K gold Figaro chain with a secure clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.7,
      count: 220
    }
  },
  {
    id: 10,
    title: "Diamond Cross Pendant",
    price: 599.99,
    description: "14K white gold cross pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.9,
      count: 190
    }
  },
  {
    id: 11,
    title: "Pearl Choker Necklace",
    price: 449.99,
    description: "Elegant choker necklace with freshwater pearls and 14K gold.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 160
    }
  },
  {
    id: 12,
    title: "Gold Box Chain Necklace",
    price: 199.99,
    description: "18K gold box chain necklace with a secure clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.6,
      count: 210
    }
  },
  {
    id: 13,
    title: "Diamond Initial Pendant",
    price: 699.99,
    description: "14K white gold initial pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 180
    }
  },
  {
    id: 14,
    title: "Pearl Lariat Necklace",
    price: 399.99,
    description: "Versatile pearl lariat necklace with 14K gold accents.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 150
    }
  },
  {
    id: 15,
    title: "Gold Cuban Chain",
    price: 349.99,
    description: "18K gold Cuban chain with a secure clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.6,
      count: 190
    }
  },
  {
    id: 16,
    title: "Diamond Infinity Pendant",
    price: 899.99,
    description: "14K white gold infinity pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 170
    }
  },
  {
    id: 17,
    title: "Pearl Y-Necklace",
    price: 299.99,
    description: "Elegant Y-necklace with freshwater pearls and 14K gold.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 140
    }
  },
  {
    id: 18,
    title: "Gold Snake Chain",
    price: 179.99,
    description: "18K gold snake chain with a secure clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.5,
      count: 200
    }
  },
  {
    id: 19,
    title: "Diamond Star Pendant",
    price: 799.99,
    description: "14K white gold star pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 160
    }
  },
  {
    id: 20,
    title: "Pearl Multi-Strand Necklace",
    price: 499.99,
    description: "Elegant multi-strand pearl necklace with 14K gold accents.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 21,
    title: "Gold Wheat Chain",
    price: 229.99,
    description: "18K gold wheat chain with a secure clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.6,
      count: 180
    }
  },
  {
    id: 22,
    title: "Diamond Moon Pendant",
    price: 699.99,
    description: "14K white gold moon pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 150
    }
  },
  {
    id: 23,
    title: "Pearl Statement Necklace",
    price: 449.99,
    description: "Bold statement necklace with freshwater pearls and 14K gold.",
    category: "necklaces",
    image: "/images/2.jpg",
    rating: {
      rate: 4.7,
      count: 120
    }
  },
  {
    id: 24,
    title: "Gold Byzantine Chain",
    price: 279.99,
    description: "18K gold Byzantine chain with a secure clasp.",
    category: "necklaces",
    image: "/images/3.jpg",
    rating: {
      rate: 4.6,
      count: 170
    }
  },
  {
    id: 25,
    title: "Diamond Sun Pendant",
    price: 899.99,
    description: "14K white gold sun pendant with diamond accents.",
    category: "necklaces",
    image: "/images/1.jpg",
    rating: {
      rate: 4.8,
      count: 140
    }
  },

  // Earrings (25 products)
  {
    id: 26,
    title: "Diamond Stud Earrings",
    price: 799.99,
    description: "Classic 14K white gold diamond stud earrings, perfect for everyday wear.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 250
    }
  },
  {
    id: 27,
    title: "Gold Hoop Earrings",
    price: 149.99,
    description: "Classic 14K gold hoop earrings, perfect for everyday wear or special occasions.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 410
    }
  },
  {
    id: 28,
    title: "Pearl Drop Earrings",
    price: 249.99,
    description: "Elegant 14K gold earrings featuring freshwater pearl drops.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 180
    }
  },
  {
    id: 29,
    title: "Diamond Halo Earrings",
    price: 1299.99,
    description: "14K white gold earrings with a center diamond surrounded by a halo of smaller diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.9,
      count: 120
    }
  },
  {
    id: 30,
    title: "Gold Huggie Hoops",
    price: 199.99,
    description: "14K gold huggie hoop earrings with a secure hinge closure.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 280
    }
  },
  {
    id: 31,
    title: "Pearl Stud Earrings",
    price: 179.99,
    description: "Classic freshwater pearl stud earrings with 14K gold posts.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 210
    }
  },
  {
    id: 32,
    title: "Diamond Dangle Earrings",
    price: 999.99,
    description: "14K white gold dangle earrings with brilliant-cut diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 150
    }
  },
  {
    id: 33,
    title: "Gold Threader Earrings",
    price: 129.99,
    description: "14K gold threader earrings with a delicate chain design.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 190
    }
  },
  {
    id: 34,
    title: "Pearl Cluster Earrings",
    price: 299.99,
    description: "14K gold earrings featuring a cluster of freshwater pearls.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 140
    }
  },
  {
    id: 35,
    title: "Diamond Chandelier Earrings",
    price: 1499.99,
    description: "14K white gold chandelier earrings with cascading diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.9,
      count: 90
    }
  },
  {
    id: 36,
    title: "Gold Cuff Earrings",
    price: 169.99,
    description: "14K gold cuff earrings with a modern design.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 160
    }
  },
  {
    id: 37,
    title: "Pearl Hoop Earrings",
    price: 229.99,
    description: "14K gold hoop earrings with freshwater pearl accents.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 130
    }
  },
  {
    id: 38,
    title: "Diamond Teardrop Earrings",
    price: 1199.99,
    description: "14K white gold teardrop earrings with brilliant-cut diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 110
    }
  },
  {
    id: 39,
    title: "Gold Geometric Earrings",
    price: 159.99,
    description: "14K gold geometric earrings with a modern design.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 150
    }
  },
  {
    id: 40,
    title: "Pearl Button Earrings",
    price: 199.99,
    description: "Classic button earrings with freshwater pearls and 14K gold.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 120
    }
  },
  {
    id: 41,
    title: "Diamond Marquise Earrings",
    price: 899.99,
    description: "14K white gold earrings with marquise-cut diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 100
    }
  },
  {
    id: 42,
    title: "Gold Tassel Earrings",
    price: 139.99,
    description: "14K gold tassel earrings with a playful design.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 140
    }
  },
  {
    id: 43,
    title: "Pearl Dangle Earrings",
    price: 279.99,
    description: "14K gold dangle earrings with freshwater pearl accents.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 110
    }
  },
  {
    id: 44,
    title: "Diamond Oval Earrings",
    price: 1099.99,
    description: "14K white gold earrings with oval-cut diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 90
    }
  },
  {
    id: 45,
    title: "Gold Bar Earrings",
    price: 119.99,
    description: "14K gold bar earrings with a minimalist design.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 46,
    title: "Pearl Stud Hoops",
    price: 249.99,
    description: "14K gold hoop earrings with freshwater pearl stud accents.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 100
    }
  },
  {
    id: 47,
    title: "Diamond Princess Earrings",
    price: 999.99,
    description: "14K white gold earrings with princess-cut diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 80
    }
  },
  {
    id: 48,
    title: "Gold Circle Earrings",
    price: 109.99,
    description: "14K gold circle earrings with a simple design.",
    category: "earrings",
    image: "/images/5.jpg",
    rating: {
      rate: 4.7,
      count: 120
    }
  },
  {
    id: 49,
    title: "Pearl Cluster Hoops",
    price: 299.99,
    description: "14K gold hoop earrings with freshwater pearl clusters.",
    category: "earrings",
    image: "/images/6.jpg",
    rating: {
      rate: 4.6,
      count: 90
    }
  },
  {
    id: 50,
    title: "Diamond Heart Earrings",
    price: 799.99,
    description: "14K white gold heart earrings with brilliant-cut diamonds.",
    category: "earrings",
    image: "/images/4.jpg",
    rating: {
      rate: 4.8,
      count: 70
    }
  },

  // Rings (25 products)
  {
    id: 51,
    title: "Diamond Engagement Ring",
    price: 1999.99,
    description: "Stunning 14K white gold engagement ring with a brilliant-cut center diamond.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 150
    }
  },
  {
    id: 52,
    title: "Gold Band Ring",
    price: 199.99,
    description: "Classic 18K gold band ring with a polished finish.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 290
    }
  },
  {
    id: 53,
    title: "Sapphire Cocktail Ring",
    price: 399.99,
    description: "Statement 14K gold ring featuring a vibrant blue sapphire.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 120
    }
  },
  {
    id: 54,
    title: "Diamond Eternity Ring",
    price: 2499.99,
    description: "14K white gold eternity ring with a continuous line of diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 110
    }
  },
  {
    id: 55,
    title: "Gold Stacking Ring",
    price: 149.99,
    description: "18K gold stacking ring with a simple design.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 240
    }
  },
  {
    id: 56,
    title: "Ruby Statement Ring",
    price: 499.99,
    description: "14K gold ring featuring a vibrant red ruby.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 100
    }
  },
  {
    id: 57,
    title: "Diamond Three-Stone Ring",
    price: 1799.99,
    description: "14K white gold ring with three brilliant-cut diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 90
    }
  },
  {
    id: 58,
    title: "Gold Signet Ring",
    price: 299.99,
    description: "18K gold signet ring with a polished surface.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 180
    }
  },
  {
    id: 59,
    title: "Emerald Statement Ring",
    price: 599.99,
    description: "14K gold ring featuring a vibrant green emerald.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 80
    }
  },
  {
    id: 60,
    title: "Diamond Halo Ring",
    price: 1499.99,
    description: "14K white gold ring with a center diamond surrounded by a halo of smaller diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 70
    }
  },
  {
    id: 61,
    title: "Gold Knuckle Ring",
    price: 179.99,
    description: "18K gold knuckle ring with a modern design.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 150
    }
  },
  {
    id: 62,
    title: "Amethyst Statement Ring",
    price: 349.99,
    description: "14K gold ring featuring a vibrant purple amethyst.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 60
    }
  },
  {
    id: 63,
    title: "Diamond Solitaire Ring",
    price: 1299.99,
    description: "14K white gold ring with a single brilliant-cut diamond.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 50
    }
  },
  {
    id: 64,
    title: "Gold Mid-Ring",
    price: 159.99,
    description: "18K gold mid-ring with a simple design.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 130
    }
  },
  {
    id: 65,
    title: "Topaz Statement Ring",
    price: 299.99,
    description: "14K gold ring featuring a vibrant blue topaz.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 50
    }
  },
  {
    id: 66,
    title: "Diamond Cluster Ring",
    price: 999.99,
    description: "14K white gold ring with a cluster of brilliant-cut diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 40
    }
  },
  {
    id: 67,
    title: "Gold Pinky Ring",
    price: 139.99,
    description: "18K gold pinky ring with a simple design.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 110
    }
  },
  {
    id: 68,
    title: "Garnet Statement Ring",
    price: 249.99,
    description: "14K gold ring featuring a vibrant red garnet.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 40
    }
  },
  {
    id: 69,
    title: "Diamond Band Ring",
    price: 899.99,
    description: "14K white gold band ring with a line of brilliant-cut diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 30
    }
  },
  {
    id: 70,
    title: "Gold Thumb Ring",
    price: 119.99,
    description: "18K gold thumb ring with a simple design.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 90
    }
  },
  {
    id: 71,
    title: "Citrine Statement Ring",
    price: 199.99,
    description: "14K gold ring featuring a vibrant yellow citrine.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 30
    }
  },
  {
    id: 72,
    title: "Diamond Chevron Ring",
    price: 799.99,
    description: "14K white gold chevron ring with brilliant-cut diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 20
    }
  },
  {
    id: 73,
    title: "Gold Adjustable Ring",
    price: 99.99,
    description: "18K gold adjustable ring with a simple design.",
    category: "rings",
    image: "/images/8.jpg",
    rating: {
      rate: 4.7,
      count: 70
    }
  },
  {
    id: 74,
    title: "Peridot Statement Ring",
    price: 179.99,
    description: "14K gold ring featuring a vibrant green peridot.",
    category: "rings",
    image: "/images/9.jpg",
    rating: {
      rate: 4.8,
      count: 20
    }
  },
  {
    id: 75,
    title: "Diamond Wave Ring",
    price: 699.99,
    description: "14K white gold wave ring with brilliant-cut diamonds.",
    category: "rings",
    image: "/images/7.jpg",
    rating: {
      rate: 4.9,
      count: 10
    }
  },

  // Bracelets (25 products)
  {
    id: 76,
    title: "Diamond Tennis Bracelet",
    price: 1499.99,
    description: "Elegant 14K white gold bracelet with a continuous line of brilliant-cut diamonds.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.9,
      count: 95
    }
  },
  {
    id: 77,
    title: "Silver Charm Bracelet",
    price: 79.99,
    description: "Sterling silver charm bracelet with customizable charms, perfect for personalization.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 530
    }
  },
  {
    id: 78,
    title: "Gold Bangle Bracelet",
    price: 299.99,
    description: "Classic 18K gold bangle bracelet with a polished finish.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 210
    }
  },
  {
    id: 79,
    title: "Diamond Line Bracelet",
    price: 1299.99,
    description: "14K white gold bracelet with a line of brilliant-cut diamonds.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.9,
      count: 80
    }
  },
  {
    id: 80,
    title: "Silver Chain Bracelet",
    price: 69.99,
    description: "Sterling silver chain bracelet with a secure clasp.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 450
    }
  },
  {
    id: 81,
    title: "Gold Cuff Bracelet",
    price: 249.99,
    description: "18K gold cuff bracelet with a polished finish.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 180
    }
  },
  {
    id: 82,
    title: "Diamond Beaded Bracelet",
    price: 999.99,
    description: "14K white gold bracelet with diamond beads.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 70
    }
  },
  {
    id: 83,
    title: "Silver Bangle Bracelet",
    price: 59.99,
    description: "Sterling silver bangle bracelet with a polished finish.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 380
    }
  },
  {
    id: 84,
    title: "Gold Link Bracelet",
    price: 199.99,
    description: "18K gold link bracelet with a secure clasp.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 150
    }
  },
  {
    id: 85,
    title: "Diamond Station Bracelet",
    price: 899.99,
    description: "14K white gold bracelet with diamond stations.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 60
    }
  },
  {
    id: 86,
    title: "Silver Cuff Bracelet",
    price: 49.99,
    description: "Sterling silver cuff bracelet with a polished finish.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 320
    }
  },
  {
    id: 87,
    title: "Gold Beaded Bracelet",
    price: 179.99,
    description: "18K gold bracelet with gold beads.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 120
    }
  },
  {
    id: 88,
    title: "Diamond Charm Bracelet",
    price: 799.99,
    description: "14K white gold bracelet with diamond charms.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 50
    }
  },
  {
    id: 89,
    title: "Silver Link Bracelet",
    price: 39.99,
    description: "Sterling silver link bracelet with a secure clasp.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 270
    }
  },
  {
    id: 90,
    title: "Gold Station Bracelet",
    price: 159.99,
    description: "18K gold bracelet with gold stations.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 90
    }
  },
  {
    id: 91,
    title: "Diamond Beaded Cuff",
    price: 699.99,
    description: "14K white gold cuff with diamond beads.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 40
    }
  },
  {
    id: 92,
    title: "Silver Beaded Bracelet",
    price: 29.99,
    description: "Sterling silver bracelet with silver beads.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 220
    }
  },
  {
    id: 93,
    title: "Gold Charm Bracelet",
    price: 139.99,
    description: "18K gold bracelet with gold charms.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 60
    }
  },
  {
    id: 94,
    title: "Diamond Link Cuff",
    price: 599.99,
    description: "14K white gold cuff with diamond links.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 30
    }
  },
  {
    id: 95,
    title: "Silver Station Bracelet",
    price: 19.99,
    description: "Sterling silver bracelet with silver stations.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 170
    }
  },
  {
    id: 96,
    title: "Gold Beaded Cuff",
    price: 119.99,
    description: "18K gold cuff with gold beads.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 30
    }
  },
  {
    id: 97,
    title: "Diamond Chain Bracelet",
    price: 499.99,
    description: "14K white gold bracelet with diamond chain links.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 20
    }
  },
  {
    id: 98,
    title: "Silver Beaded Cuff",
    price: 9.99,
    description: "Sterling silver cuff with silver beads.",
    category: "bracelets",
    image: "/images/11.jpg",
    rating: {
      rate: 4.6,
      count: 120
    }
  },
  {
    id: 99,
    title: "Gold Chain Bracelet",
    price: 99.99,
    description: "18K gold bracelet with gold chain links.",
    category: "bracelets",
    image: "/images/12.jpg",
    rating: {
      rate: 4.7,
      count: 20
    }
  },
  {
    id: 100,
    title: "Diamond Beaded Chain",
    price: 399.99,
    description: "14K white gold chain bracelet with diamond beads.",
    category: "bracelets",
    image: "/images/10.jpg",
    rating: {
      rate: 4.8,
      count: 10
    }
  }
]; 