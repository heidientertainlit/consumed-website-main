import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Music, Gamepad2, Tv, Film, BookOpen, Mic, Star, TrendingUp, Activity, Search, User, UserCircle, Plus, Share2, Download, RefreshCw, MoreHorizontal, Play, Heart, MessageSquare, Trophy, ChevronRight, Instagram, Bell, X, Loader2, Dna, ListChecks, Dice5, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
import promo1 from "@assets/1_1774376395182.png";
import promo2 from "@assets/2_1774376395182.png";
import promo3 from "@assets/3_1774376395182.png";
import promo4 from "@assets/4_1774376395182.png";
import promo5 from "@assets/5_1774376395183.png";
import promo6 from "@assets/6_1774376395183.png";
import promo7 from "@assets/7_1774376395183.png";

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
    { text: "watching?", color: "text-purple-400" },
    { text: "listening to?", color: "text-blue-400" },
    { text: "reading?", color: "text-indigo-400" },
    { text: "playing?", color: "text-green-400" }
  ];
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);

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

  const handleFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackMessage.trim()) return;
    setIsFeedbackSubmitting(true);
    setFeedbackError(null);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: feedbackEmail || undefined, message: feedbackMessage }),
      });
      const data = await response.json();
      if (response.ok) {
        setFeedbackSubmitted(true);
        setFeedbackEmail("");
        setFeedbackMessage("");
      } else {
        setFeedbackError(data.error || 'Something went wrong.');
      }
    } catch {
      setFeedbackError('Failed to connect. Please try again.');
    } finally {
      setIsFeedbackSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-zinc-900 overflow-x-hidden selection:bg-primary/30">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#f8f8f8]" />

      {/* Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-600 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-600 transition-colors">
            <TikTok className="w-5 h-5" />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <Link href="/feedback" className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full px-3 py-1.5 md:px-5 md:py-2 shadow-lg shadow-blue-900/20 hover:opacity-90 transition-all" data-testid="link-feedback">
            <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-white animate-pulse flex-shrink-0"></span>
            <span className="text-xs md:text-sm font-medium text-white font-body whitespace-nowrap">In Beta · Give Feedback</span>
          </Link>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-6 md:pt-12 pb-32 flex flex-col items-center">
        
        {/* Hero Text Section */}
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto mb-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <img src={logoPurple} alt="Consumed Logo" className="w-[26rem] md:w-[34rem] h-auto mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 leading-[1.2] whitespace-nowrap -mt-2 text-[#3b0764]"
          >
            The social layer of entertainment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-[#6b21a8] mb-6"
          >
            CONNECT. TRACK. PLAY.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center w-full"
          >
            <a 
              href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-12 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-body border-0 inline-flex items-center justify-center"
              data-testid="link-download-app"
            >
              Download the App
            </a>
          </motion.div>

        </div>

        {/* Two-Column Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 w-full max-w-5xl flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Card — Problem statement */}
            <div className="bg-white rounded-2xl p-6 flex flex-col shadow-sm border border-zinc-100">
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 font-heading leading-tight mb-3">
                Your entertainment is everywhere.<br />That's the problem.
              </h2>
              <p className="text-sm text-zinc-400 font-body leading-relaxed">
                The rec buried in the group chat. The Notes app full of shows you'll never find. No idea what your friends are actually watching right now. You're already doing this. Consumed just gives it a home.
              </p>
            </div>

            {/* Right Card — Live activity feed */}
            <div className="bg-[#1a0a2e] rounded-2xl p-6 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white font-heading leading-tight mb-4">
                Entertainment is already social.
              </h3>
              <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[200px] scrollbar-hide">
                {[
                  { initials: "JR", color: "bg-violet-600", name: "jordanrivers", time: "just now", text: "gave White Lotus S3 a 5/5 — best finale in years", tag: "tv show", tagColor: "bg-violet-500/20 text-violet-300" },
                  { initials: "LK", color: "bg-emerald-600", name: "linds047", time: "8m ago", text: "predicted Beyoncé wins Album of the Year 🎤", tag: "prediction", tagColor: "bg-emerald-500/20 text-emerald-300" },
                  { initials: "KJ", color: "bg-amber-600", name: "kjwoodsemh", time: "22m ago", text: "scored 9/10 on Gladiator trivia — challenged you", tag: "trivia", tagColor: "bg-amber-500/20 text-amber-300" },
                  { initials: "SE", color: "bg-blue-600", name: "seth", time: "1h ago", text: "started reading James by Percival Everett", tag: "book", tagColor: "bg-blue-500/20 text-blue-300" },
                  { initials: "MH", color: "bg-rose-600", name: "madhope21", time: "2h ago", text: "added Sinners to their watchlist after you rated it", tag: "movie", tagColor: "bg-rose-500/20 text-rose-300" },
                  { initials: "HB", color: "bg-teal-600", name: "hulabear23", time: "3h ago", text: "listening to SmartLess — ep 212 right now 🎧", tag: "podcast", tagColor: "bg-teal-500/20 text-teal-300" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors rounded-xl p-3 flex items-start gap-3 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mt-0.5`}>
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-white/90 text-xs font-semibold font-body">{item.name}</span>
                        <span className="text-white/35 text-[10px] font-body">{item.time}</span>
                      </div>
                      <p className="text-white/60 text-xs font-body leading-snug">{item.text}</p>
                      <span className={`mt-1.5 inline-block text-[10px] ${item.tagColor} px-2 py-0.5 rounded-full font-body`}>{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Avatars — below both cards */}
          <div className="flex items-center gap-3 text-[11px] text-zinc-500 font-body justify-center">
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
          </div>
        </motion.div>

        {/* Screenshot Strip Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 w-full"
        >
          <div
            className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[promo1, promo2, promo3, promo4, promo5, promo6, promo7].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70vw] md:w-[23%] rounded-2xl overflow-hidden shadow-lg snap-start"
              >
                <img src={src} alt={`Consumed app screenshot ${i + 1}`} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Heading + Features — Gray Rounded Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 w-full max-w-5xl mx-auto bg-zinc-100/80 rounded-3xl px-8 md:px-16 py-12 md:py-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-4">
              Consumed finally gives all your entertainment, one home.
            </h2>
            <p className="text-base md:text-lg text-zinc-500 font-body leading-relaxed">
              No more scattered apps, buried recs, or losing track of what your friends are into. Movies, shows, books, music, podcasts & games — track them, play over them, connect over them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Play */}
            <div className="text-center px-4">
              <div className="mb-5 flex items-center justify-center mx-auto">
                <Trophy className="w-9 h-9 text-[#2d1b4e]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">Play</h3>
              <p className="text-zinc-500 font-body text-sm leading-relaxed">
                Predict. Compete. Climb the leaderboard.
              </p>
            </div>

            {/* Track */}
            <div className="text-center px-4">
              <div className="mb-5 flex items-center justify-center">
                <ListChecks className="w-10 h-10 text-[#2d1b4e]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track</h3>
              <p className="text-zinc-500 font-body text-sm leading-relaxed">
                Log everything you watch, read, and play.
              </p>
            </div>

            {/* Connect */}
            <div className="text-center px-4">
              <div className="mb-5 flex items-center justify-center">
                <Users className="w-10 h-10 text-[#2d1b4e]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-zinc-500 font-body text-sm leading-relaxed">
                See what friends are into. Share takes. Compare taste.
              </p>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="w-full flex flex-col items-center mt-10 mb-6">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-zinc-300 to-transparent"></div>
            <p className="mt-3 text-xs uppercase tracking-widest text-zinc-400 font-body">See what's inside</p>
          </div>

          {/* Phone Carousel */}
          <div className="w-full flex flex-col items-center">
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
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20 pointer-events-none"></div>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <CarouselPrevious className="relative static translate-x-0 translate-y-0 bg-white border-zinc-200 text-zinc-700 hover:bg-purple-50 hover:text-purple-700 w-12 h-12" />
                <span className="text-sm text-zinc-500 font-body">Swipe or tap to explore</span>
                <CarouselNext className="relative static translate-x-0 translate-y-0 bg-white border-zinc-200 text-zinc-700 hover:bg-purple-50 hover:text-purple-700 w-12 h-12" />
              </div>
            </Carousel>
          </div>
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
            <span className="text-zinc-800">What are you </span>
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
          </h2>
          <p className="text-lg text-zinc-500 font-body leading-relaxed">
            Turn the shows you binge, books you abandoned, and hot takes nobody asked for into games, predictions, and bragging rights. See what people like you saw coming. Connect over what you're watching. And see where you stack up.
          </p>
          
        </motion.div>

        
      </main>

      <footer className="relative z-50 py-12 text-center text-sm text-zinc-400 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f] font-body">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-zinc-400">&copy; {new Date().getFullYear()} Consumed.</p>
            <a href="mailto:info@consumedapp.com" className="text-zinc-400 hover:text-purple-400 transition-colors" data-testid="link-info-email">info@consumedapp.com</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/support" className="text-zinc-400 hover:text-purple-400 transition-colors" data-testid="link-support">Support</a>
            <a href="/privacy" className="text-zinc-400 hover:text-purple-400 transition-colors" data-testid="link-privacy">Privacy</a>
            <a href="/terms" className="text-zinc-400 hover:text-purple-400 transition-colors" data-testid="link-terms">Terms</a>
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

      {/* Feedback Modal */}
      <Dialog open={isFeedbackOpen} onOpenChange={(open) => { setIsFeedbackOpen(open); if (!open) setFeedbackSubmitted(false); }}>
        <DialogContent className="bg-white rounded-2xl border border-zinc-100 shadow-2xl max-w-md w-full p-8">
          {feedbackSubmitted ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 font-heading">Thanks so much!</h2>
              <p className="text-zinc-500 font-body text-sm leading-relaxed">Your feedback helps shape Consumed. We read every single message.</p>
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white text-sm font-semibold hover:opacity-90 transition-all font-body"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-zinc-900 font-heading">Give Feedback</DialogTitle>
                <DialogDescription className="text-zinc-500 font-body text-sm mt-1">
                  Tell us what you love, what's broken, or what you'd love to see.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleFeedback} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your email (optional)"
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                  data-testid="input-feedback-email"
                  className="w-full h-11 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-body text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <textarea
                  placeholder="What's on your mind?"
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  required
                  rows={5}
                  data-testid="input-feedback-message"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-body text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
                />
                {feedbackError && (
                  <p className="text-red-500 text-xs font-body">{feedbackError}</p>
                )}
                <button
                  type="submit"
                  disabled={isFeedbackSubmitting || !feedbackMessage.trim()}
                  data-testid="button-submit-feedback"
                  className="w-full h-11 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-body disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isFeedbackSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                  ) : (
                    "Send Feedback"
                  )}
                </button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
