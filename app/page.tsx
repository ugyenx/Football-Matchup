import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Shield, Zap, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">The #1 Platform for Amateur Football</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 animate-slide-up">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
              Game Day
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Find teammates, challenge local rivals, and balance teams instantly with our pro-grade rating system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/matchmaking">
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                Find a Match
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Find Teammates",
                desc: "Connect with players in your area based on position, skill level, and availability.",
                color: "text-primary"
              },
              {
                icon: Zap,
                title: "Auto-Balance Teams",
                desc: "Use our smart algorithm to create perfectly balanced teams for fair and competitive matches.",
                color: "text-secondary"
              },
              {
                icon: Trophy,
                title: "Track Stats",
                desc: "Build your player profile, track your ratings, and climb the local leaderboards.",
                color: "text-purple-400"
              }
            ].map((feature, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Kick Off?</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Join thousands of players organizing better matches today.
              </p>
              <Link href="/register">
                <Button size="lg" className="px-12">Create Profile</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
