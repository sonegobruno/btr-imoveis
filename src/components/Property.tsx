import {
  Box, Flex, Heading, Text, Icon, Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import { RiArrowRightSLine, RiMapPin2Fill } from 'react-icons/ri';

export function Property(): JSX.Element {
  const router = useRouter();

  return (
    <Flex
      border="1px"
      borderColor="gray.400"
      borderRadius="8px"
      bg="gray.200"
      w="100%"
      maxW={280}
      h="100%"
      p="2"
      direction="column"
    >
      <Flex w="100%" h="173px" bgImage="url(/assets/house.png)" bgSize="cover" borderRadius="8px" mx="auto" />
      <Box w="280px" mt="4" ml="auto" display="flex" flexDirection="column" px="2">
        <Heading color="gray.900" fontSize="2xl">Lote para aluguel</Heading>
        <Text color="yellow.500" fontWeight="bold" mt="1">
          R$
          {' '}
          <Text fontSize="lg" as="span">17.000.000</Text>
        </Text>
        <Text color="gray.500" display="flex" alignItems="center" mt="3">
          <Icon size="sm" as={RiMapPin2Fill} />
          <Text as="span" size="sm" ml="1">Rua João Remo de Faria, 68</Text>
        </Text>
        <Button onClick={() => { router.push('imovel/32'); }} alignSelf="flex-end" mr="2" mt="2" borderRadius="24" w="10" h="10" colorScheme="red" type="button">
          <Icon fontSize="36px" color="red.50" as={RiArrowRightSLine} />
        </Button>
      </Box>
    </Flex>
  );
}
