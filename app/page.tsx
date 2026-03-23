import { Booking } from '@/src/components/Booking';
import { Footer } from '@/src/components/Footer';
import { Gallery } from '@/src/components/Gallery';
import { Hero } from '@/src/components/Hero';
import { Reviews } from '@/src/components/Reviews';
import { Services } from '@/src/components/Services';
import { StickyCallBar } from '@/src/components/StickyCallBar';

export default function Home() {
  return (
    <main className='flex flex-col flex-1'>
      <Hero />
      <Services />
      {/* <Gallery /> */}
      <Reviews />
      <Booking />
      <Footer />
      <StickyCallBar />
    </main>
  );
}
