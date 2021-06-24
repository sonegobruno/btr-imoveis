import { Box, Button, Divider, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Admin/Header";
import { Sidebar } from "@/components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query'
import { useRouter } from "next/dist/client/router";
import { useGetPropertyById } from "@/services/hooks/properties/useProperty";
import { useEffect } from "react";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { queryClient } from "@/services/queryClient";
import { api } from "@/services/apiClient";
import { Content } from "@/components/Admin/Content";
import { Title } from "@/components/Admin/Title";
import { Container } from "@/components/Admin/Container";
import { Select } from "@/components/Form/Select";
import { UFs } from "@/constants/UF";
import { BackText } from "@/components/Admin/BackText";
import { useGetAllCostumers } from "@/services/hooks/costumer";
import { useGetAllCategories } from "@/services/hooks/categories";
import { useGetAllModalities } from "@/services/hooks/modalities";
import { Textarea } from "@/components/Form/Textarea";
import { setupAPIClient } from "@/services/axios";

type UpdatePropertyFormData = {
    titulo: string;
    valor: string;
    quartos: string;
    dimensao: string;
    coordenadas: string;
    link_maps: string;
    uf: string;
    id_cidade_fk: string;
    rua: string;
    numero: string;
    bairro: string;
    id_proprietario_fk: string;
    id_modalidade_fk: string;
    id_categoria_fk: string;
    garagem: 'SIM', 'NAO';
    descricao: string;
    id_imovel: string;
}

interface ISelect {
    value: string;
    label: string;
}

const updateUserFormSchema = yup.object().shape({
    titulo: yup.string().required('Titulo obrigatório'),
    valor: yup.number().required('Valor obrigatório'),
    uf: yup.string().required('Estado obrigatório'),
    id_cidade_fk: yup.string().required('Cidade obrigatória'),
    id_proprietario_fk: yup.string().required('Cliente obrigatório'),
    id_modalidade_fk: yup.string().required('Tipo obrigatório'),
    id_categoria_fk: yup.string().required('Categoria obrigatória'),
    descricao: yup.string().required('Descrição obrigatória'),
  })
  
export default function CreateUser() {
    const router = useRouter();
    const idImovel = router.query.slug as string;

    const { data, isLoading, isSuccess } = useGetPropertyById(idImovel);
    const { data: costumer, isLoading: loadingCostumer } = useGetAllCostumers('select');
    const { data: categories, isLoading: loadingCategories } = useGetAllCategories('select');
    const { data: modalities, isLoading: loadingModalities } = useGetAllModalities('select');
    
    const { register, handleSubmit, formState, reset, setValue } = useForm({
        resolver: yupResolver(updateUserFormSchema)
    });
    const { errors } = formState;
    

    const [ufSelected, setUfSelected] = useState('');
    const [loadingCities, setLoadingCities] = useState(false);
    const [cities, setCities] = useState<ISelect[]>([]);

    useEffect(() => {
        if(data) {
            reset(data);
            setUfSelected(data.uf)
        }
    },[data])

    useEffect(() => {
        if (ufSelected !== '') {
            setLoadingCities(true);
            api.post('/cidade/pesquisa', {
                cidade: {
                uf: ufSelected,
                },
            }).then((response) => {
                    setLoadingCities(false);
                    const formattedCities = response.data.map(item => ({
                        value: item.id,
                        label: item.nome
                    }))
                    setCities(formattedCities);
                    setValue('id_cidade_fk', data.id_cidade_fk)
            }).catch(() => {
                setLoadingCities(false);
                setCities([]);
            });
        }
    }, [ufSelected, data]);


    const UpdateProperty = useMutation(async (property: UpdatePropertyFormData) => {
        const response = await setupAPIClient().put(`/imovel/${idImovel}`, {
            imovel: property
        })

        return response.data.imovel;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(['properties', idImovel])
        }
    })

    const handleUpdateProperty: SubmitHandler<UpdatePropertyFormData> = async(values) =>{
        await UpdateProperty.mutateAsync(values)
        router.push('/admin/imoveis');
    } 
    
    return (
        <Box>
            <Header />
            <Container>
                <Sidebar />
                
                <Content 
                    as="form" 
                    onSubmit={handleSubmit(handleUpdateProperty)}
                >   
                {isSuccess && <BackText page={data.id_imovel} />}
                    
                    <Title isLoading={isLoading}>
                        Atualizar imóvel
                    </Title>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing={["6","8"]} px={["0", "0", "8"]}>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="titulo" {...register('titulo')} error={errors.titulo} label="Titulo"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="valor" {...register('valor')} error={errors.valor} label="Valor"/>
                            <Input name="quartos" {...register('quartos')} error={errors.quartos} label="Quartos"/>
                            <Input name="dimensao" {...register('dimensao')} error={errors.dimensao} label="Dimensão"/>
                        </SimpleGrid>
                        <Input name="coordenadas" {...register('coordenadas')} error={errors.coordenadas} label="coordenadas"/>
                        <Input name="link_maps" {...register('link_maps')} error={errors.link_maps} label="Link para o mapa"/>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Select  
                                label="UF"
                                name="uf"
                                {...register('uf')} 
                                error={errors.uf}
                                onChange={(e) => {setUfSelected(e.target.value)}}
                                options={UFs}
                            />

                            <Select  
                                label="Cidade"
                                name="id_cidade_fk"
                                {...register('id_cidade_fk')} 
                                error={errors.id_cidade_fk}
                                options={cities || []}
                                isLoading={loadingCities}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="rua" {...register('rua')} error={errors.rua} label="Endereço"/>
                            <Input name="numero" {...register('numero')} error={errors.numero} label="Número"/>
                        </SimpleGrid>

                        <Input name="bairro" {...register('bairro')} error={errors.bairro} label="Bairro"/>
                        <Select  
                            label="Cliente"
                            name="id_proprietario_fk"
                            {...register('id_proprietario_fk')} 
                            error={errors.id_proprietario_fk}
                            options={costumer || []}
                            isLoading={loadingCostumer}
                        />

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Select  
                                label="Tipo"
                                name="id_modalidade_fk"
                                {...register('id_modalidade_fk')} 
                                error={errors.id_modalidade_fk}
                                options={modalities || []}
                                isLoading={loadingModalities}
                            />
                             
                            <Select  
                                label="Categoria"
                                name="id_categoria_fk"
                                {...register('id_categoria_fk')} 
                                error={errors.id_categoria_fk}
                                options={categories || []}
                                isLoading={loadingCategories}
                            /> 

                            <Select  
                                label="Garagem"
                                name="garagem"
                                {...register('garagem')} 
                                error={errors.garagem}
                                options={[
                                    { value: 'SIM', label: 'SIM'},
                                    { value: 'NAO', label: 'NAO'},
                                ]}
                            />
                        </SimpleGrid>

                        <Textarea name="descricao" {...register('descricao')} error={errors.descricao} label="Descrição"/>
                    </VStack>
                    <Flex mt="8" justify="center" w="100%">
                        <Button isLoading={formState.isSubmitting} w="100%" maxW="320px" type="submit" colorScheme="red">Salvar</Button>
                    </Flex>
                </Content>
            </Container>
        </Box>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    return {
        props: {

        },
    }
})