"use client";

import useEmblaCarousel from "embla-carousel-react";
import Icon from "./ui/icon";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const MainHomeTopSlider = () => {
  const [ref, emblaApi] = useEmblaCarousel({ align: "center", loop: true }, [
    Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      link: "",
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/9461f59a01475d29e06a28c42d0a3db5e067bcf9_1704293092.gif?x-oss-process=image?x-oss-process=image/format,webp",
    },
    {
      link: "",
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/4689fe062122ccbc8a4c5c2c3325641283523589_1704107748.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      link: "",
      image:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/1772946ee187760c44ae02400883e4ef73de7a58_1703928825.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
  ];
  useEffect(() => {
    if (!emblaApi) return;

    setActiveIndex(emblaApi.selectedScrollSnap());

    const onScroll = (e: EmblaCarouselType) => {
      setActiveIndex(e.selectedScrollSnap());
    };
    emblaApi?.on("select", onScroll);

    return () => {
      emblaApi?.off("select", onScroll);
    };
  }, [emblaApi]);

  return (
    <div dir="ltr" className="relative group">
      <div
        dir="ltr"
        ref={ref}
        className="embla overflow-hidden relative w-full h-72 lg:h-[400px]"
      >
        <div className="embla__container flex h-full w-full">
          {slides.map(({ image, link }, idx) => (
            <Link
              href={link}
              key={idx}
              className={cn(
                "embla__slide relative w-full h-full flex-[0_0_100%]"
              )}
            >
              <Image
                className="object-cover"
                unoptimized
                src={image}
                alt=""
                fill
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center h-2 gap-1 justify-center absolute bottom-6 mx-auto inset-x-0 ">
        {slides.map((_, idx) => {
          const active = activeIndex == idx;
          return (
            <button
              onClick={() => {
                emblaApi?.scrollTo(idx);
              }}
              key={idx}
              className={cn(
                "w-1 h-1 rounded-full bg-black/50 transition-all",
                active ? "w-4 h-2 bg-white" : ""
              )}
            />
          );
        })}
      </div>

      <div className="absolute opacity-0 transition-opacity group-hover:opacity-100 right-10 hidden bottom-10 pointer-events-none gap-2 lg:flex items-center">
        <button
          onClick={() => {
            emblaApi?.scrollPrev();
          }}
          className="btn btn-circle bg-base-100 pointer-events-auto"
        >
          <Icon className="text-[21px]" name="ArrowLeft" />
        </button>
        <button
          onClick={() => {
            emblaApi?.scrollNext();
          }}
          className="btn btn-circle bg-base-100 pointer-events-auto"
        >
          <Icon className="text-[21px]" name="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default MainHomeTopSlider;
