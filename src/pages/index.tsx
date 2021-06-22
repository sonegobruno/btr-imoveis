import { IProperty } from '@/@types/property';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Banner } from '@/components/HomeComponents/Banner';
import { FilterContainer } from '@/components/HomeComponents/FilterContainer';
import { ListImmobile } from '@/components/HomeComponents/ListProperty';
import { Sidebar } from '@/components/SidebarFilter';
import { getAllProperties, useGetAllProperty } from '@/services/hooks/properties/useProperty';
import { Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface IAllProperties {
  properties: IProperty[];
  totalRows: number;
}

interface HomeProps {
  properties: IAllProperties;
  numberTotalPage: number;
}

export default function Home({ properties, numberTotalPage }: HomeProps): JSX.Element {
  const { data, isSuccess } = useGetAllProperty({
    limit: 35,
  }, { initialData: properties });

  return (
    <Flex w="100%" direction="column" minH="100vh" pb="256px">
      <Sidebar />
      <Header showContact />
      <Banner />
      <FilterContainer />
      {isSuccess && <ListImmobile properties={data.properties} />}
      <Footer />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (ctx) => {
  const immobilePerPage = 35;

  const response = await getAllProperties({
    limit: immobilePerPage,
  }, ctx);

  const numberTotalPage = Math.ceil(response.totalRows / immobilePerPage);
  return {
    props: {
      properties: response,
      numberTotalPage,
    },
  };
};
