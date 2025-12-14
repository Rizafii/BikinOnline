"use client";
import LogoLoop from "../LogoLoop";

const imageLogos = [
  {
    src: "/logo/smk.svg",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logo/cde.svg",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logo/ces.svg",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/logo/v58.svg",
    alt: "Company 4",
    href: "https://company4.com",
  },
  {
    src: "/logo/crafty.svg",
    alt: "Company 5",
    href: "https://company5.com",
  },
  {
    src: "/logo/osis.svg",
    alt: "Company 6",
    href: "https://company6.com",
  },
  {
    src: "/logo/mpk.svg",
    alt: "Company 7",
    href: "https://company7.com",
  },
];
export default function Client() {
  return (
    <section className="w-full bg-primary relative">
      <div className="wave-atas absolute -top-20 left-0 w-full overflow-hidden ">
        <svg
          className="relative block w-full h-15 sm:h-20 md:h-25"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 Q300,60 600,60 T1200,0 L1200,120 L0,120 Z"
            className="fill-primary"
          />
        </svg>
      </div>
      <div className="container mx-auto px-24  gap-6 items-center justify-center">
        {/* <p className="text-lg font-medium flex items-center justify-center mb-4">
          Beberapa Klien Kami
        </p> */}
        <div
          className="relative  h-20 overflow-hidden z-10"
          // style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={imageLogos}
            speed={20}
            direction="left"
            logoHeight={60}
            gap={70}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#9b2c2c"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
      <div className="wave-bawah absolute  -bottom-20 left-0 w-full overflow-hidden ">
        <svg
          className="relative block w-full h-15 sm:h-20 md:h-25"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 Q300,60 600,60 T1200,120 L1200,0 L0,0 Z"
            className="fill-primary"
          />
        </svg>
      </div>
    </section>
  );
}
