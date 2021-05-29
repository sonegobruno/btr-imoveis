import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarFilterProviderProps {
    children: ReactNode;
}

type SidebarFilterContextData = UseDisclosureReturn

const SidebarFilterContext = createContext({} as SidebarFilterContextData);

export function SidebarFilterProvider({children}:SidebarFilterProviderProps) {
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    },[router.asPath])

    return (
        <SidebarFilterContext.Provider value={disclosure}>
            {children}
        </SidebarFilterContext.Provider>
    )
}

export const useSidebarFilter = () => useContext(SidebarFilterContext)