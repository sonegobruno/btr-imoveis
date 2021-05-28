import {
  Button, Flex, Icon, Text, useBreakpointValue,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { RiArrowLeftSLine } from 'react-icons/ri';

interface HeaderProps {
  showContact?: boolean;
  showBackButton?: boolean;
}

export function Header({
  showBackButton = false,
  showContact = false,
}: HeaderProps): JSX.Element {
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
      {showContact && (
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
      )}

      {showBackButton && (
      <Button
        mr="auto"
        bg="transparent"
        w="32px"
        h="32px"
        _hover={{
          bg: 'red.300',
        }}
      >
        <Icon color="gray.200" fontSize="4xl" as={RiArrowLeftSLine} />
      </Button>
      )}

    </Flex>
  );
}
