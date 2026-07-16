import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import LumiDemo from "@/components/sections/LumiDemo";
import AppShowcase from "@/components/sections/AppShowcase";
import Roadmap from "@/components/sections/Roadmap";
import About from "@/components/sections/About";
import JoinBeta from "@/components/sections/JoinBeta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <LumiDemo />
        <AppShowcase />
        <Roadmap />
        <About />
        <JoinBeta />
      </main>
      <Footer />
    </>
  );
}
