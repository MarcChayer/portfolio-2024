import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StickyCursor from '_components/common/StickyCursor';
import NavBar from '_components/common/NavBar';
import Footer from '_components/common/Footer';
import useSmoothScroll from 'src/hooks/useSmoothScroll';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [key, setKey] = useState(0);

  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleRouteChange = () => {
      setKey((prevKey) => prevKey + 1);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <StickyCursor key={key} />
      <NavBar scrollTo={scrollTo} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
