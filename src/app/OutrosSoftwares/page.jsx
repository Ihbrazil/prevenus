import Link from 'next/link';
import Image from 'next/image';

import estilos from './OutrosSoftwares.module.css';


import Lampada from "../../../public/icones/lampada.png";
import Lupa from "../../../public/icones/lupa.png";   
/*ícones criados por Flat Icons - Flaticon*/

import EyedefenderLogo from "../../../public/icones/eyedefender.png";
import WorkraveLogo from "../../../public/icones/workrave-logo.png";
import Off4FitLogo from "../../../public/icones/off4fit-logo.png";

export default function OutrosSoftwares() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a
                className={estilos.link}
                href='#outrossoftwares'>
                Outros Softwares
              </a>
            </h1>
          </div>
      </section>

      <section id='outrossoftwares' className={estilos.secao_primeira_linha}>
          <div className={estilos.container_texto}>
              <h2>
                <Image
                  src={Lupa}
                  alt="Lupa"
                  className={estilos.imagem_icon}>
                </Image>
                Outros Sistemas de Prevenção
              </h2>
              <span>Tecnologia a Favor do Bem-Estar</span>
              <p>A rotina digital exige atenção especial à saúde. O uso prolongado do computador pode causar fadiga, dores musculares e problemas oculares. Para ajudar na prevenção, diversas ferramentas foram desenvolvidas para monitorar hábitos digitais, promover pausas estratégicas e reduzir impactos negativos no corpo.</p>
          </div>
          <div className={estilos.container_texto}>
              <h2>
                <Image
                  src={Lampada}
                  alt="Lampada"
                  className={estilos.imagem_icon}>
                </Image>
                Conheça algumas soluções essenciais
              </h2>
              <ul type="none" className={estilos.lista}>
                  <li>
                    <span>Workrave:</span> Um assistente inteligente que auxilia na prevenção de doenças ocupacionais em informática. Ele sugere micro pausas, intervalos de descanso e limites diários de trabalho, ajudando a evitar lesões por esforço repetitivo (LER) e distúrbios osteomusculares.
                  </li>
                  <li>
                    <span>EyeDefender:</span>
                    Focado na saúde ocular, esse programa monitora o tempo de exposição à tela e sugere pausas para descanso visual, prevenindo fadiga ocular e irritação nos olhos causadas pelo uso excessivo do computador.
                  </li>
                  <li>
                    <span>Off4Fit:</span> Uma ferramenta completa para a prevenção de doenças ocupacionais. Além de incentivar pausas, ele orienta sobre movimentos e exercícios que ajudam a aliviar dores musculares, tensão na coluna e olhos secos, garantindo mais conforto no ambiente de trabalho.
                  </li>  
              </ul>
            </div>
      </section>

      <section id='downloads' className={estilos.secao_segunda_linha}>
            <div className={estilos.container_texto}>
                <h2>Workrave</h2>
                <span>
                  <Image
                      src={WorkraveLogo}
                      alt="Workrave"
                      className={estilos.imagem_icon}>
                  </Image>
                  Pausas Inteligentes para um Trabalho Saudável
                </span>
                <p>
                  Um assistente digital que auxilia na prevenção de doenças ocupacionais em informática. O Workrave sugere micro pausas, intervalos de descanso e limites diários de trabalho, ajudando a evitar lesões por esforço repetitivo (LER) e distúrbios osteomusculares.</p>
                  <ul type="none" className={estilos.lista}>
                    <li><span>Multiplataforma:</span> Disponível para Windows e Linux/Unix</li>
                    <li><span>Gestão de pausas:</span> Alertas para descanso e exercícios de alongamento.</li>
                    <li><span>Monitoramento do tempo de trabalho:</span> Controle inteligente para evitar sobrecarga.</li>
                  </ul>
                  <Link
                    className={estilos.botao}
                    href="https://workrave.org/download/" 
                    target="_blank"
                    >
                    Workrave
                  </Link>
            </div>

            <div className={estilos.container_texto}>
                <h2>EyeDefender</h2>
                <span>
                  <Image
                    src={EyedefenderLogo}
                    alt="Eyedefender"
                    className={estilos.imagem_icon}>
                  </Image>
                  Proteção para Seus Olhos
                </span>
                <p>O EyeDefender é um programa focado na prevenção de problemas oculares causados pelo uso prolongado do computador. Ele monitora o tempo de exposição à tela e sugere pausas para descanso visual, prevenindo fadiga ocular e irritação nos olhos.</p>
                <ul type="none" className={estilos.lista}>
                  <li>Download disponível para Windows</li>
                  <li><span>Alertas para descanso ocular:</span> Reduza o impacto da luz azul e do esforço visual.</li>
                  <li><span>Exercícios para os olhos:</span> Técnicas para relaxamento e prevenção de desconfortos.</li>
                </ul>
                <Link className={estilos.botao}
                    href="https://eyedefender.softonic.com.br/download"
                    target="_blank"
                    >EyeDefender
                </Link>
              </div>

              <div className={estilos.container_texto}>
                <h2>Off4Fit</h2>
                <span>
                  <Image
                      src={Off4FitLogo}
                      alt="Off4Fit"
                      className={estilos.imagem_icon}>
                  </Image>
                  Exercícios para um Corpo Saudável
                </span>
                <p>O Off4Fit é uma ferramenta completa para a prevenção de doenças ocupacionais. Além de incentivar pausas, ele orienta sobre movimentos e exercícios que ajudam a aliviar dores musculares, tensão na coluna e olhos secos, garantindo mais conforto no ambiente de trabalho.</p>
                <ul type="none" className={estilos.lista}>
                  <li>Download disponível para Windows</li>
                  <li><span>Exercícios guiados:</span> Movimentos para aliviar tensões e melhorar a postura.</li>
                  <li><span>Prevenção de dores musculares:</span> Técnicas para evitar desconfortos no dia a dia.</li>
                </ul>
                <Link
                  className={estilos.botao}
                  href="https://off4fit.en.uptodown.com/windows/download"
                  target="_blank"
                  >
                  Off4Fit
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