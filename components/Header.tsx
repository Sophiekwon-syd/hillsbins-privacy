import React from 'react';
import { Trash2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
            <Trash2 size={20} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">HillsBins</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Support</a>
          <a href="#" className="text-sm font-medium text-brand-600">Privacy</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;