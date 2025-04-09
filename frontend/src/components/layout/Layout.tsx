import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          {children}
        </div>
      </main>
      <footer className="bg-white shadow-inner py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Product Manager. All rights reserved.
        </div>
      </footer>
    </div>
  );
}