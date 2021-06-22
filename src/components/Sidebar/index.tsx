import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useSidebarDashboard } from '../../hooks/useSidebarDashboard'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDashboard();
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if(isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
                <DrawerOverlay>
                    <DrawerContent bg="gray.300" p="4">
                        <DrawerCloseButton mt="6"/>
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="48" mr="2">
            <SidebarNav />
        </Box>
    );
}