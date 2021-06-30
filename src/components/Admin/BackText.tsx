import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    page: string;
}

export function BackText({ page }: Props): JSX.Element {
  const router = useRouter();
  const [_, secondPage, tertyPage] = router.asPath.split('/');

  return (
    <Flex transform="translateY(-15px)" color="red.400">
      <Link href={`/${secondPage}/${tertyPage}`}>
        <Text
          as="a"
          cursor="pointer"
          size="lg"
          fontWeight="normal"
          _hover={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          {tertyPage}
        </Text>
      </Link>
      <Text size="lg" fontWeight="normal" ml="1">/</Text>
      <Text size="lg" fontWeight="normal" ml="1">{page}</Text>
    </Flex>
  );
}
