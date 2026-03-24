import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-body">
      <header className="py-8 px-6">
        <div className="container mx-auto max-w-2xl">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#2d1b4e] transition-colors text-sm" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      <main className="px-6 pb-20">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center gap-3 mb-10">
            <Link href="/">
              <img src={logoPurple} alt="Consumed" className="h-8 w-auto cursor-pointer" />
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1a0a2e] mb-6 font-heading leading-tight">
            Your feedback shapes everything.
          </h1>

          <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
            Consumed is in beta, which means it's still being shaped — and you're part of that process. Every message we receive gets read personally.
          </p>

          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8 mb-8">
            <h2 className="text-xl font-bold text-[#2d1b4e] mb-3 font-heading">Negative feedback is gold.</h2>
            <p className="text-zinc-600 leading-relaxed">
              We don't just want to hear what you love. The friction points, the confusing flows, the missing features — that's exactly what helps us build something better. If something bothered you, we genuinely want to know. Don't soften it.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8 mb-10">
            <h2 className="text-xl font-bold text-[#2d1b4e] mb-3 font-heading">What to include</h2>
            <ul className="text-zinc-600 space-y-2 leading-relaxed list-none">
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">—</span> What you were trying to do</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">—</span> What happened (or didn't)</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">—</span> What you'd love to see added or changed</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">—</span> Anything else on your mind — no filter needed</li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-zinc-500 text-sm">Send your feedback to</p>
            <a
              href="mailto:feedback@consumedapp.com?subject=Consumed Feedback"
              className="text-2xl font-bold text-[#2d1b4e] hover:text-purple-600 transition-colors font-heading underline underline-offset-4 decoration-purple-300"
              data-testid="link-feedback-email"
            >
              feedback@consumedapp.com
            </a>
            <p className="text-zinc-400 text-xs max-w-xs">
              We read every single message and reply when we can. You're not shouting into the void.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
