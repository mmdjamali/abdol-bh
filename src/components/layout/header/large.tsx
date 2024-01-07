"use client";

import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LargeHeader = () => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    let lastY: number = 0;

    const handleScroll = () => {
      // get the scrollY position
      let { scrollY } = window;

      // if navbar is hidden keep track of scrollY
      if (!show) {
        lastY = scrollY;
      }

      // hide the navbar if it's visible and user scrolled down
      if (window.scrollY > lastY + 200) {
        setShow(false);
        lastY = scrollY;
      }
      // show the navbar if it's hidden and user scrolled up
      if (window.scrollY < lastY - 25) {
        setShow(true);
        lastY = scrollY;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };

    /*eslint-disable*/
  }, []);
  return (
    <header className="navbar hidden lg:flex z-[50] bg-base-100 sticky top-0 max-h-none py-0 px-4 border-b border-base-200">
      <div className="mx-auto h-fit flex flex-col w-full max-w-screen-2xl">
        <div className="flex py-3 bg-base-100 z-[50] gap-6 items-center justify-between w-full">
          <div className="flex gap-5 items-center">
            <Image
              width={115}
              height={30}
              unoptimized
              alt="logo"
              src={"/logo/image.png"}
            />

            <div className="bg-base-200 w-[600px] gap-3 px-4 h-11 flex items-center rounded-btn">
              <Icon
                name="Search"
                className="text-[21px] shrink-0 text-base-content/50"
              />
              <input
                placeholder="جستجو"
                className="outline-none bg-transparent w-full text-xs"
              />
            </div>
          </div>
          <div className="flex items-center relative justify-center gap-3">
            <button className="btn btn-ghost border border-base-300">
              ورود | ثبت نام
              <Icon name="LogIn" className="text-[21px] scale-[-1]" />
            </button>

            <span className="inline-grid w-[1px] bg-base-300 h-6" />

            <button className="btn-square inline-grid place-items-center">
              <Icon name="ShoppingCart" className="text-[21px]" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "flex relative items-center z-[49] justify-between w-full overflow-hidden transition-all",
            !show ? "mt-[-40px]" : "mt-0"
          )}
        >
          <div className="flex items-center">
            <button className="flex group relative items-center gap-2 h-10">
              <Icon className="text-[16px]" name="Menu" />
              <span className="font-bold text-sm">دسته‌بندی کالاها</span>
              <Indicator />
            </button>

            <span className="bg-base-300 w-[1px] h-4 mr-4" />

            <button className="gap-2 relative h-10 group flex items-center px-3 text-base-content/70 font-medium">
              <Icon name="BedgePercent" className="text-[16px]" />
              <span className="text-xs">شگفت‌انگیزها</span>
              <Indicator />
            </button>

            <Link
              href={"/"}
              className="gap-2 group relative h-10 flex items-center px-3 text-base-content/70 font-medium"
            >
              <Icon name="ShoppingBasket" className="text-[16px]" />
              <span className="text-xs">سوپرمارکت</span>
              <Indicator />
            </Link>

            <Link
              href={"/"}
              className="gap-2 h-10 relative group flex items-center px-3 text-base-content/70 font-medium"
            >
              <Icon name="Gift" className="text-[16px]" />
              <span className="text-xs">کارت هدیه</span>
              <Indicator />
            </Link>

            <Link
              href={"/"}
              className="gap-2 h-10 group relative flex items-center px-3 text-base-content/70 font-medium"
            >
              <Icon name="Flame" className="text-[16px]" />
              <span className="text-xs">پرفروش‌ترین‌ها</span>
              <Indicator />
            </Link>

            <span className="bg-base-300 w-[1px] h-4" />

            <Link
              href={"/"}
              className="gap-2 h-10 relative group flex items-center px-3 text-base-content/70 font-medium"
            >
              <span className="text-xs">سوالی دارید؟</span>
              <Indicator />
            </Link>
          </div>

          <div className="flex items-center ">
            <button className="flex items-center gap-2">
              <Icon className="text-[18px]" name="MapPin" />
              <span className="text-xs font-bold">
                لطفا شهر خود را انتخاب کنید
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Indicator = () => {
  return (
    <span className="w-full h-0.5 ease-in bg-primary transition-all inset-x-0 max-w-0 group-hover:max-w-[100vw] duration-300 mx-auto absolute bottom-0" />
  );
};

export default LargeHeader;
