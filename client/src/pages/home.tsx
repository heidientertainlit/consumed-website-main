import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Flame, Eye, GitMerge, Swords, Instagram, Menu, X, ArrowRight } from "lucide-react";

import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

// Generated collage images
import heroCollage from "../assets/images/hero-collage.png";
import identityCollage from "../assets/images/identity-collage.png";
import reactionsCollage from "../assets/images/reactions-collage.png";
import tasteOverlap from "../assets/images/taste-overlap.png";

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

const AppStoreButton = ({ className = "" }: { className?: string }) => (
  <a
    href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-foreground text-white px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 ${className}`}
  >
    Get the app
  </a>
);

// Scribble decorations
const ScribbleUnderline = () => (
  <svg className="absolute w-full h-4 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path d="M0,5 Q20,1 40,7 T80,3 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const StarDoodle = ({ className }: { className?: string }) => (
  <svg className={`text-primary ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5l-10 14M5 5l10 14M2 12h20" />
  </svg>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <img src={logoPurple} alt="Consumed" className="h-8 md:h-10 cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span className="cursor-pointer hover:text-primary transition-colors">Feed</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Your DNA</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Reactions</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Rooms</span>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <AppStoreButton />
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
            <span className="cursor-pointer hover:text-primary">Feed</span>
            <span className="cursor-pointer hover:text-primary">Your DNA</span>
            <span className="cursor-pointer hover:text-primary">Reactions</span>
            <span className="cursor-pointer hover:text-primary">Rooms</span>
            <div className="mt-8">
              <AppStoreButton className="w-full text-lg py-4" />
            </div>
          </nav>
        </div>
      )}

      <main>
        {/* HERO */}
        <section className="pt-32 md:pt-48 pb-20 px-6 container mx-auto relative">
          <StarDoodle className="absolute top-40 left-10 w-8 h-8 opacity-40 rotate-12" />
          <StarDoodle className="absolute top-20 right-20 w-12 h-12 opacity-30 -rotate-12" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 flex flex-col items-start"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 relative">
                See what <span className="relative inline-block">everyone's<ScribbleUnderline/></span> consuming.
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-4 text-primary">
                Track. Connect. Compare.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                See what people are watching, reading, listening to, and playing — and discover your entertainment identity along the way.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <AppStoreButton className="w-full sm:w-auto px-8 py-4 text-lg" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
              <img src={heroCollage} alt="People enjoying entertainment" className="relative z-10 w-full h-auto object-contain max-h-[600px]" />
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 - THE HOOK */}
        <section className="py-20 md:py-32 bg-secondary/30 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold mb-8"
              >
                Everything your friends are into.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              >
                Watching. Reading. Listening. Playing. All of it, in one feed — no algorithm deciding what you see, just the people whose taste you actually trust.
              </motion.p>
            </div>
          </div>
        </section>

        {/* SECTION 2 - THE PAYOFF (IDENTITY) */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img src={identityCollage} alt="Entertainment Identity" className="w-full h-auto object-contain max-h-[500px]" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                What you consume says everything.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every episode, chapter, and playlist feeds your DNA — a living profile of your taste across every medium. Not your ratings. You.
              </p>
              
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <p className="text-primary font-bold text-xl mb-2">Movies & TV. Books. Podcasts. Games. Music.</p>
                <p className="text-3xl font-heading font-bold">One identity.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - THE VOICE */}
        <section className="py-24 md:py-32 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">React together.</h2>
              <p className="text-xl text-muted-foreground">Built for people with opinions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 flex flex-col gap-6">
                {/* Hot Takes */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-orange-400 group-hover:w-3 transition-all" />
                  <div className="p-3 bg-orange-100 rounded-full h-fit text-orange-500">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hot takes</h3>
                    <p className="text-muted-foreground text-sm mb-3">Say the thing everyone's thinking. Or the thing nobody is.</p>
                    <p className="italic text-foreground font-medium">"The book ending was better and I'll die on this hill."</p>
                  </div>
                </motion.div>

                {/* Predictions */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-purple-400 group-hover:w-3 transition-all" />
                  <div className="p-3 bg-purple-100 rounded-full h-fit text-purple-600">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Predictions</h3>
                    <p className="text-muted-foreground text-sm mb-3">Call it before it happens. Get the receipts when you're right.</p>
                    <p className="italic text-foreground font-medium">"Calling it now — the neighbor did it. Screenshot this."</p>
                  </div>
                </motion.div>

                {/* Theories */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-blue-400 group-hover:w-3 transition-all" />
                  <div className="p-3 bg-blue-100 rounded-full h-fit text-blue-500">
                    <GitMerge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Theories</h3>
                    <p className="text-muted-foreground text-sm mb-3">Connect the dots nobody else saw. Build the case.</p>
                    <p className="italic text-foreground font-medium">"The clock in ep 2 and the photo in ep 7? Same timestamp."</p>
                  </div>
                </motion.div>

                {/* Debates */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-400 group-hover:w-3 transition-all" />
                  <div className="p-3 bg-red-100 rounded-full h-fit text-red-500">
                    <Swords className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Debates</h3>
                    <p className="text-muted-foreground text-sm mb-3">Defend your taste. Change some minds. Keep score.</p>
                    <p className="italic text-foreground font-medium">"Sequels can't beat originals. Prove me wrong."</p>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <img src={reactionsCollage} alt="People reacting to media" className="w-full h-auto object-contain max-h-[600px] hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-2xl font-heading font-medium">
                Entertainment isn't finished when the credits roll. <span className="text-primary relative inline-block">That's when it starts.<ScribbleUnderline/></span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 - THE MECHANIC */}
        <section className="py-24 md:py-32 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img src={tasteOverlap} alt="Taste overlap between friends" className="w-full h-auto object-contain max-h-[500px]" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Find your people.</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Compare taste. See your overlap. Join Rooms where your kind of fan is already mid-conversation.
              </p>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm mb-8 relative">
                <div className="absolute -top-4 -right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
                  Match!
                </div>
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <span className="text-primary text-2xl">87%</span> taste overlap
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You and Heidi agree on thrillers, true crime, and slow-burn sci-fi. She's watching two things you haven't started.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Trending Rooms</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">Horror Heads</span>
                  <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">Sci-Fi Central</span>
                  <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">True Crime Corner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - THE CLOSE */}
        <section className="py-24 md:py-32 bg-foreground text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-foreground to-foreground opacity-50" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Your entertainment identity is waiting.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/70 mb-10"
            >
              Track everything. See where you rank.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://apps.apple.com/us/app/consumed-medias-social-layer/id6759014223"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Download on the App Store <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoPurple} alt="Consumed" className="h-6 opacity-80" />
            <p className="text-sm text-muted-foreground max-w-sm text-center md:text-left">
              We help people understand themselves — and each other — through entertainment.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/consumedapp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@consumedapp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <TikTok className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2026 Consumed</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/feedback" className="hover:text-primary transition-colors" data-testid="link-feedback">Feedback</Link>
              <Link href="/support" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
