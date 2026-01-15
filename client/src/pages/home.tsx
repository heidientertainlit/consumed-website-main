import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Music, Gamepad2, Tv, Film, BookOpen, Mic, Star, TrendingUp, Activity, Search, User, UserCircle, Plus, Share2, Download, RefreshCw, MoreHorizontal, Play, Heart, MessageSquare, Trophy, ChevronRight, Instagram, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import bgImage from "@assets/generated_images/subtle_dark_purple_and_black_mesh_gradient_professional_background.png";
import logoWhite from "@assets/ConsumedLogo_white_1768445075453.png";

// Screen Imports
import screen1 from "@assets/IMG_5733_1768454610482.PNG";
import screen2 from "@assets/IMG_5735_1768454613289.PNG";
import screen3 from "@assets/IMG_5739_1768454615709.PNG";
import screen4 from "@assets/IMG_5740_1768454618224.PNG";
import screen5 from "@assets/IMG_5741_1768454620680.PNG";
import screen6 from "@assets/IMG_5742_1768454623111.PNG";
import screen7 from "@assets/IMG_5743_1768454625777.PNG";

// TikTok Icon Component since it's not in Lucide
const TikTok = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Home() {
  const words = [
    { text: "watching", color: "text-purple-400" },
    { text: "reading", color: "text-indigo-400" },
    { text: "listening to", color: "text-blue-400" },
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
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-[#1a0b2e] to-[#2e1065]" />
      
      {/* Ambient Light */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-32 md:w-40">
             <img 
               src={logoWhite} 
               alt="Consumed Logo" 
               className="w-full h-auto" 
             />
          </div>
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-8">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <TikTok className="w-5 h-5" />
            </a>
          </div>
        </div>
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
          <div className="flex flex-col text-center items-center max-w-2xl mx-auto">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2 leading-[1.1] w-full flex flex-wrap justify-center items-center gap-x-3"
            >
              <span>What are you</span>
              <span className="relative inline-flex min-w-[220px] justify-start h-[1.1em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute left-0 ${words[index].color} whitespace-nowrap`}
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
              Play, react, and keep up with what you love. Because finally, all our entertainment is all in one place.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)] font-body border-0"
              >
                <Bell className="mr-2 h-5 w-5" />
                Get notified when it's in the App Store
              </Button>
              <a 
                href="https://app.consumedapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)] font-body border-0"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Launch Pilot Web App
                </Button>
              </a>
            </motion.div>

            {/* Micro-Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-4 text-sm text-muted-foreground font-body"
            >
              <div className="flex -space-x-2">
                {["Jeeppler", "kjwoodsemh", "linds047", "nicklombardo2", "seth", "hulabear23", "madhope21", "Snazzyman"].map((name, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-xs font-medium text-white uppercase" title={name}>
                    {name.charAt(0)}
                  </div>
                ))}
              </div>
              <p>Join early adopters tracking their digital life.</p>
            </motion.div>
          </div>

          {/* Right Column: App Screenshots Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:block mt-12 lg:mt-0 flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[8px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl overflow-hidden ring-1 ring-white/10">
              <Carousel className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {[screen1, screen2, screen7, screen6, screen4, screen5, screen3].map((screen, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="w-full h-full relative">
                        <img 
                          src={screen} 
                          alt={`App Screen ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Custom Navigation buttons overlaid */}
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black/70 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black/70 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Carousel>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20 pointer-events-none"></div>
            </div>

            {/* Decorative Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>

        {/* Separation Divider - Clean Straight Line */}
        <div className="w-full bg-white h-24 -mb-1 relative z-20" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}></div>

        {/* Entertainment DNA Section */}
        <div className="bg-white text-black py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 text-left">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                    Discover Your<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Entertainment DNA</span>
                  </h2>
                  <p className="text-xl text-zinc-600 font-body mb-8 leading-relaxed">
                    It's like "Spotify Wrapped" but for ALL entertainment types. We analyze what you watch, read, play, and listen to, creating a unique profile that evolves with you.
                  </p>
                  <Button 
                    size="lg" 
                    className="h-14 px-8 text-lg font-bold rounded-full bg-black text-white hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Get Your Profile
                  </Button>
               </div>
               
               <div className="flex-1 w-full max-w-md relative">
                  {/* Abstract Representation of DNA/Profile */}
                  <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-purple-50 to-indigo-50 border border-zinc-100 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div className="h-full w-full rounded-2xl bg-white border border-zinc-100 shadow-sm p-6 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                           <Star className="w-10 h-10 text-purple-600 fill-current" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">Vibe-Syncing<br/>Clubhouse Maven</h3>
                        <p className="text-zinc-500 text-sm">Top Genres: History, Comedy, Sci-Fi</p>
                        <div className="mt-8 flex gap-2">
                           <div className="h-2 w-16 bg-purple-500 rounded-full" />
                           <div className="h-2 w-8 bg-indigo-400 rounded-full" />
                           <div className="h-2 w-4 bg-pink-400 rounded-full" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
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
