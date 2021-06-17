import { IProperty } from '@/@types/property';
import {
  Box, Flex, Heading, Text, Icon, Button,
} from '@chakra-ui/react';

import { RiArrowRightSLine, RiMapPin2Fill } from 'react-icons/ri';

interface ImmobileProps {
  property: IProperty
}

export function Property({ property }:ImmobileProps): JSX.Element {
  return (
    <Flex
      border="1px"
      borderColor="gray.400"
      borderRadius="8px"
      bg="gray.200"
      w="100%"
      maxW={280}
      h="100%"
      p="3"
      direction="column"
      position="relative"
    >
      <Flex w="100%" h="173px" bgImage={`url(${process.env.NEXT_PUBLIC_API_URL}/imagens/${property.id_imovel}/${property.banner})`} bgSize="cover" borderRadius="8px" mx="auto" />
      <Box mt="4" pt="2" pb="12">
        <Heading color="gray.900" fontSize="2xl">{property.titulo}</Heading>
        <Text color="yellow.500" fontWeight="bold" mt="1">
          <Text fontSize="lg" as="span">{property.valorFormatado}</Text>
        </Text>
        <Text color="gray.500" display="flex" alignItems="center" mt="3">
          <Icon size="sm" as={RiMapPin2Fill} />
          <Text as="span" size="sm" ml="1">
            {property.rua}
            ,
            {' '}
            {property.numero}
          </Text>
        </Text>
        <Button as="a" href={`/imovel/${property.id_imovel}`} target="_blank" position="absolute" bottom="8px" right="8px" borderRadius="24" w="10" h="10" colorScheme="red" type="button">
          <Icon fontSize="36px" color="red.50" as={RiArrowRightSLine} />
        </Button>
      </Box>
    </Flex>
  );
}
