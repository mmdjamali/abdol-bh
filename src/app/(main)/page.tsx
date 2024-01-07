import LargeHeader from "@/components/layout/header/large";
import SmallHeader from "@/components/layout/header/small";
import MainHomeAds from "@/components/main-home-ads";
import MainHomeOtherServices from "@/components/main-home-other-services";
import MainHomeTopSlider from "@/components/main-home-top-slider";
import dynamic from "next/dynamic";

const MainHomeSpecialOffers = dynamic(
  () => import("@/components/main-home-special-offers"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Page = () => {
  return (
    <main className="">
      <LargeHeader />
      <SmallHeader />

      <div className="relative">
        <div className="flex flex-col gap-y-4 mx-auto max-w-[1764px] w-full relative">
          <MainHomeTopSlider />
          <MainHomeOtherServices />
          <MainHomeSpecialOffers />
          <MainHomeAds />
        </div>
      </div>
    </main>
  );
};

export default Page;
