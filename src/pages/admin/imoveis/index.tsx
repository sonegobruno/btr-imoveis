import { Box, Button, Flex, Icon, Table, Text, Tbody, Td, Stack, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "@/components/Admin/Header";
import { useGetAllProperty } from "@/services/hooks/properties/useProperty";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";
import { FaTrash } from "react-icons/fa";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { ButtonWhiteWithBorder } from "@/components/Form/ButtonWhiteWithBorder";
import { Content } from "@/components/Admin/Content";
import { Title } from "@/components/Admin/Title";
import { Container } from "@/components/Admin/Container";

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
            <Container>
                <Sidebar />

                <Content>
                    <Flex mb="8" justify="space-between" align="center"> 
                        <Title isLoading={!isLoading && isFetching}>
                            Imóveis
                        </Title>
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
                                            <Td p="0">
                                                <Box>
                                                    <Text color="gray.800" fontWeight="bold">{property.titulo}</Text>
                                                    <Text fontSize="sm" fontWeight="bold" color="gray.600">{property.valorFormatado}</Text>
                                                </Box>
                                            </Td>
                                            <Td pr="0">
                                                <Stack ml="auto" maxW="104px" spacing="1">
                                                    <NextLink href={`/admin/imoveis/${property.id_imovel}`}>
                                                        <ButtonWhiteWithBorder as="a" icon={RiPencilLine}>
                                                            Editar
                                                        </ButtonWhiteWithBorder>
                                                    </NextLink>
                                                    <ButtonWhiteWithBorder icon={FaTrash} >
                                                        Excluir
                                                    </ButtonWhiteWithBorder>
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
                </Content>
            </Container>
        </Box>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    return {
        props: {

        },
    }
})