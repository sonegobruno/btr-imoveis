import { FormControl, FormErrorMessage, FormLabel, forwardRef, Textarea as ChakraTextarea, TextareaProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface Props extends TextareaProps {
    error?: FieldError;
    name: string;
    label?: string;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, Props> =({
    name, 
    label, 
    error,
    ...rest
}, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && 
                <FormLabel htmlFor={name}>
                {label}
                </FormLabel>
            }
            <ChakraTextarea
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
                minH="140px"
                {...rest} 
            />
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Textarea = forwardRef(TextareaBase);
