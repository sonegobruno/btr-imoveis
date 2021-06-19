import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'
import { QueryClientProvider } from 'react-query';

import { SidebarFilterProvider } from './useSidebarFilter';
import { queryClient } from '@/services/queryClient';
import { AuthProvider } from './useAuth';

const AppProvider: React.FC = React.memo(({ children }) => (
  <SidebarFilterProvider>
    <SimpleReactLightbox>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </SimpleReactLightbox>
  </SidebarFilterProvider>
));

export default AppProvider;