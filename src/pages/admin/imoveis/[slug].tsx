import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Admin/Header";
import { Sidebar } from "@/components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query'
import { api } from "@/services/apiClient";
import { useRouter } from "next/dist/client/router";
import { queryClient } from "@/services/queryClient";
import { useGetPropertyById } from "@/services/hooks/properties/useProperty";
import { useEffect } from "react";

type CreateUserFormData = {
    titulo: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }
  
  const createUserFormSchema = yup.object().shape({
    titulo: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'Minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ],'As senhas precisam ser iguais')
  })
  
export default function CreateUser() {
    const router = useRouter();
    const idImovel = router.query.slug as string;
    const {data, isLoading, isFetching, error} = useGetPropertyById(idImovel)

    const { register, handleSubmit, formState, reset, setValue } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });

    useEffect(() => {
        reset(data);
    },[data])

    const { errors } = formState;

    const createUser = useMutation(async (user: CreateUserFormData) => {
        console.log(user)
        // const response = await api.post('users', {
        //     user: {
        //         ...user,
        //         created_at: new Date(),
        //     }
        // })

        // return response.data.user;
    }, {
        onSuccess: () => {
            // queryClient.invalidateQueries('users')
        }
    })
    

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async(values) =>{
        await createUser.mutateAsync(values);
        router.push('/users')
    } 
    
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" pl={["1", "0"]} pr={["1", "6"]}>
                <Sidebar />

                <Box 
                    as="form" 
                    onSubmit={handleSubmit(handleCreateUser)}
                    flex="1" 
                    borderRadius={8} 
                    boxShadow="1px 3px 23px -3px rgba(0,0,0,0.63)"
                    p={["6","8"]}
                >
                    <Heading size="lg">Atualizar imóvel</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing={["6","8"]} px={["0","8"]}>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="titulo" {...register('titulo')} error={errors.titulo} label="Titulo"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="valor" {...register('valor')} error={errors.valor} label="Valor"/>
                            <Input name="quartos" {...register('quartos')} error={errors.quartos} label="Quartos"/>
                            <Input name="dimensao" {...register('dimensao')} error={errors.dimensao} label="Dimensão"/>
                        </SimpleGrid>
                        <Input name="garagem" {...register('garagem')} error={errors.garagem} label="Garagem"/>
                        <Input name="coordenadas" {...register('coordenadas')} error={errors.coordenadas} label="coordenadas"/>
                        <Input name="link_maps" {...register('link_maps')} error={errors.link_maps} label="Link para o mapa"/>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="uf" {...register('uf')} error={errors.uf} label="UF"/>
                            <Input name="id_cidade_fk" {...register('id_cidade_fk')} error={errors.id_cidade_fk} label="Cidade"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="rua" {...register('rua')} error={errors.rua} label="Endereço"/>
                            <Input name="numero" {...register('numero')} error={errors.numero} label="Número"/>
                        </SimpleGrid>
                        <Input name="bairro" {...register('bairro')} error={errors.bairro} label="Bairro"/>
                        <Input name="id_proprietario_fk" {...register('id_proprietario_fk')} error={errors.id_proprietario_fk} label="Cliente"/>
                        <Input name="id_modalidade_fk" {...register('id_modalidade_fk')} error={errors.id_modalidade_fk} label="Tipo"/>
                        <Input name="id_categoria_fk" {...register('id_categoria_fk')} error={errors.id_categoria_fk} label="Categoria"/>
                        <Input name="descricao" {...register('descricao')} error={errors.descricao} label="Descrição"/>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" px={["0","8"]}>
                            <Button isLoading={formState.isSubmitting} type="submit" colorScheme="red">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}