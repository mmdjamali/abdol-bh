import Image from "next/image";
import Link from "next/link";
import Icon from "./ui/icon";

const MainHomeOtherServices = () => {
  return (
    <div className="w-full grid grid-cols-4 items-center lg:grid-cols-8">
      {services.map(({ image, link, title }) => (
        <Link
          className="flex gap-1.5 flex-col items-center justify-center py-2"
          href={link}
          key={title}
        >
          <div className="w-[52px]] h-[52px] aspect-square relative">
            <Image
              className="object-cover"
              unoptimized
              src={image}
              fill
              alt={title}
            />
          </div>

          <span className="text-[11px] font-medium text-base-content/90">
            {title}
          </span>
        </Link>
      ))}

      <div className="flex gap-1.5 flex-col py-2 items-center justify-center cursor-pointer">
        <div className="w-[52px]] h-[52px] inline-grid place-items-center aspect-square relative rounded-full bg-base-200">
          <Icon
            name="MoreHorizontal"
            className="text-[32px] text-base-content/40"
          />
        </div>

        <span className="text-[11px] font-medium text-base-content/90">
          بیشتر
        </span>
      </div>
    </div>
  );
};

export default MainHomeOtherServices;

const services: {
  image: string;
  link: string;
  title: string;
}[] = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    link: "",
    title: "دریافت وام",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/3ff9cc214a4c8e7d8defad0813f484b719d42c12_1704102728.png",
    link: "",
    title: "حراج نیم فصل استایل",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/a5e92320101910c6bd31f816e22d35648085af19_1703192218.png",
    link: "",
    title: "هر خرید یک شانس",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/e8c1c372a304dc7c6ed600a6d4eb017f2aaea8cd_1697297561.png",
    link: "",
    title: "گیم نت",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/6b21cc5a4ebe6332b778a2f4725ed3fdaa78e014_1673693837.png",
    link: "",
    title: "کارت هدیه",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/bfcafaf7f0afffbfd326adc48e29e3449dd69910_1688462197.png",
    link: "",
    title: "ارسال سریع",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/425c8f55c9bb5ad8e860bdc9f82421ce4fcc18de_1703192837.png",
    link: "",
    title: "سوپرمارکت",
  },
];
