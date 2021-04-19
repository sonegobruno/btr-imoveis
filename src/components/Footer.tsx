import {
  Box, Flex, Text, Stack, Icon,
} from '@chakra-ui/react';

import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export function Footer(): JSX.Element {
  return (
    <>
      <Flex
        bg="gray.200"
        w="100%"
        h="216px"
      >
        <Box
          ml="4"
          mt="3"
        >
          <Text ml="6" fontWeight="bold" fontSize="2xl">Entre em contato</Text>
          <Stack spacing="2" mt="4">
            <Flex display="flex" align="center">
              <Icon color="red.500" fontSize="lg" mr="2" as={FaMapMarkerAlt} />
              <Text color="gray.700">R.Sete de Setembro, 138 - Centro</Text>
            </Flex>
            <Flex display="flex" align="center">
              <Icon color="red.500" fontSize="lg" mr="2" as={FaPhoneAlt} />
              <Text color="gray.700">(35) 3651-2450</Text>
            </Flex>
            <Flex display="flex" align="center">
              <Icon color="red.500" fontSize="lg" mr="2" as={MdMail} />
              <Text color="gray.700">teste@gmail.com</Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
      <Flex
        bg="gray.400"
        h="40px"
        w="100%"
        display="flex"
        align="center"
        pl="3"
      >
        <Text fontSize="sm" fontWeight="bold">Desenvolvido por: BTR Soluções</Text>
      </Flex>
    </>
  );
}
