'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Shuffle, Users, TrendingUp, ChevronRight } from 'lucide-react';

interface Player {
    id: number;
    name: string;
    position: string;
    rating: number;
    stats: {
        speed: number;
        dribbling: number;
        passing: number;
        shooting: number;
        stamina: number;
        defense: number;
        physicality: number;
    };
}

const MOCK_PLAYERS: Player[] = [
    { id: 1, name: "Marcus Silva", position: "FW", rating: 8.7, stats: { speed: 9, dribbling: 9, passing: 7, shooting: 8, stamina: 7, defense: 4, physicality: 6 } },
    { id: 2, name: "Alex Chen", position: "MF", rating: 7.9, stats: { speed: 7, dribbling: 7, passing: 9, shooting: 6, stamina: 8, defense: 7, physicality: 6 } },
    { id: 3, name: "Jordan Taylor", position: "DF", rating: 8.2, stats: { speed: 6, dribbling: 5, passing: 7, shooting: 4, stamina: 8, defense: 9, physicality: 8 } },
    { id: 4, name: "Sam Rodriguez", position: "GK", rating: 8.5, stats: { speed: 5, dribbling: 4, passing: 6, shooting: 3, stamina: 7, defense: 9, physicality: 9 } },
    { id: 5, name: "Riley Johnson", position: "MF", rating: 7.5, stats: { speed: 7, dribbling: 6, passing: 8, shooting: 6, stamina: 9, defense: 6, physicality: 5 } },
    { id: 6, name: "Casey Williams", position: "FW", rating: 8.1, stats: { speed: 8, dribbling: 8, passing: 6, shooting: 9, stamina: 6, defense: 4, physicality: 7 } },
    { id: 7, name: "Taylor Brooks", position: "DF", rating: 7.6, stats: { speed: 6, dribbling: 5, passing: 6, shooting: 4, stamina: 7, defense: 8, physicality: 9 } },
    { id: 8, name: "Morgan Lee", position: "MF", rating: 7.8, stats: { speed: 8, dribbling: 7, passing: 8, shooting: 7, stamina: 8, defense: 6, physicality: 6 } },
    { id: 9, name: "Jamie Parker", position: "FW", rating: 7.3, stats: { speed: 9, dribbling: 7, passing: 5, shooting: 7, stamina: 6, defense: 3, physicality: 5 } },
    { id: 10, name: "Avery Kim", position: "DF", rating: 7.9, stats: { speed: 7, dribbling: 5, passing: 7, shooting: 4, stamina: 8, defense: 9, physicality: 8 } },
];

const POSITION_COLORS: Record<string, string> = {
    'GK': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'DF': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'MF': 'bg-green-500/20 text-green-400 border-green-500/30',
    'FW': 'bg-red-500/20 text-red-400 border-red-500/30'
};

export default function TeamBalancer() {
    const [teamA, setTeamA] = useState<Player[]>([]);
    const [teamB, setTeamB] = useState<Player[]>([]);
    const [availablePlayers, setAvailablePlayers] = useState<Player[]>(MOCK_PLAYERS);
    const [isBalanced, setIsBalanced] = useState(false);

    const calculateTeamRating = (team: Player[]) => {
        if (team.length === 0) return 0;
        const total = team.reduce((sum, player) => sum + player.rating, 0);
        return (total / team.length).toFixed(1);
    };

    const autoBalance = () => {
        // Simple balancing algorithm
        const allPlayers = [...availablePlayers, ...teamA, ...teamB];
        const sorted = [...allPlayers].sort((a, b) => b.rating - a.rating);

        const newTeamA: Player[] = [];
        const newTeamB: Player[] = [];

        // Alternate picking players (snake draft style)
        sorted.forEach((player, index) => {
            if (index % 2 === 0) {
                newTeamA.push(player);
            } else {
                newTeamB.push(player);
            }
        });

        setTeamA(newTeamA);
        setTeamB(newTeamB);
        setAvailablePlayers([]);
        setIsBalanced(true);
    };

    const reset = () => {
        setTeamA([]);
        setTeamB([]);
        setAvailablePlayers(MOCK_PLAYERS);
        setIsBalanced(false);
    };

    const movePlayer = (player: Player, from: 'available' | 'teamA' | 'teamB', to: 'available' | 'teamA' | 'teamB') => {
        // Remove from source
        if (from === 'available') {
            setAvailablePlayers(prev => prev.filter(p => p.id !== player.id));
        } else if (from === 'teamA') {
            setTeamA(prev => prev.filter(p => p.id !== player.id));
        } else {
            setTeamB(prev => prev.filter(p => p.id !== player.id));
        }

        // Add to destination
        if (to === 'available') {
            setAvailablePlayers(prev => [...prev, player]);
        } else if (to === 'teamA') {
            setTeamA(prev => [...prev, player]);
        } else {
            setTeamB(prev => [...prev, player]);
        }

        setIsBalanced(false);
    };

    const PlayerCard = ({ player, from, showActions = true }: { player: Player; from: 'available' | 'teamA' | 'teamB'; showActions?: boolean }) => (
        <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all group">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-black text-sm">
                        {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate">{player.name}</h4>
                        <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold border ${POSITION_COLORS[player.position]}`}>
                                {player.position}
                            </span>
                            <span className="text-xs text-primary font-bold">{player.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            {showActions && (
                <div className="flex gap-1 mt-3">
                    {from !== 'teamA' && (
                        <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1 text-xs h-7"
                            onClick={() => movePlayer(player, from, 'teamA')}
                        >
                            Team A
                        </Button>
                    )}
                    {from !== 'teamB' && (
                        <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1 text-xs h-7"
                            onClick={() => movePlayer(player, from, 'teamB')}
                        >
                            Team B
                        </Button>
                    )}
                    {from !== 'available' && (
                        <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1 text-xs h-7"
                            onClick={() => movePlayer(player, from, 'available')}
                        >
                            Remove
                        </Button>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="pt-32 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 animate-fade-in">
                    <div>
                        <h1 className="text-4xl font-bold font-display mb-2">Team Balancer</h1>
                        <p className="text-gray-400">Create fair and balanced teams automatically or manually.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="ghost" onClick={reset}>
                            Reset
                        </Button>
                        <Button onClick={autoBalance} className="gap-2">
                            <Shuffle className="w-5 h-5" />
                            Auto-Balance
                        </Button>
                    </div>
                </div>

                {/* Team Stats Overview */}
                {(teamA.length > 0 || teamB.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-slide-up">
                        <div className="glass p-6 rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold font-display text-primary">Team A</h3>
                                <div className="text-3xl font-bold">{calculateTeamRating(teamA)}</div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {teamA.length} Players
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Avg Rating
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold font-display text-secondary">Team B</h3>
                                <div className="text-3xl font-bold">{calculateTeamRating(teamB)}</div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {teamB.length} Players
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Avg Rating
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isBalanced && Math.abs(Number(calculateTeamRating(teamA)) - Number(calculateTeamRating(teamB))) < 0.5 && (
                    <div className="glass p-4 rounded-xl mb-8 border-2 border-primary/30 animate-fade-in">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Teams are Balanced!</h4>
                                <p className="text-sm text-gray-400">Rating difference: {Math.abs(Number(calculateTeamRating(teamA)) - Number(calculateTeamRating(teamB))).toFixed(1)}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Available Players */}
                    <div className="glass p-6 rounded-2xl">
                        <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            Available Players ({availablePlayers.length})
                        </h3>
                        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                            {availablePlayers.map(player => (
                                <PlayerCard key={player.id} player={player} from="available" />
                            ))}
                            {availablePlayers.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">All players assigned</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Team A */}
                    <div className="glass p-6 rounded-2xl border-2 border-primary/20">
                        <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2 text-primary">
                            <ChevronRight className="w-5 h-5" />
                            Team A ({teamA.length})
                        </h3>
                        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                            {teamA.map(player => (
                                <PlayerCard key={player.id} player={player} from="teamA" />
                            ))}
                            {teamA.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">No players yet</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Team B */}
                    <div className="glass p-6 rounded-2xl border-2 border-secondary/20">
                        <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2 text-secondary">
                            <ChevronRight className="w-5 h-5" />
                            Team B ({teamB.length})
                        </h3>
                        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                            {teamB.map(player => (
                                <PlayerCard key={player.id} player={player} from="teamB" />
                            ))}
                            {teamB.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">No players yet</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
