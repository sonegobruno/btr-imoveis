import { Grid, GridItem } from '@chakra-ui/react';
import { Immobile } from '../Immobile';

export function ListImmobile(): JSX.Element {
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
        <Immobile />
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Immobile />
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Immobile />
      </GridItem>
    </Grid>
  );
}
