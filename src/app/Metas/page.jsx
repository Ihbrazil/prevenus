"use client";

import Image from "next/image";

import estilos from './Metas.module.css';

import Foguete from "../../../public/icones/foguete.png";
import Lampada from "../../../public/icones/lampada.png";
/*ícones criados por Flat Icons - Flaticon*/

export default function Metas() {
  return (
      <main>
          <section id='prevenus' className={estilos.secao_banner}>
              <div className={estilos.texto_banner}>
                <h1>
                    <a
                      className={estilos.link}
                      href='#metas'>
                      Metas
                    </a>
                </h1>
              </div>
          </section>

          <section id = 'metas' className={estilos.secao_primeira_linha}>
            <div className={estilos.container_texto}>
                <h2>Metas do Projeto Prevenus</h2>
                <span>Tecnologia e Saúde em Harmonia</span>
                <p>
                    O avanço tecnológico trouxe inúmeras facilidades, mas também desafios para a saúde dos profissionais que dependem do computador no dia a dia. O <span>Projeto Prevenus</span> tem como missão criar um ambiente digital mais saudável e acessível, unindo <span>Interação Humano-Computador (IHC)</span>, ergonomia e medicina preventiva para transformar a forma como interagimos com a tecnologia.
                </p>
            </div>
            
            <div className={estilos.container_texto}>
              <h2>
                <Image
                      src={Lampada}
                      alt="Lampada"
                      className={estilos.imagem_icon}>
                </Image>Nossas Metas
                
              </h2>
              <span>
                Um Futuro Digital Mais Saudável
              </span>
              <ul type="none" className={estilos.lista}>
                <li><span>Interfaces mais intuitivas e acessíveis</span>: Desenvolver soluções que respeitem as capacidades e limitações dos usuários, tornando a experiência digital mais eficiente e confortável.</li>
                <li><span>Ergonomia aplicada ao mundo digital</span>: Estudar e implementar práticas que reduzam o impacto do uso prolongado do computador, prevenindo problemas de saúde ocupacionais.</li>
                <li><span>Conscientização e prevenção</span>: Informar e educar profissionais sobre os riscos do uso inadequado da tecnologia, promovendo hábitos mais saudáveis no ambiente de trabalho.</li>
                <li><span>Pesquisa e desenvolvimento</span>: Investigar novas tecnologias e métodos que possam melhorar a interação humano-computador, sempre com foco na saúde e bem-estar dos usuários.</li>
                <li><span>Colaboração multidisciplinar</span>: Trabalhar em conjunto com especialistas de diversas áreas, como ergonomia, medicina, design e tecnologia, para criar soluções integradas e eficazes.</li>
              </ul>
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
                O Futuro Tecnológico</h2>
                <span>
                  Começa com Saúde e Consciência
                </span>
              <p>
                O Prevenus acredita que a tecnologia deve ser uma ferramenta de progresso, sem comprometer a saúde e o bem-estar dos usuários. Junte-se a nós nessa jornada para um futuro digital mais equilibrado e sustentável!
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