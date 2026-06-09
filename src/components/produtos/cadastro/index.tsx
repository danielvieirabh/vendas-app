import React, { useState } from 'react';
import { Layout, Input, Message } from 'components'
import { useProdutoService } from '../../../app/services'
import { Produto } from '../../../app/models/produtos/index'
import { converterEmBigDecimal } from 'app/util/money/index';
import { Alert } from '@/components/common/message';
import * as yup from 'yup'; //Validador
import { error } from 'console';

const msgCampoObrigatorio = "Campo Obrigatório"

const validationSchema = yup.object().shape({
    sku: yup.string().trim().required(msgCampoObrigatorio), //Fica obrigatorio // o trim tira espacos vazios
    nome: yup.string().trim().required(msgCampoObrigatorio),
    descricao: yup.string().trim().required(msgCampoObrigatorio), //Validacoes
    preco: yup.number().required(msgCampoObrigatorio).moreThan(0, "Valor deve ser maior que 0,00 (Zero)")
})

export const CadastroProdutos: React.FC = () => {
    const service = useProdutoService();
    const [sku, setSku] = useState<string>('');  //E aqui que ele capta os dados que digito no campo, se colocar algo escrito ele ja vem com esses valores padrao
    const [preco, setPreco] = useState<number>();
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [id, setId] = useState<string>('')
    const [cadastro, setCadastro] = useState<String>()
    const [messages, setMessages] = useState<Array<Alert>>([])

    const submit = () => {
        const produto: Produto = {
            id: id,
            sku: sku, //Se quiser nao precisava pois o EcmaScript ja reconhece
            preco: converterEmBigDecimal(preco),
            nome: nome,
            descricao: descricao,
        }

        validationSchema.validate(produto).then(obj => { //Faz a validacao de todos os campos obrigatorio

            if (id) {
                service.atualizar(produto)
                    .then(response => {
                        setMessages([{
                            tipo: "success", texto: "Produto atualizado com sucesso!"
                        }])
                    })
                setCadastro(produto.cadastro)
            }
            else {
                service.salvar(produto)
                    .then(produtoResposta => {
                        setId(produtoResposta.id)
                        setCadastro(produtoResposta.cadastro)
                        setMessages([{
                            tipo: "success", texto: "Produto salvo com sucesso!"
                        }])
                    })
            }
        }).catch(error => {
            const field = error.path;
            const message = error.message;
            setMessages([
                {tipo: "danger", field, texto: message}
            ])
            console.log(JSON.parse(JSON.stringify(error)));
        })

    }

    return (
        <Layout titulo='Cadastro de Produtos' mensagens={messages}>
            {id && //Se o id for verdadeiro ai ele aparece os dois campos, se tiver id
                <div className='columns'>
                    <Input label='Código: *' columnClasses='is-half' value={id} id='inputId' disabled={true} />
                    <Input label='Data Cadastro: *' columnClasses='is-half' value={cadastro} id='inputDataCadastro' disabled={true} />
                </div>
            }


            <div className='columns'>
                <Input label='SKU: *' columnClasses='is-half' onChange={setSku} value={sku} id='inputSku' placeholder='Digite o SKU do produto' />
                <Input label='Preço: *' columnClasses='is-half' onChange={setPreco} value={preco} id='inputPreco' placeholder='Digite o Preço do produto' currency={true} maxLength={16} />
            </div>

            <div className='columns'>

                <Input label='Nome: *' columnClasses='is-full' onChange={setNome} value={nome} id='inputNome' placeholder='Digite o Nome do produto' />
                {/* <div className="field column is-full ">
                    <label className='label' htmlFor='inputNome' >Nome: *</label>
                    <div className='control'>
                        <input id='inputNome' value={nome} onChange={event => setNome(event.target.value)} className='input' placeholder='Digite o Nome do produto' />
                    </div>
                </div> */}
            </div>

            <div className='columns'>
                <div className="field column is-full">
                    <label className='label' htmlFor='inputDesc' >Descrição: *</label>
                    <div className='control'>
                        <textarea id='inputDesc' value={descricao} onChange={event => setDescricao(event.target.value)} className='textarea' placeholder='Digite a Descrição detalhada do produto' />
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">
                        {id ? "Atualizar" : "Salvar" //se tem id vai ser atualizar , caso ao contrario e salvar

                        }
                    </button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}
