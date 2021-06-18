import { IProperty } from '@/@types/property';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Galery } from '@/components/ImmobilePageComponents/Galery';
import { ImmobileInformation } from '@/components/ImmobilePageComponents/ImmobileInformation';
import { getPropertyById, useGetPropertyById } from '@/services/hooks/properties/useProperty';
import { Button, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

interface ImovelProps {
  property: IProperty;
}

export default function Imovel({ property }: ImovelProps): JSX.Element {
  const { data, isSuccess } = useGetPropertyById(property.id_imovel, { initialData: property });

  return (
    <Flex w="100%" minH="100vh" direction="column" pb="256px">
      <Header showBackButton />
      <Flex w="100%" maxWidth="880px" mx="auto" direction="column" p="5">
        {isSuccess
      && (
      <>
        <ImmobileInformation property={data} />
        <Galery images={data.imagens} immobileId={data.id_imovel} />
        <Button
          mt="4"
          as="a"
          textAlign="center"
          colorScheme="red"
          borderRadius="full"
          h="40px"
          maxW="300px"
          w="100%"
          fontSize="xl"
          mx="auto"
        >
          Entrar em contato
        </Button>
      </>
      )}
      </Flex>
      <Footer />
    </Flex>
  );
}

export const getStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await getPropertyById(String(slug));

  return {
    props: {
      property: response,
    },
    revalidate: 30,
  };
};
