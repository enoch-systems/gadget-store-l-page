'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/lib/data';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';
import ProductSkeleton from './ProductSkeleton';

interface ProductGridProps {
  showViewAllButton?: boolean;
  isMenuOpen?: boolean;
}

export default function ProductGrid({ showViewAllButton = true, isMenuOpen = false }: ProductGridProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const filteredProducts = products;

  return (
    <section className="py-10 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-200 rounded-2xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <ProductSkeleton key={index} />)
          : displayedProducts.map((product) => (
              <div
                key={product.id}
                className="animate-in fade-in duration-500"
              >
                <ProductCard product={product} isMenuOpen={isMenuOpen} />
              </div>
            ))}
      </div>
      {!showViewAllButton && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <span className="text-gray-900 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm hover:shadow-md"
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      {showViewAllButton && (
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          >
            Discover More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
