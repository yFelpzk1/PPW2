
import { Link, Outlet } from "react-router-dom";
import "./layout.css"; 

export default function Layout() {
  return (
    <div id="defaultLayout">
      <aside>
        {}
        <Link to="/sistema/disciplinas/listar">Disciplinas</Link>
        <Link to="/sistema/modulos/listar">Módulos</Link>
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