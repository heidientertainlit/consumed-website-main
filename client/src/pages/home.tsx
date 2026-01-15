import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@assets/generated_images/abstract_dark_purple_wave_particles_technology_background.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 container mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tighter"
        >
          consumed
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">
            Contact
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full opacity-50 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 relative z-10">
            consumed
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400"
        >
          Where entertainment<br />comes together
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          Play, react, and keep up with what you love. See what everyone is consuming. 
          All entertainment, all in one place.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            Download on TestFlight
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-lg rounded-full border-primary/50 text-white hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
          >
            <Globe className="mr-2 h-5 w-5" />
            View Pilot MVP
          </Button>
        </motion.div>

        {/* Feature Highlights - Minimal */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            { title: "Connect", desc: "See what your friends are watching, playing, and listening to." },
            { title: "Discover", desc: "Find your next obsession through curated community feeds." },
            { title: "Track", desc: "Keep a log of everything you consume in one clean interface." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-primary-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-white/5 bg-black/20 backdrop-blur-md">
        <p>&copy; {new Date().getFullYear()} Consumed. All rights reserved.</p>
      </footer>
    </div>
  );
}
