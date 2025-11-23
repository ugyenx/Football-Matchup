'use client';

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MapPin, Calendar, Users, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const MOCK_MATCHES = [
    {
        id: 1,
        teamName: "Thunder FC",
        rating: 8.5,
        location: "Central Park Ground",
        date: "Today, 20:00",
        players: "6/7",
        type: "Friendly",
        status: "Open"
    },
    {
        id: 2,
        teamName: "Red Devils Local",
        rating: 7.2,
        location: "Sports Complex Arena",
        date: "Tomorrow, 18:00",
        players: "5/5",
        type: "Competitive",
        status: "Full"
    },
    {
        id: 3,
        teamName: "Weekend Warriors",
        rating: 6.8,
        location: "Community Field",
        date: "Sat, 16:00",
        players: "3/7",
        type: "Friendly",
        status: "Open"
    },
    {
        id: 4,
        teamName: "Elite Strikers",
        rating: 9.1,
        location: "Stadium Annex",
        date: "Sun, 19:00",
        players: "10/11",
        type: "Tournament",
        status: "Open"
    }
];

export default function Matchmaking() {
    const [search, setSearch] = useState('');

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="pt-32 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 animate-fade-in">
                    <div>
                        <h1 className="text-4xl font-bold font-display mb-2">Find a Match</h1>
                        <p className="text-gray-400">Challenge local teams or join a game nearby.</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                placeholder="Search teams or locations..."
                                className="pl-10"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button variant="secondary" className="px-3">
                            <Filter className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_MATCHES.map((match, i) => (
                        <div
                            key={match.id}
                            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group animate-slide-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                                        {match.teamName}
                                    </h3>
                                    <div className="flex items-center gap-1 text-sm text-primary mt-1">
                                        <span className="font-bold">{match.rating}</span>
                                        <span className="text-gray-500 text-xs">Team Rating</span>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${match.status === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {match.status}
                                </span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    {match.location}
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    {match.date}
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <Users className="w-4 h-4 text-gray-500" />
                                    {match.players} Players • {match.type}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button className="flex-1" disabled={match.status !== 'Open'}>
                                    Challenge
                                </Button>
                                <Button variant="ghost" className="flex-1">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
