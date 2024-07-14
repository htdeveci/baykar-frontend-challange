import classes from "@/styles/Home.module.css";
import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from "@/components/sections/firstSection";
import SecondSection from "@/components/sections/secondSection";
import ThirdSection from "@/components/sections/thirdSection";
import ForthSection from "@/components/sections/forthSection";
import FifthSection from "@/components/sections/fifthSection";
import SixthSection from "@/components/sections/sixthSection";
import SeventhSection from "@/components/sections/seventhSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <FirstSection id="products" />
        <SecondSection id="solutions" />
        <ThirdSection id="pricing" />
        <ForthSection id="resources" />
        <FifthSection id="logIn" />
        <SixthSection id="signUp" />
        <SeventhSection />
        <Footer />
      </div>
    </>
  );
}
