import { AuthTokenError } from '@/services/errors/AuthTokenError';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies, destroyCookie } from 'nookies';

export function withSSRAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        if(!cookies['@btr-imoveis:token']) {
            return {
                redirect: {
                    destination: '/admin/login',
                    permanent: false
                }
            }
        }

        try {
            return await fn(ctx);
        } catch(err) {
            if(err instanceof AuthTokenError) {
                destroyCookie(undefined, '@btr-imoveis:token');
                destroyCookie(undefined, '@btr-imoveis:user');
    
                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}
