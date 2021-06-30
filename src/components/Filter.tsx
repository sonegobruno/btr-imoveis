import { useSidebarFilter } from '@/hooks/useSidebarFilter';
import {
  Flex, FlexProps, Button, Icon,
} from '@chakra-ui/react';
import { RiFilter3Fill } from 'react-icons/ri';
import { SearchBox } from './SearchBox';

type FilterProps = FlexProps

export function Filter({ ...rest }: FilterProps): JSX.Element {
  const { onOpen } = useSidebarFilter();

  function cara() {
    onOpen();
  }

  return (
    <Flex {...rest} align="center" justify="center">
      <SearchBox />
      <Button w={['10', '12']} h={['9', '10']} ml={['2', '4']} colorScheme="red" onClick={cara}>
        <Icon fontSize={['32px', '36px']} color="red.50" as={RiFilter3Fill} />
      </Button>
    </Flex>
  );
}
