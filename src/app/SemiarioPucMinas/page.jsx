import Link from 'next/link';
import Image from 'next/image';

import estilos from './semiarioPucMinas.module.css';

import image1 from '../../../public/Banner-Artigo-1.jpg';
import image2 from '../../../public/Banner-Artigo-2.jpg';

export default function SemiarioPucMinas() {
  return (
    <main className={estilos.container_principal}>
      {/* Banner Principal */}
      <section id='prevenus' className={estilos.secao_banner}>
        <div className={estilos.texto_banner}>
          <h1>
            <Link className={estilos.link} href="#semiariopucminas">
              18° Seminário de Iniciação Científica PUC MINAS
            </Link>
          </h1>
        </div>
      </section>

      {/* Seção de Banners */}
      <section id='semiariopucminas' className={estilos.secao_banners}>
        <article className={estilos.banner_card}>
          <Image
            className={estilos.img_card}
            src={image1}
            alt="Banner do artigo 1 do Seminário PUC Minas"
            layout="responsive"
          />
        </article>
        
        <article className={estilos.banner_card}>
          <Image
            className={estilos.img_card}
            src={image2}
            alt="Banner do artigo 2 do Seminário PUC Minas"
            layout="responsive"
          />
        </article>
      </section>

      {/* Banner Secudário */}
      <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
              <h1>
                <a
                  className={estilos.link}
                  href='#prevenus'>
                  Prevenus
                </a>
              </h1>
          </div>
        </section>
    </main>
  );
}