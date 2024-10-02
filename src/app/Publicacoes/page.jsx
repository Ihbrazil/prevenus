import Link from 'next/link';
import estilos from './Publicacoes.module.css';

export default function Publicacoes() {
  return (
    <main>
      <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
          <h1>Publicações Acadêmicas</h1>
          </div>
      </section>

      <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>18° Seminário de Iniciação Científica</h2>
                <span>PUC MINAS - 21/10/2010</span>
                <p>
                  <Link className={estilos.botao}
                    href="/SemiarioPucMinas"
                    >PUC MINAS
                  </Link>
                </p>
            </div>
            <div className={estilos.container_texto}>
                <h2>Seminário CES/JF</h2>
                <span>09/11/2010</span>
                <p>
                  <Link className={estilos.botao}
                    href="../../../Apresentação_Prevenus_CESJF.pdf"
                    target="_blank"
                    >CES/JF
                  </Link>
                </p>
              </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>X IHC & V CLIHC 2011</h2>
                <span>28/10/2011</span>
                <p>
                  <Link className={estilos.botao}
                      href="https://www.cin.ufpe.br/~ihc_clihc2011/index.php"  target="_blank"
                      >IHC/CLIHC
                    </Link>
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