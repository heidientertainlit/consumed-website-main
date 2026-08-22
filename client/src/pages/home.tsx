import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Instagram, ArrowRight, Clapperboard, BookOpen, Headphones, Music2, Tv, Youtube, Gamepad2, ThumbsUp, ThumbsDown, Star, Share2, TrendingUp } from "lucide-react";

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
import showTlou from "../assets/images/show-tlou.png";
import posterPodcast from "../assets/images/poster-podcast.jpg";
import coverChef from "../assets/images/cover-chef.png";
import posterMovie from "../assets/images/poster-movie.jpg";
import posterBook from "../assets/images/poster-book.jpg";
import showDune from "../assets/images/show-dune.png";

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

const liveConversationItems = [
  { title: "The Daily", prompt: "Listeners have strong opinions on this one", type: "Podcast", Icon: Headphones, poster: posterPodcast },
  { title: "Toy Story 5", prompt: "Is the ending brilliant or a cop-out?", type: "Movie", Icon: Clapperboard, poster: posterMovie },
  { title: "Spark", prompt: "Readers can’t agree on this one", type: "Book", Icon: BookOpen, poster: posterBook },
  { title: "Dune: Prophecy", prompt: "The theories are already getting wild", type: "TV", Icon: Tv, poster: showDune },
  { title: "The Last of Us Part II", prompt: "Players are still debating that ending", type: "Game", Icon: Gamepad2, poster: showTlou },
  { title: "Hot Ones", prompt: "This episode is all over everyone’s feed", type: "YouTube", Icon: Youtube, poster: coverChef },
];

function LiveConversationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleItems = [
    liveConversationItems[activeIndex],
    liveConversationItems[(activeIndex + 1) % liveConversationItems.length],
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % liveConversationItems.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="w-full max-w-md mx-auto"
      aria-label="Live entertainment conversations"
    >
      <div className="rounded-[2rem] border border-[#e4d9ef] bg-[radial-gradient(circle_at_90%_8%,_#f3e4ff_0%,_transparent_30%),radial-gradient(circle_at_10%_100%,_#fce8ef_0%,_transparent_34%),linear-gradient(145deg,_#fffdfc_0%,_#f7f1ff_58%,_#f4edff_100%)] p-4 md:p-5 shadow-[0_22px_55px_rgba(80,54,112,0.12)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-3"
          >
            {visibleItems.map((item) => (
              <article key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-[0_10px_24px_rgba(92,64,123,0.09)]">
                <img src={item.poster} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm md:text-base font-bold text-[#25183a]">{item.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-[#80748f]">
                    <TrendingUp className="h-3.5 w-3.5 shrink-0 text-[#a17acb]" strokeWidth={1.8} />
                    <span className="truncate">{item.prompt}</span>
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#e4d8ef] bg-white/75 px-2.5 py-1 text-[10px] font-semibold text-[#69577a]">
                  <item.Icon className="h-3.5 w-3.5 text-[#9a78bd]" strokeWidth={1.8} />
                  {item.type}
                </span>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5" aria-label={`Conversation ${activeIndex + 1} of ${liveConversationItems.length}`}>
            {liveConversationItems.map((item, index) => (
              <span
                key={item.title}
                className={index === activeIndex ? "h-1.5 w-5 rounded-full bg-[#a982d8]" : "h-1.5 w-1.5 rounded-full bg-[#cfc4d9]"}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#8c69b5]">439 more conversations</span>
        </div>
      </div>
    </motion.aside>
  );
}

const heroFeedItems = [
  { person: "Rachelle S.", time: "2h ago", title: "Maybe Someday", detail: "by Colleen Hoover", rating: "★★★★★", take: "“ABSOLUTELY MUST READ. Such a beautiful romantic series.... WITH A SOUNDTRACK. And some spice if you’re into that ;)”", badge: "70% match", likes: "68", image: maybeSomedayReview },
  { person: "Maya R.", time: "18m ago", title: "The Women", detail: "Book · Finished", rating: "★★★★★", take: "“Finished this at 1am and immediately needed someone else to have read it.”", badge: "Finished", likes: "91", image: posterBook },
  { person: "Daniel K.", time: "41m ago", title: "Project Hail Mary", detail: "Book · Finished", rating: "★★★★½", take: "“I knew nothing going in. Keep it that way. This was so much fun.”", badge: "Finished", likes: "74", image: posterBook },
  { person: "Sophie M.", time: "1h ago", title: "Sinners", detail: "Movie · Watched", rating: "★★★★", take: "“I thought I knew what kind of movie I was watching. I absolutely did not.”", badge: "Watched", likes: "86", image: posterMovie },
  { person: "Marcus T.", time: "32m ago", title: "Severance", detail: "Currently watching · S2", rating: "", take: "“Okay, I have a theory about what’s actually happening…”", badge: "Watching", likes: "103", image: showDune },
  { person: "Evan C.", time: "1h ago", title: "The Last of Us Part II", detail: "Game · Played", rating: "★★★½", take: "“Beautiful game. Still not sure how I feel about some of those story choices.”", badge: "Played", likes: "79", image: showTlou },
  { person: "Jordan P.", time: "2h ago", title: "Good Mythical Morning", detail: "YouTube · Added to Favorites", rating: "", take: "“This has basically become my morning talk show.”", badge: "Favorite", likes: "57", image: coverChef },
  { person: "Rachel B.", time: "3h ago", title: "Great Big Beautiful Life", detail: "Book · Finished", rating: "★★★★", take: "“Kept telling myself ‘one more chapter’ and then suddenly it was midnight.”", badge: "Finished", likes: "63", image: posterBook },
  { person: "Chris A.", time: "4h ago", title: "The White Lotus", detail: "TV · Watched", rating: "★★★½", take: "“The group chat after every episode is half the experience.”", badge: "Watched", likes: "88", image: dayOfJackalReview },
  { person: "Lauren H.", time: "5h ago", title: "The Secret Lives of Mormon Wives", detail: "Reality · Watching", rating: "★★★½", take: "“I have changed my mind about who I’m rooting for like four times.”", badge: "Watching", likes: "71", image: dayOfJackalReview },
  { person: "Tyler M.", time: "6h ago", title: "Crime Junkie", detail: "True Crime · Listened", rating: "★★★", take: "“Good gateway podcast. Wouldn’t make my top 10.”", badge: "Listened", likes: "52", image: posterPodcast },
];

function HeroFeedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stackedItems = [
    { item: heroFeedItems[(activeIndex - 1 + heroFeedItems.length) % heroFeedItems.length], x: -72, y: 24, rotate: -7, scale: 0.9, opacity: 0.68, zIndex: 1 },
    { item: heroFeedItems[activeIndex], x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 3 },
    { item: heroFeedItems[(activeIndex + 1) % heroFeedItems.length], x: 72, y: 24, rotate: 7, scale: 0.9, opacity: 0.75, zIndex: 2 },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroFeedItems.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="w-full max-w-[560px] mx-auto xl:-translate-x-4 xl:translate-y-5"
      aria-label="What people are talking about"
    >
      <div className="relative h-[285px] md:h-[320px]">
        <AnimatePresence initial={false}>
          {stackedItems.map(({ item, ...position }) => (
            <motion.article
              key={item.person}
              initial={{ opacity: 0, x: 150, y: position.y + 16, rotate: 10, scale: 0.84 }}
              animate={{
                opacity: position.opacity,
                x: position.x,
                y: [position.y, position.y - 4, position.y],
                rotate: position.rotate,
                scale: position.scale,
              }}
              exit={{ opacity: 0, x: -150, y: position.y + 16, rotate: -10, scale: 0.84 }}
              transition={{
                x: { duration: 0.8, ease: "easeInOut" },
                rotate: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.45 },
                y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ zIndex: position.zIndex }}
              className="absolute left-1/2 -ml-[130px] md:-ml-[140px] w-[260px] md:w-[280px] rounded-2xl border border-[#ece7f3] bg-white p-3 text-[#1b1530] shadow-[0_18px_40px_rgba(59,36,97,0.16)]"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7d5bd7] to-[#301b6e] text-white flex items-center justify-center text-[9px] font-bold">{item.person.charAt(0)}</span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-bold leading-none">{item.person}</p>
                  <p className="mt-1 text-[9px] text-[#756e83]">{item.time}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="w-14 shrink-0">
                  <img src={item.image} alt={item.title} className="h-[88px] w-14 rounded-lg object-cover shadow-sm" />
                  <span className="relative -mt-2 mx-auto block w-fit whitespace-nowrap rounded-full bg-[#7651cf] px-1.5 py-0.5 text-[7px] font-semibold text-white">{item.badge}</span>
                </div>
                <div className="min-w-0 flex flex-col">
                  <h3 className="line-clamp-2 text-[12px] md:text-sm font-bold leading-tight">{item.title}</h3>
                  <p className="mt-1 line-clamp-1 text-[9px] text-[#777080]">{item.detail}</p>
                  {item.rating && <p className="mt-1.5 text-[9px] tracking-[0.08em] text-[#f4b91d]">{item.rating}</p>}
                  <p className="mt-1 line-clamp-3 text-[9px] leading-[1.35] text-[#554e5e]">{item.take}</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-[#eeeaf7] pt-2 text-[9px] text-[#756e83]">
                <button type="button" aria-label={`${item.likes} thumbs up`} className="inline-flex items-center gap-1 hover:text-[#643ec5] transition-colors">
                  <ThumbsUp className="h-3 w-3" strokeWidth={1.7} />
                  <span>{item.likes}</span>
                </button>
                <button type="button" aria-label="Thumbs down" className="hover:text-[#643ec5] transition-colors">
                  <ThumbsDown className="h-3 w-3" strokeWidth={1.7} />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </motion.aside>
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
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-end">
          <div className="flex w-full items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-1.5 mr-auto">
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
        <section className="pt-32 md:pt-40 pb-4 md:pb-6 relative overflow-visible z-10" id="features">
          <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-20 xl:gap-24 relative -translate-y-3 md:-translate-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[680px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            >
              <div className="mt-3 md:mt-4 flex items-center justify-center lg:justify-start gap-1 md:gap-2 mb-0">
                <img src={logoPurple} alt="Consumed" className="h-16 md:h-[4.5rem] lg:h-20 w-auto" />
                <motion.img
                  src={neonSmiley}
                  alt=""
                  aria-hidden="true"
                  className="w-16 md:w-[4.5rem] lg:w-20 drop-shadow-[0_12px_24px_rgba(121,83,213,0.16)]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
                />
              </div>
              <h1 className="w-full max-w-[680px] text-2xl md:text-3xl lg:text-[2.5rem] font-heading font-normal leading-[1.08] tracking-tight mb-6 md:mb-7">
                Where entertainment comes<br />
                together, <span className="italic">so we can too.</span>
              </h1>

              <p className="text-sm md:text-base text-foreground/80 mb-7 max-w-2xl leading-relaxed font-sans">
                See what everyone&apos;s consuming. Track what you love.<br />
                Discover your Entertainment DNA.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <AppStoreButton className="w-full sm:w-auto px-7 py-3 text-sm" />
                <a
                  href="https://app.consumedapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-2 py-2 text-sm font-medium text-foreground/55 hover:text-primary transition-colors"
                  data-testid="link-hero-web-app"
                >
                  Open web app <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
            <div className="order-3 lg:order-2">
              <HeroFeedCarousel />
            </div>
            <div className="order-2 lg:order-3 lg:col-span-2 flex justify-center -translate-y-4 md:-translate-y-6">
              <div className="mt-2 md:mt-4 w-full max-w-[760px]">
                <div className="flex flex-wrap items-center justify-center gap-y-2 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.14em] md:tracking-[0.16em] uppercase text-foreground/45">
                  {["Movies", "TV", "Books", "Podcasts", "Gaming", "More"].map((category, index) => (
                    <span key={category} className="inline-flex items-center gap-2.5 px-1.5 sm:px-2.5">
                      {category}
                      {index < 5 && <span className="text-primary/55">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero app screens — a separate moment that leads into the feed */}
        <section className="relative z-10 -mt-10 md:-mt-12 pt-0 pb-0">
          <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="max-w-md mx-auto lg:order-2 text-center"
            >
              <h2 className="text-3xl md:text-[2.15rem] font-heading font-normal leading-[1.12]">
                Come see what everyone’s talking about.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-snug text-foreground/70">
                Takes. Theories. Reactions. And everything in between.
              </p>
              <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mt-5 px-4 py-2 rounded-full bg-gradient-to-r from-[#9867f5] via-[#7359ed] to-[#3c82ed] text-white text-xs font-bold shadow-[0_8px_20px_rgba(72,78,210,0.25)] hover:brightness-110 hover:-translate-y-0.5 transition-all">
                Explore the feed
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:order-1 flex items-center justify-center translate-y-3 md:translate-y-4"
            >
              <div className="relative flex items-center justify-center origin-center md:scale-[0.92] lg:scale-[0.9]">
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
        <section className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto -mt-14 md:-mt-20 h-[390px] md:h-[480px] relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,_#0e0828_0%,_#241251_55%,_#4a2c91_100%)] text-white" id="how-it-works">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_85%_12%,_#7650d1_0%,_transparent_28%),radial-gradient(circle_at_20%_85%,_#8c5de2_0%,_transparent_35%)] pointer-events-none" />
          <div className="container mx-auto max-w-7xl relative z-10 px-7 pt-28 md:px-14 md:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-heading font-normal leading-[1.05]">
                Entertainment is better, <span className="italic text-[#d8ceff]">together.</span>
              </h2>
              <p className="mt-4 sm:mt-5 font-heading text-lg sm:text-xl lg:text-[1.35rem] xl:text-2xl leading-snug text-[#e6ddff]">
                Everything you’re into. All in one place.
              </p>
              <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-white/75">
                Entertainment lives everywhere. Bring the movies, shows, books, podcasts, music, and more you love into one place — so nothing gets lost, and your next favorite is never far away.
              </p>
            </motion.div>
          </div>
          <div className="hidden">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md lg:w-[42%] shrink-0"
            >
              <h2 className="text-3xl md:text-[2.15rem] font-heading font-normal leading-[1.12]">
                Come see what everyone’s talking about.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-snug font-sans font-normal text-[#d7ccff]">
                Takes. Theories. Reactions. And everything in between.
              </p>
              <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mt-5 px-4 py-2 rounded-full bg-gradient-to-r from-[#9867f5] via-[#7359ed] to-[#3c82ed] text-white text-xs font-bold shadow-[0_8px_20px_rgba(72,78,210,0.34)] hover:brightness-110 hover:-translate-y-0.5 transition-all">
                Explore the feed
              </a>
            </motion.div>

            <div className="hidden">
              <div className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 scrollbar-none">
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
                {
                  person: "Marcus T.",
                  time: "32m ago",
                  take: "“I thought I was just jumping back in for an hour. Six hours later, I’m still trying to beat the same boss.”",
                  title: "The Last of Us Part II",
                  detail: "Currently playing · PS5",
                  meta: "92% aligned with you",
                  badge: "In progress",
                  likes: "93",
                  image: showTlou,
                },
                {
                  person: "Evan C.",
                  time: "1h ago",
                  take: "“The debate about this season is already getting out of hand — and I’m absolutely listening to every minute of it.”",
                  title: "The Ringer NBA Show",
                  detail: "Podcast · New episode",
                  meta: "Top in your circle",
                  badge: "New episode",
                  likes: "84",
                  image: posterPodcast,
                },
                {
                  person: "Drew M.",
                  time: "3h ago",
                  take: "“A twenty-minute interview somehow turned into an entire evening of clips, reactions, and a new chef to follow.”",
                  title: "Hot Ones",
                  detail: "YouTube · 24 min",
                  meta: "Starting tonight",
                  badge: "Watch later",
                  likes: "57",
                  image: coverChef,
                },
                ].map((post, i) => (
                  <motion.article
                  key={post.person}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="w-[330px] md:w-[390px] shrink-0 snap-start rounded-2xl bg-white text-[#19142d] shadow-[0_20px_45px_rgba(0,0,0,0.22)] p-4"
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
              <div className="mt-3 flex items-center justify-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-5 rounded-full bg-white" />
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/40" />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-2.5 text-white/80" data-testid="feed-social-proof">
                <div className="flex -space-x-1.5 shrink-0" aria-hidden="true">
                  {["EB", "PD", "SS", "CR"].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-7 h-7 rounded-full border border-[#251151] flex items-center justify-center text-[9px] font-bold text-white shadow-sm"
                      style={{ background: ["#a58fe7", "#7657c8", "#c0a7f0", "#59408f"][i] }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold whitespace-nowrap">Join the conversation</span>
                  <div className="flex text-[#d5c4ff]" aria-label="Five-star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CATEGORIES */}
        <section className="relative z-20 -mt-12 md:-mt-40 pb-0 px-6 bg-transparent" id="categories">
          <div className="container mx-auto max-w-7xl flex flex-col">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-center gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Movies", desc: "Watchlists and ratings", Icon: Clapperboard },
                    { title: "TV", desc: "Episodes and seasons", Icon: Tv },
                    { title: "Books", desc: "Reads and favorites", Icon: BookOpen },
                    { title: "Podcasts", desc: "Episodes and listens", Icon: Headphones },
                    { title: "Music", desc: "Albums and artists", Icon: Music2 },
                    { title: "YouTube", desc: "Channels and videos", Icon: Youtube },
                    { title: "Gaming", desc: "Games and playtime", Icon: Gamepad2 },
                  ].map((cat, i) => (
                    <motion.div
                      key={cat.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 rounded-2xl border border-[#ece8f5] bg-[#fbfaff] p-3.5 md:p-4"
                    >
                      <span className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#eee8ff] flex items-center justify-center shrink-0">
                        <cat.Icon className="w-5 h-5 md:w-[1.35rem] md:h-[1.35rem] text-primary" strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm md:text-base font-bold leading-tight">{cat.title}</span>
                        <span className="block text-[11px] md:text-xs text-foreground/50 mt-0.5">{cat.desc}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative min-h-[500px] md:min-h-[560px] max-w-[650px] w-full mx-auto lg:-translate-y-4 xl:-translate-y-6"
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
                    There&apos;s a pattern to what you love.
                  </h2>
                  <p className="mt-4 text-[#d8ceff] italic text-2xl md:text-3xl lg:text-4xl font-heading">
                    Discover your entertainment identity.
                  </p>
                  <p className="max-w-3xl mx-auto mt-5 text-sm md:text-base leading-relaxed text-white/70">
                    The more you track, rate, and interact, the more your Entertainment DNA evolves — revealing the patterns behind what you love.
                  </p>
                </motion.div>

                <div className="relative h-[230px] md:h-[275px] mt-8 md:mt-10 overflow-hidden" aria-hidden="true">
                  <div className="absolute inset-x-[12%] top-1/2 h-24 -translate-y-1/2 rounded-full bg-[#9f63ff]/20 blur-3xl" />

                  {[
                    { label: "Movies", className: "left-1 md:left-8 top-5", delay: 0 },
                    { label: "Books", className: "left-3 md:left-16 bottom-8", delay: 0.5 },
                    { label: "TV", className: "right-4 md:right-20 top-4", delay: 1 },
                    { label: "Podcasts", className: "right-1 md:right-8 bottom-9", delay: 1.5 },
                    { label: "Ratings", className: "left-[16%] md:left-[23%] top-[46%]", delay: 2 },
                    { label: "Takes", className: "right-[16%] md:right-[23%] top-[46%]", delay: 2.5 },
                  ].map((source) => (
                    <motion.span
                      key={source.label}
                      animate={{ y: [0, -6, 0], opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: source.delay }}
                      className={`absolute z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] md:text-xs font-bold tracking-wide text-[#e1d9ff] backdrop-blur-sm ${source.className}`}
                    >
                      {source.label}
                    </motion.span>
                  ))}

                  <motion.svg
                    viewBox="0 0 930 230"
                    className="absolute inset-0 w-full h-full overflow-visible"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <defs>
                      <linearGradient id="dna-strand-a" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#6d46d6" />
                        <stop offset="48%" stopColor="#cf70ff" />
                        <stop offset="100%" stopColor="#7f9dff" />
                      </linearGradient>
                      <linearGradient id="dna-strand-b" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#e66bb4" />
                        <stop offset="52%" stopColor="#8d5df0" />
                        <stop offset="100%" stopColor="#56c5da" />
                      </linearGradient>
                      <filter id="dna-glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {[
                      { x: 112, y1: 48, y2: 182 },
                      { x: 248, y1: 112, y2: 112 },
                      { x: 382, y1: 180, y2: 50 },
                      { x: 470, y1: 112, y2: 112 },
                      { x: 606, y1: 48, y2: 182 },
                      { x: 694, y1: 112, y2: 112 },
                      { x: 828, y1: 180, y2: 50 },
                    ].map((rung, i) => (
                      <motion.line
                        key={rung.x}
                        x1={rung.x}
                        x2={rung.x}
                        y1={rung.y1}
                        y2={rung.y2}
                        stroke={i % 2 === 0 ? "#c997ff" : "#6ed5df"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                          hidden: { pathLength: 0, opacity: 0 },
                          visible: { pathLength: 1, opacity: 0.55 },
                        }}
                        transition={{ duration: 0.45, delay: 0.35 + i * 0.1 }}
                      />
                    ))}

                    <motion.path
                      d="M25 115 C95 18 180 18 250 115 S400 212 470 115 S620 18 690 115 S835 212 905 115"
                      fill="none"
                      stroke="url(#dna-strand-a)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      filter="url(#dna-glow)"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { pathLength: 1, opacity: 1 },
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M25 115 C95 212 180 212 250 115 S400 18 470 115 S620 212 690 115 S835 18 905 115"
                      fill="none"
                      stroke="url(#dna-strand-b)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      filter="url(#dna-glow)"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { pathLength: 1, opacity: 1 },
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.15 }}
                    />

                    <circle cx="30" cy="115" r="7" fill="#ffffff" filter="url(#dna-glow)">
                      <animate attributeName="cx" values="30;250;470;690;900" dur="4.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;1;1;1;0" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="900" cy="115" r="6" fill="#d87dff" filter="url(#dna-glow)">
                      <animate attributeName="cx" values="900;690;470;250;30" dur="5.2s" begin="0.7s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;1;1;1;0" dur="5.2s" begin="0.7s" repeatCount="indefinite" />
                    </circle>
                  </motion.svg>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.82 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.15, duration: 0.6, type: "spring" }}
                    className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-[#160c38]/85 px-4 py-3 text-center shadow-[0_0_35px_rgba(178,104,255,0.35)] backdrop-blur-md"
                  >
                    <motion.span
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="block text-[9px] font-bold tracking-[0.16em] text-[#d8ceff]"
                    >
                      DNA EVOLVING
                    </motion.span>
                    <span className="block mt-1 font-heading text-base md:text-lg text-white">Your Entertainment DNA evolves with every movie, book, podcast, and more you consume.</span>
                  </motion.div>
                </div>

                <div className="flex gap-4 md:gap-6 mt-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
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
                    transition={{ delay: 0.55 + i * 0.14 }}
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

        {/* 5. TASTE MATCH */}
        <section className="pt-20 md:pt-28 pb-2 md:pb-4 px-6 bg-white" id="taste-match">
          <div className="container mx-auto max-w-7xl grid lg:grid-cols-[1fr_0.85fr] items-center gap-12 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-4">Taste Match</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05]">
                Find the people<br />
                <span className="italic text-primary">who get it.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-foreground/70">
                See how your entertainment taste overlaps, find people whose recommendations you trust, and discover what you have in common.
              </p>
              <a
                href="https://app.consumedapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 rounded-full bg-primary px-6 py-3.5 text-white font-semibold transition-all hover:bg-[#2e1c78] hover:scale-105 active:scale-95"
                data-testid="link-find-your-people"
              >
                Find your people <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[510px] lg:justify-self-end"
            >
              <div className="rounded-[2rem] border border-[#e9e4f1] bg-[#fbfaff] p-5 md:p-6 shadow-[0_22px_55px_rgba(45,25,99,0.1)]">
                <div className="flex items-center">
                  <span className="rounded-full border border-[#e5dcff] bg-[#f3efff] px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-primary">✧ COMPARE DNA</span>
                </div>

                <div className="flex items-center justify-center gap-3 md:gap-6 mt-7">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#7d51ed] to-[#b35cea] text-white font-bold text-xl md:text-2xl flex items-center justify-center shadow-lg">TR</div>
                    <p className="mt-2 text-[11px] font-bold tracking-wide">YOU</p>
                  </div>
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white border-[6px] border-primary flex flex-col items-center justify-center shadow-sm">
                    <strong className="text-4xl md:text-5xl font-heading text-primary leading-none">92%</strong>
                    <span className="mt-1 text-[9px] font-bold tracking-[0.17em] text-foreground/40">MATCH</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#e34b9a] to-[#8951ed] text-white font-bold text-xl md:text-2xl flex items-center justify-center shadow-lg">AR</div>
                    <p className="mt-2 text-[11px] font-bold tracking-wide">AVERY</p>
                  </div>
                </div>

                <div className="mt-7 divide-y divide-[#e9e5ee] border-y border-[#e9e5ee]">
                  <div className="py-4">
                    <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-foreground/40">You both love</p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-foreground">Severance <span className="text-foreground/30">·</span> The White Lotus <span className="text-foreground/30">·</span> Gone Girl</p>
                  </div>
                  <div className="py-4">
                    <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-foreground/40">You both are</p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-primary">Prestige Detectives</p>
                  </div>
                  <div className="py-4">
                    <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-foreground/40">But you disagree on</p>
                    <div className="flex items-center justify-between gap-3 mt-1">
                      <p className="text-sm md:text-base font-semibold">Godzilla vs. Kong</p>
                      <span className="rounded-full bg-[#f5eafa] px-2.5 py-1 text-[10px] font-bold text-[#c13b82]">DNA CLASH</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. ROOMS */}
        <section className="py-8 md:py-12 bg-white" id="rooms">
          <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,_#10062d_0%,_#25115d_55%,_#5632a9_100%)] px-7 py-12 md:px-14 md:py-16 text-white">
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_90%_20%,_#8c65e6_0%,_transparent_30%),radial-gradient(circle_at_15%_90%,_#6335b7_0%,_transparent_30%)] pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-[0.78fr_1.22fr] items-center gap-10 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#d8ceff] mb-4">Rooms</p>
                <h2 className="text-4xl md:text-5xl font-heading font-normal leading-[1.05]">
                  There&apos;s a Room<br />
                  <span className="italic text-[#d8ceff]">for that.</span>
                </h2>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-white/75 max-w-xl">
                  From the genres you love to the shows you can&apos;t stop thinking about, Rooms give you a place to find the conversations you&apos;re actually interested in.
                </p>
                <p className="mt-6 font-heading text-2xl italic text-[#d8ceff]">Go where your people are.</p>
                <a
                  href="https://app.consumedapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-7 rounded-full bg-white px-6 py-3.5 text-[#2e1c78] font-semibold transition-all hover:bg-[#ede9ff] hover:scale-105 active:scale-95"
                  data-testid="link-explore-rooms"
                >
                  Explore Rooms <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {[
                  "True Crime",
                  "Reality",
                  "Horror",
                  "Fantasy",
                  "Rom Com",
                  "Period Drama",
                  "Comedy",
                  "Sports Talk & Docs",
                ].map((room, i) => (
                  <div
                    key={room}
                      className={`min-h-[92px] rounded-2xl border border-white/15 p-4 flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                        i === 0 ? "bg-[#a653d7]/50 sm:col-span-2" : "bg-white/10"
                    }`}
                  >
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/55">Room</span>
                      <span className="text-base md:text-lg font-heading font-semibold leading-tight">{room}</span>
                      <span className="text-[10px] font-bold tracking-wider text-[#d8ceff]">JOIN THE TALK →</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. PLAY */}
        <section className="py-8 md:py-12 bg-white" id="play">
          <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-[#ece7f3] bg-white px-7 py-12 md:px-14 md:py-16 text-[#201636] shadow-[0_18px_45px_rgba(57,37,88,0.06)]">
            <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#e5f0ff] blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-[#f8e9ff] blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-primary/70 mb-4">Play</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05]">
                  Don&apos;t just consume it.<br />
                  <span className="italic text-primary">Play along.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/65">
                  Trivia, predictions, rankings and more ways to make entertainment a little more fun.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-7">
                  {["Trivia", "Cast Your Vote", "Debate the Rank"].map((mode) => (
                    <span key={mode} className="rounded-full border border-[#e2d8f0] bg-[#f8f4ff] px-3.5 py-1.5 text-xs font-semibold text-primary/80">
                      {mode}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-4 md:gap-5 mt-10">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.7rem] border border-[#e6e0f0] bg-white p-5 md:p-6 text-[#1d1930] shadow-[0_18px_45px_rgba(67,44,103,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#2c6ef2]">Prediction</span>
                  <span className="rounded-full bg-[#eaf1ff] px-2.5 py-1 text-[10px] font-bold text-[#2c6ef2]">LIVE</span>
                </div>
                <h3 className="mt-4 text-xl font-bold leading-tight">Who&apos;s making it to the finale?</h3>
                <div className="space-y-3 mt-5">
                  {[
                    { name: "Ava", value: 42, color: "#296be9" },
                    { name: "Ben", value: 31, color: "#7a4bea" },
                    { name: "Carla", value: 17, color: "#d64fa6" },
                    { name: "Dylan", value: 10, color: "#f1a52b" },
                  ].map((choice) => (
                    <div key={choice.name}>
                      <div className="flex justify-between text-xs font-semibold"><span>{choice.name}</span><span>{choice.value}%</span></div>
                      <div className="h-2 rounded-full bg-[#efeff4] mt-1.5 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${choice.value}%`, backgroundColor: choice.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="rounded-[1.7rem] border border-[#e6e0f0] bg-white p-5 md:p-6 text-[#1d1930] shadow-[0_18px_45px_rgba(67,44,103,0.10)] flex flex-col"
              >
                <span className="text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#8d31ca]">Trivia</span>
                <h3 className="mt-4 text-xl font-bold leading-tight">Which movie is this quote from?</h3>
                <blockquote className="mt-5 rounded-2xl bg-[#f6efff] p-5 font-heading text-2xl italic text-[#6f2baa]">
                  “You had me at hello.”
                </blockquote>
                <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#376ff0] to-[#ab31e5] px-5 py-3 text-sm font-bold text-white">
                  Play Trivia <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="rounded-[1.7rem] border border-[#eadcae] bg-[#fff9e8] p-5 md:p-6 text-[#1d1930] shadow-[0_18px_45px_rgba(67,44,103,0.10)] flex flex-col"
              >
                <span className="text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#d18412]">Rank It</span>
                <h3 className="mt-4 text-xl font-bold leading-tight">Rank these &apos;90s rom-coms.</h3>
                <ol className="space-y-2.5 mt-5">
                  {["10 Things I Hate About You", "Clueless", "You've Got Mail"].map((title, i) => (
                    <li key={title} className="flex items-center gap-3 rounded-xl border border-[#eadcae] bg-white/75 px-3 py-2.5">
                      <span className="w-7 h-7 rounded-full bg-[#f3cf5f] flex items-center justify-center text-xs font-extrabold">{i + 1}</span>
                      <span className="text-sm font-semibold">{title}</span>
                    </li>
                  ))}
                </ol>
                <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1930] px-5 py-3 text-sm font-bold text-white">
                  Play now <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>
            </div>
          </div>
        </section>

        {/* 8. DISCOVERY */}
        <section className="py-8 md:py-12 bg-white" id="discovery">
          <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,_#10062d_0%,_#221052_46%,_#4e2a9a_100%)] px-7 py-12 md:px-14 md:py-16 text-white">
            <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_88%_13%,_#865fe1_0%,_transparent_30%),radial-gradient(circle_at_8%_82%,_#2c7be7_0%,_transparent_26%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#d8ceff]">Discovery</p>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em]">DISCOVER</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05]">
                  Your next obsession<br />
                  <span className="italic text-[#d8ceff]">is already here.</span>
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-white/75">
                  Discover what to watch, read, or listen to next through your taste, your Entertainment DNA, the people you trust, and what&apos;s happening across Consumed.
                </p>
                <a
                  href="https://app.consumedapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 rounded-full bg-white px-6 py-3.5 text-[#2e1c78] font-semibold transition-all hover:bg-[#ede9ff] hover:scale-105 active:scale-95"
                  data-testid="link-discover-something-new"
                >
                  Discover something new <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-10 md:mt-12">
                  <LiveConversationsCarousel />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 9. ENTERTAINMENT CHATTER */}
        <section className="py-24 md:py-32 px-6 bg-white overflow-hidden" id="chatter">
          <div className="container mx-auto max-w-6xl relative min-h-[500px] md:min-h-[560px] flex items-center justify-center">
            {[
              { text: "obsessed", className: "top-2 left-0 md:left-8", color: "bg-[#f4eaff] text-[#7232ba]" },
              { text: "couldn’t finish it", className: "top-16 right-0 md:right-10", color: "bg-[#fff1f8] text-[#c64188]" },
              { text: "10/10", className: "top-40 left-0 md:left-16", color: "bg-[#eaf2ff] text-[#3572cf]" },
              { text: "overrated", className: "bottom-24 left-0 md:left-24", color: "bg-[#fff6df] text-[#a66a12]" },
              { text: "no spoilers", className: "bottom-8 right-0 md:right-14", color: "bg-[#e9fbf2] text-[#228a5e]" },
              { text: "TEAM AVA", className: "top-40 right-0 md:right-20", color: "bg-[#efeaff] text-[#6f45d4]" },
              { text: "I called that ending", className: "bottom-40 right-4 md:right-0", color: "bg-[#eef9ff] text-[#2679a9]" },
              { text: "starting tonight", className: "bottom-2 left-1/3", color: "bg-[#f7efff] text-[#9146c1]" },
            ].map((take, i) => (
              <motion.span
                key={take.text}
                animate={{ x: [0, i % 2 === 0 ? 10 : -10, 0], y: [0, i % 3 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                className={`absolute z-0 hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-semibold shadow-sm border border-white ${take.className} ${take.color}`}
              >
                {take.text}
              </motion.span>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl text-center"
            >
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-primary mb-4">The conversation never ends</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05]">
                Okay, but what are you<br />
                <span className="italic text-primary">watching right now?</span>
              </h2>

              <div className="mt-9 rounded-[2rem] border border-[#e8e4f0] bg-white p-5 md:p-6 text-left shadow-[0_20px_55px_rgba(51,31,94,0.12)]">
                <div className="flex items-center justify-between pb-4 border-b border-[#eeeaf4]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["A", "J", "M"].map((initial, i) => (
                        <span key={initial} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{ background: ["#7b53db", "#ed5d9d", "#3b8eec"][i] }}>{initial}</span>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold">Tonight&apos;s chat</p>
                      <p className="text-xs text-[#32a269]">● 14 watching now</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#f0ebff] px-3 py-1.5 text-[10px] font-bold text-primary">LIVE</span>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#ed5d9d] text-white flex items-center justify-center text-[10px] font-bold">A</span>
                    <div>
                      <p className="text-xs font-bold">Avery <span className="font-normal text-foreground/40">just now</span></p>
                      <p className="mt-1 rounded-2xl rounded-tl-sm bg-[#f4efff] px-3.5 py-2.5 text-sm text-foreground/80">Hot take: this season is already better than the last one.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="text-right">
                      <p className="text-xs font-bold">You <span className="font-normal text-foreground/40">just now</span></p>
                      <p className="mt-1 rounded-2xl rounded-tr-sm bg-[#37218d] px-3.5 py-2.5 text-sm text-white">Finally, someone said it. I&apos;m starting tonight.</p>
                    </div>
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#6f4bd3] text-white flex items-center justify-center text-[10px] font-bold">YO</span>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 text-xs text-foreground/45"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#43a7e8] text-white flex items-center justify-center text-[10px] font-bold">J</span>
                    <span className="rounded-full bg-[#f3f1f6] px-3 py-2">Jordan is typing <span className="tracking-[0.18em]">•••</span></span>
                  </motion.div>
                </div>

                <div className="flex items-center gap-3 rounded-full border border-[#e7e1ef] bg-[#fbfaff] px-4 py-3">
                  <span className="text-primary text-lg leading-none">+</span>
                  <span className="text-sm text-foreground/40">Drop your hot take...</span>
                  <span className="ml-auto text-xs font-bold text-primary">Send ↑</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-8 md:py-12 bg-white" id="better-together">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,_#0b0425_0%,_#1c0d4a_48%,_#452184_100%)] px-7 py-16 md:px-14 md:py-20 text-center text-white"
          >
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_18%_15%,_#4c2b98_0%,_transparent_28%),radial-gradient(circle_at_82%_85%,_#8762d7_0%,_transparent_28%)] pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1.05]">
                What are you consuming?
              </h2>
              <p className="mt-5 text-xl md:text-2xl font-heading text-[#d8ceff]">
                Track it. Talk about it. Find your people.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">
                <a href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-[#2e1c78] font-semibold transition-all hover:bg-[#ede9ff] hover:scale-105 active:scale-95">
                  Download the app
                </a>
                <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-white font-semibold transition-all hover:bg-white/20">
                  Open web app <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div id="feedback" className="relative z-10 max-w-5xl mx-auto mt-14 md:mt-16 pt-8 md:pt-10 border-t border-white/15 grid md:grid-cols-[1fr_auto] items-center gap-7 text-center md:text-left">
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#d8ceff] mb-3">Build it with us</p>
                <h3 className="text-2xl md:text-3xl font-heading font-normal text-white">Help us make Consumed better.</h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-white/65">
                  Consumed is still in beta, and we&apos;re building it alongside the people using it. Tell us what you love, what&apos;s not quite right, and what you want to see next.
                </p>
              </div>
              <Link
                href="/feedback"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-white font-semibold whitespace-nowrap transition-all hover:bg-white/20"
                data-testid="link-beta-feedback"
              >
                Share feedback <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 11. AS SEEN IN */}
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

      {/* 12. FOOTER */}
      <footer className="bg-white pt-12 md:pt-16 pb-8" id="footer">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.75fr] gap-10 lg:gap-14">
            <div>
              <Link href="/">
                <img src={logoPurple} alt="Consumed" className="h-7 opacity-85 cursor-pointer" />
              </Link>
              <p className="mt-4 max-w-xs font-heading text-xl text-foreground/75">
                Entertainment is better, <span className="italic text-primary">together.</span>
              </p>
            </div>

            <nav className="flex flex-col items-start gap-3 text-sm text-foreground/65">
              <p className="mb-1 text-xs font-bold tracking-[0.15em] uppercase text-foreground">Product</p>
              <a href="https://app.consumedapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-web-app-footer">Open web app</a>
              <a href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Download the app</a>
              <button onClick={() => scrollToSection("rooms")} className="hover:text-primary transition-colors">Rooms</button>
              <button onClick={() => scrollToSection("play")} className="hover:text-primary transition-colors">Play</button>
            </nav>

            <nav className="flex flex-col items-start gap-3 text-sm text-foreground/65">
              <p className="mb-1 text-xs font-bold tracking-[0.15em] uppercase text-foreground">Company</p>
              <button onClick={() => scrollToSection("about-us")} className="hover:text-primary transition-colors">About Us</button>
              <Link href="/insights" className="hover:text-primary transition-colors" data-testid="link-insights-footer">Insights</Link>
              <button onClick={() => scrollToSection("feedback")} className="hover:text-primary transition-colors">Feedback</button>
            </nav>

            <nav className="flex flex-col items-start gap-3 text-sm text-foreground/65">
              <p className="mb-1 text-xs font-bold tracking-[0.15em] uppercase text-foreground">Follow</p>
              <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TikTok</a>
              <a href="https://x.com/consumedapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">X</a>
            </nav>
          </div>

          <div className="mt-12 pt-7 border-t border-border/70 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-2">Our mission</p>
              <p className="text-sm text-foreground/60">Bringing joy and connection through entertainment.</p>
            </div>
            <p className="text-sm text-foreground/40">© 2026 Consumed.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}