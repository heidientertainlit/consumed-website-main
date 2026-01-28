import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Music, Gamepad2, Tv, Film, BookOpen, Mic, Star, TrendingUp, Activity, Search, User, UserCircle, Plus, Share2, Download, RefreshCw, MoreHorizontal, Play, Heart, MessageSquare, Trophy, ChevronRight, Instagram, Bell, X, Loader2, Dna, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import bgImage from "@assets/generated_images/subtle_dark_purple_and_black_mesh_gradient_professional_background.png";
import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

// Screen Imports
import screen1 from "@assets/IMG_5990_1769627771433.PNG";
import screen2 from "@assets/IMG_5991_1769627785554.PNG";
import screen3 from "@assets/IMG_5992_1769627702651.PNG";
import screen4 from "@assets/IMG_5993_1769627706216.PNG";
import screen5 from "@assets/IMG_5994_1769627709299.PNG";
import screen6 from "@assets/IMG_5995_1769627712282.PNG";

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
    { text: "watching.", color: "text-purple-400" },
    { text: "listening to.", color: "text-blue-400" },
    { text: "reading.", color: "text-indigo-400" },
    { text: "playing.", color: "text-green-400" }
  ];
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        setShowSuccess(true);
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Failed to connect. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://consumedapp.com';
  const shareText = "Check out Consumed - the app that brings all your entertainment together!";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Consumed', text: shareText, url: shareUrl });
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-zinc-900 overflow-x-hidden selection:bg-primary/30">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#f8f8f8]" />

      {/* Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-32 md:w-40">
             <img 
               src={logoPurple} 
               alt="Consumed Logo" 
               className="w-full h-auto" 
             />
          </div>
          <div className="hidden md:flex items-center gap-4 border-l border-zinc-200 pl-8">
            <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-600 transition-colors">
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
            className="flex items-center space-x-2 bg-gradient-to-r from-[#1a0a2e] to-[#2d1b4e] rounded-full px-3 py-1.5 md:px-5 md:py-2 shadow-lg shadow-purple-900/20 hover:opacity-90 transition-all"
          >
            <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)] flex-shrink-0"></span>
            <span className="text-xs md:text-sm font-medium text-white font-body whitespace-nowrap">Accepting pilot users</span>
          </a>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-16 md:pt-28 pb-32 flex flex-col items-center">
        
        {/* Hero Text Section */}
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto mb-8">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.2]"
          >
            How you do entertainment.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl md:text-2xl font-medium mb-6 text-center tracking-wide"
          >
            <span className="text-zinc-600">What you're </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`${words[index].color} font-medium inline-block`}
                >
                  {words[index].text}
                </motion.span>
              </AnimatePresence>
            <span className="text-zinc-600"> All in one place.</span>
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg text-zinc-500 mb-6 font-body max-w-xl text-center"
          >
            Play trivia, track what you consume, and discover your entertainment DNA.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center w-full"
          >
            <a 
              href="https://app.consumedapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-12 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-body border-0 inline-flex items-center justify-center"
            >
              Test the pilot app
            </a>
          </motion.div>

          {/* Micro-Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-3 text-[11px] text-zinc-500 font-body justify-center"
          >
            <div className="flex -space-x-2">
              {[
                { name: "Jeeppler", color: "bg-slate-700" },
                { name: "kjwoodsemh", color: "bg-amber-600" },
                { name: "linds047", color: "bg-emerald-600" },
                { name: "nicklombardo2", color: "bg-blue-600" },
                { name: "seth", color: "bg-orange-500" },
                { name: "hulabear23", color: "bg-teal-600" },
                { name: "madhope21", color: "bg-rose-600" },
                { name: "Snazzyman", color: "bg-cyan-600" }
              ].map((user, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${user.color} border-2 border-[#f8f8f8] flex items-center justify-center text-[8px] font-bold text-white shadow-sm`} title={user.name}>
                  {user.name.slice(0, 2).toUpperCase()}
                </div>
              ))}
            </div>
            <p>Join early adopters and get Consumed.</p>
          </motion.div>
        </div>

        {/* Three-Column Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {/* Play Trivia */}
          <div className="text-center px-4">
            <div className="mb-5 flex items-center justify-center">
              <Gamepad2 className="w-10 h-10 text-[#2d1b4e]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Play Trivia</h3>
            <p className="text-zinc-500 font-body text-sm leading-relaxed">
              Test your entertainment knowledge. Answer questions, compete on leaderboards, and make predictions about what you watch.
            </p>
          </div>

          {/* Track Everything */}
          <div className="text-center px-4">
            <div className="mb-5 flex items-center justify-center">
              <ListChecks className="w-10 h-10 text-[#2d1b4e]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Track Everything</h3>
            <p className="text-zinc-500 font-body text-sm leading-relaxed">
              Log movies, TV shows, books, podcasts, and music. Build your profile and see your habits come to life.
            </p>
          </div>

          {/* Discover Your DNA */}
          <div className="text-center px-4">
            <div className="mb-5 flex items-center justify-center">
              <Dna className="w-10 h-10 text-[#2d1b4e]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Discover Your DNA</h3>
            <p className="text-zinc-500 font-body text-sm leading-relaxed">
              Find out what makes your taste unique. See how you stack up and unlock your entertainment identity.
            </p>
          </div>
        </motion.div>

        {/* Visual Separator */}
        <div className="w-full flex flex-col items-center mt-16 mb-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-zinc-300 to-transparent"></div>
          <div className="mt-3 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-body">See what's inside</p>
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
            <div className="relative mx-auto border-zinc-300 bg-zinc-900 border-[8px] rounded-[3rem] h-[720px] w-[350px] shadow-2xl overflow-hidden ring-1 ring-zinc-200 z-20 touch-pan-x">
              <CarouselContent className="h-[704px]">
                {[screen1, screen2, screen3, screen4, screen5, screen6].map((screen, index) => (
                  <CarouselItem key={index} className="h-[704px]">
                    <img 
                      src={screen} 
                      alt={`App Screen ${index + 1}`} 
                      className="w-full h-full object-cover object-top"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20 pointer-events-none"></div>
            </div>
            
            {/* Navigation buttons - Below the phone */}
            <div className="flex items-center gap-6 mt-8">
              <CarouselPrevious className="relative static translate-x-0 translate-y-0 bg-white border-zinc-200 text-zinc-700 hover:bg-purple-50 hover:text-purple-700 w-12 h-12" />
              <span className="text-sm text-zinc-500 font-body">Swipe or tap to explore</span>
              <CarouselNext className="relative static translate-x-0 translate-y-0 bg-white border-zinc-200 text-zinc-700 hover:bg-purple-50 hover:text-purple-700 w-12 h-12" />
            </div>
          </Carousel>

                  </motion.div>

        {/* Useless Knowledge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center max-w-3xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Where your useless knowledge becomes your <span className="text-purple-400">entertainment identity</span>
          </h2>
          <p className="text-lg text-zinc-500 font-body leading-relaxed">
            Turn the shows you binge, books you abandoned, and hot takes nobody asked for into games, predictions, and bragging rights. See what people like you saw coming. Connect over what you're watching. And see where you stack up.
          </p>
          
          {/* Media Type Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Movies", "TV Shows", "Books", "Gaming", "Music", "Podcasts"].map((item) => (
              <span 
                key={item} 
                className="px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-sm text-zinc-600 font-body"
              >
                {item}
              </span>
            ))}
          </div>
          
          {/* DNA Icon */}
          <div className="mt-8 flex justify-center">
            <Dna className="w-12 h-12 text-purple-400" />
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="mt-16 md:mt-20 w-full max-w-md mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </div>

        
      </main>

      <footer className="relative z-50 py-12 text-center text-sm text-zinc-400 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f] font-body">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} Consumed.</p>
          <div className="flex gap-6">
            <a href="mailto:info@consumedapp.com" className="text-zinc-400 hover:text-purple-400 transition-colors">Contact</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Coming soon'); }} className="text-zinc-400 hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Coming soon'); }} className="text-zinc-400 hover:text-purple-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Email Subscription Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        setIsModalOpen(open);
        if (!open) {
          setShowSuccess(false);
          setSubmitMessage(null);
        }
      }}>
        <DialogContent className="sm:max-w-md bg-zinc-900 border-white/10 text-white">
          {showSuccess ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Bell className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thanks, we'll notify you!</h3>
              <p className="text-zinc-400 font-body mb-6">Now tell a friend</p>
              <Button
                onClick={handleShare}
                className="w-full h-11 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-body border-0"
                data-testid="button-share"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Consumed
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-center">Get notified</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubscribe} className="space-y-4 mt-4">
                <p className="text-sm text-zinc-400 text-center font-body">
                  Be the first to know when Consumed is available in the App Store.
                </p>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:border-purple-500 font-body"
                  data-testid="input-email"
                />
                {submitMessage && (
                  <p className={`text-sm text-center font-body ${submitMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {submitMessage.text}
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-body border-0"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Notify me"
                  )}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
