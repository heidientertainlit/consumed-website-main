import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Instagram, ArrowRight, CheckCircle2, Clapperboard, BookOpen, Headphones, Music2, ThumbsUp, ThumbsDown, Star, Share2 } from "lucide-react";

import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";
import mediaLibraryScreen from "@assets/Screenshot_2026-08-19_at_12.43.39_PM_1787165032553.png";
import currentlyConsumingScreen from "@assets/Screenshot_2026-08-19_at_12.43.17_PM_1787165001505.png";

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
        <section className="pt-24 md:pt-28 pb-8 md:pb-12 relative overflow-visible z-10" id="features">
          <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative -translate-y-3 md:-translate-y-4">
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
                  <span className="text-sm font-semibold text-foreground/80">Join hundreds of fans</span>
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
        <section className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto -mt-14 md:-mt-20 pt-20 md:pt-24 pb-14 md:pb-16 px-6 relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,_#0e0828_0%,_#241251_55%,_#4a2c91_100%)] text-white" id="how-it-works">
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
                Takes. Theories. Reactions. And everything in between.
                <span className="block mt-4 text-base md:text-lg leading-snug font-sans font-normal text-[#d7ccff]">
                  About what we’re all watching, reading, listening to, and loving.
                </span>
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
                  likes: "68",
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
                  likes: "112",
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
                  <div className="flex items-center justify-between border-t border-[#eeeaf7] pt-3 mt-3 text-xs text-[#756e83]">
                    <button type="button" aria-label={`${post.likes} likes`} className="inline-flex items-center gap-1 hover:text-[#643ec5] transition-colors"><ThumbsUp className="w-4 h-4" strokeWidth={1.7} /><span>{post.likes}</span></button>
                    <button type="button" aria-label="Dislike this take" className="hover:text-[#643ec5] transition-colors"><ThumbsDown className="w-4 h-4" strokeWidth={1.7} /></button>
                    <button type="button" className="font-medium hover:text-[#643ec5] transition-colors">Reply</button>
                    <button type="button" aria-label="Favorite this take" className="text-[#f4bd1f]"><Star className="w-4 h-4 fill-current" strokeWidth={1.7} /></button>
                    <button type="button" className="inline-flex items-center gap-1 font-medium hover:text-[#643ec5] transition-colors">Share <Share2 className="w-3.5 h-3.5" strokeWidth={1.7} /></button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CATEGORIES */}
        <section className="pt-14 md:pt-20 pb-0 px-6 bg-white" id="categories">
          <div className="container mx-auto max-w-7xl flex flex-col">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-primary mb-4">Your media, your way</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05]">
                  Everything you’re into.<br />
                  <span className="italic text-primary">All in one place.</span>
                </h2>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70 max-w-xl">
                  Keep track of what you’re watching, reading, and listening to — and never lose track of what you want to try next.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    { title: "Movies & TV", desc: "Watchlists and ratings", Icon: Clapperboard },
                    { title: "Books", desc: "Reads and favorites", Icon: BookOpen },
                    { title: "Podcasts", desc: "Episodes and listens", Icon: Headphones },
                    { title: "Music", desc: "Albums and artists", Icon: Music2 },
                  ].map((cat, i) => (
                    <motion.div
                      key={cat.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 rounded-2xl border border-[#ece8f5] bg-[#fbfaff] p-3.5"
                    >
                      <span className="w-10 h-10 rounded-xl bg-[#eee8ff] flex items-center justify-center shrink-0">
                        <cat.Icon className="w-5 h-5 text-primary" strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold leading-tight">{cat.title}</span>
                        <span className="block text-[11px] text-foreground/50 mt-0.5">{cat.desc}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative min-h-[500px] md:min-h-[560px] max-w-[650px] w-full mx-auto"
              >
                <div className="absolute top-0 right-0 w-[74%] h-[500px] md:h-[550px] rounded-[2rem] overflow-hidden border border-black/10 bg-white shadow-[0_24px_60px_rgba(42,24,83,0.16)]">
                  <img
                    src={mediaLibraryScreen}
                    alt="Consumed My Media screen with lists, filters, and tracked titles"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="absolute top-10 left-0 z-10 w-[43%] rounded-2xl border border-[#ece8f5] bg-white p-4 shadow-[0_16px_35px_rgba(42,24,83,0.14)]">
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-primary">Your library</p>
                  <p className="mt-2 text-3xl font-heading font-semibold text-[#7b3fe4]">912</p>
                  <p className="text-xs text-foreground/50">titles tracked</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-4 text-xs">
                    <span><strong className="text-[#e64b94]">83</strong> Movies</span>
                    <span><strong className="text-[#3177d8]">65</strong> TV</span>
                    <span><strong className="text-[#30a04a]">732</strong> Books</span>
                    <span><strong className="text-[#6e44d8]">8h</strong> Pods</span>
                  </div>
                </div>

                <div className="absolute left-4 md:left-7 bottom-0 z-20 w-[53%] rounded-[1.6rem] overflow-hidden border-[5px] border-[#1a1135] bg-[#1a1135] shadow-[0_22px_45px_rgba(30,13,82,0.28)]">
                  <img
                    src={currentlyConsumingScreen}
                    alt="Consumed Entertainment DNA currently consuming preview"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] mt-16 md:mt-20 px-6 py-12 md:px-12 md:py-16 bg-gradient-to-br from-[#0e0828] via-[#241251] to-[#4a2c91]">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_82%_12%,_#7c51da_0%,_transparent_28%),radial-gradient(circle_at_15%_85%,_#6440ba_0%,_transparent_34%)] pointer-events-none" />
              <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#d8ceff] mb-4">Your Entertainment DNA</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05] text-white">
                    What you consume says everything.<br />
                    <span className="text-[#d8ceff]">There&apos;s a pattern to what you love.</span>
                  </h2>
                  <p className="mt-4 text-[#d8ceff] italic text-2xl md:text-3xl lg:text-4xl font-heading">
                    Discover your entertainment identity.
                  </p>
                  <p className="max-w-3xl mx-auto mt-5 text-sm md:text-base leading-relaxed text-white/70">
                    The more you track, rate, and interact, the more your Entertainment DNA evolves — revealing the patterns behind what you love.
                  </p>
                </motion.div>

                <div className="flex gap-4 md:gap-6 mt-10 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
                {[
                  { title: "The Prestige Detective", shades: "Story Sharer • Emotional Binger", streak: "1", rank: "#1", tracked: "909", accent: "#b981ff" },
                  { title: "The Comfort Rewatcher", shades: "Comedy Lover • Story Sharer", streak: "4", rank: "#12", tracked: "436", accent: "#d98be4" },
                  { title: "The Culture Catch Up", shades: "Trend Tracker • Music Maven", streak: "7", rank: "#8", tracked: "712", accent: "#8f9dff" },
                ].map((identity, i) => (
                  <motion.article
                    key={identity.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="w-[290px] md:w-[31.5%] min-w-[290px] shrink-0 rounded-[1.8rem] border border-white/15 bg-gradient-to-br from-[#2d1a56] via-[#1f123e] to-[#130a2c] p-6 text-left shadow-[0_20px_45px_rgba(0,0,0,0.25)] flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[10px] font-bold tracking-[0.16em] text-[#cfc3ff]">YOUR ENTERTAINMENT DNA ✧</p>
                      <span className="w-8 h-8 rounded-full border border-white/15 text-white/70 flex items-center justify-center">↗</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-6">
                      <h3 className="font-heading text-3xl leading-[1.02] text-white max-w-[175px]">{identity.title}</h3>
                      <div className="w-16 h-16 flex items-center justify-center shrink-0">
                        <img src={neonSmiley} alt="" aria-hidden="true" className="w-14 h-14" />
                      </div>
                    </div>
                    <p className={`${i < 2 ? "mt-5" : "mt-7"} text-xs italic text-white/45`}>with shades of</p>
                    <p className="mt-1 text-sm font-semibold text-white/85">{identity.shades}</p>
                    <div className="border-t border-white/10 mt-auto pt-6 grid grid-cols-3 text-center">
                      <div><p className="text-lg font-bold" style={{ color: identity.accent }}>🔥 {identity.streak}</p><p className="text-[10px] text-white/45 mt-1">play streak</p></div>
                      <div className="border-x border-white/10"><p className="text-lg font-bold text-white">🏆 {identity.rank}</p><p className="text-[10px] text-white/45 mt-1">leaderboard</p></div>
                      <div><p className="text-lg font-bold text-white">{identity.tracked}</p><p className="text-[10px] text-white/45 mt-1">tracked</p></div>
                    </div>
                  </motion.article>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ROOMS / SOCIAL */}
        <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-white" id="rooms">
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

        {/* 6. BETA FEEDBACK */}
        <section className="py-10 md:py-12 bg-white" id="feedback">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto rounded-[2.5rem] bg-[linear-gradient(135deg,_#0d0629_0%,_#1e0d52_55%,_#382077_100%)] px-7 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-14"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/25 shadow-sm flex items-center justify-center text-white shrink-0">
              <span className="text-[11px] font-extrabold tracking-widest">BETA</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-white">
                Consumed is in beta,<br />
                <span className="italic text-[#d8ceff]">so we love your feedback.</span>
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed max-w-xl">
                Tell us what you want more of, what’s not quite right, and how we can make it even better.
              </p>
            </div>
            <Link
              href="/feedback"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[#2e1c78] font-semibold whitespace-nowrap transition-all hover:bg-[#ede9ff] hover:scale-105 active:scale-95"
              data-testid="link-beta-feedback"
            >
              Share feedback <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* 7. APP STORE DOWNLOAD */}
        <section className="py-4 md:py-5 px-6 bg-white" id="better-together">
          <div className="flex justify-center">
            <a href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
              <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000" alt="Download on the App Store" className="h-12" />
            </a>
          </div>
        </section>

        {/* 8. AS SEEN IN */}
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
      <footer className="bg-white pt-8 pb-8" id="blog">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-7">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <img src={logoPurple} alt="Consumed" className="h-6 opacity-80 cursor-pointer" />
            </Link>
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-sm font-medium text-foreground/70">
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