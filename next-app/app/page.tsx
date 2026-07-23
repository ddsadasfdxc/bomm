"use client";

import dynamic from "next/dynamic";
import Background from "@/components/Background";
import Navigation from "@/components/Navigation";
import MusicPlayer from "@/components/MusicPlayer";
import { useAppStore } from "@/lib/store";

const HomeSection = dynamic(() => import("@/sections/HomeSection"), { ssr: false });
const ExploreSection = dynamic(() => import("@/sections/ExploreSection"), { ssr: false });
const SocialSection = dynamic(() => import("@/sections/SocialSection"), { ssr: false });
const ChatSection = dynamic(() => import("@/sections/ChatSection"), { ssr: false });

export default function Home() {
  const { currentPage } = useAppStore();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomeSection />;
      case "explore":
        return <ExploreSection />;
      case "social":
        return <SocialSection />;
      case "chat":
        return <ChatSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <main className="relative min-h-screen pb-28">
      <Background />
      <div
        key={currentPage}
        className="animate-fade-in"
        style={{
          animation: "fadeIn 0.5s var(--ease-silk) forwards",
        }}
      >
        {renderPage()}
      </div>
      <MusicPlayer />
      <Navigation />
    </main>
  );
}
