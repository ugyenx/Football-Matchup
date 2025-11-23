'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Slider } from '@/components/ui/Slider';
import { Shield, User, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        age: '',
        position: 'MF',
        foot: 'Right',
        location: '',
        ratings: {
            speed: 5,
            dribbling: 5,
            passing: 5,
            shooting: 5,
            stamina: 5,
            defense: 5,
            physicality: 5,
        }
    });

    const handleRatingChange = (key: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            ratings: {
                ...prev.ratings,
                [key]: parseInt(value)
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        console.log('Submitted:', formData);
        alert('Registration Successful! (Mock)');
    };

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="pt-32 container mx-auto px-4 max-w-2xl">
                <div className="glass p-8 rounded-3xl animate-fade-in">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold font-display mb-2">Create Player Profile</h1>
                        <p className="text-gray-400">Join the community and start your journey.</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-center mb-8 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-colors ${step >= i ? 'bg-primary' : 'bg-white/10'}`}
                            />
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-4 animate-slide-up">
                                <div className="flex items-center gap-2 mb-4 text-primary">
                                    <User className="w-5 h-5" />
                                    <h2 className="font-semibold">Basic Info</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Age</label>
                                        <Input
                                            type="number"
                                            placeholder="25"
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Location</label>
                                    <Input
                                        placeholder="City, Area"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        required
                                    />
                                </div>

                                <Button type="button" className="w-full mt-4" onClick={() => setStep(2)}>
                                    Next: Football Profile
                                </Button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4 animate-slide-up">
                                <div className="flex items-center gap-2 mb-4 text-primary">
                                    <Shield className="w-5 h-5" />
                                    <h2 className="font-semibold">Football Identity</h2>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Preferred Foot</label>
                                        <select
                                            className="w-full h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white focus:ring-2 focus:ring-primary outline-none"
                                            value={formData.foot}
                                            onChange={(e) => setFormData({ ...formData, foot: e.target.value })}
                                        >
                                            <option value="Right">Right</option>
                                            <option value="Left">Left</option>
                                            <option value="Both">Both</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Position</label>
                                        <select
                                            className="w-full h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white focus:ring-2 focus:ring-primary outline-none"
                                            value={formData.position}
                                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                        >
                                            <option value="GK">Goalkeeper (GK)</option>
                                            <option value="DF">Defender (DF)</option>
                                            <option value="MF">Midfielder (MF)</option>
                                            <option value="FW">Forward (FW)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <Button type="button" variant="ghost" className="flex-1" onClick={() => setStep(1)}>
                                        Back
                                    </Button>
                                    <Button type="button" className="flex-1" onClick={() => setStep(3)}>
                                        Next: Skill Ratings
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animate-slide-up">
                                <div className="flex items-center gap-2 mb-4 text-primary">
                                    <Activity className="w-5 h-5" />
                                    <h2 className="font-semibold">Skill Ratings (1-10)</h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {Object.entries(formData.ratings).map(([key, value]) => (
                                        <Slider
                                            key={key}
                                            label={key.charAt(0).toUpperCase() + key.slice(1)}
                                            value={value}
                                            onChange={(e) => handleRatingChange(key, e.target.value)}
                                        />
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <Button type="button" variant="ghost" className="flex-1" onClick={() => setStep(2)}>
                                        Back
                                    </Button>
                                    <Button type="submit" className="flex-1">
                                        Complete Registration
                                    </Button>
                                </div>
                            </div>
                        )}
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
