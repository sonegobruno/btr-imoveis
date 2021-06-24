import { Heading, HeadingProps, Spinner } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends HeadingProps {
    children: ReactNode;
    isLoading: boolean;
}

export function Title({children, isLoading, ...rest}: Props) {
    return (
        <Heading 
            size="lg" 
            fontWeight="normal"
            {...rest}
        >
            {children}
            {isLoading && <Spinner size="sm" color="gray.500" ml="4" />}
        </Heading>
    );
}