import {
  Checkbox, CheckboxGroup, Heading, Stack, Button,
} from '@chakra-ui/react';
import React from 'react';
import { ItemSearch } from './ItemSearch';

export function SidebarNav(): JSX.Element {
  return (
    <>
      <Stack spacing="4" align="flex-start">
        <ItemSearch id="estado">Estado</ItemSearch>
        <ItemSearch id="cidade">Cidade</ItemSearch>
        <ItemSearch id="endereco">Endereço</ItemSearch>
        <ItemSearch id="bairro">Bairro</ItemSearch>
        <Checkbox borderColor="red.400" fontWeight="500" size="md" value="garagem" colorScheme="red">Garagem</Checkbox>
      </Stack>
      <Heading fontSize="2xl" mt="5">Categorias</Heading>
      <CheckboxGroup colorScheme="red" defaultValue={['casa']}>
        <Stack spacing="2">
          <Checkbox borderColor="red.400" size="md" fontWeight="500" value="lote">Lote</Checkbox>
          <Checkbox borderColor="red.400" size="md" fontWeight="500" value="casa">Casa</Checkbox>
          <Checkbox borderColor="red.400" size="md" fontWeight="500" value="bar">Bar</Checkbox>
        </Stack>
      </CheckboxGroup>

      <Button
        mt="8"
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
        Aplicar filtro
      </Button>
    </>
  );
}
