"use client";

import Footer from "@/components/Common/Footer/footer";
import Header from "@/components/Common/Header/header";
import Introduce from "@/components/Introduce/introduce";
import Landing from "@/components/Landing/landing";
import Main from "@/components/Main/main";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Introduce />
      <Landing />
      <Footer />
    </>
  );
};

export default Home;
