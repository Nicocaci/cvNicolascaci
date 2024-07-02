import './Proyectos.css'

export default function Proyectos() {
    return (
        <section id='proyectos' className="mt-5 text-white ps-5 pe-5">
            <h3 className="titulos">Mis Proyectos</h3>
            <div className="row">
                <div className="col">
                    <div className="card  bg-dark cardproyectos text-white">
                        <img className="img-fluid img2-hover" src="../../homeReact.jpg" alt="reactProyecto" />
                        <h4 className="center mt-3">Virtual Hockey Store</h4>
                        <p className="center mt-3">VirtualHockeyStore es una aplicación ecommerce responsive desarrollada con React para la venta de productos relacionados con el hockey. La tienda incluye características como búsqueda de productos, filtrado, carrito de compras y procesamiento de pagos.</p>
                        <div className='d-flex center '>
                            <div className='center me-2'>
                                <a target='_blank' href="https://virtualhockeystore.netlify.app"><button className='btn btn-outline-light mt-5'>Ver Proyecto</button></a>
                            </div>
                            <div className='center ms-2 '>
                                <a target='_blank' href="https://github.com/Nicocaci/proyectoFinalReact"><button className='btn btn-outline-light mt-5'>Ver GitHub</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark cardproyectos text-white">
                        <img className='img-fluid img2-hover' src="../../indexJs.jpg" alt="js" />
                        <h4 className='center mt-3'>ProductosEr</h4>
                        <p className='center mt-3'>ProductosEr es una aplicación web de e-commerce diseñada para la venta de productos de limpieza, incluyendo escobas, pinceles y otros artículos relacionados. Este proyecto final de JavaScript se enfoca en proporcionar una experiencia de usuario intuitiva y eficiente, permitiendo a los usuarios navegar, buscar y simular comprar productos con facilidad.</p>
                        <div className='d-flex center '>
                            <div className='center me-2'>
                                <a target='_blank' href="https://productoser.netlify.app"><button className='btn btn-outline-light mt-4'>Ver Proyecto</button></a>
                            </div>
                            <div className='center ms-2 '>
                                <a target='_blank' href="https://github.com/Nicocaci/proyectoFinalCaci"><button className='btn btn-outline-light mt-4'>Ver GitHub</button></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark cardproyectos text-white">
                        <img className='img-fluid img2-hover' src="../../homeHtml.jpg" alt="html" />
                        <h4 className='center mt-4'>Quilmes Atletico Club</h4>
                        <p className='center mt-4'>Quilmes Atletico Club es un proyecto responisve basico, el cual cuenta con una barra de navegacion, diferentes pages, las cual se pueden ir navegando, segun gustes. Cuenta con un inicio, galeria, contacto y ubicacion.</p>
                        <div className='d-flex center '>
                            <div className='center me-2'>
                                <a target='_blank' href="https://quilmesatleticoclubhockey.netlify.app"><button className='btn btn-outline-light mt-5'>Ver Proyecto</button></a>
                            </div>
                            <div className='center ms-2 '>
                                <a target='_blank' href="https://github.com/Nicocaci/ProyectoFinal-Caci"><button className='btn btn-outline-light mt-5'>Ver GitHub</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}

