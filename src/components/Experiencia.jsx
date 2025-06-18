import './Experiencia.css'

export default function Experiencia() {
    return (
        <section id='experiencia' className="">
            <h3 className="titulos mt-5">Experiencia</h3>
            <div className="seccionExperiencia">
                <div className="cardE">
                    <h4 className="">DESAROLLO WEB</h4>
                    <p className=''>Nota: 9 - (18/10/23 AL 03/01/24)</p>
                    <img className="img-certificados" src="../../certificadoHtml.jpg" alt="html" />
                </div>
                <div className="cardE">
                    <h4 className="">JAVASCRIPT</h4>
                    <p className=''>Nota: 10 - (22/01/24 AL 25/03/24)</p>
                    <img className="img-certificados" src="../../certificadoJs.jpg" alt="js" />
                </div>
                <div className="cardE">
                    <h4 className="">REACT JS</h4>
                    <p className=''>Nota: 10 - (16/04/24 AL 04/06/24)</p>
                    <img className="img-certificados" src="../../certificadoReact.png" alt="react" />
                </div>
                <div className="cardE">
                    <h4 className="">Desarollador Frontend React</h4>
                    <p className=''>Nota: 10 - (16/04/24 AL 04/06/24)</p>
                    <img className="img-frontend" src="../../certificadoCarrera.png" alt="frontend" />
                </div>
                <div className='cardE'>
                    <h4>Desarollador FullStack</h4>
                    <p className=''>Nota: 10 - (18/10/23 AL 17/12/24)</p>
                    <img className="img-frontend" src="../../certificado-carrera.png" alt="cf" />
                </div>
            </div>
        </section>
    )
}