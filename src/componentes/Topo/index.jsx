"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import estilos from "./topo.module.css";
import Logo from "../../../public/logo.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function Topo() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState("");

  const alternarSubmenu = (submenu) => {
    setSubmenuAberto(submenuAberto === submenu ? "" : submenu);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
    setSubmenuAberto("");
  };

  return (
    <header className={estilos.topo_container}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand"  href="/" onClick={fecharMenu}>
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          {/* Botão do menu sanduíche */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-controls="navbarSupportedContent"
            aria-expanded={menuAberto}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu responsivo */}
          <div className={`collapse navbar-collapse ${menuAberto ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle"  data-bs-toggle="dropdown">
                  Inicio ▼
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/" onClick={fecharMenu}>Apresentação</Link></li>
                  <li><Link className="dropdown-item" href="/Metas" onClick={fecharMenu}>Metas</Link></li>
                  <li><Link className="dropdown-item" href="/Ergonomia" onClick={fecharMenu}>Ergonomia</Link></li>
                </ul>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" href="/Publicacoes" onClick={fecharMenu}>Publicações</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Alongamentos" onClick={fecharMenu}>Alongamentos</Link>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle"  data-bs-toggle="dropdown">
                  Softwares ▼
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/Downloads" onClick={fecharMenu}>Downloads</Link></li>
                  <li><Link className="dropdown-item" href="/OutrosSoftwares" onClick={fecharMenu}>Outros Softwares</Link></li>
                  <li><Link className="dropdown-item" href="/Voz" onClick={fecharMenu}>Voz</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pausa ▼
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/PrevenOnline" onClick={fecharMenu}>Preven Online</Link></li>
                  <li><Link className="dropdown-item" href="/Preven" onClick={fecharMenu}>Preven</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
