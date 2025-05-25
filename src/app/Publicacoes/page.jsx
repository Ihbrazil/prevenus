import Link from 'next/link';
import estilos from './Publicacoes.module.css';
import Image from "next/image";

import Lupa from "../../../public/icones/lupa.png";
import Foguete from "../../../public/icones/foguete.png";
import Livros from "../../../public/icones/livros.png";
/*ícones criados por Flat Icons - Flaticon*/

export default function Publicacoes() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a
                className={estilos.link}
                href='#publicacoes'>
                Publicações Acadêmicas
              </a>
            </h1>
          </div>
      </section>

      <section id='publicacoes' className={estilos.secao_primeira_linha}>
            <div className={estilos.container_texto}>
                <h2>Publicações Acadêmicas</h2>
                <p><span>Construindo Conhecimento para um Futuro Digital Mais Saudável</span></p>
                <p>O <span>Projeto Prevenus</span> não apenas investiga os desafios da ergonomia digital, mas também compartilha descobertas e avanços por meio de publicações acadêmicas. Nossa missão é contribuir para o desenvolvimento de soluções que promovam um ambiente tecnológico mais seguro e acessível.</p>
            </div>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Livros}
                      alt="Livros"
                      className={estilos.imagem_icon}>
                  </Image>
                  Nossos estudos</h2>
                  <span>contribuições científicas</span>
                <p>Ao longo dos anos, participamos de <span>seminários</span>, <span>congressos</span> e <span>simpósios</span>, apresentando pesquisas sobre <span>Interação Humano-Computador (IHC)</span>, <span>usabilidade de software</span> e <span>prevenção de doenças ocupacionais</span>.</p>
            </div>
        </section>

        <section className={estilos.secao_segunda_linha}>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Lupa}
                      alt="Lupa"
                      className={estilos.imagem_icon}>
                  </Image>
                  Destaques das nossas publicações
                </h2>
                <p><span>18° Seminário de Iniciação Científica PUC Minas</span></p>
                <p>
                  Investigação sobre ergonomia aplicada ao ambiente digital.
                </p>
                <Link className={estilos.botao}
                    href="/SemiarioPucMinas"
                    >PUC MINAS
                </Link>
            
                <span>Seminário CES/JF</span>
                <p>
                  Estudos sobre a relação entre tecnologia e saúde ocupacional.
                </p>
                  <Link className={estilos.botao}
                    href="../../../Apresentação_Prevenus_CESJF.pdf"
                    target="_blank"
                    >CES/JF
                  </Link>

                <p><span>X IHC & V CLIHC 2011</span></p>
                <p>
                  Contribuições para a evolução da interação humano-computador e suas implicações na qualidade de vida dos usuários.
                </p>
                <Link className={estilos.botao}
                      href="https://www.cin.ufpe.br/~ihc_clihc2011/index.php"  target="_blank"
                      >IHC/CLIHC
                </Link>
              </div>
            <div className={estilos.container_texto}>
                <h2>
                  <Image
                      src={Foguete}
                      alt="Foguete"
                      className={estilos.imagem_icon}>
                  </Image>
                  Por que isso importa?
                </h2>
                <p>
                  Cada pesquisa publicada pelo Prevenus reforça a importância de um mundo digital mais equilibrado, onde inovação e bem-estar caminham juntos. Acreditamos que a ciência é a chave para transformar desafios em soluções e garantir que a tecnologia seja uma aliada da saúde.
                </p>
                <p>Mergulhe em nossas pesquisas e veja como a inovação pode transformar o futuro da tecnologia e do bem-estar!
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