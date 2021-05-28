import {
  Flex, FlexProps, Button, Icon,
} from '@chakra-ui/react';
import { RiFilter3Fill } from 'react-icons/ri';
import { SearchBox } from './SearchBox';

type FilterProps = FlexProps

export function Filter({ ...rest }: FilterProps): JSX.Element {
  return (
    <Flex {...rest} align="center" justify="space-evenly">
      <SearchBox />
      <Button w="48px" h="40px" ml="2" colorScheme="red">
        <Icon fontSize="36px" color="red.50" as={RiFilter3Fill} />
      </Button>
    </Flex>
  );
}
