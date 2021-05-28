import { Flex, Icon, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox(): JSX.Element {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="6"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.300"
      borderRadius="full"
      mx={['0', '4']}
    >
      <Input
        color="gray.500"
        variant="unstyled"
        placeholder="Pesquisar"
        _placeholder={{
          color: 'gray.500',
        }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} color="gray.500" fontSize="18" />
    </Flex>
  );
}
