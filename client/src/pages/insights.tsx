import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Instagram, Clock } from "lucide-react";
import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTok = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const AppStoreButton = ({ className = "", testId = "button-download-app" }: { className?: string; testId?: string }) => (
  <a
    href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-[#3a2496] text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-[#2e1c78] hover:scale-105 active:scale-95 ${className}`}
    data-testid={testId}
  >
    Download the app
  </a>
);

type Block = { type: "p" | "h"; text: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  accent: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "rise-of-the-multi-format-fan",
    title: "The rise of the multi-format fan",
    category: "Trends",
    date: "June 28, 2026",
    readTime: "5 min read",
    author: "The Consumed Team",
    excerpt:
      "The line between a movie buff, a bookworm, and a gamer has all but disappeared. Meet the audience that consumes it all — and expects to track it in one place.",
    accent: "from-[#7c5cff] to-[#a98fd6]",
    body: [
      { type: "p", text: "For decades, entertainment was neatly siloed. You were a film person, or a reader, or someone who lived on the couch with a controller. Recommendation engines, retail aisles, and even our own identities were built around those boxes." },
      { type: "h", text: "One story, many formats" },
      { type: "p", text: "That world is gone. A single franchise now spills across film, streaming series, tie-in novels, podcasts, and games — and fans follow it everywhere. The modern audience doesn't think in formats; they think in stories, universes, and moods." },
      { type: "p", text: "In our early data, the average active Consumed member logs across at least three different media types in their first month. The book they finished feeds the show they queue up, which sparks the podcast they binge on the commute." },
      { type: "h", text: "Why a single shelf matters" },
      { type: "p", text: "When your watchlist, reading list, and backlog all live in separate apps, you lose the thread that connects them. Bringing everything onto one shelf isn't just tidier — it reveals the shape of your taste in a way no single-format tracker ever could." },
    ],
  },
  {
    slug: "what-your-watchlist-says-about-you",
    title: "What your watchlist says about you",
    category: "Culture",
    date: "June 21, 2026",
    readTime: "4 min read",
    author: "The Consumed Team",
    excerpt:
      "Your saved-for-later pile is a self-portrait. Here's what the things we mean to get to reveal about who we think we are.",
    accent: "from-[#efb3c6] to-[#e5a0bd]",
    body: [
      { type: "p", text: "Everyone has one: the growing list of films, books, and albums we swear we'll get to. It's part aspiration, part guilt, and — it turns out — a surprisingly honest map of our inner life." },
      { type: "h", text: "The aspirational self vs. the actual self" },
      { type: "p", text: "The gap between what we save and what we actually finish is where identity lives. We add the demanding literary novel; we finish the comfort rewatch. Neither is wrong. Both are you." },
      { type: "p", text: "The most interesting discovery patterns come from friends whose 'actual selves' overlap with your 'aspirational self.' They're the people who can nudge that intimidating classic off your list and into your evening." },
    ],
  },
  {
    slug: "why-everyone-is-rating-everything",
    title: "Why everyone's rating everything",
    category: "Data",
    date: "June 14, 2026",
    readTime: "6 min read",
    author: "The Consumed Team",
    excerpt:
      "Star ratings, hot takes, tier lists — we've never been more eager to score our culture. What's driving the urge to quantify taste?",
    accent: "from-[#e5c261] to-[#d9b24a]",
    body: [
      { type: "p", text: "A rating is a tiny act of self-definition. When you give something five stars, you're not just describing the work — you're describing yourself, and the kind of person who loves that work." },
      { type: "h", text: "Ratings as a social language" },
      { type: "p", text: "Numbers travel faster than paragraphs. A shared tier list can spark a two-hour debate that a full review never would. Ratings compress opinion into something instantly comparable, argue-able, and fun." },
      { type: "h", text: "The honest-scale problem" },
      { type: "p", text: "Most platforms suffer from ratings inflation — everything drifts toward four-and-a-half stars. The signal returns the moment ratings are personal and social rather than performative. Rate for your friends, not for an algorithm, and the numbers start meaning something again." },
    ],
  },
  {
    slug: "death-of-the-monoculture",
    title: "The death of the monoculture — and what comes next",
    category: "Culture",
    date: "June 7, 2026",
    readTime: "5 min read",
    author: "The Consumed Team",
    excerpt:
      "The days of everyone watching the same thing on the same night are over. What replaces the water cooler when the water cooler is gone?",
    accent: "from-[#9db99f] to-[#88a88a]",
    body: [
      { type: "p", text: "There was a time when a finale could stop a country in its tracks. Today, our feeds are fragmented into a thousand micro-cultures, each with its own canon, in-jokes, and rising stars." },
      { type: "h", text: "From broadcast to belonging" },
      { type: "p", text: "The loss of the monoculture isn't a loss of connection — it's a relocation of it. Connection now happens in smaller, deeper pockets: the group chat obsessed with one show, the Room dedicated to a single genre." },
      { type: "p", text: "The new water cooler isn't a place everyone shows up. It's the place your people already are. The challenge — and the opportunity — is finding them." },
    ],
  },
  {
    slug: "podcasts-are-the-new-book-club",
    title: "Podcasts are the new book club",
    category: "Trends",
    date: "May 30, 2026",
    readTime: "4 min read",
    author: "The Consumed Team",
    excerpt:
      "Shared listening is quietly becoming one of the strongest social bonds in entertainment. Here's why a shared feed beats a shared shelf.",
    accent: "from-[#9f8bd9] to-[#8a74cf]",
    body: [
      { type: "p", text: "Book clubs were always about more than books — they were a reason to gather. Podcasts have inherited that role, with a lower barrier to entry and a faster cadence of shared moments." },
      { type: "h", text: "The weekly ritual" },
      { type: "p", text: "A weekly episode creates a natural rhythm for conversation. There's always something new to react to, predict, and argue about — and no one has to find time to read three hundred pages first." },
      { type: "p", text: "The magic ingredient is simultaneity. When you and your friends are a few episodes deep in the same series, every commute becomes a group conversation waiting to happen." },
    ],
  },
  {
    slug: "predicting-the-next-breakout-hit",
    title: "Predicting the next breakout hit",
    category: "Data",
    date: "May 23, 2026",
    readTime: "7 min read",
    author: "The Consumed Team",
    excerpt:
      "Before a title trends, a small group of high-signal fans has usually already found it. What the early adopters teach us about what's next.",
    accent: "from-[#a98fd6] to-[#7c5cff]",
    body: [
      { type: "p", text: "Every runaway hit has a prologue: weeks or months of quiet momentum among a small group of tastemakers before the rest of the world catches on." },
      { type: "h", text: "Signal lives at the edges" },
      { type: "p", text: "The people who consistently find things early aren't necessarily louder — they're more curious. They rate widely, log obscure titles, and cross formats. Following them is like getting a preview of next season's conversation." },
      { type: "h", text: "Prediction as a game" },
      { type: "p", text: "Calling a hit before it breaks is deeply satisfying — a small bragging right earned through good taste. Turning that instinct into a shared, low-stakes game is one of the most joyful things entertainment tracking can do." },
    ],
  },
];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between py-4">
        <Link href="/">
          <img src={logoPurple} alt="Consumed" className="h-7 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" data-testid="img-logo" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden sm:inline text-sm font-medium text-foreground/70 hover:text-primary transition-colors" data-testid="link-home">Home</Link>
          <AppStoreButton />
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-10 mt-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <Link href="/">
            <img src={logoPurple} alt="Consumed" className="h-6 opacity-80 cursor-pointer" />
          </Link>
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-medium text-foreground/70">
            <Link href="/" className="hover:text-primary transition-colors" data-testid="link-footer-home">Home</Link>
            <Link href="/insights" className="hover:text-primary transition-colors" data-testid="link-footer-insights">Insights</Link>
          </nav>
          <p className="text-sm text-foreground/40">© 2026 Consumed. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Instagram" data-testid="link-instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://x.com/consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" aria-label="X" data-testid="link-x">
            <XIcon className="w-4 h-4" />
          </a>
          <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors" aria-label="TikTok" data-testid="link-tiktok">
            <TikTok className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function CategoryChip({ label }: { label: string }) {
  return (
    <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full px-3 py-1">
      {label}
    </span>
  );
}

export default function Insights() {
  const [featured, ...rest] = POSTS;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SiteHeader />

      <main>
        <section className="bg-[#fbf8f4] pt-16 pb-14 border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">
            <p className="text-xs font-bold tracking-widest text-foreground/50 uppercase mb-4">Insights</p>
            <h1 className="text-4xl md:text-6xl font-heading font-normal leading-[1.05] tracking-tight mb-5" data-testid="text-insights-title">
              The Consumed Journal
            </h1>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Data, trends, and cultural takes on how the world watches, reads, listens, and plays.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-6xl py-14">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/insights/${featured.slug}`}>
              <article
                className="group grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-black/5 bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                data-testid={`card-featured-${featured.slug}`}
              >
                <div className={`h-56 md:h-full min-h-[240px] bg-gradient-to-br ${featured.accent} relative`}>
                  <span className="absolute top-5 left-5 text-[11px] font-bold tracking-widest uppercase text-white/90 bg-black/15 rounded-full px-3 py-1">
                    Featured
                  </span>
                </div>
                <div className="p-8 md:pr-10">
                  <CategoryChip label={featured.category} />
                  <h2 className="text-2xl md:text-3xl font-heading font-normal leading-snug mt-4 mb-3 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/50 mb-5">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <article
                    className="group h-full flex flex-col rounded-3xl border border-black/5 bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    data-testid={`card-post-${post.slug}`}
                  >
                    <div className={`h-40 bg-gradient-to-br ${post.accent}`} />
                    <div className="p-6 flex flex-col flex-1">
                      <CategoryChip label={post.category} />
                      <h3 className="text-xl font-heading font-normal leading-snug mt-3 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-foreground/50">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function InsightPost() {
  const [, params] = useRoute("/insights/:slug");
  const post = POSTS.find((p) => p.slug === params?.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-6 max-w-2xl py-24 text-center">
          <h1 className="text-3xl font-heading mb-4">Article not found</h1>
          <p className="text-foreground/60 mb-8">This story may have moved or no longer exists.</p>
          <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all" data-testid="link-back-insights">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SiteHeader />

      <main>
        <div className={`bg-gradient-to-br ${post.accent}`}>
          <div className="container mx-auto px-6 max-w-3xl py-16 md:py-20">
            <Link href="/insights" className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium mb-8 transition-colors" data-testid="link-back-insights">
              <ArrowLeft className="w-4 h-4 mr-1" /> All insights
            </Link>
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-white/90 bg-black/15 rounded-full px-3 py-1 mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-normal leading-[1.1] text-white mb-6" data-testid="text-post-title">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-6 max-w-2xl py-14">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-heading italic mb-10">
            {post.excerpt}
          </p>
          <div className="space-y-6">
            {post.body.map((block, i) =>
              block.type === "h" ? (
                <h2 key={i} className="text-2xl font-heading font-normal pt-4">{block.text}</h2>
              ) : (
                <p key={i} className="text-base md:text-lg text-foreground/75 leading-relaxed">{block.text}</p>
              )
            )}
          </div>

          <div className="mt-14 rounded-3xl bg-secondary/40 p-8 text-center">
            <h3 className="text-xl md:text-2xl font-heading font-normal mb-3">See what everyone's consuming.</h3>
            <p className="text-foreground/70 mb-6 max-w-md mx-auto">Track what you watch, read, and play — and find the people whose taste you trust.</p>
            <AppStoreButton className="px-8 py-3" testId="button-download-app-cta" />
          </div>
        </article>

        {/* More insights */}
        <section className="container mx-auto px-6 max-w-6xl pb-6">
          <h3 className="text-xs font-bold tracking-widest text-foreground/50 uppercase mb-6">More insights</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {more.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`}>
                <article className="group h-full flex flex-col rounded-3xl border border-black/5 bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow" data-testid={`card-more-${p.slug}`}>
                  <div className={`h-28 bg-gradient-to-br ${p.accent}`} />
                  <div className="p-5 flex flex-col flex-1">
                    <CategoryChip label={p.category} />
                    <h4 className="text-base font-heading font-normal leading-snug mt-3 group-hover:text-primary transition-colors">{p.title}</h4>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
