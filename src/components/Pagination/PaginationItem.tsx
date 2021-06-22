import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ 
    isCurrent = false, 
    number,
    onPageChange
} : PaginationItemProps) {
    if(isCurrent) {
        return(
            <Button 
                size="sm" 
                fontSize="xs" 
                width="4" 
                colorScheme="red" 
                disabled  
                _disabled={{
                    bgColor:"red.500",
                    cursor: 'default'
                }}
            >
                {number + 1}
            </Button>
        )
    } 

    return(
        <Button 
            size="sm" 
            fontSize="xs" 
            width="4" 
            bgColor="gray.400" 
            _hover={{
                bg: 'gray.500',
                color: '#fff'
            }}
            onClick={() => onPageChange(number)}
        >
            {number + 1}
        </Button>
    )
}