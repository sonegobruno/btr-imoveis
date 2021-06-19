import { useAuth } from "@/hooks/useAuth";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({
    showProfileData = true
}: ProfileProps) {
    const { user } = useAuth();

    return(
        <Flex align="center">
            {showProfileData &&
                <Box mr="4" textAlign="right">
                    <Text fontWeight="bold">{user.nome}</Text>
                    <Text fontSize="small">{user.login}</Text>
                </Box>
            }
            <Avatar size="md" name={user.nome} src=""/>
        </Flex>
    )
}