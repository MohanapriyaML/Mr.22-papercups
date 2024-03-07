import { ReactNode } from "react";
import FooterMain from "./footer/Footer";
import Header from "./header/Header";
import AboutUs from "./about/about";

export type LayoutProps = {
    children: ReactNode;
};
const MainLayout = ({ children }: LayoutProps) => {
    return (
      <>
        <Header/>
        <AboutUs />
        <FooterMain/>
      </>
    );
  };

export default MainLayout;


