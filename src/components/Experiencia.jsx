import './Experiencia.css'

export default function Experiencia(){
    return(
        <section id='experiencia' className="seccionExperiencia text-white ps-5 pe-5 pt-5 ">
        <h3 className="titulos mb-5">Experiencia</h3>
        <div className="row">
            <div className="card bg-dark col me-3">
            <h4 className="text-white center mt-3">DESAROLLO WEB</h4>
            <p className='text-white center'>Nota: 9 - (18/10/23 AL 03/01/24)</p>
            
            <img className="img-certificados"  src="../../certificadoHtml.jpg" alt="html" />
            </div>
            <div className="card bg-dark col me-3">
            <h4 className="text-white center mt-3">JAVASCRIPT</h4>
            <p className='text-white center'>Nota: 10 - (22/01/24 AL 25/03/24)</p>
            
            <img className="img-certificados"  src="../../certificadoJs.jpg" alt="js" />
            </div>
            <div className="card bg-dark col">
            <h4 className="text-white center mt-3">REACT JS</h4>
            <p className='text-white center'>Nota: 10 - (16/04/24 AL 04/06/24)</p>
            
            <img className="img-certificados"  src="../../certificadoReact.png" alt="react" />
            </div> 
        </div>
        </section>

    )
}