import CustomBackground from '_components/common/CustomBackground';
import NavBar from '_components/common/NavBar';
import Footer from '_components/common/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CustomBackground />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
