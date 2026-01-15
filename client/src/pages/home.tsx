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
          <a 
            href="https://app.consumedapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm shadow-lg shadow-purple-900/10 hover:bg-white/10 transition-colors"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="text-sm font-medium text-white/90 font-body">Accepting pilot users</span>
          </a>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-12 md:pt-20 pb-32 flex flex-col items-center">
        
        {/* Hero Text Section */}
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto mb-8">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1] w-full flex flex-wrap justify-center items-center gap-x-3"
          >
            <span>What are you</span>
            <span className="relative inline-flex min-w-[180px] md:min-w-[220px] justify-start h-[1.1em]">
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
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl font-body"
          >
            Play, react, and keep up with what you love. Because finally, all our entertainment is all in one place.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center w-full"
          >
            <Button 
              size="default" 
              className="h-11 px-6 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-body border-0"
            >
              <Bell className="mr-2 h-4 w-4" />
              Get notified when it's in the App Store
            </Button>
          </motion.div>

          {/* Micro-Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-3 text-xs text-muted-foreground font-body justify-center"
          >
            <div className="flex -space-x-1.5">
              {["Jeeppler", "kjwoodsemh", "linds047", "nicklombardo2", "seth", "hulabear23", "madhope21", "Snazzyman"].map((name, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-[8px] font-medium text-white uppercase" title={name}>
                  {name.slice(0, 3)}
                </div>
              ))}
            </div>
            <p>Join early adopters tracking their digital life.</p>
          </motion.div>
        </div>

        {/* Visual Separator */}
        <div className="w-full flex flex-col items-center mt-0 mb-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="mt-3 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-body">See what's inside</p>
          </div>
        </div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-sm md:max-w-md lg:max-w-4xl flex flex-col justify-center items-center"
        >
          {/* Phone Frame - Centered */}
          <Carousel className="w-full flex flex-col items-center" opts={{ loop: true, dragFree: false }}>
            <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[8px] rounded-[3rem] h-[720px] w-[350px] shadow-2xl overflow-hidden ring-1 ring-white/10 z-20 touch-pan-x">
              <CarouselContent className="h-full cursor-grab active:cursor-grabbing">
                {[screen1, screen2, screen7, screen6, screen4, screen5, screen3].map((screen, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="w-full h-full relative">
                      <img 
                        src={screen} 
                        alt={`App Screen ${index + 1}`} 
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20 pointer-events-none"></div>
            </div>
            
            {/* Navigation buttons - Below the phone */}
            <div className="flex items-center gap-6 mt-8">
              <CarouselPrevious className="relative static translate-x-0 translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white w-12 h-12" />
              <span className="text-sm text-zinc-400 font-body">Swipe or tap to explore</span>
              <CarouselNext className="relative static translate-x-0 translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white w-12 h-12" />
            </div>
          </Carousel>

          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-primary/20 blur-[120px] -z-10 rounded-full pointer-events-none" />
        </motion.div>

      </main>

      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/5 bg-black font-body">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Consumed.</p>
          <div className="flex gap-6">
            <a href="mailto:info@consumedapp.com" className="hover:text-zinc-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
