"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";

import estilos from "./topo.module.css";
import Logo from "../../../public/logo.jpg";

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
    <>
      {/* Definição de estilos globais e scripts otimizados */}
      <Head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
      </Head>

      <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

      <header className={estilos.topo_container}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Logo */}
            <Link href="/" onClick={fecharMenu}>
              <Image src={Logo} alt="Logo Prevenus" width={100} height={100} />
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

            {/* Menu Responsivo */}
            <div className={`collapse navbar-collapse ${menuAberto ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                {/* Seção Início */}
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Início ▼
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link href="/" onClick={fecharMenu}>Apresentação</Link></li>
                    <li><Link href="/Metas" onClick={fecharMenu}>Metas</Link></li>
                    <li><Link href="/Ergonomia" onClick={fecharMenu}>Ergonomia</Link></li>
                  </ul>
                </li>

                {/* Outras Seções */}
                <li className="nav-item">
                  <Link href="/Publicacoes" onClick={fecharMenu}>Publicações</Link>
                </li>
                <li className="nav-item">
                  <Link href="/Alongamentos" onClick={fecharMenu}>Alongamentos</Link>
                </li>

                {/* Seção Softwares */}
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Softwares ▼
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link href="/Downloads" onClick={fecharMenu}>Downloads</Link></li>
                    <li><Link href="/OutrosSoftwares" onClick={fecharMenu}>Outros Softwares</Link></li>
                    <li><Link href="/Voz" onClick={fecharMenu}>Voz</Link></li>
                  </ul>
                </li>

                {/* Seção Pausa */}
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Pausa ▼
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link href="/PrevenOnline" onClick={fecharMenu}>Preven Online</Link></li>
                    <li><Link href="/Preven" onClick={fecharMenu}>Preven</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
