import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import BrandValue from '@/components/BrandValue';
import Experience from '@/components/Experience';
import Process from '@/components/Process';
import Applications from '@/components/Applications';
import TrustProofs from '@/components/TrustProofs';
import ServiceRegions from '@/components/ServiceRegions';
import ProductQuality from '@/components/ProductQuality';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <Experience />
        <Process />
        <Applications />
        <TrustProofs />
        <ServiceRegions />
        <ProductQuality />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
