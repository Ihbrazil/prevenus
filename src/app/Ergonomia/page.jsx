import Link from 'next/link';
import Image from "next/image";

import estilos from './Ergonomia.module.css';

export default function Ergonomia() {
  return (
    <main>
                <section className={estilos.secao_sobre_nos}>
          {/*<Image className={estilos.img_card} src={image3} alt="pessoas comendo sorvete" />*/}
          <div className={estilos.container_texto}>
            <h2>Ergonomia</h2>
            <span>IDEIA BASICA (O IDEAL)</span>
            <p>
            Incorporar os conceitos de prevenção na formação básica dos usuários de microcomputadores;
            Um ambiente de trabalho (mobiliário, ruídos, iluminação, etc.) saudável;
            Usuários e empresas mais saudáveis;
            Qualidade de Vida e Qualidade de Vida no Trabalho.
            </p>
            
            <h2>SOLUÇÃO PROPOSTA</h2>
            <span>Medicina Preventiva Aplicada</span>
            <p>
              Prevenção primária
              Prevenção secundária e
              Prevenção terciária.
            </p>

            <h2>FERRAMENTAS</h2>
            <span>Preven e Sentinela</span>
            <p>
              Preven
              Sentinela
            </p>

              <p>Guia de Apresentação</p>
            <Link className="link_retorno" href="/">Voltar</Link>
          </div>
        </section>
    </main>
  );
}