import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Banner } from '@/components/Home/Banner';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
}
