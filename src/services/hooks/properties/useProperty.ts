/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IProperty } from '@/@types/property';
import { setupAPIClient as api } from '@/services/axios';
import formatCurrencyToBrazil from '@/utils/formatCurrencyToBrazil';
import { UseQueryOptions, useQuery } from 'react-query';

interface getAllPropertiesProps {
  limit: number;
  offset?: number;
}

interface IAllProperties {
  properties: IProperty[];
  totalRows: number;
}

export async function getAllProperties(filter: getAllPropertiesProps, ctx = undefined): Promise<IAllProperties> {
  const response = await api(ctx).post('/imovel/pesquisa', {
    imovel: {
      status: 'ATIVO',
      id_modalidade_fk: '1',
      paginate: {
        ...filter,
      },
    },
  });

  const properties = response.data.result.map((immobileMapped) => ({
    ...immobileMapped,
    valorFormatado: formatCurrencyToBrazil(Number(immobileMapped.valor)),
    banner: immobileMapped.imagens.find((imageMapped) => imageMapped.destaque === 'SIM')
      ? immobileMapped.imagens.find((imageMapped) => imageMapped.destaque === 'SIM').file
      : immobileMapped.imagens[0]?.file ?? '',
  }));

  return {
    properties,
    totalRows: response.data.totalRows,
  };
}

export async function getPropertyById(id: string, ctx = null): Promise<IProperty> {
  const response = await api(ctx).get(`/imovel/${id}`);
  let immobile = response.data.result[0];

  immobile = {
    ...immobile,
    valorFormatado: formatCurrencyToBrazil(Number(immobile.valor)),
    banner: immobile.imagens.find((imageMapped) => imageMapped.destaque === 'SIM')
      ? immobile.imagens.find((imageMapped) => imageMapped.destaque === 'SIM').file
      : immobile.imagens[0]?.file ?? '',
  };

  return immobile;
}

// eslint-disable-next-line max-len
export function useGetAllProperty(filter: getAllPropertiesProps, options: UseQueryOptions<unknown, unknown, IAllProperties> = {} as any) {
  console.log(filter)
  return useQuery(['properties', filter], () => getAllProperties(filter), {
    ...options,
    staleTime: 5 * 1000,
  });
}

// eslint-disable-next-line max-len
export function useGetPropertyById(id: string, options: UseQueryOptions<unknown, unknown, IProperty> = {} as any) {
  return useQuery(['properties', id], () => getPropertyById(id), {
    ...options,
    staleTime: 5 * 1000,
  });
}
