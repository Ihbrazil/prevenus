import Link from 'next/link';
import Image from "next/image";

import estilos from './Ergonomia.module.css';

export default function Ergonomia() {
  return (
    <main>
        <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
          <h1>Ergonomia</h1>
          </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Ergonomia</h2>
                <span>IDEIA BASICA (O IDEAL)</span>
                <p>
                    Incorporar os conceitos de prevenção na formação básica dos usuários de microcomputadores;
                    Um ambiente de trabalho (mobiliário, ruídos, iluminação, etc.) saudável;
                    Usuários e empresas mais saudáveis;
                    Qualidade de Vida e Qualidade de Vida no Trabalho.
                </p>
            </div>
            <div className={estilos.container_texto}>
                <h2>Solução Proposta</h2>
                <span>Medicina Preventiva Aplicada</span>
                <p>
                  Prevenção primária
                  Prevenção secundária e
                  Prevenção terciária.
                </p>
              </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>FERRAMENTAS</h2>
                <span>Preven e Sentinela</span>
                <p>
                    Preven
                    Sentinela
                </p>  
            </div>           
        </section>

        <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
              <h1>Prevenus</h1>
          </div>
        </section>
    </main>
  );
}