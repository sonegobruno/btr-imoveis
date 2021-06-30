import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (cookies['@btr-imoveis:token']) {
      return {
        redirect: {
          destination: '/admin/imoveis',
          permanent: false,
        },
      };
    }

    return fn(ctx);
  };
}
