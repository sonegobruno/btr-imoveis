import {
  Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import React, { ElementType, useState } from 'react';
import { ActiveLink } from '../ActiveLinks';

interface NavLiveProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({
  children, icon, href, ...rest
}: NavLiveProps): JSX.Element {
  const [checkIsActive, setCheckIsActive] = useState(false);

  const handleCheckIsActive = (isActive: boolean) => {
    setCheckIsActive(isActive);
  };

  return (
    <ActiveLink href={href} onCheckIsActive={handleCheckIsActive} passHref>
      <ChakraLink
        bg={checkIsActive ? 'red.50' : 'transparent'}
        display="flex"
        alignItems="center"
        color="red.400"
        px="3"
        py="2"
        borderRadius="0 20px 20px 0"
        _hover={{
          bg: 'gray.400',
        }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}
