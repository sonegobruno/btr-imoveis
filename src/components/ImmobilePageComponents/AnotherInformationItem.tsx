import { Flex, Text, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AnotherInformationItemProps {
    children: ReactNode;
}

export function AnotherInformationItem({ 
    children 
}: AnotherInformationItemProps): JSX.Element {
    return (
        <Flex align="center">
            <Box w="3" h="3" bg="teal.500" borderRadius="50%"></Box>
            <Text color="gray.700" ml="3" fontSize="lg" fontWeight="500">{children}</Text>
        </Flex>
    )
}