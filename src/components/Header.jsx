import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header d-flex justify-content-between align-items-center ps-3 pe-3">
        <div className="center">
          <img width="60" height="60" src="https://img.icons8.com/plasticine/100/developer.png" alt="developer" />
        </div>
        <div className=" d-none d-md-block">
          <ul className="center d-flex">
            <a style={{ textDecoration: "none" }} href="#">
              <li className=" text-white nav m-3">INICIO</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#sobreMi">
              <li className=" text-white nav m-3">SOBRE MI</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#experiencia">
              <li className=" text-white nav m-3">EXPERIENCIA</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#proyectos">
              <li className=" text-white nav m-3">PROYECTOS</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#contacto">
              <li className=" text-white nav m-3">CONTACTAME</li>
            </a>
          </ul>
        </div>
        <div class="d-block d-lg-none text-white">
          <nav class="navbar">
            <div class="container-fluid">
              <button class="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-white"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="bg-dark text-white">
                  <button type="button" style={{border:"none",fontSize:"30px"}} className="text-white bg-dark " data-bs-dismiss="offcanvas"
                    aria-label="Close"><i class="bi bi-x-lg"></i></button>
                </div>
                <div class="offcanvas-body bg-dark">
                  <ul className="">
                    <a style={{ textDecoration: "none", fontSize:"20px" }} href="#">
                      <li className=" text-white nav m-3">INICIO</li>
                    </a>
                    <a style={{ textDecoration: "none", fontSize:"20px" }} href="#sobreMi">
                      <li className=" text-white nav m-3">SOBRE MI</li>
                    </a>
                    <a style={{ textDecoration: "none", fontSize:"20px" }} href="#experiencia">
                      <li className=" text-white nav m-3">EXPERIENCIA</li>
                    </a>
                    <a style={{ textDecoration: "none", fontSize:"20px" }} href="#proyectos">
                      <li className=" text-white nav m-3">PROYECTOS</li>
                    </a>
                    <a style={{ textDecoration: "none", fontSize:"20px" }} href="#contacto">
                      <li className=" text-white nav m-3">CONTACTAME</li>
                    </a>
                  </ul>

                </div>
              </div>
            </div>
          </nav>

        </div>
      </header>
    </>
  );
}
