export interface ClienteEdicao {
    id: string;
    nome: string;
    imgUrl: string;
    endereco: {
      logradouro: string;
      numero: string;
      complemento: string;
      cep: string;
      bairro: string;
      cidade: string;
      estado: string;
      pais: string;
    };
    rg: string;
    cpf: string;
    telefone: string;
  }
  