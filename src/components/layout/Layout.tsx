import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}; 