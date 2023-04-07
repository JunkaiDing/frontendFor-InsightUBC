// components
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import './Layout.css';
const Layout = ({ children }) => {

  const pageScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
      {}
      <div className="p-0" id="scrollUp" onClick={pageScroll}>
        <div className="fixedActionBtn">
          👆
        </div>
        </div>
    </>
  );
};

export default Layout;
