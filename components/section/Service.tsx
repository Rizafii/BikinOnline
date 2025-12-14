import { ArrowRight, Hammer } from "lucide-react";
import { Button } from "../ui/button";

export default function Service() {
  const services = [
    {
      title: "Pengembangan Website",
      description:
        "Kami menciptakan website yang disesuaikan dengan kebutuhan bisnis Anda, mulai dari desain hingga fungsionalitas.",
      image: "/ilustration/coding.svg",
    },
    {
      title: "Desain UI/UX",
      description:
        "Tim desain kami merancang antarmuka yang menarik dan mudah digunakan untuk meningkatkan pengalaman pengguna.",
      image: "/ilustration/uiux.svg",
    },
    {
      title: "Konsultasi Digital",
      description:
        "Kami memberikan panduan strategis untuk membantu bisnis Anda bertransformasi secara digital dan mencapai tujuan online.",
      image: "/ilustration/consul.svg",
    },
  ];

  return (
    <section className="w-full mt-10">
      <div className="container mx-auto py-14 px-24 ">
        <header className="flex flex-col items-center gap-4">
          <p className="badge flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 text-primary border border-primary/10 font-medium text-sm">
            <Hammer size={18} strokeWidth={2} />
            Layanan Utama Kami
          </p>
          <h2 className="text-4xl leading-11 font-semibold  text-center max-w-150">
            Solusi Digital Lengkap untuk Mengembangkan Bisnis Anda
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-center shadow-xs hover:shadow-md text-center p-12 border  border-gray-200 rounded-lg  duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-40 h-auto"
              />
              <div className="desc flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-6">{service.description}</p>
                <Button className="mt-4">
                  Selengkapnya <ArrowRight size={18} strokeWidth={2} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
