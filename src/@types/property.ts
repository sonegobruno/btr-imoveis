/* eslint-disable camelcase */
export interface IProperty {
  bairro: string;
  numero: string;
  titulo: string;
  valor: string;
  valorFormatado: string;
  descricao: string;
  id_imovel: string;
  quartos: string;
  link_maps: string;
  banner: string;
  cidade: string;
  id_cidade_fk: string;
  uf: string;
  rua: string;
  garagem: 'SIM', 'NAO';
  imagens: {
    destaque: 'SIM'| 'NAO',
    id_imovel_imagem: string;
    file: string;
  }[];
  dimensao: string;
}
