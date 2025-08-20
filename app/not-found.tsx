'use client';

import Link from 'next/link';
import {Home, ArrowLeft, Search} from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-900/10 to-blue-900/5"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track to transforming your business.
            </p>
          </div>

          {/* Search Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/en">
              <button className="px-8 py-4 h-14 cursor-pointer bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 h-14 cursor-pointer border-2 border-blue-900 text-blue-200 font-semibold rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-12">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Need Help?
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                If you&apos;re looking for our services, check out our main sections:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/en#services" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                  Services
                </Link>
                <span className="text-gray-500">•</span>
                <Link href="/en#projects" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                  Projects
                </Link>
                <span className="text-gray-500">•</span>
                <Link href="/en#about" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                  About
                </Link>
                <span className="text-gray-500">•</span>
                <Link href="/en#contact" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
