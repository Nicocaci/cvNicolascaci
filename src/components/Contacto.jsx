import { useState } from "react"

export default function Contacto() {
    const [infoContacto, setInfoContacto] = useState({
        nombre: null,
        apellido: null,
        telefono: null,
        email: null,
        comentario: null,
    })

    const [sumbit, setSumbit] = useState(false)
    function Cargar(e) {
        e.preventDefault()
        setSumbit(true)
        setTimeout(() => {
            window.location.reload()

        }, 5000);
    }

    return (
        <section id="contacto" className="text-white ps-5 pe-5 pt-5">
            <h3 className="titulos">Contacto</h3>
            <div>
                <form onSubmit={(e) => Cargar(e)} className="row">
                    <div class="mb-3 col-4">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" onChange={(e) => setInfoContacto((prevState) => ({
                            ...prevState,
                            nombre: e.target.value
                        })
                        )} class="form-control" id="nombre" placeholder="Raul" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input type="text" onChange={(e) => setInfoContacto((prevState) => ({
                            ...prevState,
                            apellido: e.target.value
                        })
                        )} class="form-control" id="apellido" placeholder="Rodriguez" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="number" onChange={(e) => setInfoContacto((prevState) => ({
                            ...prevState,
                            telefono: e.target.value
                        })
                        )} class="form-control" id="telefono" placeholder="15-xxxx-xxxx" />
                    </div>
                    <div class="mb-3 col-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" onChange={(e) => setInfoContacto((prevState) => ({
                            ...prevState,
                            email: e.target.value
                        })
                        )} class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 col-9">
                        <label for="exampleFormControlTextarea1" class="form-label">Deja tu Comentario</label>
                        <textarea onChange={(e) => setInfoContacto((prevState) => ({
                            ...prevState,
                            comentario: e.target.value
                        })
                        )} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="center">
                        <button className='btn btn-outline-light' type="submit">Sumbit</button>
                    </div>
                </form>
                {
                    sumbit ?
                        <section className="">
                            <div  className="d-flex me-3">
                                <h5>Nombre: </h5>
                                <h5 className="ms-4">{infoContacto.nombre}</h5>
                            </div>
                            <div className="d-flex me-3">
                                <h5>Apellido: </h5>
                                <h5 className="ms-4">{infoContacto.apellido}</h5></div>
                            <div className="d-flex me-3">
                                <h5>Telefono: </h5>
                                <h5 className="ms-4">{infoContacto.telefono}</h5></div>
                            <div className="d-flex me-3">                  
                                <h5>Email: </h5>
                                <h5 className="ms-4">{infoContacto.email}</h5></div>
                            <div className="d-flex me-3">              
                                <h5>Comentario: </h5>
                                <h5 className="ms-4">{infoContacto.comentario}</h5></div>
                        </section> : null
                }
            </div>
        </section>

    )
}