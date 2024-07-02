import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header d-flex justify-content-between align-items-center ps-3 pe-3">
        <div className="center">
          <img width="60" height="60" src="https://img.icons8.com/plasticine/100/developer.png" alt="developer" />
        </div>
        <div className="">
          <ul className="center d-flex">
            <a style={{textDecoration:"none"}} href="#">
              <li  className=" text-white nav m-3">INICIO</li>
              </a>
            <a style={{textDecoration:"none"}} href="#sobreMi">
              <li className=" text-white nav m-3">SOBRE MI</li>
              </a>
            <a style={{textDecoration:"none"}} href="#experiencia">
              <li className=" text-white nav m-3">EXPERIENCIA</li>
              </a>
            <a style={{textDecoration:"none"}} href="#proyectos">
              <li className=" text-white nav m-3">PROYECTOS</li>
              </a>
            <a style={{textDecoration:"none"}} href="#contacto">
              <li className=" text-white nav m-3">CONTACTAME</li>
              </a>
          </ul>
        </div>
      </header>
    </>
  );
}
