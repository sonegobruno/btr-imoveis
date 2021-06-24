import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
    children: ReactNode;
}

export function Content({children, ...rest}: Props) {
    return (
        <Box 
            flex="1" 
            borderRadius={8} 
            boxShadow={[0, 0, 0, "1px 3px 23px -3px rgba(0,0,0,0.63)" ]}
            p={["6","8"]}
            {...rest}
        >
            {children}
        </Box>
    );
}