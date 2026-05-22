import {useState} from 'react';
import { Layout } from 'components'

export const CadastroProdutos: React.FC = () => {
    const [ sku, setSku ] = useState(''); //E aqui que ele capta os dados que digito no campo, se colocar algo escrito ele ja vem com esses valores padrao
    const [ preco, setPreco ] = useState('');   
    const [ nome, setNome ] = useState('');
    const [ descricao, setDescricao ] = useState('');

    const submit = () => {
        const produto = {
            sku: sku, //Se quiser nao precisava pois o EcmaScript ja reconhece
            preco: preco, 
            nome: nome , 
            descricao:descricao
        }
        console.log(produto);
    }

    return (
        <Layout titulo='Cadastro de Produtos'>
            <div className='columns'>
                <div className="field is-half column">
                    <label className='label' htmlFor='inputSku' >SKU: *</label>
                    <div className='control'>
                        {/* Tem que passar o onchange para inserir valores */}
                        <input id='inputSku' value={sku} onChange={event => setSku(event.target.value)} className='input' placeholder='Digite o SKU do produto' />  
                    </div>
                </div>

                <div className="field is-half column">
                    <label className='label' htmlFor='inputPreco' >Preço: *</label>
                    <div className='control'>
                        <input id='inputPreco' value={preco} onChange={event => setPreco(event.target.value)} className='input' placeholder='Digite o Preço do produto' />
                    </div>
                </div>
            </div>

            <div className='columns'>
                <div className="field column is-full ">
                    <label className='label' htmlFor='inputNome' >Nome: *</label>
                    <div className='control'>
                        <input id='inputNome' value={nome} onChange={event => setNome(event.target.value)} className='input' placeholder='Digite o Nome do produto' />
                    </div>
                </div>
            </div>

            <div className='columns'>
            <div className="field column is-full">
                <label className='label' htmlFor='inputDesc' >Descrição: *</label>
                <div className='control'>
                    <textarea id='inputDesc' value={descricao}  onChange={event => setDescricao(event.target.value)} className='textarea' placeholder='Digite a Descrição detalhada do produto' />
                </div>
            </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>

    )
}
