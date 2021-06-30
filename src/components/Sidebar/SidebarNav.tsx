import { Stack } from '@chakra-ui/react';
import React from 'react';
import { RiContactsLine, RiHome4Fill, RiUser2Fill } from 'react-icons/ri';
import { NavLink } from './navLink';
import { NavSection } from './navSection';

export function SidebarNav(): JSX.Element {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiHome4Fill} href="/admin/imoveis">Imóveis</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Clientes</NavLink>
        <NavLink icon={RiUser2Fill} href="/users">Usuarios</NavLink>
      </NavSection>
    </Stack>
  );
}
