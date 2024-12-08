import React from 'react';
import { Youtube } from 'lucide-react';
import { Container } from './ui/Container';
import { Navigation } from './layout/Navigation';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Youtube className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">YT Downloader</span>
          </div>
          <Navigation items={navItems} />
        </div>
      </Container>
    </header>
  );
}