interface MensagemProps {
    mensagem: string;
}


const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) => {
    return (
        <div>
            {props.mensagem}
        </div>
    )
}

// function Mensagem(props: any) {
//     return (
//         <div>
//             {props.mensagem}
//         </div>
//     )
// }

function MeuComponente() {
    return (
        <div>
           <Mensagem mensagem="Hello World!!"/>
        </div>
    )
}

// const MeuComponente = () => {
//      return (
//         <div>
//            <Mensagem mensagem="Hello World!!"/>
//         </div>
//     )
// }

export default MeuComponente;