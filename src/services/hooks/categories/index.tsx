import { api } from "@/services/apiClient";
import { useQuery } from "react-query";

interface ISelect {
    value: string;
    label: string;
}

export async function getAllCategories(format: 'normal' | 'select'): Promise<any[] | ISelect[]> {
    const response = await api.post('/categoria/pesquisa', {
        categoria: {
            status: 'ATIVO'
        },
    });

    if(format === 'select') {
        return response.data.result.map(item => ({
            value: item.id_categoria,
            label: item.titulo
        }))
    }

    return [
        ...response.data.result,
    ];
  }

// eslint-disable-next-line max-len
export function useGetAllCategories(format: 'normal' | 'select') {
    return useQuery('categories', () => getAllCategories(format), {
      staleTime: 5 * 1000,
    });
  }