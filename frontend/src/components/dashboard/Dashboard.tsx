import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface DashboardStats {
  totalProducts: number;
  totalCategories: number;
  recentProducts: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  createdAt: string;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalCategories: 0,
    recentProducts: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalProducts: 24,
        totalCategories: 5,
        recentProducts: [
          { id: '1', name: 'Wireless Headphones', price: 89.99, category: 'Electronics', createdAt: '2023-05-15' },
          { id: '2', name: 'Running Shoes', price: 129.99, category: 'Sports', createdAt: '2023-05-14' },
          { id: '3', name: 'Coffee Maker', price: 59.99, category: 'Home & Garden', createdAt: '2023-05-12' },
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600">Welcome to your product management dashboard.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-100/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm font-medium uppercase">Total Products</p>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalProducts}</h3>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              View all products →
            </Link>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-100/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm font-medium uppercase">Categories</p>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalCategories}</h3>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/products" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              View categories →
            </Link>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-100/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-pink-100 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm font-medium uppercase">Add Product</p>
              <h3 className="text-xl font-bold text-gray-900">Create New</h3>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/products/new" className="text-pink-600 hover:text-pink-800 text-sm font-medium">
              Add new product →
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-100/20">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Recent Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Added
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/50 divide-y divide-gray-200">
              {stats.recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${product.price.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.createdAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/products/${product.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <Link to="/products" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
            View all products →
          </Link>
        </div>
      </div>
    </div>
  );
}