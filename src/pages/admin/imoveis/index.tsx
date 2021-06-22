import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Text, Tbody, Td, Stack, Tr, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "@/components/Admin/Header";
import { useGetAllProperty } from "@/services/hooks/properties/useProperty";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";
import { FaTrash } from "react-icons/fa";
import { withSSRAuth } from "@/utils/withSSRAuth";

export default function UserList() {
    const propertiesPerPage = 10;
    const [page, setPage] = useState(0);

    const {data, isLoading, isFetching, error} = useGetAllProperty({
        limit: propertiesPerPage,
        offset: propertiesPerPage * (page),
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" pl={["1", "0"]} pr={["1", "6"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} boxShadow="1px 3px 23px -3px rgba(0,0,0,0.63)" p="8">
                    <Flex mb="8" justify="space-between" align="center"> 
                        <Heading size="lg" fontWeight="normal">
                            Imóveis
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon fontSize="20" as={RiAddLine}/>} >
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
                            <Table colorScheme="gray">
                                <Tbody>
                                    {data.properties.map(property => (
                                        <Tr key={property.id_imovel}>
                                            {isWideVersion &&
                                                <Td>
                                                    <Text fontWeight="bold">#{property.id_imovel}</Text>
                                                </Td>
                                            }
                                            <Td>
                                                <Box>
                                                    <Text color="gray.800" fontWeight="bold">{property.titulo}</Text>
                                                    <Text fontSize="sm" fontWeight="bold" color="gray.600">{property.valorFormatado}</Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Stack ml="auto" maxW="104px" spacing="1">
                                                    <NextLink href={`/admin/imoveis/${property.id_imovel}`}>
                                                        <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>} >
                                                            Editar
                                                        </Button>
                                                    </NextLink>
                                                    <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon fontSize="16" as={FaTrash}/>} >
                                                        Excluir
                                                    </Button>
                                                </Stack>
                                            </Td>
                                        </Tr>
                                    ))}
                                    
                                </Tbody>
                            </Table>
                            <Pagination
                                totalCountOfRegisters={data.totalRows}
                                currentPage={page}
                                onPageChange={setPage}
                                registesPerPage={propertiesPerPage}
                            />
                        </>)
                    }  
                </Box>
            </Flex>
        </Box>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    return {
        props: {

        },
    }
})