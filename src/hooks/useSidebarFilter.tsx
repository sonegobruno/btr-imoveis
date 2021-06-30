import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import {
  createContext, ReactNode, useContext, useEffect,
} from 'react';

interface SidebarFilterProviderProps {
    children: ReactNode;
}

type SidebarFilterContextData = UseDisclosureReturn

const SidebarFilterContext = createContext({} as SidebarFilterContextData);

export function SidebarFilterProvider({ children }:SidebarFilterProviderProps): JSX.Element {
  const disclosure = useDisclosure();

  useEffect(() => {
    disclosure.onClose();
  }, [disclosure]);

  return (
    <SidebarFilterContext.Provider value={disclosure}>
      {children}
    </SidebarFilterContext.Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSidebarFilter = () => useContext(SidebarFilterContext);
