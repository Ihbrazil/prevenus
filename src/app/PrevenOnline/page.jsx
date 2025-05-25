"use client";

import Link from 'next/link';
import estilos from './PrevenOnline.module.css';
import Image from 'next/image';

import Lupa from "../../../public/icones/lupa.png";
import Foguete from "../../../public/icones/foguete.png";
import Sino from "../../../public/icones/sino.png";
import Ampulheta from "../../../public/icones/ampulheta.png";
/*ícones criados por Flat Icons - Flaticon*/

export default function PrevenOnline() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a
                className={estilos.link}
                href='#temporizador'>
                Preven online
              </a>
            </h1>
          </div>
      </section>

      <section className={estilos.secao_primeira_linha}>
          <div className={estilos.container_texto}>
              <h2>
                  <Image
                      src={Lupa}
                      alt="Lupa"
                      className={estilos.imagem_icon}>
                  </Image>
                  Preven online
                </h2>
              <span>Equilíbrio Entre Produtividade e Bem-Estar</span>
              <p>O tempo diante das telas pode passar despercebido, mas seu impacto na saúde é real. O Preven online foi desenvolvido para ajudar profissionais a monitorar o tempo de trabalho e pausas, garantindo um equilíbrio saudável entre produtividade e descanso.</p>
          </div>
          <div className={estilos.container_texto}>
              <h2>
                  <Image
                      src={Ampulheta}
                      alt="Ampulheta"
                      className={estilos.imagem_icon}>
                  </Image>
                  Por que usar o Preven online?
                </h2>
              <p>Passar longas horas no computador sem pausas adequadas pode causar fadiga visual, dores musculares e redução da concentração. Com um sistema simples e intuitivo, o Prevenus permite que você acompanhe seu tempo de atividade e receba alertas para pausas estratégicas, prevenindo problemas ocupacionais.</p>
            </div>
      </section>

      <section id='temporizador' className={estilos.secao_segunda_linha}>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Foguete}
                      alt="Foguete"
                      className={estilos.imagem_icon}>
                  </Image>
                  Como funciona?
                </h2>
                <p>O Preven online é um software leve e fácil de usar. Ele permite que você defina intervalos de trabalho e pausas, com alertas visuais e sonoros para lembrá-lo de fazer pausas regulares. Além disso, o sistema registra seu tempo de atividade, ajudando a identificar padrões e otimizar sua rotina.</p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Tempo de Trabalho:</span>  Registre e acompanhe seus períodos de atividade para manter um ritmo produtivo sem excessos.</li>
                  <li><span>Tempo de Pausa:</span> Configure intervalos regulares para descanso, ajudando a reduzir tensões e melhorar o foco.</li>
                  <li><span>Gestão Inteligente:</span> Ajuste os tempos conforme sua rotina e necessidades, garantindo um fluxo de trabalho mais saudável.</li>
                </ul>
            </div>

            <div className={estilos.container_texto}>
                <h2>Preven online</h2>
                <span></span>
                <p>Para que o Preven online funcione corretamente, é necessário manter o site aberto e permanecer na aba do Preven online para que a temporização seja calculada corretamente.
                </p>
                <p>Além disso, para que as notificações sejam exibidas, é fundamental ajustar as permissões do navegador, permitindo alertas e notificações visuais. Isso garante que você receba lembretes oportunos e possa gerenciar melhor suas pausas e produtividade.</p>
              </div>
        </section>

        <section className={estilos.secao_primeira_linha}>
            <div className={estilos.container_texto}>
                <h2>Como ativar notificações no Microsoft Edge</h2>
                <ul type="none" className={estilos.lista}>
                  <li><span>Abra o Microsoft Edge</span>  e clique nos três pontos no canto superior direito.</li>
                  <li>Vá até <span>Configurações</span>, depois em <span>Cookies e permissões de site</span>. Em seguida, <span>Notificações.</span></li>
                  <li>Na seção <span>Permitir</span>, verifique se o site desejado está listado. Caso contrário, clique em <span>Adicionar</span> e insira o endereço do site.</li>
                  <li>Certifique-se de que a opção <span>Permitir que sites enviem notificações</span> esteja ativada.</li>
                  <li>Após adicionar o site, você deve ver uma mensagem de confirmação. Clique em <span>Concluído</span>.</li>
                  <li>Agora, sempre que o site solicitar permissão para enviar notificações, você verá um pop-up. Clique em <span>Permitir</span>.</li>
                  <li>Pronto! Você agora receberá notificações do site sempre que houver atualizações ou lembretes.</li>
                </ul>
                <p>
                  <Image
                      src={Sino}
                      alt="Sino"
                      className={estilos.imagem_icon}>
                  </Image>
                  Lembre-se de que as configurações podem variar dependendo da versão do navegador, mas o processo geral deve ser semelhante.
                </p>
            </div>

            <div className={estilos.container_texto}>
                <h2>Como ativar notificações no Google Chrome</h2>
                <span></span>
                <p></p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Abra o Google Chrome</span> e clique nos três pontos no canto superior direito.</li>
                  <li>Vá até <span>Configurações</span>, depois em <span>Privacidade e segurança</span>. Em seguida, <span>Configurações do site.</span> e clique em <span>Notificações.</span></li>
                  <li>Na seção <span>Comportamento predefinido</span>, selecione Permitir que os sites enviem notificações.</li>
                  <li>Para adicionar um site específico, clique em <span>Adicionar</span> na seção <span>Com autorização para enviar notificações</span>e insira o endereço.</li>
                  <li>Feche as configurações e teste se as notificações estão funcionando corretamente.</li>
                  <li>Agora, sempre que o site solicitar permissão para enviar notificações, você verá um pop-up. Clique em <span>Permitir</span>.</li>
                  <li>Pronto! Você agora receberá notificações do site sempre que houver atualizações ou lembretes.</li>
                </ul>
                <p>
                  <Image
                      src={Sino}
                      alt="Sino"
                      className={estilos.imagem_icon}>
                  </Image>
                  Lembre-se de que as configurações podem variar dependendo da versão do navegador, mas o processo geral deve ser semelhante.
                </p>
              </div>

              <div className={estilos.container_texto}>
                <h2>Como ativar notificações no Mozilla Firefox</h2>
                <span></span>
                <p></p>
                <ul type="none" className={estilos.lista}>
                  <li><span>Abra o Mozilla Firefox</span> e clique nos três pontos no canto superior direito.</li>
                  <li>Role até a seção <span>Permissões</span> e clique ao lado em <span>Notificações.</span></li>
                  <li>Certifique-se de que o site desejado está listado e que a opção <span>Permitir notificações</span> está ativada.</li>
                  <li>Caso queira bloquear novos pedidos de permissão, marque a opção <span>Bloquear novos pedidos de permissão de notificações</span>.</li>
                  <li>Clique em <span>Salvar alterações</span> e teste se as notificações estão funcionando corretamente.</li>
                </ul>
                <p>
                  <Image
                      src={Sino}
                      alt="Sino"
                      className={estilos.imagem_icon}>
                  </Image>
                  Lembre-se de que as configurações podem variar dependendo da versão do navegador, mas o processo geral deve ser semelhante.
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