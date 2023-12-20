import Footer from "../Footer";
import NavBar from "../NavBar";
import ScrollToTop from "../ScrollToTop";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Footer author="Sajjad Hossain" startYear={2023} />
      <ScrollToTop/>
    </>
  );
};

export default Home;
