import React from "react";
import AboutWithSkills from "../components/About-with-skills";
import Footer from "../components/Footer";
import IntroTxt from "../components/Intro-txt";
import Navbar from "../components/Navbar";
import Numbers1 from "../components/Numbers";
import PortfolioCustomColumn from "../components/Portfolio-custom-column";
import Services4 from "../components/Services4";
import Testimonials1 from "../components/Testimonials1";
import BlogsThreeColum2 from "../components/Blogs-three-column2";
import DarkTheme from "../layouts/Dark";
import ContactSection from "../components/Contact-section";
import ClientsBrands from "../components/Clients-brands";
import { useRouter } from 'next/router'

const Homepage2 = () => {
  const router = useRouter();

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    router.push('https://emersoneho.notion.site/emersoneho/Resume-5e60c934a9ea49b0b4369a3c701210f2');
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroTxt subBG />
      <AboutWithSkills />
      <Services4 halfBG />
      <Numbers1 />
      <PortfolioCustomColumn column={2} filterPosition="left" />
      <Testimonials1 subBGLftstlParallaxie withBG overlay />
      <BlogsThreeColum2 />
      <ClientsBrands subBG theme="dark" />
      <ContactSection />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
