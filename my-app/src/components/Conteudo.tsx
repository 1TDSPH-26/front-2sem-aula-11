import { useState } from 'react';
import quadrado from '../img/quadrado.png';

export default function Conteudo() {

  let nome: string | null = "PEDROSALVATORE";
  const [nomeState, setNomeState] = useState<string>("PEPE");

  function alteraNome() {
    nome = prompt("Digite o nome: ");
    console.log("Nome digitado: ", nome);
  }

  function alteraState() {
    setNomeState(prompt("Digite seu nome: ") || "");
    console.log("Nome digitado:", nomeState);
  }

  return (
    <main>
      <div>
        <p>Nome : {nome}</p>

        <button onClick={alteraNome}>
          Nome = {nome}
        </button>

        <p>Nome State: {nomeState}</p>

        <button onClick={alteraState}>
          Alterar nome
        </button>
      </div>

      <section>
        <h2>Exemplo imagens</h2>

        <figure>
          <img
            src="https://placehold.co/600x400/1c1c1c/FFFFFF/png"
            alt="Imagem de exemplo"
          />
          <figcaption>Figura 1: Imagem de exemplo</figcaption>
        </figure>

        <figure>
          <img src={quadrado} alt="Imagem de exemplo" />
          <figcaption>Figura 2: Imagem de exemplo</figcaption>
        </figure>
      </section>
    </main>
  );
}
