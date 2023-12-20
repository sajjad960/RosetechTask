import Footer from "../Footer";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Footer author="Sajjad Hossain" startYear={2023} />
    </>
  );
};

export default Home;
