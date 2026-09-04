
import { useState } from "react";
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {
 
    let nome:string|null = "Mi"

    const [nomeState, setNomeState] = useState<string |null>("Joel");

    function alteraNome(){
        nome = prompt("Digite o novo nome: ");
        console.log("Nome digitado: ", nome);
    }

    function alteraState(){
        const nome: string | null = prompt("digite seu nome:")
        setNomeState((nomeStateAnterior) => nomeStateAnterior = nome);
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
                <h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum accusantium corporis ex illo nesciunt, et eos optio incidunt saepe, explicabo repellendus, recusandae sed? Id ea animi incidunt officiis eius?</p>
                </h2>
            </section>

            <section>
                <h2>Exemplo de Imagens </h2>
                {/* Esta imagem tem referência externa */}
                <figure>
                    <img src="https://placehold.co/400x400/c1c1c1/000000/png"
                        alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>

                {/* Esta imagem tem referência interna na /src */}
                <figure>
                    <img src={imgQuadrada} alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>

                {/* Esta imagem tem referência interna na public */}
                <figure>
                    <img src="/quadrado.png" alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400 x 400</figcaption>
                </figure>
            </section>

            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sit fugit, assumenda autem iure non optio facilis ex similique aut quaerat in reprehenderit nam, vel totam obcaecati? Pariatur, ipsum itaque?</p>
            </section>
    
        </main>
    );
}