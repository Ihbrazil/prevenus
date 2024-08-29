import Link from 'next/link';
import estilos from './Softwares.module.css';

export default function Softwares() {
  return (
    <div className={estilos.container_backend}>
      <h2>Downloads</h2>
      
      <p>
      O Sistema Preven foi desenvolvido para o gerenciamento das atividades do usuário com a finalidade de prevenir as doenças ocupacionais em informática (DOI). Obs: A opção Público Infantil funciona apenas se EXECUTAR o sistema Preven como ADMINISTRADOR. Clique com o botão direito no arquivo Preven e em seguida em EXECUTAR COMO ADMINISTRADOR.
      </p>
      <Link
        href="https://drive.usercontent.google.com/download?id=1-p05Iv8lqMPZKbsIoBuY9G_igTzs9ecX&export=download&authuser=0" 
        target="_blank"
      >Download disponível para Windows: Preven</Link>

      <p>
      Sentinela, também, é um sistema que auxilia na prevenção às doenças ocupacionais em informática, ele complementa o objetivo do Preven. Durante a atividade são exibidas imagens, que alerta o usuário sobre a velocidade de digitação praticada:
      <ul type="none">
          <li>Verde - um número menor que 115 dígitos por minuto.</li>
          <li>Amarelo - um número maior que 115 e menor ou igual a 133 dígitos por minuto.</li>
          <li>Vermelho - um número maior que 133 dígitos por minuto.</li>
      </ul>
      </p>
      <Link
        href="https://drive.usercontent.google.com/download?id=1-7DHg8hum1EUhitljD-Xwn_gtSstUg_R&export=download&authuser=0"
        target="_blank"
      >Download disponível para Windows: Sentinela</Link>

      <p>Guia de Apresentação</p>
      <Link className="link_retorno" href="/">Voltar</Link>
    </div>
  );
}