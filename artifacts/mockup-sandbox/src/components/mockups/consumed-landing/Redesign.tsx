import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ListChecks, Users } from 'lucide-react';

export function Redesign() {
  const [voted, setVoted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="w-full font-body overflow-x-hidden bg-[#0f0521] text-zinc-100 selection:bg-purple-500/30">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Poppins:wght@700;800&display=swap');
        .font-heading { font-family: 'Poppins', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}} />

      {/* SECTION 1 - HERO */}
      <section className="relative w-full min-h-[720px] bg-[#0f0521] overflow-hidden flex flex-col items-center">
        {/* Soft purple gradient blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#a855f7_0%,transparent_70%)] opacity-20 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

        {/* Top Nav */}
        <nav className="w-full max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl tracking-tight">consumed</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Community</a>
            </div>
            <a 
              href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-opacity"
            >
              Get the App
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="w-full max-w-[1280px] mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 flex-1">
          <motion.div 
            className="flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="font-heading font-extrabold text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight mb-6">
              Do you have<br />
              <span className="text-[#a855f7]">good taste?</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zinc-300 font-medium mb-10 max-w-lg">
              Track what you consume. Play what you know.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <a 
                href="#play"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-transform hover:scale-105"
              >
                Make your call →
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['bg-blue-500', 'bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-purple-500', 'bg-teal-500', 'bg-orange-500', 'bg-cyan-500'].map((color, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0f0521] flex items-center justify-center text-[10px] font-bold text-white ${color}`}>
                      {String.fromCharCode(65 + i)}{String.fromCharCode(75 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-zinc-400 font-medium">Join thousands already playing</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[480px] mx-auto lg:ml-auto"
          >
            <div className="bg-[#1a0a2e] rounded-3xl border border-white/10 p-6 shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#a855f7]">Today's Play</span>
                <h3 className="font-heading font-bold text-xl mt-2">Succession vs Breaking Bad</h3>
              </div>
              
              <div className="relative flex items-center justify-between gap-4 mb-6">
                <div className="flex-1 relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer" onClick={() => setVoted(true)}>
                  <img src="/__mockup/images/poster-succession.png" alt="Succession" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <span className="absolute bottom-3 left-0 right-0 text-center font-heading font-bold text-sm">Succession</span>
                  {voted && <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-bold text-2xl">38%</div>}
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2d1b4e] border-4 border-[#1a0a2e] flex items-center justify-center font-bold text-xs z-10 text-[#a855f7]">
                  VS
                </div>

                <div className="flex-1 relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer" onClick={() => setVoted(true)}>
                  <img src="/__mockup/images/poster-breaking-bad.png" alt="Breaking Bad" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <span className="absolute bottom-3 left-0 right-0 text-center font-heading font-bold text-sm">Breaking Bad</span>
                  {voted && <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-bold text-2xl text-[#a855f7]">62%</div>}
                </div>
              </div>

              {voted ? (
                <div className="text-center">
                  <p className="font-medium text-lg mb-1">62% picked Breaking Bad</p>
                  <p className="text-sm text-zinc-400 mb-4">You're in the minority 🎯</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-rose-500 border-2 border-[#1a0a2e]"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-[#1a0a2e]"></div>
                      <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-[#1a0a2e]"></div>
                    </div>
                    <span className="text-xs text-zinc-500">+1.2k</span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-sm text-zinc-400">
                  Tap a poster to cast your vote
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - ALREADY DOING THIS */}
      <section className="w-full min-h-[640px] bg-[#f6f2fa] text-zinc-900 overflow-hidden py-24 relative flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#e9d5ff_0%,transparent_70%)] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-extrabold text-5xl md:text-6xl leading-[1.1] tracking-tight mb-12">
              You're already<br />doing this.
            </h2>
            <div className="flex flex-col gap-4 text-xl md:text-2xl font-medium text-zinc-600">
              <p>Group chats.</p>
              <p>Notes app.</p>
              <p>Half-finished lists.</p>
              <p className="text-zinc-900 font-bold mt-4">We just made it playable.</p>
            </div>
          </motion.div>

          <motion.div 
            className="relative h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Bubbles */}
            <motion.div className="absolute top-10 left-0 z-20 w-[240px]" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-amber-100 rounded-lg p-4 shadow-xl rotate-[-3deg]">
                <div className="font-heading font-bold text-amber-900 mb-2 text-sm border-b border-amber-200 pb-1">To Watch</div>
                <ul className="text-sm font-medium text-amber-800 space-y-1">
                  <li className="line-through opacity-60">Severance</li>
                  <li>The Boys S4</li>
                  <li>House of the Dragon</li>
                  <li>The Penguin</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="absolute top-1/2 left-8 z-30 -translate-y-1/2" initial={{ x: -20 }} whileInView={{ x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="bg-[#a855f7] text-white px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-lg text-sm max-w-[220px]">
                you need to read Demon Copperhead
              </div>
            </motion.div>

            <motion.div className="absolute bottom-20 left-16 z-20" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="bg-white text-zinc-800 px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg text-sm max-w-[240px]">
                omg have you seen The Bear yet?? ♥ 3
              </div>
            </motion.div>

            <motion.div className="absolute bottom-4 left-0 z-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="bg-zinc-200 text-zinc-700 px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm text-sm">
                wait what was that show again? ♥ 2
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[260px] h-[540px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden z-10"
              initial={{ rotate: 15, scale: 0.9 }}
              whileInView={{ rotate: 8, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <img src="/__mockup/images/screen1.png" alt="App feed" className="w-full h-full object-cover rounded-[2rem]" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - SOCIAL LAYER */}
      <section className="w-full min-h-[440px] bg-[#f6f2fa] text-zinc-900 overflow-hidden py-24">
        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-extrabold text-5xl leading-[1.1] tracking-tight mb-6">
              Entertainment<br />is already <span className="text-[#a855f7] relative">social.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#a855f7]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-2xl font-medium text-zinc-800">
              <span className="relative inline-block">
                Now you can actually see it.
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a855f7]"></span>
              </span>
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              { in: "JR", bg: "bg-purple-600", user: "jordanrivers", time: "just now", action: "gave White Lotus S3 a 5/5 — best finale in years", tag: "tv show", tagColor: "bg-purple-100 text-purple-700" },
              { in: "LK", bg: "bg-emerald-500", user: "linds047", time: "8m ago", action: "predicted Beyoncé wins Album of the Year 🎤", tag: "prediction", tagColor: "bg-emerald-100 text-emerald-700" },
              { in: "KJ", bg: "bg-amber-500", user: "kjwoodsemh", time: "22m ago", action: "scored 9/10 on Gladiator trivia — challenged you", tag: "trivia", tagColor: "bg-amber-100 text-amber-700" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-100 flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {item.in}
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-sm">{item.user}</span>
                    <span className="text-xs text-zinc-400">{item.time}</span>
                  </div>
                  <p className="text-sm text-zinc-700 mb-2">{item.action}</p>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHAT YOU CAN DO */}
      <section className="w-full min-h-[440px] bg-[#0f0521] text-zinc-100 py-24">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Play */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Play</h3>
              <p className="text-zinc-400 mb-8 max-w-xs">Make your call. See who agrees.</p>
              
              <div className="bg-[#1a0a2e] rounded-xl p-5 border border-white/5 w-full max-w-[280px] shadow-lg">
                <p className="font-bold text-sm mb-4">Which movie is overrated?</p>
                <button className="w-full py-2 bg-gradient-to-r from-[#a855f7] to-[#6366f1] rounded-full text-sm font-bold shadow-md hover:opacity-90 transition">
                  Vote now →
                </button>
              </div>
            </motion.div>

            {/* Track */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center mb-6">
                <ListChecks className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Track</h3>
              <p className="text-zinc-400 mb-8 max-w-xs">Log everything you watch, read, listen, and play.</p>
              
              <div className="bg-[#1a0a2e] rounded-xl p-5 border border-white/5 w-full max-w-[280px] shadow-lg text-left">
                <p className="font-bold text-sm mb-3">Your Library</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center bg-[#2d1b4e] px-3 py-1.5 rounded-md"><span>Movies</span> <span className="font-bold">236</span></div>
                  <div className="flex justify-between items-center bg-[#2d1b4e] px-3 py-1.5 rounded-md"><span>TV Shows</span> <span className="font-bold">84</span></div>
                  <div className="flex justify-between items-center bg-[#2d1b4e] px-3 py-1.5 rounded-md"><span>Books</span> <span className="font-bold">27</span></div>
                  <div className="flex justify-between items-center bg-[#2d1b4e] px-3 py-1.5 rounded-md"><span>Podcasts</span> <span className="font-bold">112</span></div>
                </div>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Connect</h3>
              <p className="text-zinc-400 mb-8 max-w-xs">See what friends are into. Share takes. Compare taste.</p>
              
              <div className="bg-[#1a0a2e] rounded-xl p-5 border border-white/5 w-full max-w-[280px] shadow-lg flex flex-col items-center">
                <p className="font-bold text-sm mb-4 text-left w-full">Friend Activity</p>
                <div className="flex -space-x-2 mb-3">
                  {['bg-blue-500', 'bg-rose-500', 'bg-emerald-500', 'bg-amber-500'].map((color, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#1a0a2e] ${color}`}></div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#1a0a2e] bg-[#2d1b4e] flex items-center justify-center text-[10px] font-bold">+27</div>
                </div>
                <p className="text-xs text-zinc-400">12 friends active today</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 - FINAL CTA */}
      <section className="relative w-full min-h-[360px] bg-[#0f0521] text-zinc-100 overflow-hidden py-24 flex flex-col justify-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] mb-8">
              You're already doing this.<br />
              <span className="text-[#a855f7]">Consumed just makes it visible.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#play"
                className="px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white hover:opacity-90 transition-opacity"
              >
                Start playing
              </a>
              <a 
                href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
                className="px-8 py-4 text-lg font-bold rounded-full border-2 border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                Download the app
              </a>
            </div>
          </motion.div>

          <div className="relative h-[400px] hidden lg:block">
            <motion.div 
              className="absolute right-32 top-0 w-[240px] h-[500px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden z-10"
              initial={{ rotate: 0, y: 50 }}
              whileInView={{ rotate: -6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/__mockup/images/screen3.png" alt="App screen 3" className="w-full h-full object-cover rounded-[2rem]" />
            </motion.div>
            <motion.div 
              className="absolute right-0 top-12 w-[240px] h-[500px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden z-20"
              initial={{ rotate: 0, y: 100 }}
              whileInView={{ rotate: 6, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img src="/__mockup/images/screen4.png" alt="App screen 4" className="w-full h-full object-cover rounded-[2rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 text-center text-sm text-zinc-400 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f] font-body relative z-20">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p>&copy; 2026 Consumed.</p>
            <a href="mailto:info@consumedapp.com" className="hover:text-[#a855f7] transition-colors">info@consumedapp.com</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#a855f7] transition-colors">Support</a>
            <span>·</span>
            <a href="#" className="hover:text-[#a855f7] transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-[#a855f7] transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
