import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <VideoSection />
      <Timeline />
      <Achievements />
      <Footer />
    </main>
  );
}
