import Image from "next/image";
import Link from "next/link";

const MainHomeAds = () => {
  return (
    <div className="w-full gap-4 grid grid-cols-2 items-center lg:grid-cols-4 px-4">
      {ads.map(({ image, link, title }, idx) => (
        <Link
          href={link}
          title={title}
          key={idx}
          className="w-full relative rounded-box overflow-hidden aspect-[100/75] bg-base-200"
        >
          <Image
            className="object-cover"
            unoptimized
            fill
            alt={title}
            src={image}
          />
        </Link>
      ))}
    </div>
  );
};

export default MainHomeAds;

const ads: {
  image: string;
  link: string;
  title: string;
}[] = [
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/8e751089c9dd2c247decb96525db93ff0a640aff_1704531512.jpg?x-oss-process=image/quality,q_95/format,webp",
    link: "",
    title: "بخاری",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/f9afe5ec678eca1765f363699c1983b419ccca1e_1704529988.jpg?x-oss-process=image/quality,q_95",
    link: "",
    title: "کمپین -HW - ابزار نظافت - دی 1402",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/67f2ddb28e671b8d8b42ff854b206aa7d0f55f4a_1703928587.jpg?x-oss-process=image/quality,q_95",
    link: "",
    title: "لوازم آرایش",
  },
  {
    image:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/20dee9874a2133181d9d550b21247d055b658fa2_1704295334.jpg?x-oss-process=image/quality,q_95",
    link: "",
    title: "کیف و کوله ",
  },
];
