import React from 'react';
import { SidebarFilterProvider } from './useSidebarFilter';
import SimpleReactLightbox from 'simple-react-lightbox'

const AppProvider: React.FC = React.memo(({ children }) => (
  <SidebarFilterProvider>
    <SimpleReactLightbox>
      {children}
    </SimpleReactLightbox>
  </SidebarFilterProvider>
));

export default AppProvider;