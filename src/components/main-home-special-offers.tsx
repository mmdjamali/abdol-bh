"use client";

import useEmblaCarousel from "embla-carousel-react";
import Icon from "./ui/icon";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EXTRA_ELEMENT_COUNT = 1;

const MainHomeSpecialOffers = () => {
  const [loaded, setLoaded] = useState(false);

  const [ref, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: true,
    startIndex: loaded
      ? document?.documentElement?.dir === "rtl"
        ? products?.length - 1 + EXTRA_ELEMENT_COUNT
        : 0
      : 0,
  });

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!loaded) setLoaded(true);

    /*eslint-disable*/
  }, []);

  if (!loaded)
    return (
      <div className="relative group bg-base-300 px-0.5 py-5 h-[240px] lg:h-[300px] lg:rounded-box lg:mx-4"></div>
    );

  return (
    <div
      dir="ltr"
      className="relative group bg-gradient-to-tr from-primary to-secondary px-0.5 py-5 lg:rounded-box lg:mx-4"
    >
      <div ref={ref} className="embla overflow-hidden relative w-full">
        <div className={cn("embla__container flex h-full w-full")}>
          {document?.documentElement?.dir === "rtl" ? (
            <div
              dir="rtl"
              className="flex flex-col ltr:ml-0.5 rtl:mr-0.5 items-center gap-4 min-w-40 flex-[0_0_1] bg-white justify-center"
            >
              <button className="inline-grid w-12 h-12 place-items-center rounded-full border-2 border-info text-info">
                <Icon
                  className="rtl:scale-[-1] text-[28px]"
                  name="ArrowRight"
                />
              </button>

              <span className="text-base-content/90 text-sm font-bold">
                مشاهده همه
              </span>
            </div>
          ) : (
            <div className="embla__slide flex-[0_0_1] flex flex-col items-center justify-center px-4 gap-2">
              <div className="relative w-[92px] h-[77px]">
                <Image
                  className="object-contain"
                  fill
                  alt=""
                  src={
                    "https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                  }
                />
              </div>
              <div className="relative w-[145px] h-[110px]">
                <Image
                  src={
                    "https://www.digikala.com/statics/img/png/specialCarousel/box.webp"
                  }
                  unoptimized
                  className="object-contain"
                  alt=""
                  fill
                />
              </div>
              <Link href={""} className="flex items-center text-white text-sm">
                مشاهده همه
                <Icon className="rtl:scale-[-1]" name="ChevronRight" />
              </Link>
            </div>
          )}
          {products.map(({ image, discount, price }, idx) => (
            <Link
              href={""}
              key={idx}
              className={cn(
                "embla__slide mr-0.5 flex-[0_0_1] lg:h-[260px] relative bg-base-100 flex flex-col p-3"
              )}
            >
              <div className="w-32 lg:w-40 aspect-square relative">
                <Image unoptimized src={image} alt="" fill />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold relative text-sm lg:text-base text-base-content/90">
                  {(price - price * (discount / 100)).toLocaleString("fa-ir")}
                </span>

                <span className="bg-primary rounded-full px-2 text-xs h-5 w-8 inline-grid place-items-center text-white">
                  {discount.toLocaleString("fa-ir")}٪
                </span>
              </div>

              <span className="text-base-content/50 text-[11px] line-through">
                {price.toLocaleString("fa-ir")}
              </span>

              {/* for discount times */}

              {/* <div className="mt-auto">
                <div className="w-full relative h-1 bg-base-200">
                  <span className="absolute left-0 inset-y-0 inline-flex bg-primary h-full w-[50%]" />
                </div>
              </div> */}
            </Link>
          ))}

          {document?.documentElement?.dir === "rtl" ? (
            <div
              dir="rtl"
              className="embla__slide flex-[0_0_1] flex flex-col items-center justify-center px-4 gap-2"
            >
              <div className="relative w-[92px] h-[77px]">
                <Image
                  className="object-contain"
                  fill
                  alt=""
                  src={
                    "https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                  }
                />
              </div>
              <div className="relative w-[145px] h-[110px]">
                <Image
                  src={
                    "https://www.digikala.com/statics/img/png/specialCarousel/box.webp"
                  }
                  unoptimized
                  className="object-contain"
                  alt=""
                  fill
                />
              </div>
              <Link href={""} className="flex items-center text-white text-sm">
                مشاهده همه
                <Icon className="rtl:scale-[-1]" name="ChevronRight" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col ltr:ml-0.5 rtl:mr-0.5 items-center gap-4 min-w-40 flex-[0_0_1] bg-white justify-center">
              <button className="inline-grid w-12 h-12 place-items-center rounded-full border-2 border-info text-info">
                <Icon
                  className="rtl:scale-[-1] text-[28px]"
                  name="ArrowRight"
                />
              </button>

              <span className="text-base-content/90 text-sm font-bold">
                مشاهده همه
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHomeSpecialOffers;

const products: {
  image: string;
  price: number;
  discount: number;
}[] = [
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
  {
    discount: 5,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/dca223f31b7643ac23ec3edf79c7c8a9194cc3c5_1671474524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    price: 38000000,
  },
];
