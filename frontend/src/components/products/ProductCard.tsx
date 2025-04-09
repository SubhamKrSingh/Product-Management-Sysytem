import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string;
}

export default function ProductCard({ id, name, description, price, imageUrl, category }: ProductCardProps) {
  // Default image if none provided
  const defaultImage = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

  // Category-specific images if no imageUrl is provided
  const getCategoryImage = () => {
    if (!imageUrl) {
      switch (category?.toLowerCase()) {
        case 'headphones':
          return 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        case 'smartwatch':
          return 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        case 'speaker':
          return 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
        default:
          return defaultImage;
      }
    }
    return imageUrl;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={getCategoryImage()} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImage;
          }}
        />
      </div>
      <div className="p-4">
        {category && (
          <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${price.toFixed(2)}</span>
          <Link
            to={`/products/${id}/edit`}
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}