
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/layout.css"; 

export default function Layout() {
  return (
    <div id="defaultLayout">
      <aside>
        {}
        <Link to="disciplinas/listar">Disciplinas</Link>
        <Link to="modulos/listar">Módulos</Link>
        
        {}
        <Link to="submodulos/listar">Submódulos</Link>
        <Link to="questoes/listar">Questões</Link>
      </aside>
      
      <div className="content">
        <header>
          <div className="system-title">
            <b>Sistema Acadêmico</b>
          </div>
          <div className="user-info">
            <span className="username">
              <b>Jeferson</b>
            </span>
            <a href="#" className="btn btn-logout">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}