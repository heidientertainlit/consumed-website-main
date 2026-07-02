import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Play, Menu, X, Instagram, ArrowRight, CheckCircle2, MessageCircle, Heart, Star, ThumbsUp, Clapperboard, BookOpen, Headphones, Gamepad2, Music2, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";

import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

// Generated images
import heroStrip from "../assets/images/hero-strip.png";
import neonSmiley from "../assets/images/neon-smiley.png";
import screenDna from "../assets/images/screen-dna.png";
import screenRooms from "../assets/images/screen-rooms.png";
import screenTakes from "../assets/images/screen-takes.png";
import screenRatings from "../assets/images/screen-ratings.png";
import screenAdd from "../assets/images/screen-add.png";
import roomHorror from "../assets/images/room-horror.png";
import roomScifi from "../assets/images/room-scifi.png";
import roomBooks from "../assets/images/room-books.png";
import showDune from "../assets/images/show-dune.png";
import showTlou from "../assets/images/show-tlou.png";
import coverDesert from "../assets/images/cover-desert.png";
import coverWestern from "../assets/images/cover-western.png";
import coverLiterary from "../assets/images/cover-literary.png";
import coverChef from "../assets/images/cover-chef.png";

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
    className={`inline-flex items-center justify-center gap-2 bg-[#3a2496] text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-[#2e1c78] hover:scale-105 active:scale-95 ${className}`}
  >
    Download the app
  </a>
);

const BLOB_PATH =
  "M40 24 C70 8 140 6 168 26 C192 42 194 70 188 96 C182 124 160 142 128 148 C96 154 56 150 32 130 C10 112 6 78 14 52 C20 34 28 32 40 24 Z";

function CategoryIcon({ Icon, color, seed }: { Icon: LucideIcon; color: string; seed: number }) {
  const edgeId = `wc-edge-${seed}`;
  const grainId = `wc-grain-${seed}`;
  return (
    <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-4 transition-transform duration-300 group-hover:scale-110">
      <svg viewBox="0 0 200 170" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <filter id={edgeId} x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence type="fractalNoise" baseFrequency="0.009 0.013" numOctaves={4} seed={seed} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={20} xChannelSelector="R" yChannelSelector="G" result="disp" />
            <feGaussianBlur in="disp" stdDeviation={1.4} />
          </filter>
          <filter id={grainId} x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves={3} seed={seed + 5} result="g" />
            <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0" result="ga" />
            <feComposite in="ga" in2="SourceAlpha" operator="in" />
          </filter>
        </defs>
        <g filter={`url(#${edgeId})`}>
          <path d={BLOB_PATH} fill={color} opacity={0.8} />
          <path d={BLOB_PATH} fill={color} opacity={0.45} transform="translate(100 85) scale(0.82) translate(-100 -85)" />
          <path d={BLOB_PATH} fill="#ffffff" opacity={0.16} transform="translate(100 85) scale(0.58) translate(-100 -85)" />
        </g>
        <g filter={`url(#${grainId})`} opacity={0.3}>
          <path d={BLOB_PATH} fill={color} />
        </g>
      </svg>
      <Icon className="relative z-10 h-8 w-8 md:h-10 md:w-10 text-neutral-900" strokeWidth={1.75} />
    </div>
  );
}

const PHONE_SCREENS = [
  { src: screenDna, label: "Your Entertainment DNA" },
  { src: screenRatings, label: "Share your takes & ratings" },
  { src: screenTakes, label: "Compare takes with friends" },
  { src: screenRooms, label: "Join Rooms for what you love" },
  { src: screenAdd, label: "Track movies, shows, books & more" },
];

function PhoneCarousel() {
  const [active, setActive] = useState(0);
  const [dims, setDims] = useState({ spacing: 150, rotate: 7 });
  const draggingRef = useRef(false);
  const count = PHONE_SCREENS.length;

  useEffect(() => {
    const update = () =>
      setDims(
        window.innerWidth < 768
          ? { spacing: 92, rotate: 6 }
          : { spacing: 150, rotate: 7 }
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const go = (dir: number) => setActive((p) => (p + dir + count) % count);

  return (
    <div className="relative w-full flex flex-col items-center">
      <motion.div
        className="relative h-[480px] md:h-[580px] w-full flex items-center justify-center overflow-hidden select-none touch-pan-y"
        role="group"
        aria-roledescription="carousel"
        aria-label="Consumed app screens"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragStart={() => {
          draggingRef.current = true;
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) go(1);
          else if (info.offset.x > 60) go(-1);
          window.setTimeout(() => {
            draggingRef.current = false;
          }, 0);
        }}
      >
        {PHONE_SCREENS.map((screen, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ zIndex: 30 - abs, pointerEvents: abs > 2 ? "none" : "auto" }}
              animate={{
                x: offset * dims.spacing,
                rotate: offset * dims.rotate,
                scale: isActive ? 1 : 0.82 - (abs - 1) * 0.06,
                opacity: abs > 2 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={() => {
                if (draggingRef.current || isActive) return;
                setActive(i);
              }}
              onKeyDown={(e) => {
                if (isActive) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              role={isActive ? undefined : "button"}
              tabIndex={isActive ? -1 : 0}
              aria-label={isActive ? undefined : `View ${PHONE_SCREENS[i].label}`}
            >
              <div
                className={`rounded-[2.25rem] bg-neutral-900 p-2 shadow-2xl ring-1 ring-white/10 ${
                  isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                }`}
              >
                <img
                  src={screen.src}
                  alt={`Consumed app — ${screen.label}`}
                  draggable={false}
                  data-testid={`img-phone-${i}`}
                  className="w-[200px] md:w-[240px] rounded-[1.85rem] pointer-events-none"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex items-center gap-5 mt-6">
        <button
          onClick={() => go(-1)}
          data-testid="button-phone-prev"
          aria-label="Previous screen"
          className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {PHONE_SCREENS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-testid={`dot-phone-${i}`}
              aria-label={`Go to screen ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-foreground/25 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          data-testid="button-phone-next"
          aria-label="Next screen"
          className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p
        className="mt-4 text-sm font-medium text-foreground/70"
        data-testid="text-phone-label"
      >
        {PHONE_SCREENS[active].label}
      </p>
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
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
            <button onClick={() => scrollToSection("about-us")} className="hover:text-primary transition-colors">About Us</button>
            <button onClick={() => scrollToSection("blog")} className="hover:text-primary transition-colors">Insights</button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <AppStoreButton />
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-heading">
            <button onClick={() => scrollToSection("about-us")} className="text-left hover:text-primary">About Us</button>
            <button onClick={() => scrollToSection("blog")} className="text-left hover:text-primary">Insights</button>
            <div className="mt-8">
              <AppStoreButton className="w-full text-lg py-4" />
            </div>
          </nav>
        </div>
      )}

      <main>
        {/* 2. HERO */}
        <section className="pt-24 md:pt-28 pb-0 relative overflow-hidden bg-[#faf0e6]" id="features">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center z-10 max-w-3xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05] tracking-tight mb-4">
              See what everyone's consuming.
              <span className="relative block w-fit mx-auto text-primary font-heading italic text-2xl md:text-3xl lg:text-4xl leading-[1.2] mt-4 whitespace-nowrap">
                Track. Connect. Compare.
                <svg className="absolute -bottom-2 left-0 w-full text-primary" height="12" viewBox="0 0 320 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 7 C 90 3, 230 3, 316 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <motion.img
                  src={neonSmiley}
                  alt=""
                  data-testid="img-hero-smiley"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.6 },
                    scale: { duration: 0.6, delay: 0.6 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                  }}
                  className="pointer-events-none select-none absolute left-full top-1/2 -translate-y-1/2 ml-3 md:ml-4 w-10 md:w-12 lg:w-14"
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl leading-relaxed font-sans">
              See what people are watching, reading, listening to, and playing. Discover your entertainment identity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppStoreButton className="w-full sm:w-auto px-8 py-3.5 text-base" />
              <button 
                onClick={() => scrollToSection("better-together")}
                className="w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-full border-2 border-foreground/10 hover:border-foreground/20 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" /> Watch video
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full mt-2 md:mt-3"
          >
            <img
              src={heroStrip}
              alt="Illustration of friends together watching movies, reading books, listening to podcasts and playing games"
              className="w-full"
              data-testid="img-hero-strip"
            />
          </motion.div>
        </section>

        {/* 3. CATEGORIES */}
        <section className="pt-0 pb-24 md:pb-32 px-6 container mx-auto max-w-7xl flex flex-col" id="how-it-works">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { title: "Movies & TV", desc: "Track what you watch and rate honestly.", Icon: Clapperboard, color: "#a98fd6", seed: 7 },
              { title: "Books", desc: "Log your reads and share your thoughts.", Icon: BookOpen, color: "#9db99f", seed: 21 },
              { title: "Podcasts", desc: "Follow episodes and discuss the best ones.", Icon: Headphones, color: "#efb3c6", seed: 35 },
              { title: "Games", desc: "Track your games and achievements.", Icon: Gamepad2, color: "#e5c261", seed: 49 },
              { title: "Music", desc: "Save what you listen to and discover more.", Icon: Music2, color: "#9f8bd9", seed: 63 },
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <CategoryIcon Icon={cat.Icon} color={cat.color} seed={cat.seed} />
                <h3 className="font-bold text-xl mb-3">{cat.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-[200px]">{cat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-6 md:mt-8"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <div className="w-72 h-72 md:w-[32rem] md:h-[32rem] bg-primary/20 rounded-full blur-[110px]" />
            </div>
            <PhoneCarousel />
          </motion.div>
        </section>

        {/* 4. ROOMS / SOCIAL */}
        <section className="py-24 md:py-32 bg-secondary/40" id="rooms">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Left Column */}
              <div className="lg:w-1/3 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs font-bold tracking-widest text-foreground/50 uppercase mb-4">React together</p>
                  <h2 className="text-4xl md:text-5xl font-heading font-normal mb-8">
                    Find your people.<br />
                    <span className="text-primary italic">Join the conversation.</span>
                  </h2>
                  
                  <ul className="space-y-4 mb-10 text-foreground/80 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60" /> Compare taste and see your overlap</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60" /> Hot takes, predictions, theories, debates</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60" /> Find the people whose taste you trust</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary/60" /> Join Rooms where your people already are</li>
                  </ul>
                  
                  <button onClick={() => scrollToSection("rooms")} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all" data-testid="button-explore-rooms">
                    Explore Rooms <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </motion.div>
              </div>

              {/* Right Column / Cards */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Card 1: Popular Rooms */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-black/5"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Popular Rooms</h3>
                    <span className="text-sm text-primary font-medium cursor-pointer">See all →</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { img: roomHorror, name: "Horror Heads", members: "12.4K" },
                      { img: roomScifi, name: "Sci-Fi Central", members: "8.7K" },
                      { img: roomBooks, name: "The Book Nook", members: "15.1K" }
                    ].map(room => (
                      <div key={room.name} className="flex items-center gap-4 group cursor-pointer">
                        <img src={room.img} alt={room.name} className="w-12 h-12 rounded-xl object-cover group-hover:scale-105 transition-transform" />
                        <div>
                          <p className="font-bold text-sm">{room.name}</p>
                          <p className="text-xs text-foreground/50">{room.members} members</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Card 2: Hot Discussion */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex flex-col"
                >
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 bg-red-100 text-red-600 text-[10px] font-bold uppercase rounded-md mb-2">Hot Discussion</span>
                    <h3 className="font-bold text-base leading-snug">The best opening scene in a horror movie?</h3>
                    <p className="text-xs text-foreground/50 mt-1">127 replies</p>
                  </div>
                  
                  <div className="flex-1 space-y-4 mt-2">
                    <div className="bg-secondary/30 p-3 rounded-2xl">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700">A</div>
                        <span className="text-xs font-bold">Alex</span>
                      </div>
                      <p className="text-sm">Scream (1996) is untouchable. The tension building with the phone calls...</p>
                      <div className="flex gap-3 mt-2 text-foreground/40">
                        <span className="text-[10px] flex items-center gap-1"><Heart className="w-3 h-3" /> 42</span>
                      </div>
                    </div>
                    <div className="bg-secondary/30 p-3 rounded-2xl">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center text-[10px] font-bold text-green-700">J</div>
                        <span className="text-xs font-bold">Jordan</span>
                      </div>
                      <p className="text-sm">Ghost Ship has entered the chat.</p>
                      <div className="flex gap-3 mt-2 text-foreground/40">
                        <span className="text-[10px] flex items-center gap-1"><Heart className="w-3 h-3" /> 18</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Friends Are Watching */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-black/5"
                >
                  <h3 className="font-bold text-lg mb-6">Friends Are Watching</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs text-foreground/50 mb-2">You and 24 others watched</p>
                      <div className="flex gap-3">
                        <img src={showDune} alt="Dune" className="w-10 h-14 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-sm">Dune: Part Two</p>
                          <p className="text-xs text-foreground/50">2024</p>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-px bg-border w-full" />
                    
                    <div>
                      <p className="text-xs text-foreground/50 mb-2">Jess predicted</p>
                      <div className="flex gap-3">
                        <img src={showTlou} alt="TLOU" className="w-10 h-14 rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-sm">The Last of Us</p>
                          <p className="text-xs text-foreground/50">S2 E2</p>
                          <p className="text-sm italic mt-1 bg-secondary/30 p-2 rounded-lg border-l-2 border-primary">"I think Ellie will find out about Joel in episode 4."</p>
                          <div className="flex items-center gap-4 mt-2 text-[10px] text-foreground/50">
                            <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> 12</span>
                            <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 4</span>
                            <span className="text-primary font-bold cursor-pointer">Reply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
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
              <p className="text-white/80 text-lg">Track everything. See where you rank.</p>
            </div>

            <div className="lg:w-1/3 z-10 flex justify-center perspective-1000">
              <div className="relative w-64 h-80 flex items-center justify-center transform-style-3d">
                <motion.img initial={{ rotate: -15, x: -40, y: 10 }} whileInView={{ rotate: -10, x: -60, y: 20 }} src={coverDesert} className="absolute w-32 md:w-40 rounded-xl shadow-2xl border border-white/20 origin-bottom-left" alt="Cover" />
                <motion.img initial={{ rotate: -5, x: -10, y: -5 }} whileInView={{ rotate: -2, x: -20, y: 5 }} src={coverWestern} className="absolute w-32 md:w-40 rounded-xl shadow-2xl border border-white/20 z-10 origin-bottom" alt="Cover" />
                <motion.img initial={{ rotate: 5, x: 20, y: -10 }} whileInView={{ rotate: 8, x: 20, y: -5 }} src={coverLiterary} className="absolute w-32 md:w-40 rounded-xl shadow-2xl border border-white/20 z-20 origin-bottom" alt="Cover" />
                <motion.img initial={{ rotate: 15, x: 50, y: 5 }} whileInView={{ rotate: 18, x: 60, y: 10 }} src={coverChef} className="absolute w-32 md:w-40 rounded-xl shadow-2xl border border-white/20 z-30 origin-bottom-right" alt="Cover" />
              </div>
            </div>

            <div className="lg:w-1/3 z-10 flex flex-col items-center lg:items-end text-center lg:text-right gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Download Consumed</h3>
                <p className="text-white/80">Join thousands building their entertainment identity.</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000" alt="Download on the App Store" className="h-12" />
                </a>
                <div className="opacity-50 cursor-not-allowed grayscale">
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-[68px] -ml-2" />
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
              <button onClick={() => scrollToSection("blog")} className="hover:text-primary transition-colors">Insights</button>
            </nav>
            <p className="text-sm text-foreground/60 max-w-sm text-center md:text-left leading-relaxed">
              We help people understand themselves — and each other — through entertainment.
            </p>
            <p className="text-sm text-foreground/40">
              © 2026 Consumed. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
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