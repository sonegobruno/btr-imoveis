import { Heading, Flex, Text, Icon, Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import { AnotherInformationItem } from './AnotherInformationItem';

export function ImmobileInformation(): JSX.Element {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
      });
      
    return (
        <>
            <Heading mt={["0", "10"]} fontSize={["3xl", "4xl"]} textAlign={["left","center"]}>Lote para aluguel</Heading>

            <Text color="gray.600" display="flex" alignItems="center" mt={["1", "9"]}>
                {isWideVersion && <Text fontSize="lg" color="gray.800" fontWeight="bold">Endereço: </Text>}
                {!isWideVersion && <Icon fontSize="lg" as={RiMapPin2Fill} />}
                
                <Text as="span" color="gray.700" fontSize="lg" ml="1">Rua João Remo de Faria, 68</Text>
            </Text>

            <Text color="red.400" fontSize="lg" fontWeight="bold" mt="2">
                R$
                {' '}
                <Text fontSize="xl" as="span">17.000.000</Text>
            </Text>

            <Heading textAlign={["left","center"]} fontSize={["2xl", "3xl"]} color="gray.700" mt={["4", "7"]}>Sobre o imóvel</Heading>
            <Text fontSize="lg" color="gray.700" mt={["3", "6"]}>
                Coisas aleatórias só para ter algo
                para escrever aqui
            </Text>

            <Heading fontWeight="500" textAlign={["left"]} fontSize={["2xl"]} color="gray.700" mt={["4", "7"]}>Outras informações</Heading>

            <Stack spacing="2" mt={["3", "5"]}>
                <AnotherInformationItem>2 Quartos</AnotherInformationItem>
                <AnotherInformationItem>Garagem</AnotherInformationItem>
                <AnotherInformationItem>3 banheiros</AnotherInformationItem>
            </Stack>
        </>
    )
}