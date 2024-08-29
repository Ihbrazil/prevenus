import Link from 'next/link';
import Image from "next/image";

import estilos from './topo.module.css';
import Logo from "../../../public/logo.jpg";

export default function Topo() {
  return(
    <header className={estilos.topo_container}>
      <div>
        
        <nav>
          <Link className={estilos.link_topo} href="/">Apresentação</Link>
          <Link className={estilos.link_topo} href="Metas">Metas</Link>
          <Link className={estilos.link_topo} href="/Ergonomia">Ergonomia</Link>
          <Link className={estilos.link_topo} href="/Publicacoes">Publicações</Link>
          <Link className={estilos.link_topo} href="/Alongamentos">Alongamentos</Link>
          <Link className={estilos.link_topo} href="/Softwares">Softwares</Link>
          <Link className={estilos.link_topo} href="/Blog">Blog</Link>
          <Link className={estilos.link_topo} href="/Contador">Contador</Link>
        </nav>
      </div>
    </header>
  )
}