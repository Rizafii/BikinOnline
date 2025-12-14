import Navbar from "@/components/Navbar";
import Client from "@/components/section/Client";
import Hero from "@/components/section/Hero";
import Service from "@/components/section/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Service />
    </>
  );
}
