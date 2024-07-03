import './Home.css'
import Proyectos from './Proyectos'
import Skills from './Skills'
import SobreMi from './SobreMi'
import './SobreMi.css'
import Experiencia from './Experiencia'
import Contacto from './Contacto'
import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import Cv from './nicolasCaciCv.pdf'
 

export default function Home() {
    const generateDocument = async () => {
        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun("Hello, this is a sample document."),
                                new TextRun({
                                    text: " This is bold and underlined.",
                                    bold: true,
                                    underline: {},
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });

        const blob = await Packer.toBlob(doc);
        saveAs(blob,Cv);
    };
    return (
        <main >
            <section className="fondo-home ">
                <div className='bg-dark bg-opacity-75 nombre-contenedor m-auto '>
                    <h1 className="text-white center nombre">Nicolás Caci</h1>
                    <h2 className="text-white center titulo">Desarollador Frontend React</h2>
                    <h3 className='text-white center telefono '>nicko.caci@gmail.com   -   1173660802</h3>
                    <div className='d-flex center'>
                        <div className='me-3'>
                            <a target='_blank' href="https://www.linkedin.com/in/nicolas-caci-b5b069249/"><img src="https://skillicons.dev/icons?i=linkedin" alt="linkedin" /></a>
                        </div>
                        <div className='ms-3'>
                            <a target='_blank' href="https://github.com/Nicocaci"><img src="https://skillicons.dev/icons?i=github" alt="git" /></a>
                        </div>
                    </div>
                </div>

                <div className='center botonCv '>
                    <a className='btn btn-outline-light bg-dark text-white' href={Cv} download>Descargar Cv</a>
                </div>
            </section >

            <SobreMi /> 
            <Skills></Skills>
            <Proyectos />
            <Experiencia></Experiencia>
            <Contacto></Contacto>
        </main >

    )
}