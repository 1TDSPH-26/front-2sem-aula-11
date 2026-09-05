import { useState } from "react";
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {

    let nome: string | null = "Alê";
    const[nomeState, setNomeState] = useState<String | null>("Joel");

    function alteraNome(){
        nome = prompt("Digite seu nome:");
        console.log("Nome digitado: ", nome);

    }
    function alteraState() {
        const nome: string | null = prompt("digite seu nome:")
        setNomeState(nome);
        console.log("Nome digitado: ", nomeState);
    }

    return (
        <main>
            <div>
                <p>Nome : {nome}</p>
                <button onClick={alteraNome}>Nome = {nome}</button>
            </div>
            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraState}>Nome = {nomeState}</button>
            </div>
            <section>
                <h2>Conteúdo básico</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cumque dolore asperiores dolorum eaque commodi numquam adipisci? Quibusdam optio repellat non. Repellat, corporis veniam velit aliquid repellendus autem pariatur. Libero?</p>
            </section>
            <section>
                <h2>Exemplo de imagem</h2>
                <figure>
                    <img src="https://placehold.co/400x400/1c1c1c1/000000/png" alt="Imagem e exemplo" />
                    <figcaption>Bloco de imagens 400 x 400</figcaption>
                </figure>
                <figure>
                    <img src={imgQuadrada} alt="Imagem e exemplo" />
                    <figcaption>Bloco de imagens 400 x 400</figcaption>
                </figure>
            </section>
            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eligendi repellendus a incidunt nam assumenda animi, dolore consectetur iure rerum repudiandae. Recusandae molestias doloremque, velit cum quibusdam eius fugiat optio voluptates repellendus tempore! Illum, a iure! Natus quos aliquid in cupiditate corrupti vel atque, dignissimos distinctio consequatur sit nostrum saepe.</p>
            </section>
        </main>
    )
}