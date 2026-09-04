export type CategoriaProduto =
    | 'notebook'
    | 'smartphone'
    | 'acessorio'

export type StatusProduto =
    | 'disponivel'
    | 'baixo-estoque'
    | 'indisponivel'

export interface Produto {
    id: number
    nome: string
    preco: number
    categoria: CategoriaProduto
    status: StatusProduto
    estoque: number
    imagem: string
    descricao: string
}

export type FiltroCategoria = 'todos' | CategoriaProduto
export type FormularioProduto = Omit<Produto, 'id'>