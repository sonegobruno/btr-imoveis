import { Grid, GridItem } from '@chakra-ui/react';
import { Property } from '../Property';

export function ListProperty(): JSX.Element {
  return (
    <Grid
      maxWidth="880px"
      mx="auto"
      py="4"
      w="100%"
      gap={4}
      templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
    >
      <GridItem display="flex" justifyContent="center">
        <Property />
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Property />
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Property />
      </GridItem>
    </Grid>
  );
}
