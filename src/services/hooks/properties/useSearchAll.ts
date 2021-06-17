/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IProperty } from '@/@types/property';
import { api } from '@/services/axios';
import formatCurrencyToBrazil from '@/utils/formatCurrencyToBrazil';
import { UseQueryOptions, useQuery } from 'react-query';

interface getAllPropertiesProps {
  limit: number;
}

interface IAllProperties {
  properties: IProperty[];
  totalRows: number;
}

export async function getAllProperties({ limit }: getAllPropertiesProps): Promise<IAllProperties> {
  const response = await api.post('/imovel/pesquisa', {
    imovel: {
      status: 'ATIVO',
      id_modalidade_fk: '1',
      paginate: {
        limit,
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

// eslint-disable-next-line max-len
export function useInitialProperty(filter: getAllPropertiesProps, options: UseQueryOptions<unknown, unknown, IAllProperties>) {
  return useQuery(['properties', filter], () => getAllProperties(filter), {
    ...options,
    staleTime: 5 * 1000,
  });
}
