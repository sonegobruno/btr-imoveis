import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@/components/Form/Input';
import { useAuth } from '@/hooks/useAuth';
import { withSSRGuest } from '@/utils/withSSRGuest';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const { errors } = formState;

    const handleSignIn: SubmitHandler<SignInFormData> = async (data) =>{
        await signIn({
            l: data.email,
            p: data.password
        })
    } 

    return (
        <Flex 
        w="100vw" 
        h="100vh" 
        align="center" 
        bg="gray.400"
        justify="center"
        >
        <Flex
            as="form"
            w="100%"
            maxWidth={360}
            bg="gray.300"
            p="8"
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleSignIn)}
        >
            <Stack spacing="4">
            <Input 
                name="email" 
                error={errors.email}
                label="E-mail" 
                {...register('email')} 
            />
            <Input 
                type="password" 
                error={errors.password}
                name="password" 
                label="Senha" 
                {...register('password')}
            />
            </Stack>
            <Button  
            type="submit"
            mt="6" 
            colorScheme="red" 
            size="lg"
            isLoading={formState.isSubmitting}
            >Entrar</Button>
        </Flex>
        </Flex>
    )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {

    return {
        props: {

        },
    }
})