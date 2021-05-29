import React from 'react';
import { SidebarFilterProvider } from './useSidebarFilter';

const AppProvider: React.FC = React.memo(({ children }) => (
  <SidebarFilterProvider>
    {children}
  </SidebarFilterProvider>
));

export default AppProvider;