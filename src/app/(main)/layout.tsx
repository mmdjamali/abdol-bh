import BottomNavbar from "@/components/layout/bottom-navbar";
import LargeFooter from "@/components/layout/footer/large";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <BottomNavbar />
      <LargeFooter />
    </div>
  );
};

export default Layout;
