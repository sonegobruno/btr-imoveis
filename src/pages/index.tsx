import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Banner } from '@/components/HomeComponents/Banner';
import { Description } from '@/components/HomeComponents/Description';
import { ListImmobile } from '@/components/HomeComponents/ListImmobile';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Description />
      <ListImmobile />
      <Footer />
    </>
  );
}
