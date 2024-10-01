import Image from "next/image";

import estilos from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={estilos.container_rodape}>
      <div className={estilos.container_informacoes}>
        
        <div>
          <h3>CONTATO</h3>
          <p>prevenus@gmail.com</p>
          <p>Linkedin</p>
        </div>
        <div>
          <h3>Redes Sociais</h3>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className={estilos.container_direito_autoral}>
        <p>Projeto Prevenus. Orgulhosamente desenvolvido por "Isaias Horta Brazil"</p>
      </div>
    </footer>
  );
}