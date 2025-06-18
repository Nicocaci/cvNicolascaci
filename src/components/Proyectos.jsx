import './Proyectos.css'

export default function Proyectos() {
    return (
        <section id='proyectos' className="seccionProyectos text-white ps-5 pe-5 pt-5">
            <h3 className="titulos mb-5">Experiencia Laboral</h3>
            <div className="row contenedorProyectos ">
                <div className="col">
                    <div className="card  bg-dark cardproyectos text-white cardContenedora">
                        <img className="img-fluid img2-hover img1" src="../../autosmartapp.png" alt="reactProyecto" />
                        <h4 className="center mt-3 titulosProyectos">🚗 Autosmart - Plataforma de Subastas Online 🔧</h4>
                        <p className="center mt-3 pe-3 ps-3 textoProyectos">Autosmart, es una aplicación web,desarrollada con tecnologías modernas que permite gestionar subastas de autos de manera dinámica, simple y efectiva. </p>
                        <div className='d-flex center '>
                            <div className='center me-2'>
                                <a target='_blank' href="https://www.autosmartapp.com/"><button className='btn btn-outline-light mt-5'>Ver Proyecto</button></a>
                            </div>
                            <div className='center ms-2 '>
                                <a target='_blank' href="https://www.linkedin.com/posts/nicolas-caci-b5b069249_react-vite-nodejs-activity-7330706250344615936-qT0z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1pOTcBcdX-_Au-NJXGRYABKeu5a_COk-c"><button className='btn btn-outline-light mt-5'>Ver Linkedin</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark cardproyectos text-white">
                        <img className='img-fluid img2-hover img2' src="../../dg.png" alt="js" />
                        <h4 className='center mt-5 titulosProyectos'>Digital Market</h4>
                        <p className='center mt-5 pe-3 ps-3 textoProyectos'>Digital Market, es una distribuidora online, la cual esta desarrollada para que el usuario desde el interfaz de la app pueda manejar los productos y los pedidos de la manera que guste. </p>
                        <div className='d-flex center '>
                            <div className='center me-2'>
                                <a target='_blank' href="https://digitalmarket-back-production.up.railway.app/"><button className='btn btn-outline-light mt-4'>Ver Proyecto</button></a>
                            </div>
                            <div className='center ms-2 '>
                                <a target='_blank' href="https://www.linkedin.com/in/nicolas-caci-b5b069249/"><button className='btn btn-outline-light mt-4'>Ver linkedin</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}

