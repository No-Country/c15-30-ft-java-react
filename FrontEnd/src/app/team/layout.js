import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const layout = ({ children }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center ">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
