import Image from 'next/image';
import Layout from '@/components/client/Layout';
import { Users, Award, Heart, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopEase</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted destination for quality products and exceptional shopping experiences.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, ShopEase began with a simple mission: to make online shopping
              easy, enjoyable, and accessible to everyone. We believe that everyone deserves
              access to quality products at fair prices.
            </p>
            <p className="text-gray-600">
              Today, we've grown into a trusted e-commerce platform serving customers
              worldwide. Our commitment to quality, customer service, and innovation
              continues to drive our success.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/about-story.jpg"
              alt="Our Story"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Customer First</h3>
              <p className="text-gray-600 text-center">
                We prioritize our customers' needs and satisfaction above all else.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                We maintain the highest standards in product quality and service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                We conduct business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Trust</h3>
              <p className="text-gray-600 text-center">
                We build lasting relationships based on trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'John Doe',
              role: 'CEO & Founder',
              image: '/images/team-1.jpg',
            },
            {
              name: 'Jane Smith',
              role: 'Head of Operations',
              image: '/images/team-2.jpg',
            },
            {
              name: 'Mike Johnson',
              role: 'Customer Experience Director',
              image: '/images/team-3.jpg',
            },
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 