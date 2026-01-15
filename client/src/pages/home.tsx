import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Music, Gamepad2, Tv, Film, BookOpen, Mic, Star, TrendingUp, Activity, Search, User, UserCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/subtle_dark_purple_and_black_mesh_gradient_professional_background.png";
import logoWhite from "@assets/ConsumedLogo_white_1768445075453.png";

export default function Home() {
  const words = [
    { text: "watching", color: "text-purple-400" },
    { text: "reading", color: "text-blue-400" },
    { text: "listening to", color: "text-orange-400" },
    { text: "playing", color: "text-green-400" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Background & Texture */}
      <div className="bg-grain" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background/60 z-10" />
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Subtle Gradient Spotlights matching logo purple */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-6 flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-lg shadow-purple-900/10">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="text-xs font-medium text-white/90 font-body">Accepting pilot users</span>
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-6 md:pt-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col text-left max-w-2xl">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-80 md:w-96 mb-6 -ml-2"
            >
              <img 
                src={logoWhite} 
                alt="Consumed Logo" 
                className="w-full h-auto" 
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              What are you <br />
              <span className="relative inline-block min-w-[300px] h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute left-0 ${words[index].color}`}
                  >
                    {words[index].text}?
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-body"
            >
              Track it. Share it. Play with it. The universal home for movies, games, music, books, podcasts, and TV.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold rounded-2xl bg-primary text-white hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all active:scale-95 font-body"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Join TestFlight
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base font-semibold rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-foreground transition-all active:scale-95 backdrop-blur-sm font-body"
              >
                <Globe className="mr-2 h-5 w-5" />
                Launch Pilot Web App
              </Button>
            </motion.div>

            {/* Micro-Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-4 text-sm text-muted-foreground font-body"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>Join early adopters tracking their digital life.</p>
            </motion.div>
          </div>

          {/* Right Column: Abstract App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block mt-12 lg:mt-0"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[8px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl overflow-hidden">
              <div className="absolute top-0 w-full h-full bg-[#050505] overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="h-10 w-full bg-transparent flex items-center justify-between px-6 pt-2 shrink-0 z-20">
                  <div className="text-[12px] font-medium text-white font-body">9:41</div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-white rounded-full opacity-100"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                    <div className="w-4 h-3 bg-white rounded-[2px] opacity-100"></div>
                  </div>
                </div>

                {/* App Content - What are you reading? */}
                <div className="flex-1 overflow-hidden relative px-5 pt-8">
                   {/* Header Area */}
                   <div className="text-center mb-8 mt-4">
                      <h2 className="text-3xl font-bold text-white mb-1 font-body">What are you</h2>
                      <h2 className="text-3xl font-bold text-blue-400 mb-3 font-body">reading?</h2>
                      <p className="text-sm text-zinc-500 font-body">Track it. Share it. Play with it.</p>
                   </div>

                   {/* Search Bar */}
                   <div className="mb-6 relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <div className="w-full h-12 bg-white rounded-xl flex items-center pl-11 pr-4 text-sm text-zinc-500 font-body">
                        Search for something...
                      </div>
                   </div>

                   {/* Quick Add List */}
                   <div className="space-y-2">
                      <p className="text-xs font-semibold text-zinc-500 mb-3 font-body uppercase tracking-wider">Quick Add</p>
                      
                      {/* Item 1 */}
                      <div className="w-full p-2 bg-zinc-900/80 rounded-2xl flex items-center gap-3 border border-white/5">
                         <div className="w-10 h-14 bg-zinc-800 rounded-lg overflow-hidden shrink-0">
                           <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Book" />
                         </div>
                         <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white truncate font-body">The Light We Carry</h4>
                            <p className="text-[10px] text-zinc-500 font-body uppercase">Book</p>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mr-1">
                            <Plus className="w-4 h-4 text-white" />
                         </div>
                      </div>

                      {/* Item 2 */}
                      <div className="w-full p-2 bg-zinc-900/80 rounded-2xl flex items-center gap-3 border border-white/5">
                         <div className="w-10 h-14 bg-zinc-800 rounded-lg overflow-hidden shrink-0">
                           <img src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="TV" />
                         </div>
                         <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white truncate font-body">Bridgerton</h4>
                            <p className="text-[10px] text-zinc-500 font-body uppercase">TV</p>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mr-1">
                            <Plus className="w-4 h-4 text-white" />
                         </div>
                      </div>
                   </div>

                </div>
                
                {/* Bottom Nav */}
                <div className="h-20 bg-[#050505] border-t border-white/5 flex items-start justify-center gap-20 pt-4 px-2 shrink-0 z-20">
                   <div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                      <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
                      <span className="text-[10px] font-medium text-white font-body tracking-wide">Activity</span>
                   </div>
                   <div className="flex flex-col items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-transparent group-hover:border-white transition-colors relative">
                        <User className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-[10px] font-medium text-white font-body tracking-wide">Me</span>
                   </div>
                </div>
                <div className="h-1 w-32 bg-white/20 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 z-30"></div>
              </div>
            </div>

            {/* Decorative Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>

        {/* Categories Section - Expanded Grid */}
        <div className="mt-32 border-t border-white/5 pt-16">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-4">All your consumption</h3>
            <p className="text-muted-foreground font-body">One unified layer for every story you experience.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Film, label: "Movies" },
              { icon: Tv, label: "TV" },
              { icon: Gamepad2, label: "Games" },
              { icon: Music, label: "Music" },
              { icon: BookOpen, label: "Books" },
              { icon: Mic, label: "Podcasts" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-primary/20 hover:bg-zinc-900/50 transition-all group"
              >
                <item.icon className="w-6 h-6 mb-3 text-zinc-500 group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm text-zinc-300 group-hover:text-white transition-colors font-body">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/5 bg-black font-body">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Consumed.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
