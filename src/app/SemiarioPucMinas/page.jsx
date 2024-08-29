import Link from 'next/link';
import Image from "next/image";

import estilos from './semiarioPucMinas.module.css';

import image1 from "../../../public/Banner-Artigo-1.jpg";
import image2 from "../../../public/Banner-Artigo-2.jpg";

export default function SemiarioPucMinas() {
  return (
    <main>
          <section className={estilos.secao_sobre_nos}>
          <div className={estilos.container_texto}>
            <h2>18° Seminário de Iniciação Científica PUC MINAS</h2>
            <span>____________________________</span>
            <Image className={estilos.img_card} src={image1} alt="pessoas comendo sorvete" />
            
            <span>____________________________</span>
            <Image className={estilos.img_card} src={image2} alt="pessoas comendo sorvete"/>
          </div>
        </section>
    </main>
  );
}