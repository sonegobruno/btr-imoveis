/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '@/services/apiClient';
import { useQuery } from 'react-query';

interface ISelect {
    value: string;
    label: string;
}

export async function getCitiesBySigla(sigla: string): Promise<unknown[] | ISelect[]> {
  const response = await api.post('/cidade/pesquisa', {
    cidade: {
      uf: sigla,
    },
  });

  return response.data.map((item) => ({
    value: item.id,
    label: item.nome,
  }));
}

export function useGetCitiesBySigla(sigla: string) {
  if (sigla === '') return;

  return useQuery(['cities', sigla], () => getCitiesBySigla(sigla), {
    staleTime: 5 * 1000,
  });
}
