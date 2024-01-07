"use client";

import { IconKey } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import Link from "next/link";

const LargeFooter = () => {
  return (
    <footer className="bg-base-100 max-lg:hidden relative w-full border-t border-base-300 mt-6">
      <div className="flex flex-col relative w-full max-w-screen-xl mx-auto px-4 py-6 gap-y-8">
        <div className="flex items-center justify-between">
          <Image
            width={115}
            height={30}
            unoptimized
            alt="logo"
            src={"/logo/image.png"}
          />

          <button
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn btn-ghost border text-base-content/60 border-base-300"
          >
            بازگشت به بالا
            <Icon name="ArrowUp" className="text-[18px]" />
          </button>
        </div>

        <div className="flex items-center">
          <span className="text-xs text-base-content/75">
            تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ <span className="px-4"> | </span> ۷ روز
            هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </span>
        </div>

        <div className="w-full relative flex">
          {sections.map(({ items, title }) => (
            <div className="flex flex-col w-full gap-2" key={title}>
              <span className="font-bold leading-[2]">{title}</span>

              {items.map(({ link, title }, idx) => (
                <Link
                  className="text-sm text-base-content/75 font-medium leading-[2]"
                  key={idx}
                  href={link}
                >
                  {title}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-3 shrink-0">
            <span className="font-bold leading-[2]">همراه ما باشید</span>

            <div className="flex items-center gap-6 text-base-content/40">
              {socials.map(({ icon, link }) => (
                <Link href={link} key={icon}>
                  <Icon name={icon} className="text-[30px]" />
                </Link>
              ))}
            </div>

            <span className="font-bold leading-[2]">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </span>

            <div className="flex items-center relative gap-3">
              <input
                placeholder="ایمیل"
                className="bg-base-300 text-sm h-10 w-full rounded-btn outline-none px-3"
              />
              <button className="btn btn-primary">ثبت</button>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 pt-6">
          <span className="text-xs text-base-content/75">
            تمامی حقوق این سایت مربوط به بهشت درمان میباشد.
          </span>
        </div>
      </div>
    </footer>
  );
};

const sections = [
  {
    title: "با بهشت درمان",
    items: [
      {
        title: "اتاق خبر بهشت درمان",
        link: "",
      },
      {
        title: "فروش در بهشت درمان",
        link: "",
      },
      {
        title: "فرصت های شغلی",
        link: "",
      },
      {
        title: "گزارش تخلف",
        link: "",
      },
      {
        title: "تماس با بهشت درمان",
        link: "",
      },
    ],
  },
  {
    title: "خدمات مشتریان",
    items: [
      {
        title: "پاسخ به پرسش‌های متداول",
        link: "",
      },
      {
        title: "رویه‌های بازگرداندن کالا",
        link: "",
      },
      {
        title: "شرایط استفاده",
        link: "",
      },
      {
        title: "گزارش باگ",
        link: "",
      },
    ],
  },
  {
    title: "راهنمای خرید از دیجی کالا",
    items: [
      {
        title: "نحوه ثبت سفارش",
        link: "",
      },
      {
        title: "رویه ارسال سفارش",
        link: "",
      },
      {
        title: "شیوه های پرداخت",
        link: "",
      },
    ],
  },
];

const socials: { link: string; icon: IconKey }[] = [
  {
    icon: "Youtube",
    link: "",
  },
  {
    icon: "Instagram",
    link: "",
  },
  {
    icon: "Twitter",
    link: "",
  },
];

export default LargeFooter;
