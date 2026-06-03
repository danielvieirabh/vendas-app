import Link from 'next/link'
export const Menu: React.FC = () => {
    return(
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas vendas!
            </p>
            <ul className="menu-list">
                <MenuItem href='/' label='Home'/>
                <MenuItem href='/cadastros/produtos' label='Produto'/>
                <MenuItem href='/' label='Sair'/>

                { /* Modo antiga :
                 <li>
                    <a href="#">
                        <span className="icon"></span> Cadastro
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"></span> Home
                    </a>
                </li>                <li>
                    <a href="#">
                        <span className="icon"></span> Sair
                    </a>
                </li> */}
                
            </ul>
        </aside>
    )
}

interface MenuItemProps {
    href: string, //colocando o ? fica opcional
    label: string
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => { //Componente funcional
    return (
            <li>
                <Link href={props.href}>
                        <span className="icon"></span> {props.label}
                    </Link>
                </li>
    )
}