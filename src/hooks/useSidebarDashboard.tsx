import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import {
  createContext, ReactNode, useContext, useEffect,
} from 'react';

interface SidebarDashboardProviderProps {
    children: ReactNode;
}

type SidebarDashboardContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDashboardContextData);

export function SidebarDashboardProvider({ children }:SidebarDashboardProviderProps): JSX.Element {
  const disclosure = useDisclosure();

  useEffect(() => {
    disclosure.onClose();
  }, [disclosure]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSidebarDashboard = () => useContext(SidebarDrawerContext);
