import { IProperty } from '@/@types/property';
import { Grid, GridItem } from '@chakra-ui/react';
import { Property } from '../Property';

interface ListImmobileProps {
  properties: IProperty[]
}

export function ListImmobile({ properties }: ListImmobileProps): JSX.Element {
  return (
    <Grid
      maxWidth="880px"
      mx="auto"
      py="4"
      w="100%"
      gap={4}
      templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
    >
      {properties.map((item) => (
        <GridItem key={item.id_imovel} display="flex" justifyContent="center">
          <Property property={item} />
        </GridItem>
      ))}
    </Grid>
  );
}
