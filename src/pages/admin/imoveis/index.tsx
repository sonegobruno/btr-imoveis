import { withSSRAuth } from "@/utils/withSSRAuth";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Text, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "@/components/Admin/Header";
import { getAllProperties, useInitialProperty } from "@/services/hooks/properties/useProperty";
import { IProperty } from "@/@types/property";
// import { Pagination } from "../../components/Pagination";
// import { Sidebar } from "../../components/Sidebar";
// import { api } from "../../services/api";
// import { getUsers, useUsers } from "../../services/hooks/useUsers";
// import { queryClient } from '../../services/queryCliente';

interface IAllProperties {
    properties: IProperty[];
    totalRows: number;
  }
  
  interface UserListProps {
    properties: IAllProperties;
    numberTotalPage: number;
  }

export default function UserList({numberTotalPage, properties}: UserListProps) {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, error } = useInitialProperty({ limit: 35 }, {
        initialData: properties
    });

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    // async function handlePrefetchUser(userId: number) {
    //     await queryClient.prefetchQuery(['user', userId], async () => {
    //         const response = await api.get(`users/${userId}`)

    //         return response.data;
    //     }), {
    //         staleTime: 1000 * 60 * 10 // 10 min
    //     }
    // }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                {/* <Sidebar /> */}

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center"> 
                        <Heading size="lg" fontWeight="normal">
                            Imóveis
                            {/* {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />} */}
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="20" as={RiAddLine}/>} >
                                Criar novo
                            </Button>
                        </NextLink>
                    </Flex>

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Erro ao obter dados</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th>Imóveis</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.properties.map(property => (
                                        <Tr key={property.id_imovel}>
                                            <Td>
                                                <Box>
                                                    <Link color="purple.400">
                                                        <Text fontWeight="bold">{property.titulo}</Text>
                                                    </Link>
                                                    <Text fontSize="sm" color="gray.300">{property.valorFormatado}</Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                            {isWideVersion &&
                                                <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>} >
                                                    Editar
                                                </Button>
                                            }
                                            </Td>
                                        </Tr>
                                    ))}
                                    
                                </Tbody>
                            </Table>
                            {/* <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            /> */}
                        </>)
                    }  
                </Box>
            </Flex>
        </Box>
    )
}

export const getServerSideProps = withSSRAuth<UserListProps>(async (ctx) => {
    const immobilePerPage = 35;

    const response = await getAllProperties({
        limit: immobilePerPage,
    }, ctx);

    const numberTotalPage = Math.ceil(response.totalRows / immobilePerPage);

    return {
        props: {
            properties: response,
            numberTotalPage,
        }
    }
})