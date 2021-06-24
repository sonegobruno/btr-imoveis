import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FormControl, FormErrorMessage, FormLabel, Spinner } from "@chakra-ui/react";
import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface IOption {
    value: string;
    label: string;
}

interface Props extends SelectProps {
    name: string;
    label?: string;
    error?: FieldError;
    options: IOption[];
    isLoading?: boolean;
}


const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, Props> = ({
    options, 
    error, 
    label, 
    name, 
    isLoading = false,

    ...rest
}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && 
                <FormLabel htmlFor={name}>
                    {label}
                    {isLoading && <Spinner size="sm" color="gray.500" ml="4" />}
                </FormLabel>
            }
            <ChakraSelect 
                id={name}
                name={name}
                focusBorderColor="red.500"
                bgColor="gray.400"
                variant="filled"
                _hover={{
                    bgColor: 'gray.400',
                    borderColor: "red.500"
                }}
                size="lg"
                ref={ref}
                {...rest}
            >
                {!isLoading && options.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))} 
            </ChakraSelect>

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}

        </FormControl>
    )
}

export const Select = forwardRef(SelectBase);
