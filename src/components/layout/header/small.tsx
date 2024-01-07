"use client";

import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SmallHeader = () => {
  return (
    <header className="navbar lg:hidden z-[50] bg-base-100 sticky top-0 max-h-none py-0 px-2 border-b border-base-200">
      <div className="mx-auto h-fit flex flex-col w-full max-w-screen-2xl">
        <div className="flex py-2 bg-base-100 z-[50] gap-6 items-center justify-between w-full">
          <div className="bg-base-200 w-full gap-3 px-4 h-11 flex items-center rounded-btn">
            <Icon
              name="Search"
              className="text-[21px] shrink-0 text-base-content/50"
            />

            <span className="text-xs cursor-text text-base-content/50">
              جستجو
            </span>

            <Image
              width={115}
              height={30}
              unoptimized
              alt="logo"
              src={"/logo/image.png"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SmallHeader;
