import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
// import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';

export function Header() {
    // const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton 
                    aria-label="openNavigation"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={() => {}}
                    mr="2"
                >

                </IconButton>
            )}
            <Logo />
            <Flex align="center" ml="auto">
                <NotificationNav />
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    );
}