export interface prestadorFilter {
    conteudo: [
        {
            id?: number | null
            imgUrl: string,
            nome: string,
            regiao: string,
            servicoValor: number,
        }],
    paginacao: number,
    totalElementos: number,
    totalPages: string,
    pageAtual: string
}