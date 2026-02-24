import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoPurple from "@assets/consumed_logo_purple_crop_1769629036769.png";

export default function Support() {
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
          <div className="flex items-center gap-3 mb-8">
            <img src={logoPurple} alt="Consumed" className="h-8 w-auto" />
          </div>

          <h1 className="text-3xl font-bold text-[#1a0a2e] mb-6" data-testid="text-support-title">Support</h1>

          <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
            <p>
              We'd love to hear from you. Whether you have feedback, a feature request, or need help with something, don't hesitate to reach out.
            </p>
            <p>
              Get in touch at{" "}
              <a 
                href="mailto:support@consumedapp.com" 
                className="text-[#2d1b4e] font-medium hover:underline"
                data-testid="link-support-email"
              >
                support@consumedapp.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-6 text-center text-sm text-zinc-400 bg-[#f8f8f8]">
        <p>&copy; {new Date().getFullYear()} Consumed.</p>
      </footer>
    </div>
  );
}
