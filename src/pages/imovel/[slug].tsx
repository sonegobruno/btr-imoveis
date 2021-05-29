import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Galery } from '@/components/ImmobilePageComponents/Galery';
import { ImmobileInformation } from '@/components/ImmobilePageComponents/ImmobileInformation';
import {  Button, Flex } from '@chakra-ui/react';

export default function Imovel(): JSX.Element {
  return (
    <Flex w="100%" minH="100vh" direction="column" pb="256px">
      <Header showBackButton />
      <Flex w="100%" maxWidth="880px" mx="auto" direction="column" p="5">
        <ImmobileInformation />
        <Galery />
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
      </Flex>
      <Footer />
    </Flex>
  );
}
