'use client'
import HeroScetion from "@/components/HeroScetion";
import PriceSection from "@/components/PriceSection";
import KeyFeatures from "@/components/KeyFeatures";
import CTA from "@/components/CTA";
import ChatWithAkhilaAI from "@/components/ChatWithAkhilaAI";


export default function Home() {

  return (
    <main>
      <HeroScetion />
      <KeyFeatures />
      <PriceSection />
      <CTA />
      <ChatWithAkhilaAI />
    </main>
  );
}



