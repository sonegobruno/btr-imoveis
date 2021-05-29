import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useSidebarFilter } from '../../hooks/useSidebarFilter'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
    const { isOpen, onClose } = useSidebarFilter();

    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
            <DrawerOverlay>
                <DrawerContent bg="gray.300" p="4">
                    <DrawerCloseButton mt="6"/>
                    <DrawerHeader>Filtrar imóveis</DrawerHeader>
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}