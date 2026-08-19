import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Instagram, ArrowRight, CheckCircle2, Clapperboard, BookOpen, Headphones, Music2, type LucideIcon } from "lucide-react";

import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

// Generated images
import neonSmiley from "../assets/images/neon-smiley.png";
import screenDnaHero from "../assets/images/screen-dna-hero.webp";
import screenAddHero from "../assets/images/screen-add-hero.webp";
import screenRatingsHero from "../assets/images/screen-ratings-hero.webp";
import maybeSomedayReview from "../assets/images/maybe-someday-review.webp";
import dayOfJackalReview from "../assets/images/day-of-jackal-review.webp";

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

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const AppStoreButton = ({ className = "" }: { className?: string }) => (
  <a
    href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
    target="_blank"
    rel="noopener noreferrer"
    className={`relative inline-flex items-center justify-center gap-2 bg-[#3a2496] text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-[#2e1c78] hover:scale-105 active:scale-95 ${className}`}
  >
    Download the app
    <span className="absolute -top-2 -right-2 bg-[#c4b5fd] text-[#3a2496] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
      Beta
    </span>
  </a>
);

function CategoryIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="flex items-center justify-center w-20 h-20 mb-3 transition-transform duration-300 group-hover:scale-110">
      <Icon className="h-12 w-12 md:h-14 md:w-14 text-primary/75" strokeWidth={1.25} />
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 font-sans">
      
      {/* 1. Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/">
            <img src={logoPurple} alt="Consumed" className="h-7 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-1.5">
              <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors" data-testid="link-nav-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/consumedapp" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors" data-testid="link-nav-x">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors" data-testid="link-nav-tiktok">
                <TikTok className="w-4 h-4" />
              </a>
            </div>
            <span className="hidden sm:block w-px h-5 bg-border" />
            <a
              href="https://app.consumedapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              data-testid="link-web-app"
            >
              Open web app
            </a>
            <AppStoreButton />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-28 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-8 max-w-md">
              Our Mission: Bringing joy and connection through entertainment.
            </p>
            <nav className="flex flex-col gap-6 text-2xl font-heading">
              <button onClick={() => scrollToSection("about-us")} className="text-left hover:text-primary transition-colors">About Us</button>
              <Link href="/insights" className="text-left hover:text-primary transition-colors" data-testid="link-insights-mobile">Insights</Link>
              <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="text-left hover:text-primary transition-colors" data-testid="link-web-app-mobile">Open web app</a>
            </nav>
            <div className="flex items-center gap-4 mt-10">
              <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" data-testid="link-mobile-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/consumedapp" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" data-testid="link-mobile-x">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" data-testid="link-mobile-tiktok">
                <TikTok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* 2. HERO */}
        <section className="pt-24 md:pt-28 pb-4 md:pb-6 relative overflow-visible bg-white z-10" id="features">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-300/10 blur-[80px] rounded-full -z-10 pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05] tracking-tight mb-4">
                Entertainment is better <span className="italic">shared.</span>
              </h1>

              <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl leading-relaxed font-sans">
                See what everyone's consuming, what's trending, discover new favorites, and discover your entertainment DNA.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <AppStoreButton className="w-full sm:w-auto px-8 py-3.5 text-base" />
                <a
                  href="https://app.consumedapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-foreground font-semibold px-4 py-3.5 hover:text-primary transition-colors"
                  data-testid="link-hero-web-app"
                >
                  Open web app <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-3" data-testid="hero-social-proof">
                <div className="flex -space-x-2.5" aria-hidden="true">
                  {["EB", "PD", "SS", "CR"].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold text-white"
                      style={{ background: ["#7c5cd6", "#2e1c78", "#b57edc", "#4a34a8"][i] }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-primary" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground/80">Join 16.7K+ fans</span>
                </div>
              </div>
            </motion.div>

            {/* Right: phone screens */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:w-[55%] w-full flex items-center justify-center translate-y-10 md:translate-y-14"
            >
              <div className="relative flex items-center justify-center">
                <div className="hidden sm:block w-[200px] md:w-[220px] rounded-[2rem] border-[6px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl overflow-hidden -rotate-6 translate-x-6 translate-y-4 z-0">
                  <img src={screenAddHero} alt="Consumed app — Add media screen" className="w-full" data-testid="img-hero-phone-add" />
                </div>
                <div className="w-[240px] md:w-[270px] rounded-[2.25rem] border-[7px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl overflow-hidden z-10 relative">
                  <img src={screenDnaHero} alt="Consumed app — Entertainment DNA profile screen" className="w-full" data-testid="img-hero-phone-dna" />
                </div>
                <div className="hidden sm:block w-[200px] md:w-[220px] rounded-[2rem] border-[6px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl overflow-hidden rotate-6 -translate-x-6 translate-y-4 z-0">
                  <img src={screenRatingsHero} alt="Consumed app — Takes and ratings screen" className="w-full" data-testid="img-hero-phone-ratings" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. TAKES FEED */}
        <section className="pt-20 md:pt-24 pb-14 md:pb-16 px-6 relative overflow-hidden bg-gradient-to-br from-[#0e0828] via-[#241251] to-[#4a2c91] text-white" id="how-it-works">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_85%_12%,_#7650d1_0%,_transparent_28%),radial-gradient(circle_at_20%_85%,_#8c5de2_0%,_transparent_35%)] pointer-events-none" />
          <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[22%] shrink-0"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#d7ccff] mb-3">The feed</p>
              <h2 className="text-3xl md:text-[2.15rem] font-heading font-normal leading-[1.12]">
                Real takes.<br />
                Real people.<br />
                About what<br />
                we’re all watching,<br />
                reading, listening to,<br />
                <span className="italic text-[#d7ccff]">and loving.</span>
              </h2>
              <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm text-[#e2d9ff] font-semibold hover:text-white transition-colors">
                Explore the feed <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <div className="flex flex-1 gap-4 md:gap-5 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 scrollbar-none">
              {[
                {
                  person: "Rachelle S.",
                  time: "2h ago",
                  take: "“ABSOLUTELY MUST READ. Such a beautiful romantic series… WITH A SOUNDTRACK. And some spice if you’re into that ;)”",
                  title: "Maybe Someday",
                  detail: "by Colleen Hoover",
                  meta: "81% aligned with you",
                  badge: "45% match",
                  image: maybeSomedayReview,
                },
                {
                  person: "Ashley H.",
                  time: "5h ago",
                  take: "“Overall it was a good watch. Some of the family dynamics felt drawn out, but I’m interested to see what they do for season 2.”",
                  title: "The Day of the Jackal",
                  detail: "You rated this 3/5 ★",
                  meta: "5.0 average rating",
                  badge: "You loved this",
                  image: dayOfJackalReview,
                },
              ].map((post, i) => (
                <motion.article
                  key={post.person}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="w-[330px] md:w-[390px] shrink-0 rounded-2xl bg-white text-[#19142d] shadow-[0_20px_45px_rgba(0,0,0,0.22)] p-4"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7d5bd7] to-[#301b6e] text-white flex items-center justify-center text-[11px] font-bold">
                      {post.person.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-none">{post.person}</p>
                      <p className="text-xs text-[#6c657b] mt-1">{post.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-[105px] md:w-[118px] shrink-0">
                      <div className="relative h-[154px] md:h-[166px] rounded-xl overflow-hidden shadow-md">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="relative -mt-3 mx-auto w-fit block rounded-full bg-[#7651cf] text-white text-[10px] font-semibold px-2.5 py-1 shadow-md">
                        {post.badge}
                      </span>
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold leading-tight">{post.title}</h3>
                      <p className="text-xs text-[#777080] mt-1">{post.detail}</p>
                      <div className="text-[#f4b91d] tracking-[0.08em] text-sm mt-2" aria-label="Five stars">★★★★★</div>
                      <p className="text-xs md:text-[13px] leading-[1.45] text-[#4f4958] mt-2 line-clamp-5">{post.take}</p>
                      <p className="text-xs font-semibold text-[#714bd0] mt-auto pt-2">{post.meta}</p>
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-[#eeeaf7] pt-3 mt-3 text-xs text-[#756e83]">
                    <span className="text-[#643ec5] font-semibold">✦ Agree</span>
                    <span>🔥  {34 + i * 11}</span>
                    <span>◯ Reply</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CATEGORIES */}
        <section className="py-20 md:py-28 px-6 bg-white" id="categories">
          <div className="container mx-auto max-w-7xl flex flex-col">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {[
                { title: "Movies & TV", desc: "Track what you watch and rate honestly.", Icon: Clapperboard },
                { title: "Books", desc: "Log your reads and share your thoughts.", Icon: BookOpen },
                { title: "Podcasts", desc: "Follow episodes and discuss the best ones.", Icon: Headphones },
                { title: "Music", desc: "Save what you listen to and discover more.", Icon: Music2 },
              ].map((cat, i) => (
                <motion.div 
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-center text-center"
                >
                  <CategoryIcon Icon={cat.Icon} />
                  <h3 className="font-bold text-xl mb-3">{cat.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed max-w-[200px]">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-16 md:mt-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal"
              >
                What you consume says everything.<br />
                <span className="text-primary italic text-2xl md:text-3xl lg:text-4xl">Discover your entertainment identity.</span>
              </motion.h2>
            </div>
          </div>
        </section>

        {/* 5. ROOMS / SOCIAL */}
        <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-secondary/40" id="rooms">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-xs font-bold tracking-widest text-foreground/50 uppercase mb-4">React together</p>
                <h2 className="text-4xl md:text-5xl font-heading font-normal mb-8">
                  Find your people.<br />
                  <span className="text-primary italic">Join the conversation.</span>
                </h2>

                <ul className="space-y-4 mb-8 text-foreground/80 font-medium text-left inline-flex flex-col">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0" /> Compare taste and see your overlap</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0" /> Hot takes, predictions, theories, debates</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0" /> Find the people whose taste you trust</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0" /> Join Rooms where your people already are</li>
                </ul>

                <div className="flex flex-wrap justify-center gap-2.5 mb-8 max-w-lg">
                  {[
                    { name: "Horror Heads", members: "12.4K" },
                    { name: "Sci-Fi Central", members: "8.7K" },
                    { name: "The Book Nook", members: "15.1K" },
                    { name: "Chart Toppers", members: "9.3K" },
                    { name: "Podcast Lounge", members: "6.8K" },
                  ].map((room) => (
                    <span
                      key={room.name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-black/5 shadow-sm px-3.5 py-1.5 text-sm font-medium"
                      data-testid={`chip-room-${room.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {room.name}
                      <span className="text-foreground/40 text-xs">{room.members}</span>
                    </span>
                  ))}
                </div>

                <a href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary text-white font-bold rounded-full px-6 py-3 hover:opacity-90 transition-opacity" data-testid="button-download-rooms">
                  Download to see what everyone's saying <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </div>
        </section>

        {/* 5. DOWNLOAD CTA */}
        <section className="py-12 md:py-24 px-4 container mx-auto max-w-7xl" id="better-together">
          <div className="bg-gradient-to-br from-primary to-[#5b3ebf] rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay" />
            
            <div className="lg:w-1/3 z-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-heading font-normal mb-4 text-white">
                Your entertainment identity<br />
                <span className="italic text-white/90">is waiting.</span>
              </h2>
            </div>

            <div className="lg:w-1/3 z-10 flex justify-center">
              <div className="relative w-72 md:w-80 h-[22rem] flex items-center justify-center">
                <motion.div
                  initial={{ rotate: -8, x: -28, y: 16 }}
                  whileInView={{ rotate: -7, x: -36, y: 20 }}
                  viewport={{ once: true }}
                  className="absolute w-60 md:w-64 bg-white text-foreground rounded-2xl shadow-2xl p-5 origin-bottom-left"
                  data-testid="card-identity-dna"
                >
                  <p className="font-bold text-sm mb-3">Your DNA Journey</p>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex items-start gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-primary mt-1 shrink-0" />
                      <div><p className="text-primary text-xs font-semibold">Now</p><p className="font-bold text-primary leading-tight">Emotional Binger</p></div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-3 h-3 rounded-full border-2 border-foreground/20 mt-1 shrink-0" />
                      <div><p className="text-foreground/40 text-xs">May 31</p><p className="font-semibold leading-tight">Emotional Binger</p></div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-black/5">
                    <p className="text-xs text-foreground/40 mb-1.5">Current Era</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold px-3 py-1.5">✨ Culture Catch Up</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ rotate: 9, x: 30, y: 6 }}
                  whileInView={{ rotate: 8, x: 40, y: 8 }}
                  viewport={{ once: true }}
                  className="absolute w-60 md:w-64 bg-white text-foreground rounded-2xl shadow-2xl p-5 z-10 origin-bottom-right"
                  data-testid="card-identity-stats"
                >
                  <p className="font-bold text-sm mb-3">Mostly Into</p>
                  <div className="space-y-2.5 text-xs font-semibold">
                    {[
                      { label: "Drama", pct: 41, color: "#e0559d" },
                      { label: "Mystery", pct: 10, color: "#7c5cff" },
                      { label: "Comedy", pct: 10, color: "#4d7cfe" },
                    ].map((g) => (
                      <div key={g.label}>
                        <div className="flex justify-between mb-1"><span>{g.label}</span><span>{g.pct}%</span></div>
                        <div className="h-1.5 rounded-full bg-black/5"><div className="h-full rounded-full" style={{ width: `${g.pct * 2}%`, backgroundColor: g.color }} /></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-black/5 grid grid-cols-4 text-center">
                    {[
                      { n: "43", label: "Tracked", color: "#7c5cff" },
                      { n: "7", label: "Movies", color: "#e0559d" },
                      { n: "12", label: "Shows", color: "#4d7cfe" },
                      { n: "6", label: "Books", color: "#2f9e6e" },
                    ].map((s) => (
                      <div key={s.label}><p className="font-heading text-lg font-semibold" style={{ color: s.color }}>{s.n}</p><p className="text-[10px] text-foreground/50">{s.label}</p></div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ rotate: -2, y: -12 }}
                  whileInView={{ rotate: -1, y: -16 }}
                  viewport={{ once: true }}
                  className="absolute w-64 md:w-72 bg-[#231a3f] text-white rounded-2xl shadow-2xl p-6 z-20 border border-white/10"
                  data-testid="card-identity-profile"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white/60 text-xs mb-2">@punkinpie123</p>
                      <p className="font-heading text-lg leading-tight">The</p>
                      <p className="font-heading text-3xl font-semibold leading-tight">Emotional Binger</p>
                    </div>
                    <img src={neonSmiley} alt="" className="w-12 h-12 shrink-0" />
                  </div>
                  <p className="text-white/50 text-xs italic mt-3">with shades of</p>
                  <p className="text-sm font-semibold mt-0.5">Comfort Rewatcher • Prestige Detective</p>
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 text-center">
                    <div><p className="font-heading text-xl font-semibold">963</p><p className="text-[10px] text-white/50">pts</p></div>
                    <div><p className="font-heading text-xl font-semibold">#13</p><p className="text-[10px] text-white/50">leaderboard</p></div>
                    <div><p className="font-heading text-xl font-semibold">43</p><p className="text-[10px] text-white/50">tracked</p></div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:w-1/3 z-10 flex flex-col items-center lg:items-end text-center lg:text-right gap-6">
              <div className="flex flex-col gap-3">
                <a href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000" alt="Download on the App Store" className="h-12" />
                </a>
                <div className="relative inline-block">
                  <div className="opacity-40 cursor-not-allowed grayscale">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-[68px] -ml-2" />
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-white text-primary text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg -rotate-6">Coming Soon</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. AS SEEN IN */}
        <section className="hidden py-12 border-t border-b border-border/50 bg-white" id="about-us">
          <div className="container mx-auto px-6 max-w-7xl">
            <p className="text-center text-xs font-bold tracking-widest text-foreground/40 uppercase mb-8">As Seen In</p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-40 grayscale">
              <span className="font-heading font-bold text-2xl">TechCrunch</span>
              <span className="font-sans font-bold text-xl tracking-tighter">THE VERGE</span>
              <span className="font-serif font-bold text-2xl">Forbes</span>
              <span className="font-sans font-bold text-xl tracking-tight">FAST COMPANY</span>
              <span className="font-sans font-bold text-2xl text-purple-900">Yahoo!</span>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="bg-background pt-20 pb-10" id="blog">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link href="/">
              <img src={logoPurple} alt="Consumed" className="h-6 opacity-80 cursor-pointer" />
            </Link>
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-medium text-foreground/70">
              <button onClick={() => scrollToSection("about-us")} className="hover:text-primary transition-colors">About Us</button>
              <Link href="/insights" className="hover:text-primary transition-colors" data-testid="link-insights-footer">Insights</Link>
              <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-web-app-footer">Open web app</a>
            </nav>
            <p className="text-sm text-foreground/60 max-w-sm text-center md:text-left leading-relaxed">
              Our Mission: Bringing joy and connection through entertainment.
            </p>
            <p className="text-sm text-foreground/40">
              © 2026 Consumed. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://x.com/consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
              <XIcon className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
              <TikTok className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}