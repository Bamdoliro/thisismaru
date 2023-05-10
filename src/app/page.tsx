"use client";

import Footer from "@/components/Common/Footer/footer";
import Header from "@/components/Common/Header/header";
import Introduce from "@/components/Introduce/introduce";
import Apply from "@/components/Apply/apply";
import Main from "@/components/Main/main";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Introduce />
      <Apply />
      <Footer />
    </>
  );
};

export default Home;
