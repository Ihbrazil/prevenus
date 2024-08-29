import Link from 'next/link';
import Image from "next/image";

import Logo from "../../public/logo.jpg";
import estilos from './page.module.css';

export default function Apresentacao() {
  return (
    <main>
        <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
          <h1>Prevenus</h1>
          </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
              <h2>Prevenus</h2>
              <span>OBJETIVO</span>
              <p>
                  Ser um norteador na prevenção de doenças ocupacionais em informática para profissionais que tem como ferramenta de trabalho o computador.
              </p>
            </div>
            <div className={estilos.container_texto}>
                <h2>Pesquisar</h2>
                <span>(O QUÊ?)</span>
                <p>
                  Melhores formas de prevenção das DOI;
                  Ergonomia de Concepção e Correção:
                  <ul>
                    <li>Ergonomia de Hardware</li>
                    <li>Engenharia de usabilidade</li>
                    <li>EAT - Ergonomia de Ambiente de Trabalho</li>
                  </ul>
                </p>
              </div>
        </section>

        <section className={estilos.secao_nossos_eventos}>
          <div className={estilos.container_texto}>
              <h2>CONTEXTUALIZAÇÃO</h2>
              <span>1980 e 1990</span>
              <p>
                As doenças surgidas no apogeu da era da informação, década de 1980 e 1990, têm como origem a implantação de novas tecnologias, falta de ergonomia nos postos e ambiente de trabalho, estudos de usabilidade de software e interação humano-computador.
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