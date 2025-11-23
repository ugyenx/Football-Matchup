'use client';

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Filter, MapPin, Activity } from 'lucide-react';
import { useState } from 'react';

const MOCK_PLAYERS = [
    {
        id: 1,
        name: "Marcus Silva",
        position: "FW",
        rating: 8.7,
        location: "Downtown",
        foot: "Right",
        stats: { speed: 9, shooting: 8, dribbling: 9 },
        available: true
    },
    {
        id: 2,
        name: "Alex Chen",
        position: "MF",
        rating: 7.9,
        location: "Westside",
        foot: "Left",
        stats: { passing: 9, stamina: 8, dribbling: 7 },
        available: true
    },
    {
        id: 3,
        name: "Jordan Taylor",
        position: "DF",
        rating: 8.2,
        location: "Central",
        foot: "Right",
        stats: { defense: 9, physicality: 8, stamina: 8 },
        available: false
    },
    {
        id: 4,
        name: "Sam Rodriguez",
        position: "GK",
        rating: 8.5,
        location: "Eastside",
        foot: "Right",
        stats: { defense: 9, physicality: 9, stamina: 7 },
        available: true
    },
    {
        id: 5,
        name: "Riley Johnson",
        position: "MF",
        rating: 7.5,
        location: "Downtown",
        foot: "Both",
        stats: { passing: 8, stamina: 9, speed: 7 },
        available: true
    },
    {
        id: 6,
        name: "Casey Williams",
        position: "FW",
        rating: 8.1,
        location: "Northside",
        foot: "Left",
        stats: { shooting: 9, speed: 8, dribbling: 8 },
        available: true
    }
];

const POSITION_COLORS: Record<string, string> = {
    'GK': 'bg-yellow-500/20 text-yellow-400',
    'DF': 'bg-blue-500/20 text-blue-400',
    'MF': 'bg-green-500/20 text-green-400',
    'FW': 'bg-red-500/20 text-red-400'
};

export default function Players() {
    const [search, setSearch] = useState('');
    const [selectedPosition, setSelectedPosition] = useState<string>('All');

    const filteredPlayers = MOCK_PLAYERS.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(search.toLowerCase()) ||
            player.location.toLowerCase().includes(search.toLowerCase());
        const matchesPosition = selectedPosition === 'All' || player.position === selectedPosition;
        return matchesSearch && matchesPosition;
    });

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="pt-32 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 animate-fade-in">
                    <div>
                        <h1 className="text-4xl font-bold font-display mb-2">Find Players</h1>
                        <p className="text-gray-400">Connect with talented players in your area.</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="glass rounded-2xl p-6 mb-8 animate-slide-up">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                placeholder="Search by name or location..."
                                className="pl-10"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            {['All', 'GK', 'DF', 'MF', 'FW'].map((pos) => (
                                <Button
                                    key={pos}
                                    variant={selectedPosition === pos ? 'primary' : 'glass'}
                                    size="sm"
                                    onClick={() => setSelectedPosition(pos)}
                                    className="min-w-[60px]"
                                >
                                    {pos}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Players Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPlayers.map((player, i) => (
                        <div
                            key={player.id}
                            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group animate-slide-up"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-black">
                                        {player.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-display group-hover:text-primary transition-colors">
                                            {player.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <MapPin className="w-3 h-3" />
                                            {player.location}
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${POSITION_COLORS[player.position]}`}>
                                    {player.position}
                                </span>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-400">Overall Rating</span>
                                    <span className="text-2xl font-bold text-primary">{player.rating}</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                                        style={{ width: `${player.rating * 10}%` }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                                {Object.entries(player.stats).slice(0, 3).map(([key, value]) => (
                                    <div key={key} className="bg-white/5 rounded-lg p-2 text-center">
                                        <div className="text-gray-400 capitalize">{key}</div>
                                        <div className="font-bold text-primary">{value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mb-4 text-sm">
                                <span className="text-gray-400">Preferred Foot:</span>
                                <span className="font-medium">{player.foot}</span>
                            </div>

                            <div className="flex gap-2">
                                <Button className="flex-1" disabled={!player.available}>
                                    {player.available ? 'Invite' : 'Unavailable'}
                                </Button>
                                <Button variant="ghost" className="flex-1">
                                    View Profile
                                </Button>
                            </div>

                            {player.available && (
                                <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                                    </span>
                                    Available Now
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {filteredPlayers.length === 0 && (
                    <div className="text-center py-20 animate-fade-in">
                        <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">No players found</h3>
                        <p className="text-gray-400">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
