// Importando os módulos necessários
import React from "react";
import estilos from './Contato.module.css';


export default function Contato() {
  return (
      <main>
        <section id='prevenus' className={estilos.secao_banner}>
            <div className={estilos.texto_banner}>
              <h1>
                  <a
                    className={estilos.link}
                    href='#contato'>
                    Contato
                  </a>
              </h1>
            </div>
        </section>

        <section id='contato' className={estilos.secao_contato}>
            <iframe
                className={estilos.form_contato}
                src="https://forms.office.com/r/A5tLEnqpBm?embed=true"
                frameborder="0"
                allowfullscreen
                webkitallowfullscreen
                mozallowfullscreen
                msallowfullscreen>
            </iframe>
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