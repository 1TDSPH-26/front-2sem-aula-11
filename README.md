# Aula — 3 de setembro de 2026
# Exercício — Lâmpada: variável comum versus `useState`

## Objetivo

Neste exercício, você criará duas lâmpadas:

1. Uma controlada por uma variável comum;
2. Outra controlada pelo Hook `useState`.

O objetivo é observar que uma variável comum pode mudar na memória, mas não atualiza automaticamente a interface. O `useState`, além de guardar o valor, solicita uma nova renderização do componente.

> **Hook** é uma função especial do React. O `useState` permite criar e atualizar o estado de um componente.

---

## Resultado esperado

A página deverá apresentar duas seções:

* Lâmpada controlada por variável comum;
* Lâmpada controlada por `useState`.

Ao clicar no primeiro botão, o valor será alterado somente no console.

Ao clicar no segundo botão, a imagem deverá alternar entre:

* Lâmpada acesa;
* Lâmpada apagada.

---

## 1. Organizar as imagens

Coloque as duas imagens dentro da pasta `public/images`:

```text
public/
└── images/
    ├── lampada-acesa.png
    └── lampada-apagada.png
```

Os arquivos da pasta `public` podem ser acessados diretamente pelo navegador.

Exemplo:

```tsx
<img src="/images/lampada-acesa.png" alt="Lâmpada acesa" />
```

---

## 2. Criar o componente

Crie a seguinte estrutura:

```text
src/
└── components/
    └── Lampada/
        └── index.tsx
```

No arquivo `src/components/Lampada/index.tsx`, comece com:

```tsx
import { useState } from 'react'

export default function Lampada() {
  // Variável comum.
  // Ela pode mudar, mas não atualiza a interface.
  let lampadaComumAcesa = false

  // Estado controlado pelo React.
  // false: lâmpada apagada.
  // true: lâmpada acesa.
  const [lampadaStateAcesa, setLampadaStateAcesa] =
    useState(false)

  function alternarVariavelComum() {
    // Inverte o valor da variável comum.
    lampadaComumAcesa = !lampadaComumAcesa

    // O novo valor poderá ser observado no console.
    console.log('Variável comum:', lampadaComumAcesa)
  }

  function alternarUseState() {
    // TODO:
    // Utilize setLampadaStateAcesa para inverter
    // o valor atual do estado.
  }

  return (
    <main>
      <h1>Variável comum versus useState</h1>

      <section>
        <h2>Lâmpada com variável comum</h2>

        <p>
          Estado:
          {lampadaComumAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={
            lampadaComumAcesa
              ? '/images/lampada-acesa.png'
              : '/images/lampada-apagada.png'
          }
          alt={
            lampadaComumAcesa
              ? 'Lâmpada controlada por variável comum acesa'
              : 'Lâmpada controlada por variável comum apagada'
          }
          width="250"
        />

        <div>
          <button
            onClick={alternarVariavelComum}
            type="button"
          >
            Alternar variável comum
          </button>
        </div>

        <p>
          Observe o console depois de pressionar o botão.
        </p>
      </section>

      <hr />

      <section>
        <h2>Lâmpada com useState</h2>

        <p>
          Estado:
          {lampadaStateAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={
            lampadaStateAcesa
              ? '/images/lampada-acesa.png'
              : '/images/lampada-apagada.png'
          }
          alt={
            lampadaStateAcesa
              ? 'Lâmpada controlada pelo useState acesa'
              : 'Lâmpada controlada pelo useState apagada'
          }
          width="250"
        />

        <div>
          <button
            aria-pressed={lampadaStateAcesa}
            onClick={alternarUseState}
            type="button"
          >
            {lampadaStateAcesa
              ? 'Apagar lâmpada'
              : 'Acender lâmpada'}
          </button>
        </div>
      </section>
    </main>
  )
}
```

---

## 3. Completar a função do `useState`

Dentro da função `alternarUseState`, utilize a função responsável por atualizar o estado:

```tsx
function alternarUseState() {
  setLampadaStateAcesa(
    (estadoAtual) => !estadoAtual,
  )
}
```

O símbolo `!` significa **negação**. Neste exemplo, ele inverte o valor:

```text
false → true
true  → false
```

---

## 4. Utilizar o componente no App

Abra o arquivo `src/App.tsx` e importe o componente:

```tsx
import Lampada from './components/Lampada'

export default function App() {
  return <Lampada />
}
```

---

## 5. Executar o projeto

No terminal, execute:

```bash
npm run dev
```

Abra o endereço apresentado pelo Vite no navegador.

---

## 6. Testar a variável comum

1. Abra o console do navegador;
2. Pressione o botão **Alternar variável comum**;
3. Observe os valores apresentados no console;
4. Confira se a imagem foi alterada na página.

O valor da variável mudará no console, mas a imagem continuará apagada.

Isso acontece porque uma variável comum não informa ao React que a interface precisa ser renderizada novamente.

---

## 7. Testar o `useState`

Pressione o botão da segunda lâmpada.

O comportamento esperado será:

```text
Clique no botão
      ↓
O estado é invertido
      ↓
O React renderiza o componente novamente
      ↓
A imagem e o texto são atualizados
```

A cada clique, a lâmpada deverá alternar entre acesa e apagada.

---

## Entendendo a operação ternária

A imagem é escolhida por uma operação ternária:

```tsx
lampadaStateAcesa
  ? '/images/lampada-acesa.png'
  : '/images/lampada-apagada.png'
```

A estrutura de uma operação ternária é:

```text
condição ? valor verdadeiro : valor falso
```

Portanto:

```text
lampadaStateAcesa === true
→ mostra lampada-acesa.png

lampadaStateAcesa === false
→ mostra lampada-apagada.png
```

---

## Requisitos obrigatórios

* [ ] Criar o componente `Lampada`;
* [ ] Importar `useState`;
* [ ] Criar uma variável comum;
* [ ] Criar um estado com `useState`;
* [ ] Utilizar as imagens acesa e apagada;
* [ ] Utilizar uma operação ternária;
* [ ] Criar um botão para cada exemplo;
* [ ] Alterar o texto do botão do `useState`;
* [ ] Utilizar textos alternativos no atributo `alt`;
* [ ] Não utilizar CSS;
* [ ] Não utilizar Tailwind CSS;
* [ ] Testar o resultado no navegador;
* [ ] Verificar a variável comum no console.

---

## Perguntas para responder

1. Por que a variável comum não atualiza a imagem na página?
2. O que a função `setLampadaStateAcesa` faz?
3. O que o símbolo `!` faz com um valor booleano?
4. Qual é a função da operação ternária?
5. O que acontece quando o estado é atualizado?
6. Por que utilizamos dois arquivos de imagem?
7. Qual é a diferença entre `lampadaStateAcesa` e `setLampadaStateAcesa`?

> **Valor booleano** é um valor que possui somente duas possibilidades: `true`, que significa verdadeiro, ou `false`, que significa falso.

---

## Desafio

Depois de concluir o exercício:

1. Faça a lâmpada começar acesa;
2. Adicione um título diferente para cada estado;
3. Mostre a mensagem `Economize energia!` quando a lâmpada estiver acesa;
4. Mostre a mensagem `A lâmpada está descansando.` quando ela estiver apagada;
5. Crie um segundo componente utilizando o mesmo conceito.

---

## Registrar a atividade no Git

Confira as alterações:

```bash
git status
```

Adicione os arquivos:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "feat: adiciona exercício da lâmpada com useState"
```

Publique as alterações:

```bash
git push
```
---


git push
```


---

Aula-04/09/2026 - USE-STATE

1 - git clone endereço remoto do repositório

2 - Acessar a pasta do repositório e verificar a branch atual com o comando git branch

3 - Se a branch for main, rode o git flow init, caso a branch seja develop, rode git switch main e depois rode git flow init.
Obs: Se estiver nas máquinas da instituição de ensino é necessário realizar a instalação do GitFlow através da seguinte linha de comando.
//Instalação do GITFLOW no WINDOWS
winget install GitTower.GitFlowNext

4 - Após rodar o git-flow, você deve fazer com o terminal local reconheça as branchs remotas, rode o comando git branch -a, uma listagem acontece, vá até o final deste e quando aparecer o END(só aparece end no caso do gitbash), pressione a tecla Q.

5 - Agora você consegue acessar sua branch, rode o comando git switch nomeDaSuaBranch Ex: feature/exemplo-rm666999

6 - Estando em sua branch, acesse a pasta  my-app que foi criada na tarefa da aula do dia 02/09/2026, rode o comando cd my-app.

7 - Agora podemos acessar o VSCode, rode o comando code . e depois pode fechar o gitbash.

8 - No VSCode, abra um terminal, de preferência um que seja o CMD por causa da compatibilidade com o JS, verifique se realmente está na pasta my-app, se estiver rode o comando npm i ou npm install para baixar as dependências do projeto.

9 - Agora podemos colocar o projeto no AR em modo de desenvolvimento,  rodando o comando npm run dev, neste momento o terminal fica travado, utilize os atalhos disponiveis neste terminal.

10 - Abra um novo terminal para ficar disponível para novas tarefas.

-------------------------------------------------------------------
INSTALANDO E CONFIGURANDO ROTAS NO PROJETO
-------------------------------------------------------------------
## 1. Instalar os pacotes

Execute no terminal:
```bash
npm install react-router
```
---

## 2. Criar a pasta de rotas

Crie a pasta `routes` dentro de `src`:

```text
src/
└── routes/
```
---

## 3. Criar os componentes de rota

Adote o seguinte padrão dentro de `src/routes`:
* O nome da subpasta será o nome do componente (ex: `/Produtos`);
* O arquivo do componente sempre se chamará `index.tsx`;
* A função exportada terá o mesmo nome da subpasta: `export default function NomeDaPasta() { ... }`.

Rotas a serem criadas:
* `src/routes/Home/index.tsx`
* `src/routes/Produtos/index.tsx`
* `src/routes/EditarProdutos/index.tsx`
* `src/routes/Error/index.tsx`

---

## 4 e 5. Importar recursos no `main.tsx`

No arquivo `src/main.tsx`, importe os componentes criados e os utilitários de roteamento:

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'
```

---

## 6. Configurar a árvore de rotas

Defina a constante `router` utilizando `createBrowserRouter`:

```tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> }
    ]
  }
])
```

---

## 7. Atualizar a renderização no `main.tsx`

Substitua `<App />` diretamente por `<RouterProvider router={router} />`:

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

---

## 8. Ajustar o layout no `App.tsx`

No componente `App.tsx`, substitua o conteúdo estático pelo componente `<Outlet />`:

```tsx
import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}
```

---

## 9. Testar rotas no navegador

Acesse diretamente pela URL para validar a navegação:
* `http://localhost:5173/`
* `http://localhost:5173/produtos`
* `http://localhost:5173/editar-produtos`

> **Nota:** O cabeçalho e o rodapé permanecem estáticos na tela; apenas a área do `<Outlet />` é atualizada.

---

## 10. Criar o componente `<Menu />`

Crie o componente de navegação usando `<Link>` e insira-o dentro do `<Cabecalho />`:

```tsx
import { Link } from 'react-router'

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/editar-produtos">Editar Produtos</Link></li>
      </ul>
    </nav>
  )
}
```
