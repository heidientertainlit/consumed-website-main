import { motion } from "framer-motion";
import { Smartphone, Globe, Music, Gamepad2, Tv, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/subtle_dark_purple_and_black_mesh_gradient_professional_background.png";
import logoSimple from "@assets/5_Transparent_Image_1768444352222.png";

export default function Home() {
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
      <nav className="relative z-50 container mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-40"
        >
          <img 
            src={logoSimple} 
            alt="Consumed Logo" 
            className="w-full h-auto brightness-0 invert"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-lg shadow-purple-900/10">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="text-xs font-medium text-white/90">Accepting pilot users</span>
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-12 md:pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col text-left max-w-2xl">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Where <span className="text-primary">entertainment</span> comes together.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              Play, react, and keep up with what you love. See what everyone is consuming. All your entertainment, all in one place.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold rounded-2xl bg-primary text-white hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all active:scale-95"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Join TestFlight
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base font-semibold rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-foreground transition-all active:scale-95 backdrop-blur-sm"
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
              className="mt-12 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>Join early adopters building the future of social.</p>
            </motion.div>
          </div>

          {/* Right Column: Abstract App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[8px] rounded-[3rem] h-[600px] w-[320px] shadow-2xl overflow-hidden">
              <div className="absolute top-0 w-full h-full bg-zinc-900 overflow-hidden">
                {/* Status Bar */}
                <div className="h-6 w-full bg-transparent flex items-center justify-between px-6 mt-2">
                  <div className="text-[10px] font-medium text-zinc-400">9:41</div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-zinc-400 rounded-full opacity-20"></div>
                    <div className="w-3 h-3 bg-zinc-400 rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pt-6 pb-4 flex justify-between items-center">
                  <div className="w-24">
                    <img 
                      src={logoSimple} 
                      alt="Logo" 
                      className="w-full opacity-90 brightness-0 invert" 
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10"></div>
                </div>

                {/* Feed Items (Simulated) */}
                <div className="px-4 space-y-4">
                  {/* Card 1 */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                      <div className="space-y-1">
                        <div className="h-2 w-20 bg-zinc-700 rounded-full"></div>
                        <div className="h-2 w-12 bg-zinc-800 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-32 w-full rounded-xl bg-gradient-to-br from-primary/30 to-purple-900/20 border border-white/5 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                       <Gamepad2 className="text-white/40 w-8 h-8 relative z-10" />
                    </div>
                    <div className="flex gap-2 pt-1">
                      <div className="h-6 w-16 rounded-full bg-white/5"></div>
                      <div className="h-6 w-16 rounded-full bg-white/5"></div>
                    </div>
                  </div>

                   {/* Card 2 */}
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3 opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                      <div className="space-y-1">
                        <div className="h-2 w-24 bg-zinc-700 rounded-full"></div>
                        <div className="h-2 w-16 bg-zinc-800 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-24 w-full rounded-xl bg-zinc-800/50 flex items-center justify-center">
                       <Music className="text-white/10 w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-6">
                  <div className="h-1 w-32 bg-zinc-800 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Decorative Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>

        {/* Categories Section - Clean Grid */}
        <div className="mt-32 border-t border-white/5 pt-16">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-4">All your entertainment</h3>
            <p className="text-muted-foreground">Track everything in one place</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Gamepad2, label: "Games" },
              { icon: Film, label: "Movies" },
              { icon: Tv, label: "TV Shows" },
              { icon: Music, label: "Music" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-primary/20 hover:bg-zinc-900/50 transition-all group"
              >
                <item.icon className="w-8 h-8 mb-4 text-zinc-500 group-hover:text-primary transition-colors" />
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/5 bg-black">
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
