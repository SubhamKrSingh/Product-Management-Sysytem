import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: Replace with actual auth state
  const isAuthenticated = true;

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Product Management
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/products" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                  <span className="relative">Products
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </span>
                </Link>
                <Link to="/products/new" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                  <span className="relative">Add Product
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                  <span className="relative">Login
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </span>
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm">
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                <Link to="/products" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                  Products
                </Link>
                <Link to="/products/new" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                  Add Product
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md text-base font-medium hover:from-indigo-700 hover:to-purple-700 backdrop-blur-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
                <Link to="/register" className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-md text-base font-medium hover:from-indigo-700 hover:to-purple-700 backdrop-blur-sm">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;