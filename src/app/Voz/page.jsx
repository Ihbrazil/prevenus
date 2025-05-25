"use client";

import Link from 'next/link';
import estilos from './Voz.module.css';

import Image from 'next/image';

import Lampada from "../../../public/icones/lampada.png";
import Lupa from "../../../public/icones/lupa.png";   
/*ícones criados por Flat Icons - Flaticon*/

import GoogleAssistantLogo from "../../../public/icones/google-assistant-logo.png";
import AmazonAlexaLogo from "../../../public/icones/amazon-alexa-logo.png";
import AppleSiriLogo from "../../../public/icones/apple-siri-logo.png";
import MicrosoftCortanaLogo from "../../../public/icones/microsoft-cortana-logo.png";
import IBMWatsonLogo from "../../../public/icones/ibm-watson-logo.png";

export default function Softwares() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a
                className={estilos.link}
                href='#voz'>
                Reconhecimento de Voz
              </a>
            </h1>
          </div>
      </section>

      <section className={estilos.secao_primeira_linha}>
          <div className={estilos.container_texto}>
              <h2>Sistemas de Reconhecimento de Voz</h2>
              <span>A Evolução da Interação Digital</span>
              <p>A tecnologia de reconhecimento de voz revolucionou a forma como interagimos com dispositivos e sistemas computacionais. Desde assistentes virtuais até comandos por voz em dispositivos móveis, essa inovação permite uma comunicação mais intuitiva e acessível.</p>
          </div>
          <div className={estilos.container_texto}>
              <h2>
                <Image
                    src={Lampada}
                    alt="Lampada"
                    className={estilos.imagem_icon}>
                </Image>
                O que é reconhecimento de voz?
              </h2>
              <p>O reconhecimento de voz é uma tecnologia que converte fala em texto, permitindo que máquinas compreendam e executem comandos verbais. Ele funciona analisando frequência, tom, sotaque e entonação, garantindo uma resposta precisa e personalizada.</p>
            </div>
      </section>

      <section id='voz' className={estilos.secao_segunda_linha}>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Lupa}
                      alt="Lupa"
                      className={estilos.imagem_icon}>
                  </Image>
                  Principais Sistemas de Reconhecimento de Voz
                </h2>
                <span>
                  Ferramentas que Transformam a Comunicação Digital
                </span>
                <p>Existem diversos sistemas de reconhecimento de voz disponíveis, cada um com suas características e funcionalidades. Aqui estão alguns dos mais populares:</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Google Assistant:</span> Um dos assistentes mais avançados, capaz de interpretar comandos de voz para buscas, controle de dispositivos e interações inteligentes.</li>
                  <li><span>Amazon Alexa:</span> Presente em diversos dispositivos, a Alexa permite controle de casa inteligente, reprodução de música e integração com serviços online.</li>
                  <li><span>Apple Siri:</span> Assistente virtual da Apple, que responde a comandos de voz para facilitar tarefas no iPhone, iPad e Mac.</li>
                  <li><span>Microsoft Cortana:</span> Desenvolvida pela Microsoft, a Cortana auxilia na produtividade, respondendo a perguntas e organizando tarefas.</li>
                  <li><span>IBM Watson Speech to Text:</span> Um sistema robusto voltado para transcrição de áudio e análise de voz em aplicações empresariais.</li>
                  <li><span>Nuance Dragon:</span> Reconhecido por sua precisão, o Dragon é amplamente utilizado para transcrição de voz em setores como saúde e jurídico.</li>
                </ul>
                <p>Esses sistemas têm se tornado cada vez mais populares, oferecendo soluções práticas e eficientes para facilitar a interação com a tecnologia. A escolha do sistema ideal depende das necessidades específicas de cada usuário e do ambiente em que será utilizado.</p>
            </div>
          </section>

          <section className={estilos.secao_primeira_linha}>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={GoogleAssistantLogo}
                      alt="Google Assistant"
                      className={estilos.imagem_icon}>
                  </Image>
                  Google Assistant
                </h2>
                <span>Seu Assistente Inteligente em Qualquer Lugar</span>
                <p>O Google Assistant é uma das tecnologias de reconhecimento de voz mais avançadas, permitindo interações naturais com dispositivos móveis e domésticos inteligentes. Você pode realizar buscas, controlar aparelhos conectados e até mesmo gerenciar tarefas diárias apenas com comandos de voz.</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Multiplataforma:</span> Disponível para Android e iOS.</li>
                  <li><span>Integração com Google Home:</span> Controle dispositivos inteligentes e automação residencial.</li>
                  <li><span>Respostas Inteligentes:</span> Informações precisas com base em inteligência artificial.</li>
                </ul>
                <Link className={estilos.botao}
                    href="https://assistant.google.com/"
                    target="_blank"
                    > Google Assistant
                </Link>
              </div>

              <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={AmazonAlexaLogo}
                      alt="Amazon Alexa"
                      className={estilos.imagem_icon}>
                  </Image>
                  Amazon Alexa
                </h2>
                <span>Controle Inteligente por Voz</span>
                <p>A Alexa, assistente virtual da Amazon, está presente em diversos dispositivos, permitindo controle por voz de eletrodomésticos, música e até compras online. Seu ecossistema de skills personalizadas expande suas funcionalidades, tornando-a uma ferramenta essencial para automação residencial e profissional.</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Compatível com Echo e outros dispositivos</span></li>
                  <li><span>Controle de Casa Inteligente:</span> Conecte-se com luzes, sensores, TVs e mais.</li>
                  <li><span>Integração com serviços de streaming:</span> Ouça música, podcasts e audiolivros.</li>
                </ul>
                <Link className={estilos.botao}
                    href="https://www.amazon.com/b?node=18354642011"
                    target="_blank"
                    >Amazon Alexa
                </Link>
              </div>
            </section>

            <section className={estilos.secao_segunda_linha}>
              <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={AppleSiriLogo}
                      alt="Apple Siri"
                      className={estilos.imagem_icon}>
                  </Image>
                  Apple Siri
                </h2>
                <span>Assistente Inteligente para o Ecossistema Apple</span>
                <p>O Siri é o assistente virtual da Apple, permitindo comandos de voz no iPhone, iPad, Mac e Apple Watch. Com integração nativa ao sistema da Apple, ele responde a perguntas, controla aplicativos e automatiza tarefas do dia a dia.</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Ativação por comando de voz:</span> “Ei, Siri” para ações rápidas.</li>
                  <li><span>Integração com aplicativos Apple:</span>Lembretes, mensagens e navegação GPS.</li>
                  <li><span>Compatível com dispositivos Apple:</span> Funciona em iOS, macOS e watchOS.</li>
                </ul>
                <Link className={estilos.botao}
                    href="https://www.apple.com/br/siri/"
                    target="_blank"
                    >
                    Apple Siri
                </Link>
             </div>

             <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={MicrosoftCortanaLogo}
                      alt="Microsoft Cortana"
                      className={estilos.imagem_icon}>
                  </Image>
                  Microsoft Cortana
                </h2>
                <span>Produtividade e Inteligência Artificial</span>
                <p>O Cortana da Microsoft foi projetado para ajudar na organização e produtividade, permitindo que você use comandos de voz para acessar informações, definir lembretes e gerenciar tarefas.</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Integração com Microsoft 365:</span> E-mails, calendário e arquivos do OneDrive.</li>
                  <li><span>Controle por voz em dispositivos Windows:</span> Facilidade para abrir aplicativos e realizar buscas.</li>
                  <li><span>Respostas inteligentes e personalizadas:</span> Baseadas no aprendizado do usuário.</li>
                </ul>
                <Link className={estilos.botao}
                    href="https://apps.microsoft.com/detail/9nffx4szz23l?hl=pt-BR&gl=IT"
                    target="_blank"
                    >
                    Microsoft Cortana
                </Link>
             </div>
            </section>

            <section className={estilos.secao_segunda_linha}>
             <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={IBMWatsonLogo}
                      alt="IBM Watson"
                      className={estilos.imagem_icon}>
                  </Image>
                  IBM Watson Speech to Text
                </h2>
                <span>Transcrição Inteligente para Empresas</span>
                <p>A solução da IBM Watson Speech to Text é ideal para empresas e profissionais que precisam de transcrição precisa de áudio para texto. Com suporte a múltiplos idiomas e ajustes de entonação, essa tecnologia melhora a compreensão de voz em diversos cenários corporativos.</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Reconhecimento avançado de voz:</span> Transcrição rápida e eficiente.</li>
                  <li><span>Suporte para múltiplos idiomas:</span> Adaptável para diferentes sotaques.</li>
                  <li><span>Ideal para reuniões, atendimentos e serviços empresariais</span></li>
                </ul>
                <Link className={estilos.botao}
                    href="https://www.ibm.com/br-pt/products/speech-to-text"
                    target="_blank"
                    >
                    IBM Watson Speech to Text
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