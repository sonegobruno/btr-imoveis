import {
  Grid, GridItem, Flex, Heading,
} from '@chakra-ui/react';

export function Galery(): JSX.Element {
  return (
    <>
      <Heading color="gray.700" textAlign={['left', 'center']} fontSize={['2xl', '3xl']} mt={['4', '7']}>Imagens</Heading>
      <Grid
        maxWidth="880px"
        mx="auto"
        mt={['3', '6']}
        py="4"
        w="100%"
        gap={4}
        templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
      >
        <GridItem display="flex" justifyContent="center">
          <Flex w="100%" h="173px" bgImage="url(/assets/house.png)" bgSize="cover" borderRadius="8px" mx="auto" />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Flex w="100%" h="173px" bgImage="url(/assets/house.png)" bgSize="cover" borderRadius="8px" mx="auto" />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Flex w="100%" h="173px" bgImage="url(/assets/house.png)" bgSize="cover" borderRadius="8px" mx="auto" />
        </GridItem>
      </Grid>
    </>
  );
}
