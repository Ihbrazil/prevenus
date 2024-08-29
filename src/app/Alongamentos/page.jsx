import Link from 'next/link';
import estilos from './Alongamentos.module.css';
import Image from 'next/image';

export default function Alongamentos() {
  return (
    <>
      <div className={estilos.container_backend}>
        <h2>Alongamentos</h2>
        
        <p>
        Alongamentos Startup
        </p>
        <Link
          href="../../../Alongamentos_PDF/Startup.pdf"
          target="_blank"
        >Startup</Link>

        <p>
        Alongamentos Seguro e Eficaz
        </p>
        <Link
          href="../../../Alongamentos_PDF/Seguro_e_Eficaz.pdf"
          target="_blank"
        >Seguro e Eficaz</Link>

        <p>
        Alongamentos Antes do trabalho
        </p>
        <Link
          href="../../../Alongamentos_PDF/Antes_do_trabalho.pdf"
          target="_blank"
        >Antes do Trabalho</Link>

        <p>
        Artistas Gráficos
        </p>
        <Link
          href="../../../Alongamentos_PDF/Artistas_Graficos.pdf"
          target="_blank"
        >Artistas Gráficos</Link>

        <p>
        Alongamentos em pé
        </p>
        <Link
          href="../../../Alongamentos_PDF/Em_pe.pdf"
          target="_blank"
        >Em pé</Link>

        <p>
        Alongamentos Espontâneos
        </p>
        <Link
          href="../../../Alongamentos_PDF/Espontaneos.pdf"
          target="_blank"
        >Espontâneos</Link>
      

        <p>
        Exercícios no Escritório
        </p>
        <Link
          href="../../../Alongamentos_PDF/Exercicios_no_Escritorio.pdf"
          target="_blank"
        >Exercícios no Escritório</Link>

        <p>
        Antes de Caminhar
        </p>
        <img src="../../public/logo_pdf.webp"/>
        <Link
          href="../../../Alongamentos_PDF/Antes_de_caminhar.pdf"
          target="_blank"
        >Antes de Caminhar</Link>

        <p>Guia de Apresentação</p>
        <Link className="link_retorno" href="/">Voltar</Link>
      </div>
    </>
  );
}