import {
  Button, Flex, Icon, Text, useBreakpointValue,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export function Header(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="55px"
      mx="auto"
      px="6"
      align="center"
      bg="red.500"
    >
      <Button
        as="a"
        ml="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="red.300"
        _hover={{
          bg: 'red.200',
        }}
      >
        <Icon color="gray.200" fontSize="xl" as={FaWhatsapp} />
        {isWideVersion
        && <Text color="gray.200" fontSize="xl" ml="2">Entre em contato</Text>}
      </Button>

    </Flex>
  );
}
