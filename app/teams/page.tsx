'use client';

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Plus, Users, Trophy, MapPin, Star } from 'lucide-react';
import { useState } from 'react';

const MOCK_TEAMS = [
    {
        id: 1,
        name: "Thunder FC",
        logo: "⚡",
        members: 12,
        rating: 8.5,
        location: "Central Park",
        wins: 24,
        losses: 8,
        description: "Competitive team looking for skilled midfielders"
    },
    {
        id: 2,
        name: "Red Devils Local",
        logo: "👹",
        members: 15,
        rating: 7.2,
        location: "Sports Complex",
        wins: 18,
        losses: 12,
        description: "Friendly weekend warriors, all levels welcome"
    },
    {
        id: 3,
        name: "Elite Strikers",
        logo: "⚽",
        members: 11,
        rating: 9.1,
        location: "Stadium Annex",
        wins: 32,
        losses: 4,
        description: "Tournament-focused team seeking defenders"
    },
    {
        id: 4,
        name: "Weekend Warriors",
        logo: "⚔️",
        members: 9,
        rating: 6.8,
        location: "Community Field",
        wins: 12,
        losses: 15,
        description: "Casual players, just here for fun"
    },
    {
        id: 5,
        name: "City Legends",
        logo: "🏆",
        members: 14,
        rating: 8.3,
        location: "Downtown Arena",
        wins: 28,
        losses: 7,
        description: "Experienced players, training twice a week"
    },
    {
        id: 6,
        name: "Grassroots United",
        logo: "🌱",
        members: 10,
        rating: 7.5,
        location: "Park Field",
        wins: 15,
        losses: 10,
        description: "Building a community through football"
    }
];

export default function Teams() {
    const [search, setSearch] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);

    const filteredTeams = MOCK_TEAMS.filter(team =>
        team.name.toLowerCase().includes(search.toLowerCase()) ||
        team.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="pt-32 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 animate-fade-in">
                    <div>
                        <h1 className="text-4xl font-bold font-display mb-2">Teams</h1>
                        <p className="text-gray-400">Join a team or create your own squad.</p>
                    </div>
                    <Button onClick={() => setShowCreateModal(true)} className="gap-2">
                        <Plus className="w-5 h-5" />
                        Create Team
                    </Button>
                </div>

                {/* Search */}
                <div className="glass rounded-2xl p-6 mb-8 animate-slide-up">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            placeholder="Search teams by name or location..."
                            className="pl-10"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Teams Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeams.map((team, i) => (
                        <div
                            key={team.id}
                            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group animate-slide-up"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl border border-white/10">
                                    {team.logo}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors mb-1">
                                        {team.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <MapPin className="w-3 h-3" />
                                        {team.location}
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                {team.description}
                            </p>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-white/5 rounded-lg p-3 text-center">
                                    <Users className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                    <div className="text-xs text-gray-400">Members</div>
                                    <div className="font-bold text-primary">{team.members}</div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 text-center">
                                    <Star className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                    <div className="text-xs text-gray-400">Rating</div>
                                    <div className="font-bold text-primary">{team.rating}</div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 text-center">
                                    <Trophy className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                                    <div className="text-xs text-gray-400">W/L</div>
                                    <div className="font-bold text-primary">{team.wins}/{team.losses}</div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button className="flex-1">
                                    Join Team
                                </Button>
                                <Button variant="ghost" className="flex-1">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTeams.length === 0 && (
                    <div className="text-center py-20 animate-fade-in">
                        <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">No teams found</h3>
                        <p className="text-gray-400">Try adjusting your search or create a new team.</p>
                    </div>
                )}
            </div>

            {/* Create Team Modal (Simple overlay) */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="glass rounded-3xl p-8 max-w-md w-full animate-slide-up">
                        <h2 className="text-2xl font-bold font-display mb-6">Create New Team</h2>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Team Name</label>
                                <Input placeholder="Enter team name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Location</label>
                                <Input placeholder="Where do you play?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Description</label>
                                <textarea
                                    className="w-full h-24 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Tell others about your team..."
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <Button variant="ghost" className="flex-1" onClick={() => setShowCreateModal(false)}>
                                    Cancel
                                </Button>
                                <Button className="flex-1" onClick={() => {
                                    alert('Team created! (Mock)');
                                    setShowCreateModal(false);
                                }}>
                                    Create Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
