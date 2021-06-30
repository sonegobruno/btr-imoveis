import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@/services/queryClient';
import { SidebarFilterProvider } from './useSidebarFilter';
import { AuthProvider } from './useAuth';
import { SidebarDashboardProvider } from './useSidebarDashboard';

const AppProvider: React.FC = React.memo(({ children }) => (
  <SidebarFilterProvider>
    <SidebarDashboardProvider>
      <SimpleReactLightbox>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </AuthProvider>
      </SimpleReactLightbox>
    </SidebarDashboardProvider>
  </SidebarFilterProvider>
));

export default AppProvider;
