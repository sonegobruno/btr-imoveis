import { Flex, Icon, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox(): JSX.Element {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py={["2"]}
      px="6"
      maxW="600px"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.300"
      border="1px"
      borderColor="gray.400"
      borderRadius="full"
      mx={['0']}
    >
      <Input
        color="gray.700"
        variant="unstyled"
        placeholder="Pesquisar"
        fontSize={["sm","md"]}
        _placeholder={{
          color: 'gray.600',
        }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} color="gray.600" fontSize={["18","20"]} />
    </Flex>
  );
}
