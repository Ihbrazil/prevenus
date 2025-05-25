import React from 'react';
import Link from 'next/link';
import estilos from './Downloads.module.css';
import Image from 'next/image';

import Lampada from "../../../public/icones/lampada.png";
import Lupa from "../../../public/icones/lupa.png";
/*ícones criados por Flat Icons - Flaticon*/   

import SinalVerde from "../../../public/icones/sinal_verde.png";
import SinalAmarelo from "../../../public/icones/sinal_amarelo.png";
import SinalVermelho from "../../../public/icones/sinal_vermelho.png";

export default function Downloads() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a
                  className={estilos.link}
                  href='#downloads'>
                  Downloads
                </a>
            </h1>
          </div>
      </section>

      <section className={estilos.secao_primeira_linha}>
          <div className={estilos.container_texto}>
              <h2>Softwares Prevenus</h2>
              <span>Tecnologia a Serviço da Saúde Digital</span>
              <p>O <span>Projeto Prevenus</span> desenvolve soluções inovadoras para ajudar profissionais que passam horas diante do computador a manterem sua saúde e bem-estar. Nossos softwares foram criados para <span>monitorar hábitos digitais</span>, <span>prevenir doenças ocupacionais e promover um ambiente de trabalho mais equilibrado</span>.</p>
          </div>
          <div className={estilos.container_texto}>
              <h2>
                <Image
                  src={Lampada}
                  alt="Lampada"
                  className={estilos.imagem_icon}
                  >
                </Image>
                Conheça nossas ferramentas
              </h2>
              <ul type="none" className={estilos.lista}>
                  <li><span>Preven:</span> Um sistema inteligente que gerencia suas atividades no computador, ajudando a evitar problemas como fadiga visual e lesões por esforço repetitivo.</li>
                  <li><span>Sentinela:</span> Complementa o Preven ao monitorar a velocidade de digitação, alertando o usuário sobre padrões que podem causar desconforto ou impacto na saúde.</li>  
              </ul>
            </div>
      </section>

      <section id='downloads' className={estilos.secao_segunda_linha}>
            <div className={estilos.container_texto}>
                <h2>Preven</h2>
                <span>Download disponível para Windows</span>
                <p>
                  <Image
                    src={Lupa}
                    alt="Lupa"
                    className={estilos.imagem_icon}
                    >
                  </Image>
                  Baixe agora e cuide da sua saúde digital! Os softwares Preven e Sentinela estão disponíveis para Windows. Para garantir o funcionamento correto, execute o Preven como Administrador.</p>
                
                <Link className={estilos.botao}
                  href="https://1drv.ms/u/s!AtdazL6G9GBX-cEy5ChjGx7_lSW5Hw?e=WNHnng" 
                  target="_blank"
                  >Preven</Link>
            </div>

            <div className={estilos.container_texto}>
                <h2>Sentinela</h2>
                <span>Download disponível para Windows</span>
                <p>Durante o uso, o Sentinela exibe alertas visuais para indicar a velocidade de digitação:</p>
                  <ul type="none">
                      <li>
                        <Image
                          src={SinalVerde}
                          alt="Sinal Verde"
                          className={estilos.imagem_icon}
                          >
                        </Image>
                        Verde: Menos de 115 dígitos por minuto (ritmo seguro).
                      </li>
                      <li>
                        <Image
                          src={SinalAmarelo}
                          alt="Sinal Amarelo"
                          className={estilos.imagem_icon}
                          >
                        </Image>
                        Amarelo: Entre 115 e 133 dígitos por minuto (atenção).
                      </li>
                      <li>
                        <Image
                          src={SinalVermelho}
                          alt="Sinal Vermelho"
                          className={estilos.imagem_icon}
                          >
                        </Image>
                        Vermelho: Acima de 133 dígitos por minuto (alerta de risco).
                      </li>
                  </ul>
                
                <Link className={estilos.botao}
                    href="https://1drv.ms/u/s!AtdazL6G9GBX-cE19pb3nJiTgn_dgQ?e=xX7dkN"
                    target="_blank"
                    >Sentinela
                </Link>
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