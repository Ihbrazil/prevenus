import Link from 'next/link';
import estilos from './Publicacoes.module.css';

export default function Publicacoes() {
  return (
    <div className={estilos.container_backend}>
      <h2>Publicações Acadêmicas</h2>
      
      <p>
      18° Seminário de Iniciação Científica - PUC MINAS - 21/10/2010
      </p>
      <Link
        href="/SemiarioPucMinas"
      >PUC MINAS</Link>

      <p>
      Seminário CES/JF - 09/11/2010
      </p>
      <Link
        href="../../../Apresentação_Prevenus_CESJF.pdf"
        target="_blank"
      >CES/JF</Link>

      <p>
      X IHC & V CLIHC 2011 - 25 - 28/10/2011
      </p>
      <Link
        href="https://www.cin.ufpe.br/~ihc_clihc2011/index.php"
        target="_blank"
      >IHC/CLIHC</Link>

      <p>Guia de Apresentação</p>
      <Link className="link_retorno" href="/">Voltar</Link>
    </div>
  );
}