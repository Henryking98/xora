import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
        <Header/>
        <Hero/>
        <Features/>
        <Pricing/>
        <Testimonials/>
    </main>
  );
}
