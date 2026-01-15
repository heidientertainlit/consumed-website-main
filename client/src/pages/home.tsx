import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Music, Gamepad2, Tv, Film, BookOpen, Mic, Star, TrendingUp, Activity, Search, User, UserCircle, Plus, Share2, Download, RefreshCw, MoreHorizontal, Play, Heart, MessageSquare, Trophy, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/subtle_dark_purple_and_black_mesh_gradient_professional_background.png";
import logoWhite from "@assets/ConsumedLogo_white_1768445075453.png";

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
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)] font-body border-0"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Join TestFlight
              </Button>
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)] font-body border-0"
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
                {["Jeeppler", "kjwoodsemh", "linds047", "nicklombardo2", "seth", "hulabear23", "madhope21", "Snazzyman"].map((name, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-xs font-medium text-white uppercase" title={name}>
                    {name.charAt(0)}
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

        {/* Entertainment DNA Section */}
        <div className="mt-48 md:mt-64 border-t border-white/5 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Entertainment DNA</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Get a glimpse of your consumption personality, recommendations, and what your friends are up to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
            
            {/* 1. Personality Card (Span 8) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-8 bg-white text-black p-8 rounded-3xl relative overflow-hidden"
            >
               <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">Your Entertainment DNA</h3>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Personality Profile</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="rounded-full hover:bg-zinc-100 text-zinc-400">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 border-0">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 border-0">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
               </div>

               <div className="text-center py-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">Vibe-Syncing Clubhouse Maven</h2>
                 <p className="text-zinc-500 italic mb-6">Escaping with style and stories.</p>
                 <p className="text-zinc-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                   Your Entertainment DNA is a tapestry of cozy camaraderie and vibrant escapes. With a penchant for historical backdrops like 'Gilded Age' and 'Downton Abbey,' you drift into worlds enriched with drama and charm. Comfort comes wrapped in the familiar dialogues of 'Friends' and 'Gilmore Girls,' while action-packed scenes in 'Batman Begins' and 'The Martian' set your pulses racing.
                 </p>
               </div>
            </motion.div>

            {/* 2. Trivia Leaderboard (Span 4) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-4 bg-[#1a0b2e] border border-white/10 p-6 rounded-3xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2 text-orange-400">
                   <Trophy className="w-5 h-5" />
                   <span className="font-bold uppercase tracking-wider text-sm">Trivia Champions</span>
                 </div>
                 <span className="text-xs text-purple-400 hover:text-purple-300 cursor-pointer flex items-center">
                   View Leaderboard <ChevronRight className="w-3 h-3 ml-1" />
                 </span>
              </div>
              
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Jeeppler", score: 300, color: "bg-yellow-500" },
                  { rank: 2, name: "Seth", score: 120, color: "bg-zinc-400" },
                  { rank: 3, name: "heidi", score: 30, color: "bg-amber-700" }
                ].map((user) => (
                  <div key={user.rank} className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                     <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${user.color} flex items-center justify-center text-xs font-bold text-black`}>
                          {user.rank}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-white">
                           <User className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-white">{user.name}</span>
                     </div>
                     <span className="font-mono font-bold text-white">{user.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Currently Consuming (Span 12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 md:col-span-12"
            >
              <h3 className="text-zinc-400 mb-4 text-sm font-medium">Heidi is currently consuming...</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {[
                  { title: "Gossip Girl", type: "TV", progress: 0, ep: "S1E0", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=300" },
                  { title: "The Unselected Journals", type: "Book", progress: 0, ep: "0%", img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300" },
                  { title: "American Murder", type: "Doc", progress: 50, ep: "50%", img: "https://images.unsplash.com/photo-1550100136-e074fa714874?auto=format&fit=crop&q=80&w=300" },
                  { title: "Why Duolingo...", type: "Pod", progress: 10, ep: "10%", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=300" },
                  { title: "Victoria", type: "TV", progress: 0, ep: "S1E0", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=300" },
                  { title: "The Gilded Age", type: "TV", progress: 0, ep: "S1E10", img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&q=80&w=300" }
                ].map((item, i) => (
                  <div key={i} className="min-w-[160px] w-[160px] group relative">
                    <div className="aspect-[2/3] rounded-xl overflow-hidden mb-2 relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent flex items-center gap-2">
                        <div className="h-6 px-2 rounded-md bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white min-w-[40px]">
                          {item.ep}
                        </div>
                        <Button size="icon" className="h-6 w-6 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white ml-auto">
                           <MoreHorizontal className="w-3 h-3" />
                        </Button>
                      </div>
                      {item.progress > 0 && (
                        <div className="absolute bottom-10 left-2 right-2 h-1 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500" style={{ width: `${item.progress}%` }} />
                        </div>
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-white truncate">{item.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. Trivia Question (Span 5) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-1 md:col-span-5 bg-[#120822] border border-white/10 p-6 rounded-3xl"
            >
               <div className="flex items-center gap-2 mb-4">
                 <div className="flex items-center gap-1 text-purple-400">
                   <Tv className="w-4 h-4" />
                   <span className="text-xs font-bold uppercase">TV</span>
                 </div>
                 <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold">+10 pts</span>
                 <span className="ml-auto text-xs text-zinc-500">1/30</span>
               </div>
               
               <h3 className="text-lg font-bold text-white mb-6">What is the name of Michael Scott's film?</h3>
               
               <div className="space-y-2 mb-6">
                 {["Threat Level Midnight", "Golden Ticket", "Dunder Dawn", "Scranton Nights"].map((opt, i) => (
                   <div key={i} className={`p-3 rounded-xl border ${i === 0 ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/5 hover:bg-white/5'} text-sm font-medium text-white cursor-pointer transition-colors`}>
                     {opt}
                   </div>
                 ))}
               </div>
               
               <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl h-10">
                 Answer
               </Button>
            </motion.div>

            {/* 5. Recommended For You (Span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-1 md:col-span-7 bg-[#120822] border border-white/10 p-6 rounded-3xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <h3 className="text-lg font-bold text-white">Recommended for you</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Daisy Jones & The Six", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=200" },
                  { title: "Little Women", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200" },
                  { title: "The Crown", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=200" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="aspect-[2/3] rounded-xl overflow-hidden bg-zinc-800">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white truncate leading-tight mb-1">{item.title}</h4>
                      <div className="flex text-purple-400 gap-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5" />)}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="h-7 text-xs rounded-full border-white/10 bg-transparent hover:bg-white/10 text-white w-full">
                      + Add
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 6. Activity Feed (Span 12) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="col-span-1 md:col-span-12 space-y-4"
            >
              {/* Activity Item 1 */}
              <div className="bg-white text-black p-4 rounded-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">S</div>
                  <p className="text-sm"><span className="font-bold">Seth</span> added to <span className="text-purple-600 font-medium">→ Want To</span></p>
                </div>
                
                <div className="flex gap-4 p-3 rounded-2xl border border-zinc-100 bg-zinc-50/50">
                  <div className="w-16 h-24 bg-zinc-200 rounded-lg shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&q=80&w=200" alt="The Martian" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-0.5">The Martian</h4>
                    <p className="text-xs text-zinc-500 mb-3">by Andy Weir • Book</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 h-8 px-4">
                        <Plus className="w-4 h-4 mr-1" /> Add
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full h-8 px-4 border-zinc-200">
                        <Share2 className="w-4 h-4 mr-1" /> Share
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 px-2 text-zinc-400">
                  <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
                  <MessageSquare className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                  <span className="text-xs ml-auto">6 days ago</span>
                </div>
              </div>

               {/* Activity Item 2 */}
               <div className="bg-white text-black p-4 rounded-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">J</div>
                  <p className="text-sm"><span className="font-bold">jordancroninger@gmail.com</span> added The Gifts of Imperfection <span className="text-purple-600 font-medium">→ Currently</span></p>
                </div>
                
                <div className="flex gap-4 p-3 rounded-2xl border border-zinc-100 bg-zinc-50/50">
                  <div className="w-16 h-24 bg-zinc-200 rounded-lg shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200" alt="Gifts of Imperfection" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-0.5">The Gifts of Imperfection</h4>
                    <p className="text-xs text-zinc-500 mb-3">by Brené Brown • Book</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 h-8 px-4">
                        <Plus className="w-4 h-4 mr-1" /> Add
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full h-8 px-4 border-zinc-200">
                        <Share2 className="w-4 h-4 mr-1" /> Share
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 px-2 text-zinc-400">
                  <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
                  <MessageSquare className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
                  <span className="text-xs ml-auto">6 days ago</span>
                </div>
              </div>

            </motion.div>

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
