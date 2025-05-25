import React from 'react';
import Image from "next/image";

import estilos from './page.module.css';

import Lupa from "../../public/icones/lupa.png";
import Foguete from "../../public/icones/foguete.png";
import Lampada from "../../public/icones/lampada.png";
/*ícones criados por Flat Icons - Flaticon*/

export default function Apresentacao() {
  return (
    <main>
        <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
          <h1>
            <a
              className={estilos.link}
              href='#apresentacao'>
              Apresentação
            </a>
          </h1>
          </div>
        </section>

        <section id='apresentacao' className={estilos.secao_primeira_linha}>
            <div className={estilos.container_texto}>
              <h2>Prevenus: Cuidando da Saúde Digital dos Profissionais</h2>
              <span></span>
              <p>
                  A tecnologia evolui, e com ela surgem desafios para a saúde de quem trabalha diariamente diante das telas. O Projeto Prevenus nasceu para ser um guia na prevenção de doenças ocupacionais em informática, ajudando profissionais a manterem o bem-estar enquanto utilizam o computador como ferramenta essencial.
              </p>
            </div>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Lampada}
                      alt="Lampada"
                      className={estilos.imagem_icon}>
                  </Image>
                  O que fazemos?
                </h2>
                <p>
                  Pesquisamos e desenvolvemos estratégias para melhorar a ergonomia, a usabilidade de softwares e a interação humano-computador, criando um ambiente de trabalho mais saudável e produtivo.
                </p>
              </div>
        </section>

        <section className={estilos.secao_segunda_linha}>
          <div className={estilos.container_texto}>
              <h2>
                <Image
                    src={Foguete}
                    alt="Foguete"
                    className={estilos.imagem_icon}>
                </Image>
                Por que isso importa?</h2>
              <p>
                Desde os anos 1980 e 1990, o avanço tecnológico trouxe consigo problemas como lesões por esforço repetitivo e fadiga visual. O Prevenus busca soluções para minimizar esses impactos, promovendo práticas que protejam a saúde dos profissionais da era digital.
              </p>
            </div>
          <div className={estilos.container_texto}>
              <h2>
                <Image
                    src={Lupa}
                    alt="Lupa"
                    className={estilos.imagem_icon}>
                </Image>
                Explore nossas iniciativas:
              </h2>
              <ul type="none" className={estilos.lista}>
                <li>Ergonomia de Hardware e Ambiente de Trabalho</li>
                <li>Estudos sobre usabilidade e engenharia de software</li>
                <li>Métodos de prevenção para doenças ocupacionais</li>
              </ul>
            </div>             
        </section>

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