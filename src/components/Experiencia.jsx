import './Experiencia.css'

export default function Experiencia(){
    return(
        <section id='experiencia' className=" text-white ps-5 pe-5 pt-5 ">
        <h3 className="titulos">Experiencia</h3>
        <div className="row">
            <div className="card bg-dark col me-3">
            <h4 className="text-white center mt-3">DESAROLLO WEB(18/10/23 AL 03/01/24)</h4>
            <p className='text-white center'>NOTA:9</p>
            <img className="img-certificados"  src="../../public/certificadoHtml.jpg" alt="html" />
            </div>
            <div className="card bg-dark col me-3">
            <h4 className="text-white center mt-3">JAVASCRIPT(22/01/24 AL 25/03/24)</h4>
            <p className='text-white center'>NOTA:10</p>
            <img className="img-certificados"  src="../../public/certificadoJs.jpg" alt="js" />
            </div>
            <div className="card bg-dark col">
            <h4 className="text-white center mt-3">REACT JS(16/04/24 AL 04/06/24)</h4>
            <p className='text-white center'>NOTA:10</p>
            <img className="img-certificados"  src="../../public/certificadoReact.png" alt="react" />
            </div> 
        </div>
        </section>

    )
}