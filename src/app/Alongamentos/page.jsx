import Link from 'next/link';
import estilos from './Alongamentos.module.css';
import Image from 'next/image';

export default function Alongamentos() {
  return (
    <main>
      <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
          <h1>Alongamentos</h1>
          </div>
      </section>

      <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Alongamentos Startup</h2>
                <span>Startup</span>
                <p>
                <Link
          href="../../../Alongamentos_PDF/Startup.pdf"
          target="_blank"
        >Startup</Link>
                </p>
            </div>
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Seguro e Eficaz</span>
                <p>
                <Link href="../../../Alongamentos_PDF/Seguro_e_Eficaz.pdf" target="_blank">Seguro e Eficaz</Link>
                </p>
              </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Antes do trabalho</span>
                <p>
                <Link
          href="../../../Alongamentos_PDF/Antes_do_trabalho.pdf"
          target="_blank"
        >Antes do Trabalho</Link>
                </p>  
            </div>           
        
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Artistas Gráficos</span>
                <p>
                <Link href="../../../Alongamentos_PDF/Artistas_Graficos.pdf" target="_blank" >Artistas Gráficos</Link>
                </p>  
            </div>           
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Em pé</span>
                <p>
                  <Link href="../../../Alongamentos_PDF/Em_pe.pdf" target="_blank">Em pé</Link>
                </p>  
            </div>           
        
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Espontâneos</span>
                <p>
                <Link href="../../../Alongamentos_PDF/Espontaneos.pdf" target="_blank">Espontâneos</Link>
                </p>  
            </div>           
        </section>
        

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Exercícios no Escritório</span>
                <p>
                <Link
          href="../../../Alongamentos_PDF/Exercicios_no_Escritorio.pdf"
          target="_blank"
        >Exercícios no Escritório</Link>
                </p>  
            </div>           
        
            <div className={estilos.container_texto}>
                <h2>Alongamentos</h2>
                <span>Antes de Caminhar</span>
                <p>
                    <Link href="../../../Alongamentos_PDF/Antes_de_caminhar.pdf" target="_blank">Antes de Caminhar</Link>                
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