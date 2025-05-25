// Importando os módulos necessários
import React from "react";
import Image from "next/image";

import estilos from './Ergonomia.module.css';

import Lupa from "../../../public/icones/lupa.png";
import Foguete from "../../../public/icones/foguete.png";
import Lampada from "../../../public/icones/lampada.png";
/*ícones criados por Flat Icons - Flaticon*/

export default function Ergonomia() {
  return (
    <main>
        <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
              <h1>
                  <a
                    className={estilos.link} href='#ergonomia'>
                    Ergonomia
                  </a>
              </h1>
          </div>
        </section>

        <section id='ergonomia' className={estilos.secao_primeira_linha}>
            <div className={estilos.container_texto}>
                <h2>Ergonomia</h2>
                <span>O Equilíbrio Entre Tecnologia e Bem-Estar</span>
                <p>
                    A tecnologia evolui rapidamente, e com ela, a forma como interagimos com computadores e dispositivos digitais. No entanto, sem os cuidados adequados, essa interação pode comprometer a saúde e o bem-estar dos usuários. <span>O Projeto Prevenus</span> busca transformar essa realidade, promovendo práticas ergonômicas que garantem conforto, eficiência e qualidade de vida no ambiente de trabalho.
                </p>
            </div>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Lampada}
                      alt="Lampada"
                      className={estilos.imagem_icon}>
                  </Image>
                  O que é ergonomia digital?</h2>
                <p>
                  A ergonomia aplicada à informática envolve ajustes no <span>mobiliário</span>, na <span>iluminação</span>, na <span>postura</span> e até na <span>usabilidade dos softwares</span>, garantindo que o ambiente de trabalho seja saudável e produtivo. Pequenos ajustes podem prevenir dores musculares, fadiga visual e lesões por esforço repetitivo, tornando a rotina mais confortável e segura.
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
                  Nossa abordagem
                </h2>
                <ul type="none" className={estilos.lista}>
                    <li><span>Prevenção primária:</span> Estratégias para evitar problemas antes que eles surjam, como ajustes ergonômicos no espaço de trabalho.</li>
                    <li><span>Prevenção secundária:</span> Métodos para identificar e corrigir hábitos prejudiciais, reduzindo impactos negativos na saúde.</li>
                    <li><span>Prevenção terciária:</span> Soluções para minimizar danos já existentes, promovendo recuperação e adaptação ao ambiente digital.</li>
                </ul>  
            </div>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Lupa}
                      alt="Lupa"
                      className={estilos.imagem_icon}>
                  </Image>
                  Ferramentas para um trabalho mais saudável
                </h2>
                <span>Preven e Sentinela</span>
                <p>
                    O Prevenus desenvolve e recomenda soluções como Preven e Sentinela, que ajudam a monitorar e melhorar a ergonomia no dia a dia.
                    Essas ferramentas oferecem dicas personalizadas, lembretes para pausas e exercícios, além de orientações sobre a postura correta e o ambiente de trabalho ideal. O objetivo é criar um espaço digital que respeite as necessidades do corpo humano, promovendo saúde e bem-estar.
                </p>  
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