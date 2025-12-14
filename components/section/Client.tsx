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
    <section className="w-full  -mt-12">
      <div className="container py-16 px-24  gap-6 items-center justify-center">
        {/* <p className="text-lg font-medium flex items-center justify-center mb-4">
          Beberapa Klien Kami
        </p> */}
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
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
            fadeOutColor="#faf7f5"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
}
