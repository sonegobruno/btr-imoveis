import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface NavSectionProps {
    title: string;
    children: React.ReactNode
}

export function NavSection({ title, children }: NavSectionProps): JSX.Element {
  return (
    <Box w="100%">
      <Text ml="6" fontWeight="bold" color="gray.800" fontSize="small">{title}</Text>
      <Stack spacing={['4', '0']} mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
