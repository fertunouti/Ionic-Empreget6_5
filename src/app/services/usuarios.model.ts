export interface Usuarios {
    conteudo: [{
        id?: number,
        email: string,
        sou_cliente: boolean
    }],
    paginação: number,
    totalElementos: number,
    totalPages: number,
    pageAtual: number
}