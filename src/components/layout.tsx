import type { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
