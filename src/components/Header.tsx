import {
  Button, Flex, Icon, Text, useBreakpointValue, Link as ChakraLink
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { FaWhatsapp } from 'react-icons/fa';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

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

  const router = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="55px"
      mx="auto"
      px="1"
      align="center"
      bg="red.500"
    >
      {showContact && (
        <Button
          as="a"
          ml="auto"
          mr="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          size="md"
          p="2"
          bg="red.300"
          _hover={{
            bg: 'red.200',
          }}
        >
          <Icon color="gray.200" fontSize="2xl" as={FaWhatsapp} />
          {isWideVersion
            && <Text color="gray.200" fontSize="md" ml="2">Entre em contato</Text>
          }
        </Button>
      )}

      {showBackButton && (
        <Link href="/">
          <ChakraLink
            mr="auto"
            bg="transparent"
            w="32px"
            h="32px"
            _hover={{
              bg: 'red.300',
            }}
          >
            <Icon color="gray.200" fontSize="4xl" as={RiArrowLeftSLine} />
          </ChakraLink>
      </Link>
      )}

    </Flex>
  );
}
