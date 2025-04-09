import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ProductFormData {
  name: string;
  description: string;
  price: number | '';
  category: string;
  imageUrl: string;
}

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditMode = !!id;
  
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (isEditMode) {
      setIsLoading(true);
      // In a real app, you would fetch the product from an API
      // For demo purposes, we'll simulate fetching a product
      setTimeout(() => {
        setFormData({
          name: 'Sample Product',
          description: 'This is a sample product description',
          price: 99.99,
          category: 'Electronics',
          imageUrl: 'https://via.placeholder.com/150'
        });
        setIsLoading(false);
      }, 500);
    }
  }, [id, isEditMode]);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (!formData.name || !formData.description || formData.price === '' || !formData.category) {
      setError('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, you would make an API call to create/update the product
      // For demo purposes, we'll simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      navigate('/products');
    } catch (err) {
      setError('Failed to save product. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isEditMode && isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
        {isEditMode ? 'Edit Product' : 'Add New Product'}
      </h1>
      
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-md overflow-hidden border border-gray-100/20 p-6">
        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 border-l-4 border-red-500">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-sm text-red-700 font-medium">{error}</div>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-200/50 bg-white/50 backdrop-blur-sm placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out sm:text-sm"
              placeholder="Enter product name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-200/50 bg-white/50 backdrop-blur-sm placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out sm:text-sm"
              placeholder="Enter product description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price ($) *
              </label>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-200/50 bg-white/50 backdrop-blur-sm placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out sm:text-sm"
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value ? parseFloat(e.target.value) : '' })}
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-200/50 bg-white/50 backdrop-blur-sm placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out sm:text-sm"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={formData.imageUrl || ''}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="appearance-none relative block w-full px-4 py-3 border border-gray-200/50 bg-white/50 backdrop-blur-sm placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out sm:text-sm"
              placeholder="https://example.com/image.jpg"
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter a URL for the product image
            </p>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                'Save Product'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}