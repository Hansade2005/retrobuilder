"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TYPING_TEXT = "Code your website with AI in seconds";

export default function Home() {
  const router = useRouter();
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (displayed.length < TYPING_TEXT.length) {
      timeout = setTimeout(() => setDisplayed(TYPING_TEXT.slice(0, displayed.length + 1)), 40);
    }
    return () => clearTimeout(timeout);
  }, [displayed]);

  const handleStartChat = () => {
    router.push("/projects/new");
  };

  return (
    <div className="w-full min-h-screen font-sans bg-gradient-to-br from-neutral-950 via-neutral-900 to-purple-950 text-neutral-100">
     
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center pt-20 pb-16 px-6 relative w-full">
        <div className="rounded-full border border-neutral-100/10 bg-neutral-100/5 text-xs text-neutral-300 px-3 py-1 max-w-max mx-auto mb-4">
          ✨ Retro Builder Public Beta
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-mono text-white max-w-5xl mx-auto leading-tight mb-4">
          <span className="whitespace-pre-line">{displayed}</span>
          {displayed.length < TYPING_TEXT.length && (
            <span className="inline-block w-2 h-10 align-middle bg-amber-400 rounded animate-pulse ml-1" />
          )}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300/80 mt-2 mb-8 max-w-2xl mx-auto">
          Build, deploy, and scale your web projects with AI-powered tools and a vibrant developer community.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleStartChat}
            className="group relative flex items-center gap-3 px-10 py-5 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 text-white text-2xl font-bold shadow-2xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-pink-300/40 border-4 border-white/10"
            style={{ boxShadow: "0 8px 32px 0 rgba(131, 24, 67, 0.25)" }}
            aria-label="Start Chat"
          >
            <span className="inline-block animate-pulse">💬</span>
            <span>Start Vibe Chat</span>
            <span className="absolute -right-4 -top-4 bg-amber-400 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-bounce">AI</span>
          </button>
        </div>

        {/* Hero Background Gradients */}
        <div className="absolute inset-0 pointer-events-none -z-[1]">
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl rounded-full" />
          <div className="w-2/3 h-3/4 bg-gradient-to-r from-blue-500 to-teal-500 opacity-24 blur-3xl absolute -top-20 right-10 transform rotate-12" />
          <div className="w-1/2 h-1/2 bg-gradient-to-r from-amber-500 to-rose-500 opacity-20 blur-3xl absolute bottom-0 left-10 rounded-3xl" />
          <div className="w-48 h-48 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-20 blur-3xl absolute top-1/3 right-1/3 rounded-lg transform -rotate-15" />
        </div>
      </header>

    </div>
  );
}
