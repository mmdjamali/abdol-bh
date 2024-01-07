import Link from "next/link";
import { IconKey } from "../icons";
import Icon from "../ui/icon";

const BottomNavbar = () => {
  return (
    <>
      <nav className="bg-base-100 z-[9999] w-full border-t flex lg:hidden h-16 fixed bottom-0 inset-x-0">
        {routes.map(({ icon, path, title }) => (
          <Link
            key={title}
            href={path}
            className="flex w-full items-center justify-center flex-col"
          >
            <Icon name={icon} className="text-[24px]" />

            <span className="text-[10px] mt-1">{title}</span>
          </Link>
        ))}
      </nav>

      <div className="h-16 flex lg:hidden"></div>
    </>
  );
};

export default BottomNavbar;

const routes: { path: string; title: string; icon: IconKey }[] = [
  {
    icon: "Home",
    path: "",
    title: "خانه",
  },
  {
    icon: "Shapes",
    path: "",
    title: "دسته بندی",
  },
  {
    icon: "ShoppingCart",
    path: "",
    title: "سبد خرید",
  },
  {
    icon: "User",
    path: "",
    title: "من",
  },
];
