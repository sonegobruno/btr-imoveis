import {
  Grid, GridItem, Flex, Heading, Link
} from '@chakra-ui/react';
import { SRLWrapper } from 'simple-react-lightbox';
import Image from 'next/image';

type image = {
  destaque: 'SIM'| 'NAO',
  file: string;
  id_imovel_imagem: string;
}

interface GaleryProps {
  images: image[],
  immobileId: string;
}

const options = {
  buttons: {
    backgroundColor: '#70a4aa',
    iconColor: '#F0F0F1',
    showThumbnailsButton: false,
    showAutoplayButton: false,
    showFullscreenButton: false,
  },
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    transitionSpeed: 1000,
    transitionTimingFunction: 'linear',
  },
  thumbnails: {
    thumbnailsSize: ['120px', '100px'],
    thumbnailsOpacity: 0.4,
    thumbnailsGap: '4px',
  },
  caption: {
    captionColor: '#70a4aa',
  },
  progressBar: {
    size: '4px',
    backgroundColor: '#70a4aa',
    fillColor: '#70a4aa',
  },
};

export function Galery({ images, immobileId }: GaleryProps): JSX.Element {
  return (
    <>
      <Heading color="gray.700" textAlign={['left', 'center']} fontSize={['2xl', '3xl']} mt={['4']}>Imagens</Heading>
      <SRLWrapper options={options}>
        <Grid
          mx="auto"
          mt={['2']}
          py="4"
          w="100%"
          gap={4}
          templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
        >
          {images.map((imageMapped) => (
            <GridItem key={imageMapped.id_imovel_imagem} display="flex" justifyContent="center">
                <Link href={`${process.env.NEXT_PUBLIC_API_URL}/imagens/${immobileId}/${imageMapped.file}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/imagens/${immobileId}/${imageMapped.file}`}
                    alt="Galeria"
                    width={280}
                    height={205}
                  />
                </Link>
            </GridItem>
            ))}
          </Grid>
        </SRLWrapper>
    </>
  );
}
