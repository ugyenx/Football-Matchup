'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X, Shield } from 'lucide-react';
import { cn } from './ui/Button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Find Players', href: '/players' },
        { name: 'Teams', href: '/teams' },
        { name: 'Matchmaking', href: '/matchmaking' },
        { name: 'Team Balancer', href: '/balancer' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                            <Shield className="w-6 h-6 text-black fill-current" />
                        </div>
                        <span className="text-xl font-bold font-display tracking-tight">
                            Football<span className="text-primary">MatchUp</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium hover:text-white transition-colors">
                            Log In
                        </Link>
                        <Link href="/register">
                            <Button variant="primary" size="sm">
                                Join Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-300 hover:text-white"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/5 animate-fade-in">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3">
                            <Link href="/login">
                                <Button variant="ghost" className="w-full justify-start">Log In</Button>
                            </Link>
                            <Link href="/register">
                                <Button variant="primary" className="w-full">Join Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
