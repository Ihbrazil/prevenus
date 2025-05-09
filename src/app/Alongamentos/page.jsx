import Link from 'next/link';
import estilos from './Alongamentos.module.css';
import Image from 'next/image';

export default function Alongamentos() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a href='#alongamentos'>Alongamentos</a>
            </h1>
          </div>
      </section>

      <section id='alongamentos' className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Startup</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Startup.pdf"
                    target="_blank"
                    >Startup
                  </Link>
                </p>
                <iframe src="../../../Alongamentos_PDF/Startup.pdf#page=1" width="100%" height="400px"></iframe>
 
            </div>
            <div className={estilos.container_texto}>
                <h2>Seguro e Eficaz</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Seguro_e_Eficaz.pdf"
                    target="_blank"
                    >Seguro e Eficaz
                  </Link>
                </p>
                <iframe src="../../../Alongamentos_PDF/Seguro_e_Eficaz.pdf#page=1" width="100%" height="400px"></iframe>
              </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Antes do trabalho</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Antes_do_trabalho.pdf"
                    target="_blank"
                    >Antes do Trabalho
                  </Link>
                </p>
                <iframe src="../../../Alongamentos_PDF/Antes_do_trabalho.pdf#page=1" width="100%" height="400px"></iframe>  
            </div>           
        
            <div className={estilos.container_texto}>
                <h2>Artistas Gráficos</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Artistas_Graficos.pdf"
                    target="_blank"
                    >Artistas Gráficos
                  </Link>
                </p>  
                <iframe src="../../../Alongamentos_PDF/Artistas_Graficos.pdf#page=1" width="100%" height="400px"></iframe>
            </div>           
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Alongamentos em pé</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Em_pe.pdf"
                    target="_blank"
                    >Em pé
                  </Link>
                </p>
                <iframe src="../../../Alongamentos_PDF/Em_pe.pdf#page=1" width="100%" height="400px"></iframe>  
            </div>           
        
            <div className={estilos.container_texto}>
                <h2>Alongamentos Espontâneos</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Espontaneos.pdf" target="_blank"
                    >Espontâneos
                  </Link>
                </p>
                <iframe src="../../../Alongamentos_PDF/Espontaneos.pdf#page=1" width="100%" height="400px"></iframe>  
            </div>           
        </section>
        

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Exercícios no Escritório</h2>
                <span></span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Alongamentos_PDF/Exercicios_no_Escritorio.pdf"
                    target="_blank"
                    >Exercícios no Escritório
                  </Link>
                </p>
                <iframe src="../../../Alongamentos_PDF/Exercicios_no_Escritorio.pdf#page=1" width="100%" height="400px"></iframe>  
            </div>           
        
            <div className={estilos.container_texto}>
                <h2>Antes de Caminhar</h2>
                <span></span>
                <p>
                    <Link className={estilos.botao}
                      href="../../../Alongamentos_PDF/Antes_de_caminhar.pdf" target="_blank"
                      >Antes de Caminhar
                    </Link>                
                </p>  
                <iframe src="../../../Alongamentos_PDF/Antes_de_caminhar.pdf#page=1" width="100%" height="400px"></iframe>
            </div>           
        </section>

        <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
              <h1>
                <a href='#prevenus'>Prevenus</a>
              </h1>
          </div>
        </section>
    </main>
  );
}