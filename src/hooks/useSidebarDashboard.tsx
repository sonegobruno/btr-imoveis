import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDashboardProviderProps {
    children: ReactNode;
}

type SidebarDashboardContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDashboardContextData);

export function SidebarDashboardProvider({children}:SidebarDashboardProviderProps) {
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    },[router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDashboard = () => useContext(SidebarDrawerContext)