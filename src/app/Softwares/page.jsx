import Link from 'next/link';
import estilos from './Softwares.module.css';

export default function Softwares() {
  return (
    <main>
      <section id='prevenus' className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>
              <a href='#downloads'>Downloads</a>
            </h1>
          </div>
      </section>

      <section id='downloads' className={estilos.secao_nossos_sabores}>
            <div className={estilos.container_texto}>
                <h2>Preven</h2>
                <span>Download disponível para Windows</span>
                <p>O Sistema Preven foi desenvolvido para o gerenciamento das atividades do usuário com a finalidade de prevenir as doenças ocupacionais em informática (DOI). Obs: A opção Público Infantil funciona apenas se EXECUTAR o sistema Preven como ADMINISTRADOR. Clique com o botão direito no arquivo Preven e em seguida em EXECUTAR COMO ADMINISTRADOR.</p>
                
                <Link className={estilos.botao}
                  href="https://drive.usercontent.google.com/download?id=1-p05Iv8lqMPZKbsIoBuY9G_igTzs9ecX&export=download&authuser=0" 
                  target="_blank"
                  >Preven</Link>
                
            </div>
            <div className={estilos.container_texto}>
                <h2>Sentinela</h2>
                <span>Download disponível para Windows</span>
                <p>Sentinela, também, é um sistema que auxilia na prevenção às doenças ocupacionais em informática, ele complementa o objetivo do Preven. Durante a atividade são exibidas imagens, que alerta o usuário sobre a velocidade de digitação praticada:</p>
                <div>
                  <ul type="circle">
                      <li>Verde - um número menor que 115 dígitos por minuto.</li>
                      <li>Amarelo - um número maior que 115 e menor ou igual a 133 dígitos por minuto.</li>
                      <li>Vermelho - um número maior que 133 dígitos por minuto.</li>
                  </ul>
                </div>
                <Link className={estilos.botao}
                    href="https://drive.usercontent.google.com/download?id=1-7DHg8hum1EUhitljD-Xwn_gtSstUg_R&export=download&authuser=0"
                    target="_blank"
                    >Sentinela
                </Link>
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