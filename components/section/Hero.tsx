import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <header className="w-full relative min-h-170 overflow-hidden">
      <Image
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center -z-10 animate-[zoom_20s_ease-in-out_infinite]"
        src={"/hero.jpg"}
        alt="hero"
      />
      <div className="layer absolute inset-0 bg-black opacity-30 -z-5" />
      <div className="container mx-auto px-8 lg:px-48 pt-20 h-full min-h-150 flex items-center justify-center">
        <div className="left flex flex-col gap-6 w-full items-start text-start">
          <h1 className="lg:text-4xl text-3xl drop-shadow-lg font-bold text-background max-w-160 leading-10 lg:leading-12 tracking-normal">
            Partner Digital Terpercaya untuk Pengembangan Website Bisnis Anda
          </h1>
          <p className="text-background text-sm lg:text-base drop-shadow-lg max-w-150 leading-6 tracking-normal">
            Kami menyediakan solusi digital yang inovatif dan terpercaya untuk
            membantu bisnis Anda tumbuh dan berkembang secara online.
          </p>
          <div className="cta items-center flex gap-4">
            <Button>Mulai Sekarang</Button>
            <Button variant="secondary">
              Cek Harga <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden ">
        <svg
          className="relative block w-full h-15 sm:h-20 md:h-25"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </header>
  );
}
