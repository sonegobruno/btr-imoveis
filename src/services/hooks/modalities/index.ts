import { api } from "@/services/apiClient";
import { useQuery } from "react-query";

interface ISelect {
    value: string;
    label: string;
}

export async function getAllModalities(format: 'normal' | 'select'): Promise<any[] | ISelect[]> {
    const response = await api.post('/modalidade/pesquisa', {
        modalidade: {
            status: 'ATIVO'
        },
    });

    if(format === 'select') {
        return response.data.result.map(item => ({
            value: item.id_modalidade,
            label: item.titulo
        }))
    }

    return [
        ...response.data.result,
    ];
  }

// eslint-disable-next-line max-len
export function useGetAllModalities(format: 'normal' | 'select') {
    return useQuery('modalities', () => getAllModalities(format), {
      staleTime: 5 * 1000,
    });
  }