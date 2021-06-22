import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registesPerPage: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_,index) => {
        return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
    totalCountOfRegisters,
    currentPage = 1,
    onPageChange,
    registesPerPage,
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegisters / registesPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : []
    ;

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []

    return(
        <Stack
            direction={["column","row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>Total de registros:</strong><strong>  {totalCountOfRegisters}</strong>
            </Box>
            <Stack direction="row" spacing="2">
                {currentPage >= (siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange}  number={0}/>
                        {currentPage > (1 + siblingsCount) && 
                        <Text color="gray.500" w="8" textAlign="center" >...</Text>}
                    </>
                )}
                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                })}
                <PaginationItem onPageChange={onPageChange}  number={currentPage} isCurrent />
                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < (lastPage) && 
                        <Text color="gray.500" w="8" textAlign="center" >...</Text>}
                        <PaginationItem onPageChange={onPageChange} number={lastPage}/>
                    </>
                )}
            </Stack>
        </Stack>
    )
}