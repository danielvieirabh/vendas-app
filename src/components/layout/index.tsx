import { Menu } from './menu' //quando referencia dessa forma sempre pega o index


interface LayoutProps {
    titulo?: string, 
    children?: string;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
               <Menu/>

                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">
                                    {props.titulo}
                                </p>
                            </div>
                            <div className="card-content">
                               {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}