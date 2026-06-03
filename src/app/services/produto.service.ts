import { httpCLient } from '../http';
import { Produto } from '../models/produtos';
import { AxiosResponse } from 'axios';

const resourceURL: string = "/api/produtos"

export const useProdutoService = () => { //utilizar use , do hook


    const salvar = async (produto: Produto) : Promise<Produto> => {
        const response: AxiosResponse<Produto> = await httpCLient.post<Produto>(resourceURL, produto)
        return response.data; //Retorna o objeto salvo da API
    }

    const atualizar = async (produto: Produto) : Promise<void> => {
        const url: string = `${resourceURL}/${produto.id}`; //edpoint do backend
        await httpCLient.put<Produto>(url, produto);
    }

    return {
        salvar,
        atualizar
    }
}