import { IProperty } from '@/@types/property';
import {
  Heading, Text, Icon, Stack, useBreakpointValue,Box
} from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import { AnotherInformationItem } from './AnotherInformationItem';

interface ImmobileInformation {
  property: IProperty
}

export function ImmobileInformation({ property }: ImmobileInformation): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Box maxWidth="636px" mx="auto" width="100%">
      <Heading mt={['0', '10']} fontSize={['3xl', '4xl']} textAlign={['center']}>{property.titulo}</Heading>
      <Heading textAlign={['center']} fontSize={['2xl', '3xl']} color="gray.700" mt={['4', '7']}>Sobre o imóvel</Heading>

      <Text color="gray.600" display="flex" alignItems="center" mt={['1', '4']}>
        {isWideVersion && <Text fontSize="lg" color="gray.800" fontWeight="bold">Endereço: </Text>}
        {!isWideVersion && <Icon fontSize="lg" as={RiMapPin2Fill} />}

        <Text as="span" color="gray.700" fontSize="lg" ml="1">
          {property.rua}
          ,
          {' '}
          {property.numero}
        </Text>
      </Text>

      <Text color="red.400" fontSize="lg" fontWeight="bold" mt="2">
        <Text fontSize="xl" as="span">{property.valorFormatado}</Text>
      </Text>

      <Text fontSize="lg" color="gray.700" mt={['2']}>
        {property.descricao}
      </Text>

      <Heading fontWeight="500" textAlign={['center']} fontSize={['2xl', '3xl']} color="gray.700" mt={['4', '9']}>Outras informações</Heading>

      <Stack spacing="2" mt={['3']}>
        {property.quartos && (
          <AnotherInformationItem>
            {property.quartos}
            {' '}
            Quartos
          </AnotherInformationItem>
        )}
        {property.garagem === 'SIM' && <AnotherInformationItem>Garagem</AnotherInformationItem> }
        {property.dimensao && <AnotherInformationItem>{property.dimensao} mm2</AnotherInformationItem> }
      </Stack>
      </Box>
    </>
  );
}
