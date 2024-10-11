import Image from "next/image";
import Link from "next/link";

import estilos from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={estilos.container_rodape}>
      <div className={estilos.container_informacoes}>
        
        <div>
          <h3>CONTATO</h3>
          <p>prevenus@gmail.com</p>
          <p>
            <Link
              href='https://www.linkedin.com/in/ihbrazil/'
              target="_blank"
              >Linkedin
            </Link>
          </p>
        </div>
        <div>
          <h3>Redes Sociais</h3>
          <p>
            <Link
              href= 'https://www.instagram.com/prevenus888/?hl=pt-br'
              target="_blank"
              >Instagram
            </Link>
          </p>
          <p>
            <Link
              href= 'https://www.facebook.com/prevenus' 
              target="_blank"
              >Facebook
            </Link>
          </p>
        </div>
      </div>
      <div className={estilos.container_direito_autoral}>
        <p>Projeto Prevenus. Orgulhosamente desenvolvido por "Isaias Horta Brazil"</p>
      </div>
    </footer>
  );
}