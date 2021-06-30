import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface Props extends ButtonProps {
    children: ReactNode;
    icon?: IconType;
}

export function ButtonWhiteWithBorder({ children, icon, ...rest }: Props): JSX.Element {
  return (
    <Button
      size="sm"
      fontSize="sm"
      cursor="pointer"
      colorScheme="whiteAlpha"
      border="1px solid"
      color="red.400"
      leftIcon={icon ? <Icon fontSize="16" as={icon} /> : null}
      _hover={{
        bg: 'red.50',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
