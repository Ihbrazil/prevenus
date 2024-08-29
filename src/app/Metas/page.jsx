import Link from 'next/link';
import Image from "next/image";

import estilos from './Metas.module.css';

export default function Metas() {
  return (
    <div className={estilos.container_backend}>
        <h2>Metas</h2>
        <span> Interação Humano-Computador</span>
        <p>
        As principais metas do projeto estão em sintonia com os objetivos da Interação Humano-Computador (IHC), uma disciplina da engenharia de software que estuda a melhor forma de adequar as interfaces físicas ou lógicas ao uso humano. O projeto faz uso de conhecimentos obtidos da ergonomia de interfaces e da medicina preventiva, através de estudos das dificuldades dos usuários e empresas frente a uma evolução constante do Hardware, do Software, do ritmo de trabalho cada dia mais acelerado e, também, ao tempo e a forma na utilização de uma aplicação computacional. A complexidade das interfaces está em constante evolução. A aplicação da usabilidade e da Ergonomia no desenvolvimento de interfaces deve conscientizar o usuário sobre a importância de considerar capacidades e limitações dos usuários do sistema informatizado, deve também, proporcionar ao usuário a realização de tarefas de modo mais eficaz, eficiente e salutar. Deve proporcionar o estudo de modelos e teorias cognitivas que fundamentam critérios e recomendações ergonômicas. Uma boa parte dos usuários não tem conhecimento que o uso prolongado do computador pode acarretar problemas de saúde se não forem tomadas as devidas precauções. Usando-se qualquer máquina por um tempo prolongado deve-se tomar cuidados extras com os limites do corpo humano. Por conta desta e outras situações ocupacionais a prevenção tornou-se fundamental para os profissionais que tem como ferramenta de trabalho o computador.
        </p>

        <p>Guia de Apresentação</p>
        <Link className="link_retorno" href="/">Voltar</Link>
    </div>
  );
}