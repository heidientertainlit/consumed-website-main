import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Menu, X, Instagram, ArrowRight, Clapperboard, BookOpen, Headphones, Music2, Tv, Youtube, Gamepad2, ThumbsUp, ThumbsDown, MessageCircle, Star, Share2, TrendingUp, Users, GitCompareArrows, Layers3, ChevronRight } from "lucide-react";

import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";
import heroMaybeSomeday from "@assets/Screenshot_2026-08-22_at_12.08.35_PM_1787422156206.png";
import heroTheWomen from "@assets/Screenshot_2026-08-22_at_12.08.28_PM_1787422156207.png";
import heroProjectHailMary from "@assets/Screenshot_2026-08-22_at_12.08.50_PM_1787422156206.png";
import heroSinners from "@assets/Screenshot_2026-08-22_at_12.02.49_PM_1787421813541.png";
import heroSeverance from "@assets/Screenshot_2026-08-22_at_12.08.58_PM_1787422156201.png";
import heroLastOfUsPartTwo from "@assets/Screenshot_2026-08-22_at_12.03.08_PM_1787421813540.png";
import heroGoodMythicalMorning from "@assets/generated_images/hero-good-mythical-morning.jpg";
import heroGreatBigBeautifulLife from "@assets/Screenshot_2026-08-22_at_12.08.41_PM_1787422156206.png";
import heroWhiteLotus from "@assets/Screenshot_2026-08-22_at_12.03.00_PM_1787421813540.png";
import heroMormonWives from "@assets/Screenshot_2026-08-22_at_12.02.55_PM_1787421813540.png";
import heroCrimeJunkie from "@assets/Screenshot_2026-08-22_at_12.03.21_PM_1787421813533.png";


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
  { person: "Rachelle S.", time: "2h ago", title: "Maybe Someday", detail: "by Colleen Hoover", rating: "★★★★★", take: "“ABSOLUTELY MUST READ. Such a beautiful romantic series.... WITH A SOUNDTRACK. And some spice if you’re into that ;)”", badge: "70% match", likes: "68", image: heroMaybeSomeday },
  { person: "Maya R.", time: "18m ago", title: "The Women", detail: "Book · Finished", rating: "★★★★★", take: "“Finished this at 1am and immediately needed someone else to have read it.”", badge: "Finished", likes: "91", image: heroTheWomen },
  { person: "Daniel K.", time: "41m ago", title: "Project Hail Mary", detail: "Book · Finished", rating: "★★★★½", take: "“I knew nothing going in. Keep it that way. This was so much fun.”", badge: "Finished", likes: "74", image: heroProjectHailMary },
  { person: "Sophie M.", time: "1h ago", title: "Sinners", detail: "Movie · Watched", rating: "★★★★", take: "“I thought I knew what kind of movie I was watching. I absolutely did not.”", badge: "Watched", likes: "86", image: heroSinners },
  { person: "Marcus T.", time: "32m ago", title: "Severance", detail: "Currently watching · S2", rating: "", take: "“Okay, I have a theory about what’s actually happening…”", badge: "Watching", likes: "103", image: heroSeverance },
  { person: "Evan C.", time: "1h ago", title: "The Last of Us Part II", detail: "Game · Played", rating: "★★★½", take: "“Beautiful game. Still not sure how I feel about some of those story choices.”", badge: "Played", likes: "79", image: heroLastOfUsPartTwo },
  { person: "Jordan P.", time: "2h ago", title: "Good Mythical Morning", detail: "YouTube · Added to Favorites", rating: "", take: "“This has basically become my morning talk show.”", badge: "Favorite", likes: "57", image: heroGoodMythicalMorning },
  { person: "Rachel B.", time: "3h ago", title: "Great Big Beautiful Life", detail: "Book · Finished", rating: "★★★★", take: "“Kept telling myself ‘one more chapter’ and then suddenly it was midnight.”", badge: "Finished", likes: "63", image: heroGreatBigBeautifulLife },
  { person: "Chris A.", time: "4h ago", title: "The White Lotus", detail: "TV · Watched", rating: "★★★½", take: "“The group chat after every episode is half the experience.”", badge: "Watched", likes: "88", image: heroWhiteLotus },
  { person: "Lauren H.", time: "5h ago", title: "The Secret Lives of Mormon Wives", detail: "Reality · Watching", rating: "★★★½", take: "“I have changed my mind about who I’m rooting for like four times.”", badge: "Watching", likes: "71", image: heroMormonWives },
  { person: "Tyler M.", time: "6h ago", title: "Crime Junkie", detail: "True Crime · Listened", rating: "★★★", take: "“Good gateway podcast. Wouldn’t make my top 10.”", badge: "Listened", likes: "52", image: heroCrimeJunkie },
];

const liveConversationActivity = [
  { replies: "14", talking: "6 friends talking", speaker: "", reply: "Someone is typing something…" },
  { replies: "21", talking: "9 friends talking", speaker: "Jules", reply: "That final chapter completely broke me." },
  { replies: "18", talking: "7 friends talking", speaker: "Evan", reply: "Loved the book AND loved the movie. Ryan Gosling crushed it." },
  { replies: "29", talking: "11 friends talking", speaker: "Nina", reply: "The juke joint scene was unreal." },
  { replies: "32", talking: "14 friends talking", speaker: "Alex", reply: "I still don’t trust Milchick.", isTyping: true },
  { replies: "17", talking: "8 friends talking", speaker: "Sam", reply: "That ending still wrecks me." },
  { replies: "24", talking: "10 friends talking", speaker: "Leah", reply: "This taste test had me crying." },
  { replies: "16", talking: "5 friends talking", speaker: "Chris", reply: "The last chapter changed everything." },
  { replies: "27", talking: "12 friends talking", speaker: "Jordan", reply: "That dinner scene was pure chaos." },
  { replies: "19", talking: "8 friends talking", speaker: "Mia", reply: "I changed sides three times." },
  { replies: "11", talking: "4 friends talking", speaker: "Ava", reply: "Episode three changed my whole theory." },
];

const heroMediaTypes = ["show", "movie", "book", "game", "YouTube rabbit hole", "podcast", "song"];
const wantedActions = ["watch", "read", "play"];

function HeroTagline() {
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMediaIndex((current) => (current + 1) % heroMediaTypes.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <h2 className="w-full max-w-5xl font-heading text-4xl font-normal leading-[1.05] tracking-tight text-[#211a2a] md:text-5xl lg:text-6xl">
      Admit it, that{" "}
      <span className="relative inline-grid max-w-full align-baseline overflow-hidden text-left">
        <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
          YouTube rabbit hole
        </span>
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={heroMediaTypes[mediaIndex]}
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="col-start-1 row-start-1 whitespace-nowrap italic text-[#7251c7]"
          >
            {heroMediaTypes[mediaIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
      <br className="hidden sm:block" />
      was just your entire personality.
    </h2>
  );
}

function WantedActionHeadline() {
  const [actionIndex, setActionIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActionIndex((current) => (current + 1) % wantedActions.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <h2 className="font-heading text-4xl font-normal leading-[0.98] sm:text-5xl lg:text-7xl">
      What was that thing I wanted to{" "}
      <span className="relative inline-grid align-baseline overflow-hidden text-left">
        <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
          watch
        </span>
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={wantedActions[actionIndex]}
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="col-start-1 row-start-1 whitespace-nowrap italic text-primary"
          >
            {wantedActions[actionIndex]}
          </motion.span>
        </AnimatePresence>
      </span>{"?"}
    </h2>
  );
}

function HeroFeedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stackedItems = [
    { item: heroFeedItems[(activeIndex - 1 + heroFeedItems.length) % heroFeedItems.length], activity: liveConversationActivity[(activeIndex - 1 + heroFeedItems.length) % heroFeedItems.length], x: -72, y: 24, rotate: -7, scale: 0.9, opacity: 0.68, zIndex: 1 },
    { item: heroFeedItems[activeIndex], activity: liveConversationActivity[activeIndex], x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 3 },
    { item: heroFeedItems[(activeIndex + 1) % heroFeedItems.length], activity: liveConversationActivity[(activeIndex + 1) % heroFeedItems.length], x: 72, y: 24, rotate: 7, scale: 0.9, opacity: 0.75, zIndex: 2 },
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
      className="w-full max-w-[560px] mx-auto xl:-translate-x-20 xl:translate-y-5"
      aria-label="What people are talking about"
    >
      <div className="relative h-[285px] md:h-[320px]">
        <AnimatePresence initial={false}>
          {stackedItems.map(({ item, activity, ...position }) => (
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
              className="absolute left-1/2 -ml-[136px] md:-ml-[150px] w-[272px] md:w-[300px] rounded-2xl border border-[#ece7f3] bg-white p-3 md:p-3.5 text-[#1b1530] shadow-[0_18px_40px_rgba(59,36,97,0.16)]"
            >
              {position.zIndex === 3 && (
                <>
                  <div className="pointer-events-none absolute right-8 top-3" aria-hidden="true">
                    <motion.span
                      animate={{ opacity: [0, 1, 0], y: [0, -38], scale: [0.75, 1, 0.82] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", repeatDelay: 1.2 }}
                      className="absolute flex h-5 w-5 items-center justify-center rounded-full bg-[#f1e8ff] text-[#7651cf] shadow-sm"
                    >
                      <ThumbsUp className="h-2.5 w-2.5" strokeWidth={2} />
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0], y: [4, -30], x: [8, 17], scale: [0.7, 1, 0.85] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.35, repeatDelay: 1.4 }}
                      className="absolute flex h-5 w-5 items-center justify-center rounded-full bg-[#fff3cd] text-[#e6a511] shadow-sm"
                    >
                      <Star className="h-2.5 w-2.5 fill-current" strokeWidth={1.8} />
                    </motion.span>
                  </div>
                  {activity.isTyping && (
                  <motion.div
                    animate={{ opacity: [0.65, 1, 0.65], y: [0, -2, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-7 left-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-[#e7def5] bg-white px-2.5 py-1 text-[8px] font-medium text-[#62576e] shadow-[0_8px_20px_rgba(59,36,97,0.12)]"
                  >
                    <span>{activity.speaker} + 2 are typing</span>
                    <span className="flex items-center gap-0.5" aria-label="Typing">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          animate={{ opacity: [0.25, 1, 0.25], y: [0, -1, 0] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.14, ease: "easeInOut" }}
                          className="h-1 w-1 rounded-full bg-[#7651cf]"
                        />
                      ))}
                    </span>
                  </motion.div>
                  )}
                </>
              )}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7d5bd7] to-[#301b6e] text-white flex items-center justify-center text-[9px] font-bold">{item.person.charAt(0)}</span>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-bold leading-none">{item.person}</p>
                    <p className="mt-1 text-[9px] text-[#756e83]">{item.time}</p>
                  </div>
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
                  <p className="mt-1 line-clamp-2 text-[9px] leading-[1.35] text-[#554e5e]">{item.take}</p>
                </div>
              </div>
              <div className="mt-2 rounded-lg border border-[#eee8f7] bg-[#fbf9ff] px-2 py-1.5 text-[8px] text-[#756e83]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-1.5">
                    <span className="w-4 h-4 rounded-full border border-white bg-[#f4a6be] flex items-center justify-center text-[6px] font-bold text-white">M</span>
                    <span className="w-4 h-4 rounded-full border border-white bg-[#6d8ddd] flex items-center justify-center text-[6px] font-bold text-white">J</span>
                    <span className="w-4 h-4 rounded-full border border-white bg-[#8863ca] flex items-center justify-center text-[6px] font-bold text-white">A</span>
                  </div>
                  <span className="ml-2 mr-auto truncate">{activity.talking}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#7049c9]">
                    <MessageCircle className="h-3 w-3" strokeWidth={1.8} />
                    {activity.replies}
                  </span>
                </div>
                <p className="mt-1 truncate text-[#5c5368]">
                  {activity.speaker ? (
                    <>
                      <span className="font-bold text-[#40354f]">{activity.speaker}:</span> “{activity.reply}”
                    </>
                  ) : (
                    <span className="italic text-[#756e83]">{activity.reply}</span>
                  )}
                </p>
              </div>
              <div className="mt-2 flex items-center justify-start border-t border-[#eeeaf7] pt-2 text-[9px] text-[#756e83]">
                <div className="flex items-center gap-1.5">
                  <button type="button" aria-label={`${item.likes} thumbs up`} className="inline-flex items-center gap-1 rounded-full bg-[#f4f1fa] px-2 py-1 font-semibold hover:bg-[#ece5fa] hover:text-[#643ec5] transition-colors">
                    <ThumbsUp className="h-3 w-3" strokeWidth={1.7} />
                    <span>{item.likes}</span>
                  </button>
                  <button type="button" aria-label="Thumbs down" className="inline-flex items-center justify-center rounded-full bg-[#f4f1fa] p-1 hover:bg-[#ece5fa] hover:text-[#643ec5] transition-colors">
                    <ThumbsDown className="h-3 w-3" strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}

function PhoneTrio() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative flex origin-center items-center justify-center md:scale-[0.92] lg:scale-[0.9]">
        <div className="hidden w-[200px] translate-x-6 translate-y-4 -rotate-6 overflow-hidden rounded-[2rem] border-[6px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl sm:block md:w-[220px]">
          <img src={screenAddHero} alt="Consumed app — Add media screen" className="w-full" data-testid="img-hero-phone-add" />
        </div>
        <div className="relative z-10 w-[240px] overflow-hidden rounded-[2.25rem] border-[7px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl md:w-[270px]">
          <img src={screenDnaHero} alt="Consumed app — Entertainment DNA profile screen" className="w-full" data-testid="img-hero-phone-dna" />
        </div>
        <div className="hidden w-[200px] -translate-x-6 translate-y-4 rotate-6 overflow-hidden rounded-[2rem] border-[6px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl sm:block md:w-[220px]">
          <img src={screenRatingsHero} alt="Consumed app — Takes and ratings screen" className="w-full" data-testid="img-hero-phone-ratings" />
        </div>
      </div>
    </div>
  );
}

function ScatteredEntertainmentAnimation() {
  const [hasEntered, setHasEntered] = useState(false);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (!hasEntered) return;
    const timer = window.setTimeout(() => setCleared(true), 3000);
    return () => window.clearTimeout(timer);
  }, [hasEntered]);

  const fragments = [
    {
      className: "left-[-2%] top-[2%] z-10 w-[52%]",
      from: { x: -420, y: -180, rotate: -26 },
      rotate: -7,
      surfaceClass: "border-[#e4d686] bg-[#fff8c9] shadow-[0_22px_55px_rgba(67,51,5,0.2)]",
      content: (
        <>
          <div className="flex items-center justify-between border-b border-[#c8b958]/35 pb-2">
            <p className="text-[9px] font-semibold text-[#c39300]">‹ Notes</p>
            <span className="text-[9px] text-[#9f8e49]">Watch next</span>
          </div>
          <div className="mt-3 space-y-2 text-[13px] leading-tight text-[#332f20]">
            <p>Severance!!!</p>
            <p>The one Ashley sent</p>
            <p>That cooking show from TikTok</p>
            <p className="text-[#332f20]/55">movie dad mentioned??</p>
          </div>
        </>
      ),
    },
    {
      className: "right-[-4%] top-[5%] z-20 w-[48%]",
      from: { x: 430, y: -210, rotate: 28 },
      rotate: 6,
      surfaceClass: "border-black bg-[#111] text-white shadow-[0_26px_60px_rgba(0,0,0,0.35)]",
      content: (
        <>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.08em] text-[#e50914]">Netflix</p>
            <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/55">My List</span>
          </div>
          <div className="mt-3 flex gap-2">
            {[heroWhiteLotus, dayOfJackalReview, heroSinners].map((image, imageIndex) => (
              <div key={image} className="relative min-w-0 flex-1">
                <img src={image} alt="" className="aspect-[2/3] w-full rounded-[4px] object-cover" />
                <span className="absolute bottom-1 left-1 text-[7px] font-black text-white drop-shadow">
                  {imageIndex + 1}
                </span>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      className: "left-[6%] top-[35%] z-30 w-[43%]",
      from: { x: -450, y: 20, rotate: -30 },
      rotate: 4,
      surfaceClass: "border-[#dbd8e0] bg-white shadow-[0_24px_55px_rgba(31,18,45,0.25)]",
      content: (
        <>
          <div className="flex items-center justify-between border-b border-[#292235]/10 pb-2">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#6f6678]">Messages</p>
            <span className="text-[9px] text-[#a59dab]">Movie people (8)</span>
          </div>
          <div className="mt-3 space-y-2 text-[10px] leading-tight">
            <p className="ml-auto w-fit max-w-[86%] rounded-[14px_14px_4px_14px] bg-[#0b84ff] px-3 py-2 text-white">what have you seen lately?</p>
            <p className="w-fit max-w-[88%] rounded-[14px_14px_14px_4px] bg-[#e9e9eb] px-3 py-2 text-[#292235]">omg did you SEE that ending</p>
          </div>
        </>
      ),
    },
    {
      className: "right-[4%] top-[39%] z-40 w-[38%]",
      from: { x: 450, y: 60, rotate: 32 },
      rotate: -5,
      surfaceClass: "border-[#8df1c1]/40 bg-[linear-gradient(145deg,#101010,#32204f_48%,#ff4f9a)] text-white shadow-[0_24px_60px_rgba(31,18,45,0.3)]",
      content: (
        <>
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#1ed760]">Spotify</p>
            <span className="text-[8px] text-white/55">Wrapped</span>
          </div>
          <p className="mt-3 font-heading text-xl italic leading-none">Your year sounded like this.</p>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-[8px] uppercase tracking-[0.16em] text-white/65">Top genre</span>
            <span className="text-sm font-bold text-[#8df1c1]">Indie Pop</span>
          </div>
        </>
      ),
    },
    {
      className: "bottom-[8%] left-[-3%] z-50 w-[47%]",
      from: { x: -440, y: 260, rotate: -24 },
      rotate: -3,
      surfaceClass: "border-[#ddd] bg-white shadow-[0_25px_60px_rgba(31,18,45,0.28)]",
      content: (
        <>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-7 items-center justify-center rounded-md bg-[#ff0033] text-[8px] text-white">▶</span>
            <p className="text-[10px] font-black tracking-tight text-[#171717]">YouTube</p>
          </div>
          <div className="mt-3 flex gap-3">
            <img src={heroGoodMythicalMorning} alt="" className="h-16 w-[44%] rounded-md object-cover" />
            <div>
              <p className="text-[11px] font-bold leading-tight text-[#27202f]">The video you&apos;ll send to everyone</p>
              <p className="mt-2 text-[8px] text-[#938b99]">Saved to Watch later</p>
            </div>
          </div>
        </>
      ),
    },
    {
      className: "bottom-[3%] right-[-3%] z-[60] w-[43%]",
      from: { x: 440, y: 280, rotate: 26 },
      rotate: 7,
      surfaceClass: "border-[#ded6ee] bg-[linear-gradient(145deg,#f6f0ff,#e9dcff)] shadow-[0_26px_60px_rgba(54,27,93,0.3)]",
      content: (
        <>
          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#7651cf]">Podcasts / Up next</p>
          <div className="mt-3 flex items-center gap-3">
            <img src={heroCrimeJunkie} alt="" className="h-12 w-12 rounded-xl object-cover" />
            <div className="min-w-0">
              <p className="truncate font-heading text-base text-[#27202f]">Crime Junkie</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#7f6f91]">18 episodes saved</p>
            </div>
          </div>
        </>
      ),
    },
    {
      className: "bottom-[16%] left-[24%] z-[65] w-[34%]",
      from: { x: -80, y: 390, rotate: -28 },
      rotate: 9,
      surfaceClass: "border-[#ef5365]/25 bg-[linear-gradient(145deg,#fff1f3,#ffb2bd)] shadow-[0_24px_55px_rgba(133,33,50,0.28)]",
      content: (
        <>
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold text-[#e7324d]">♪ Music</p>
            <span className="text-[8px] text-[#9b5360]">Recently Played</span>
          </div>
          <p className="mt-4 font-heading text-lg leading-none text-[#3e1820]">Songs I&apos;m making everyone listen to</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/60">
            <div className="h-full w-[68%] rounded-full bg-[#e7324d]" />
          </div>
        </>
      ),
    },
    {
      className: "right-[17%] top-[21%] z-[68] w-[31%]",
      from: { x: 260, y: -330, rotate: 24 },
      rotate: -10,
      surfaceClass: "border-[#bdd7ca] bg-[#eef9f3] shadow-[0_22px_52px_rgba(30,74,50,0.25)]",
      content: (
        <>
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#218653]">Watched</p>
            <span className="text-[9px] text-[#65917a]">Last night</span>
          </div>
          <p className="mt-3 font-heading text-base leading-tight text-[#193a29]">The White Lotus</p>
          <p className="mt-2 text-[12px] tracking-[0.08em] text-[#20a866]">★★★★½</p>
          <p className="mt-1 text-[8px] text-[#65917a]">where did I even rate this?</p>
        </>
      ),
    },
  ];

  const chatBubbles = [
    {
      className: "left-[1%] top-[29%] z-[70] max-w-[42%] bg-[#292235] text-white",
      from: { x: -360, y: -60, rotate: -18 },
      rotate: -4,
      text: "what would you recommend?",
    },
    {
      className: "right-[-1%] top-[30%] z-[80] max-w-[38%] bg-[#0b84ff] text-white",
      from: { x: 390, y: -40, rotate: 20 },
      rotate: 5,
      text: "WAIT have you watched it yet??",
    },
    {
      className: "left-[26%] bottom-[1%] z-[90] max-w-[42%] bg-white text-[#292235]",
      from: { x: 40, y: 330, rotate: -16 },
      rotate: -2,
      text: "I need a new show immediately",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate={cleared ? "cleared" : hasEntered ? "visible" : "hidden"}
      onViewportEnter={() => setHasEntered(true)}
      viewport={{ once: true, amount: 0.25 }}
      className="relative mx-auto h-[470px] w-full max-w-[680px] sm:h-[520px]"
      aria-label="Entertainment recommendations scattered across notes, messages, screenshots, and media apps before coming together in Consumed"
    >
      {fragments.map((fragment, index) => (
        <motion.div
          key={fragment.className}
          variants={{
            hidden: { opacity: 0, scale: 0.62, ...fragment.from },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: fragment.rotate,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 185,
                damping: 13,
                mass: 0.84,
                delay: index * 0.18,
              },
            },
            cleared: {
              opacity: 0,
              x: (index % 2 === 0 ? -1 : 1) * (420 + index * 35),
              y: -440 - index * 24,
              rotate: (index % 2 === 0 ? -1 : 1) * (28 + index * 3),
              scale: 0.72,
              transition: {
                duration: 0.68,
                delay: index * 0.025,
                ease: [0.55, 0.06, 0.68, 0.19],
              },
            },
          }}
          className={`absolute rounded-[0.9rem] border p-4 text-left ${fragment.surfaceClass} ${fragment.className}`}
        >
          {fragment.content}
        </motion.div>
      ))}
      {chatBubbles.map((bubble, index) => (
        <motion.p
          key={bubble.text}
          variants={{
            hidden: { opacity: 0, scale: 0.55, ...bubble.from },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: bubble.rotate,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 12,
                delay: (fragments.length + index) * 0.18,
              },
            },
            cleared: {
              opacity: 0,
              x: (index % 2 === 0 ? -1 : 1) * (480 + index * 50),
              y: -520 - index * 45,
              rotate: index % 2 === 0 ? -34 : 38,
              scale: 0.65,
              transition: {
                duration: 0.58,
                delay: index * 0.035,
                ease: [0.55, 0.06, 0.68, 0.19],
              },
            },
          }}
          className={`absolute rounded-[1rem] border border-black/5 px-4 py-2.5 text-[11px] font-semibold leading-tight shadow-[0_16px_35px_rgba(31,18,45,0.24)] ${bubble.className}`}
        >
          {bubble.text}
        </motion.p>
      ))}

      <div className="pointer-events-none absolute inset-0 z-[100] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 180, scale: 0.32, rotate: -5 }}
          animate={cleared
            ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
            : { opacity: 0, y: 180, scale: 0.32, rotate: -5 }}
          transition={{ type: "spring", stiffness: 155, damping: 15, mass: 0.86 }}
          className="w-full"
        >
          <PhoneTrio />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SocialFeedSection() {
  const feedPosts = [
    {
      person: "Avery",
      time: "just now",
      initial: "A",
      color: "#ed5d9d",
      action: "finished",
      title: "The White Lotus",
      poster: heroWhiteLotus,
      take: "That finale just changed the entire group chat.",
      reactions: "24",
    },
    {
      person: "Maya",
      time: "8m ago",
      initial: "M",
      color: "#7657c8",
      action: "loved",
      title: "Project Hail Mary",
      poster: heroProjectHailMary,
      take: "Loved the book AND loved the movie. Ryan Gosling crushed it.",
      reactions: "31",
    },
    {
      person: "Jordan",
      time: "16m ago",
      initial: "J",
      color: "#3b8eec",
      action: "is listening to",
      title: "Crime Junkie",
      poster: heroCrimeJunkie,
      take: "Okay, I finally understand why everyone keeps recommending this.",
      reactions: "18",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white px-6 pb-8 pt-16 md:pb-10 md:pt-20" id="chatter">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,_rgba(139,92,246,0.10),_transparent_30%),radial-gradient(circle_at_10%_85%,_rgba(236,72,153,0.07),_transparent_28%)]" />
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center font-heading text-4xl font-normal leading-[1.04] md:text-5xl lg:text-6xl xl:text-7xl"
        >
          What is everyone into <span className="italic text-primary">right now?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-foreground/70 sm:text-base"
        >
          See what your friends are watching, reading, listening to, and playing — and what they actually thought about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-10 max-w-4xl"
        >
          {[
            { text: "obsessed", className: "-left-4 top-10", color: "bg-[#f4eaff] text-[#7232ba]" },
            { text: "couldn’t finish it", className: "left-16 -top-5", color: "bg-[#fff1f8] text-[#c64188]" },
            { text: "10/10", className: "-right-3 top-24", color: "bg-[#eaf2ff] text-[#3572cf]" },
            { text: "no spoilers", className: "-left-6 bottom-24", color: "bg-[#e9fbf2] text-[#228a5e]" },
            { text: "I called that ending", className: "-right-4 bottom-28", color: "bg-[#eef9ff] text-[#2679a9]" },
            { text: "starting tonight", className: "right-4 -bottom-4", color: "bg-[#f7efff] text-[#9146c1]" },
          ].map((take, index) => (
            <motion.span
              key={take.text}
              animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
              transition={{ duration: 4.8 + index * 0.45, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
              className={`absolute z-20 hidden rounded-full border border-white px-3.5 py-2 text-xs font-semibold shadow-sm sm:inline-flex ${take.className} ${take.color}`}
            >
              {take.text}
            </motion.span>
          ))}

          <div className="relative overflow-hidden rounded-[2rem] border border-[#e8e4f0] bg-white shadow-[0_24px_65px_rgba(51,31,94,0.15)]">
            <div className="flex items-center justify-between border-b border-[#eeeaf4] px-5 py-4 md:px-6">
              <div>
                <p className="font-heading text-xl text-foreground">Happening now</p>
                <p className="mt-0.5 text-xs text-[#32a269]">● 14 friends active</p>
              </div>
              <div className="flex -space-x-2" aria-label="Friends active now">
                {["A", "M", "J"].map((initial, index) => (
                  <span
                    key={initial}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                    style={{ background: ["#ed5d9d", "#7657c8", "#3b8eec"][index] }}
                  >
                    {initial}
                  </span>
                ))}
              </div>
            </div>

            <div className="divide-y divide-[#eeeaf4]">
              {feedPosts.map((post, index) => (
                <motion.article
                  key={post.person}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.1 }}
                  className="flex gap-3 p-4 md:gap-4 md:p-5"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: post.color }}
                  >
                    {post.initial}
                  </span>
                  <img src={post.poster} alt="" className="h-20 w-14 shrink-0 rounded-lg object-cover shadow-sm" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-foreground">
                      {post.person} <span className="font-normal text-foreground/45">{post.action}</span>{" "}
                      <span className="text-primary">{post.title}</span>
                    </p>
                    <p className="mt-1 text-xs text-foreground/40">{post.time}</p>
                    <p
                      className={`mt-2 w-fit rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm leading-snug ${
                        index === 1 ? "bg-[#37218d] text-white" : "bg-[#f4efff] text-foreground/75"
                      }`}
                    >
                      “{post.take}”
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <ThumbsUp className="h-3.5 w-3.5" strokeWidth={1.8} />
                      {post.reactions}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 border-t border-[#eeeaf4] bg-[#fbfaff] px-5 py-3 text-xs text-foreground/45 md:px-6"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#43a7e8] text-[9px] font-bold text-white">S</span>
              Sam is typing <span className="tracking-[0.18em]">•••</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1300;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, value]);

  return <strong ref={countRef} className="font-heading text-7xl font-normal leading-none tracking-[-0.06em] text-[#7044a5] md:text-8xl">{count}</strong>;
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
            <div className="hidden sm:block">
              <AppStoreButton />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto p-2 hover:bg-black/5 rounded-full transition-colors sm:ml-0"
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
              className="z-10 mx-auto flex w-full max-w-[680px] flex-col items-start text-left lg:mx-0"
            >
              <div className="mb-0 mt-3 flex items-center justify-start gap-1 md:mt-4 md:gap-2">
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
              <h1 className="mb-6 w-full max-w-[680px] text-left font-heading text-[1.4rem] font-normal leading-[1.2] tracking-tight md:mb-7 md:text-[1.75rem] lg:text-[2.25rem]">
                The social app for everything you watch,{" "}
                <br className="lg:hidden" />
                read, listen to &amp; play.
              </h1>

              <div className="mb-5 flex flex-row items-center justify-start gap-2 sm:gap-4">
                <AppStoreButton className="w-auto px-5 py-3 text-sm sm:px-7" />
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
          </div>
          <div className="mt-1 w-full px-6 md:mt-3 md:px-10 lg:px-14">
            <p className="mx-auto mb-6 max-w-[1600px] text-center font-sans text-sm leading-relaxed text-foreground/75 sm:text-base md:text-lg">
              See what everyone&apos;s into · Talk about it · Find your next obsession · Discover your Entertainment DNA profile
            </p>
            <div className="mx-auto flex max-w-[1600px] flex-wrap items-start justify-center gap-x-7 gap-y-5 text-[9px] font-bold uppercase tracking-[0.12em] text-foreground/50 sm:text-[10px] md:justify-between md:text-[11px]">
              {[
                { label: "Movies", Icon: Clapperboard },
                { label: "TV", Icon: Tv },
                { label: "Books", Icon: BookOpen },
                { label: "Podcasts", Icon: Headphones },
                { label: "Music", Icon: Music2 },
                { label: "YouTube", Icon: Youtube },
                { label: "Gaming", Icon: Gamepad2 },
              ].map(({ label, Icon }) => (
                <span key={label} className="inline-flex min-w-[70px] flex-col items-center gap-2 whitespace-nowrap text-center">
                  <Icon className="h-6 w-6 text-primary/75 md:h-7 md:w-7" strokeWidth={1.6} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TAKES FEED */}
        <section className="relative mt-8 w-full md:mt-12" id="how-it-works">
          <div className="overflow-hidden border-y border-[#e8e2e9]">
            <div className="bg-[#f5f2ed] px-7 py-16 text-[#211a2a] md:px-14 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-3xl text-center"
              >
                <WantedActionHeadline />
                <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-relaxed text-[#493f51] sm:text-base">
                  Somewhere between the group chats, screenshots, Notes app lists, and way too many apps, our entertainment lives got scattered everywhere.{" "}
                  <strong>So we put it all in one place.</strong>
                </p>
              </motion.div>
              <div className="mx-auto mt-6 max-w-3xl md:mt-10">
                <ScatteredEntertainmentAnimation />
              </div>
            </div>

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

        {/* 4. SOCIAL FEED */}
        <section className="relative z-20 bg-transparent" id="categories">
          <div className="container mx-auto max-w-7xl flex flex-col">
            <SocialFeedSection />
            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#fbfaf8] px-6 py-12 md:px-12 md:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,_rgba(139,92,246,0.08),_transparent_28%),radial-gradient(circle_at_15%_85%,_rgba(236,72,153,0.05),_transparent_34%)]" />
              <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#7251c7]">Your Entertainment DNA Profile</p>
                  <HeroTagline />
                  <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-[#746a7c] sm:text-base">
                    Your Entertainment DNA evolves with every movie, book, podcast, and more you consume. Ready to find out yours?
                  </p>
                  <a
                    href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#3a2496] px-6 py-3.5 font-sans text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2e1c78] active:scale-95"
                    data-testid="link-learn-entertainment-dna"
                  >
                    Learn my Entertainment DNA
                  </a>
                </motion.div>

                {false && (
                <div className="relative mx-auto mt-6 h-[175px] w-full max-w-5xl overflow-hidden md:mt-7 md:h-[210px]" aria-hidden="true">
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
                      className={`absolute z-20 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] md:text-[10px] font-bold tracking-wide text-[#e1d9ff] backdrop-blur-sm ${source.className}`}
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
                    className="absolute z-30 left-1/2 top-1/2 w-[54%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-[#160c38]/85 px-3 py-2 text-center shadow-[0_0_35px_rgba(178,104,255,0.35)] backdrop-blur-md"
                  >
                    <motion.span
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="block text-[8px] font-bold tracking-[0.16em] text-[#d8ceff] md:text-[9px]"
                    >
                      DNA EVOLVING
                    </motion.span>
                    <span className="mt-1 block font-heading text-xs text-white md:text-base">Your Entertainment DNA evolves with every movie, book, podcast, and more you consume.</span>
                  </motion.div>
                </div>
                )}

                <div className="-mx-6 mt-7 flex gap-4 overflow-x-auto px-6 pb-8 pt-3 scrollbar-none md:mx-0 md:justify-center md:gap-0 md:overflow-visible md:px-0 md:pb-12">
                {[
                  { title: "The Prestige Detective", shades: "Story Sharer • Emotional Binger", streak: "1", rank: "#1", tracked: "909", accent: "#b981ff" },
                  { title: "The Comfort Rewatcher", shades: "Comedy Lover • Story Sharer", streak: "4", rank: "#12", tracked: "436", accent: "#d98be4" },
                  { title: "The Culture Catch Up", shades: "Trend Tracker • Music Maven", streak: "7", rank: "#8", tracked: "712", accent: "#8f9dff" },
                ].map((identity, i) => (
                  <motion.div
                    key={identity.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + i * 0.14 }}
                    className={`relative w-[290px] min-w-[290px] shrink-0 pb-4 pr-3 transition-transform duration-300 hover:z-40 hover:-translate-y-3 md:w-[31.5%] ${
                      i === 0
                        ? "md:translate-y-5 md:rotate-[-5deg]"
                        : i === 1
                          ? "md:z-20 md:-ml-16"
                          : "md:z-30 md:-ml-16 md:translate-y-5 md:rotate-[5deg]"
                    }`}
                  >
                    {i === 0 && (
                      <div className="absolute -bottom-1 -left-12 top-5 w-full -rotate-[8deg] rounded-[1.8rem] border border-white/15 bg-gradient-to-br from-[#352064] via-[#241447] to-[#130a2c] p-6 shadow-[0_18px_35px_rgba(48,31,78,0.18)]">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#cfc3ff]">Your Entertainment DNA</p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#cfc3ff]">Profile ✧</p>
                        <div className="mt-8 h-3 w-28 rounded-full bg-white/15" />
                        <div className="mt-3 h-2 w-20 rounded-full bg-white/10" />
                      </div>
                    )}
                    {i === 2 && (
                      <div className="absolute -bottom-1 -right-12 top-5 w-full rotate-[8deg] rounded-[1.8rem] border border-white/15 bg-gradient-to-br from-[#352064] via-[#241447] to-[#130a2c] p-6 text-right shadow-[0_18px_35px_rgba(48,31,78,0.18)]">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#cfc3ff]">Your Entertainment DNA</p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#cfc3ff]">Profile ✧</p>
                        <div className="ml-auto mt-8 h-3 w-28 rounded-full bg-white/15" />
                        <div className="ml-auto mt-3 h-2 w-20 rounded-full bg-white/10" />
                      </div>
                    )}
                    <article className="relative z-10 flex h-full flex-col rounded-[1.8rem] border border-white/15 bg-gradient-to-br from-[#2d1a56] via-[#1f123e] to-[#130a2c] p-6 text-left shadow-[0_20px_45px_rgba(48,31,78,0.22)]">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-[#cfc3ff]">
                        <span className="block">Your Entertainment DNA</span>
                        <span className="mt-1 block">Profile ✧</span>
                      </p>
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
                    </article>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FRIENDS + DNA MATCHING */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#10062d_0%,_#221052_52%,_#4e2a9a_100%)] px-6 py-20 text-white md:py-28" id="taste-match">
          <motion.div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-white/10" animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} />
          <motion.div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#c17dff]/10 blur-3xl" animate={{ y: [-12, 12, -12], scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
          <div className="relative z-10 container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <p className="mb-4 text-xs font-light uppercase tracking-[0.18em] text-[#cfc3ff]">The social layer of your taste</p>
              <h2 className="max-w-xl font-heading text-4xl font-normal leading-[1.05] md:text-5xl lg:text-6xl">
                Okay, yeah. <span className="italic text-[#cfc3ff]">You&apos;re my people.</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Your Entertainment DNA doesn&apos;t just tell you about you. It shows you who you click with — and why. Same comfort show? Same genre rabbit hole? Same movie neither of you will accept criticism of?
              </p>
            </motion.div>

            <motion.a
              href="https://app.consumedapp.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2e1c78] active:scale-95"
              data-testid="link-compare-our-dna"
            >
              Compare your DNA with a friend <ArrowRight className="h-4 w-4" />
            </motion.a>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  label: "Friends", icon: Users, number: "01", accent: "#cbb6ff",
                  title: "See what your people are into.",
                  description: "What they’re watching, reading, listening to, playing — and what they actually think about it.",
                  content: (
                    <div className="relative mt-7 min-h-[190px] overflow-hidden rounded-[1.35rem] bg-[#f5f0ff] p-4 text-[#271b3d]">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-[#80639d]"><span>Friends are active</span><span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-[#60c48b]" /> live</span></div>
                      <div className="mt-5 space-y-3">
                        {[["M", "Maya is watching", "The White Lotus", heroWhiteLotus], ["J", "Jules finished", "The Women", heroTheWomen]].map(([initial, action, title, image]) => (
                          <div key={title as string} className="flex items-center gap-3 rounded-xl bg-white/80 p-2.5 shadow-[0_6px_18px_rgba(52,31,82,0.08)]">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e2d5fa] text-xs font-bold text-[#65448d]">{initial}</span>
                            <div className="min-w-0 flex-1"><p className="text-[10px] text-[#806f8d]">{action}</p><p className="truncate text-xs font-bold">{title}</p></div>
                            <img src={image as string} alt="" className="h-10 w-8 rounded-md object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
                  label: "Compare DNA", icon: GitCompareArrows, number: "02", accent: "#f4b7d0",
                  title: "Okay, but how much do we match?",
                  description: "Compare your Entertainment DNA profiles to see what you have in common — and where you absolutely do not.",
                  content: (
                    <div className="relative mt-7 flex min-h-[190px] items-center justify-center overflow-hidden rounded-[1.35rem] bg-[#f5f0ff] text-[#271b3d]">
                      <motion.div className="absolute h-40 w-40 rounded-full border border-[#d6c5ed]" animate={{ scale: [0.86, 1.08, 0.86], opacity: [0.45, 0.9, 0.45] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />
                      <div className="relative text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#80639d]">Ashley H. + you</p>
                        <div className="mt-2 flex items-baseline justify-center"><CountUp value={77} /><span className="font-heading text-3xl text-[#7044a5]">%</span></div>
                        <p className="mt-1 text-xs font-semibold text-[#806f8d]">taste overlap</p>
                        <div className="mt-4 flex justify-center -space-x-2"><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f5f0ff] bg-[#dfc9f9] text-[10px] font-bold">AH</span><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f5f0ff] bg-[#f0b8d1] text-[10px] font-bold">YOU</span></div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "Tribes", icon: Layers3, number: "03", accent: "#f4db8c",
                  title: "See what people like you are into.",
                  description: "Discover what people who share your interests are watching, reading, listening to, playing — and talking about.",
                  content: (
                    <div className="relative mt-7 min-h-[190px] overflow-hidden rounded-[1.35rem] bg-[#fffdfa] p-4 text-[#271b3d]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#80639d]">15% overlap</p>
                      <h4 className="mt-2 font-heading text-xl leading-tight">People who share your taste in books</h4>
                      <p className="mt-2 text-[11px] leading-relaxed text-[#806f8d]">You read for many of the same voices and ideas.</p>
                      <div className="mt-4 flex items-center justify-between border-t border-[#e5deea] pt-3"><div className="flex -space-x-2">{["RS", "J", "HH", "JR"].map((v) => <span key={v} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#fffdfa] bg-[#e6ddf6] text-[9px] font-bold text-[#65448d]">{v}</span>)}</div><span className="flex items-center text-[11px] font-bold text-[#65448d]">See what they’re into <ChevronRight className="ml-1 h-3.5 w-3.5" /></span></div>
                    </div>
                  ),
                },
              ].map((concept, index) => (
                <motion.article
                  key={concept.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.12, duration: 0.65 }}
                  className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_18px_45px_rgba(5,2,20,0.16)] backdrop-blur-sm md:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10" style={{ color: concept.accent }}><concept.icon className="h-4 w-4" /></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">{concept.number} · {concept.label}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-2xl leading-[1.05] text-white">{concept.title}</h3>
                  <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-white/65">{concept.description}</p>
                  {concept.content}
                </motion.article>
              ))}
            </div>

          </div>
        </section>

        {/* 6. PLAY */}
        <section className="bg-white" id="play">
          <div className="relative w-full overflow-hidden bg-white px-7 py-12 text-[#201636] md:px-14 md:py-16">
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
        <section className="bg-white" id="discovery">
          <div className="relative w-full overflow-hidden bg-[linear-gradient(135deg,_#10062d_0%,_#221052_46%,_#4e2a9a_100%)] px-7 py-12 text-white md:px-14 md:py-16">
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

        {/* 10. FINAL CTA */}
        <section className="bg-white" id="better-together">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden bg-[linear-gradient(135deg,_#0b0425_0%,_#1c0d4a_48%,_#452184_100%)] px-7 py-16 text-center text-white md:px-14 md:py-20"
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
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground/60">
                Media, Partnership, &amp; Support:{" "}
                <a href="mailto:info@consumedapp.com" className="font-semibold text-primary hover:text-[#2e1c78] transition-colors">
                  info@consumedapp.com
                </a>
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
              <Link href="/privacy" className="hover:text-primary transition-colors" data-testid="link-privacy-footer">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors" data-testid="link-terms-footer">Terms of Service</Link>
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