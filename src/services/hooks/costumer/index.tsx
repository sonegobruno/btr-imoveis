/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '@/services/apiClient';
import { useQuery } from 'react-query';

interface ISelect {
    value: string;
    label: string;
}

export async function getAllCostumers(format: 'normal' | 'select'): Promise<unknown[] | ISelect[]> {
  const response = await api.post('/proprietario/pesquisa', {
    proprietario: {
      status: 'ATIVO',
    },
  });

  if (format === 'select') {
    return response.data.result.map((item) => ({
      value: item.id_proprietario,
      label: item.nome,
    }));
  }

  return [
    ...response.data.result,
  ];
}

export function useGetAllCostumers(format: 'normal' | 'select') {
  return useQuery('costumers', () => getAllCostumers(format), {
    staleTime: 5 * 1000,
  });
}
