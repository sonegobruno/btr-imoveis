import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Banner } from '@/components/HomeComponents/Banner';
import { FilterContainer } from '@/components/HomeComponents/FilterContainer';
import { ListProperty } from '@/components/HomeComponents/ListProperty';
import { Sidebar } from '@/components/SidebarFilter';
import { Flex } from '@chakra-ui/react';

export default function Home(): JSX.Element {
  return (
    <Flex w="100%" direction="column" minH="100vh" pb="256px">
      <Sidebar />
      <Header showContact/>
      <Banner />
      <FilterContainer />
      <ListProperty />
      <Footer />
    </Flex>
  );
}
