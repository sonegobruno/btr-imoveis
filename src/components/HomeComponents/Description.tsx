import { Heading, Flex } from '@chakra-ui/react';
import { Filter } from '../Filter';

export function Description(): JSX.Element {
  return (
    <Flex maxWidth="744px" mx="auto" py="4" px="2" w="100%" direction="column" bg="gray.200">
      <Heading fontSize="2xl" textAlign="center">BTR Imóveis</Heading>
      <Filter mt="3" />
    </Flex>
  );
}
