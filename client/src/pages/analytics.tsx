export default function Analytics() {
  const sections = [
    {
      number: "01",
      title: "Audience Size & Reach",
      metrics: [
        { label: "Total engaged users", desc: "Users who voted on at least one partner poll or trivia question during the activation period." },
        { label: "Unique weekly reach", desc: "Distinct users reached per week across all partner content." },
        { label: "New user acquisition", desc: "Users who joined Consumed during a partner activation window." },
        { label: "Platform audience share", desc: "Percentage of total Consumed users who touched partner content." },
      ],
    },
    {
      number: "02",
      title: "Content Engagement",
      metrics: [
        { label: "Total votes cast", desc: "All responses collected across partner polls and trivia questions." },
        { label: "Votes per question", desc: "Which individual questions drove the highest participation — shows what resonates." },
        { label: "Poll completion rate", desc: "Users who answered all questions in a set vs. only one — measures depth of engagement." },
        { label: "Most debated polls", desc: "Questions with the closest vote splits. High controversy = high engagement signal." },
        { label: "Trivia accuracy rate", desc: "Percentage of correct answers — a proxy for audience knowledge depth and show familiarity." },
        { label: "Time to first vote", desc: "Average time between poll publish and first user response. Faster = more invested audience." },
      ],
    },
    {
      number: "03",
      title: "Audience Profile — Who They Are",
      metrics: [
        { label: "Genre preferences", desc: "Drawn from Entertainment DNA profiles — what partner-engaged users love beyond your content." },
        { label: "Top tracked titles", desc: "Shows, movies, books, and podcasts most logged by users who engage with partner content." },
        { label: "Age-proxy signals", desc: "Inferred from content preferences and Entertainment DNA responses — not self-reported." },
        { label: "Taste segments", desc: "Behavioral groupings based on what users actually consume (e.g. 'Reality Superfan,' 'Crime Drama Devotee')." },
      ],
    },
    {
      number: "04",
      title: "Cross-Media Behavior",
      metrics: [
        { label: "Avg media categories per user", desc: "How many of the 6 content types (TV, film, music, books, podcasts, gaming) each user actively tracks." },
        { label: "Full audience fingerprint", desc: "What partner-engaged users watch, read, and listen to beyond your content — the complete entertainment picture." },
        { label: "Co-viewing overlap", desc: "Other titles tracked by users who engage with partner content — surface adjacencies and competitive context." },
        { label: "Cross-format reach", desc: "% of partner audience that also tracks music, books, or podcasts — demonstrates cross-media intelligence value." },
      ],
    },
    {
      number: "05",
      title: "Habit & Return Behavior",
      metrics: [
        { label: "Login streaks", desc: "% of partner-engaged users who built 3-day or 7-day streaks during the activation period." },
        { label: "Repeat engagement", desc: "Users who voted in multiple consecutive partner poll sets — the loyalty signal." },
        { label: "Time to first engagement", desc: "How quickly after signup users voted on partner content — lower = stronger hook." },
        { label: "30-day retention", desc: "% of users still active 30 days after first engaging with partner content." },
      ],
    },
    {
      number: "06",
      title: "Social Amplification",
      metrics: [
        { label: "Partner-related posts", desc: "Reviews, reactions, thoughts, and hot takes posted by users referencing partner content." },
        { label: "Likes & comments", desc: "Social engagement on partner-related posts within the Consumed feed." },
        { label: "Referral & shares", desc: "Friend invites or content shares triggered by partner activations." },
        { label: "Leaderboard intensity", desc: "Number of users competing for top spots during a partner-activated week — measures competitive engagement." },
      ],
    },
    {
      number: "07",
      title: "Prediction & Outcome Data",
      metrics: [
        { label: "Pre-air audience predictions", desc: "How users predicted show outcomes before episodes aired — intent and anticipation data." },
        { label: "Prediction accuracy rate", desc: "Did the audience call it right? Measures audience knowledge and show predictability." },
        { label: "Sentiment split", desc: "Which outcomes users hoped for vs. expected — separates desire from prediction." },
        { label: "Biggest upsets", desc: "Where the audience consensus was wrong — highest surprise value moments." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] font-body">
      {/* Header */}
      <div className="border-b border-zinc-200 bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors font-body">← consumedapp.com</a>
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-body">Confidential · Partner Overview</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6b21a8] font-semibold mb-4 font-body">Partner Analytics Overview</p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 font-heading leading-tight mb-6">
          Behavioral Analytics<br />Capabilities
        </h1>
        <p className="text-lg text-zinc-500 font-body leading-relaxed max-w-2xl mb-3">
          What we measure. What you receive.
        </p>
        <p className="text-base text-zinc-400 font-body leading-relaxed max-w-2xl">
          Consumed is a social entertainment platform — where users play, rate, predict, and share everything they consume across TV, film, music, books, podcasts, and gaming. This document outlines the behavioral data Consumed can surface for brand and media partners.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-xs text-zinc-500 font-body">Platform availability: iOS app and web app · Android not yet available</span>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.number} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
            {/* Section header */}
            <div className="flex items-center gap-4 px-8 py-5 border-b border-zinc-100">
              <span className="text-xs font-bold text-[#6b21a8] tracking-widest font-body">{section.number}</span>
              <h2 className="text-lg font-bold text-zinc-900 font-heading">{section.title}</h2>
            </div>
            {/* Metrics */}
            <div className="divide-y divide-zinc-50">
              {section.metrics.map((metric, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 px-8 py-5">
                  <span className="text-sm font-semibold text-zinc-800 font-body leading-snug">— {metric.label}</span>
                  <span className="text-sm text-zinc-400 font-body leading-relaxed">{metric.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-body">
          <span>consumed · Confidential — Partner Overview · Beta 2026</span>
          <div className="flex gap-4">
            <span>consumedapp.com</span>
            <span>·</span>
            <a href="mailto:heidi@consumedapp.com" className="hover:text-zinc-700 transition-colors">heidi@consumedapp.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
