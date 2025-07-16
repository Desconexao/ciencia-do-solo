# Jogo de Flashcards - Ciência do Solo 🧪

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)

Um jogo de flashcards interativo e dinâmico, criado como uma ferramenta de estudo para a disciplina de Ciência do Solo. O projeto foi desenvolvido com base em um material de estudo em PDF e transformado em uma aplicação web leve e responsiva.

![Demonstração do Jogo](./quiz.png)

---

## ✨ Funcionalidades

- **Quiz Interativo**: Quatro níveis de dificuldade crescente, baseados nos tópicos do material de estudo.
- **Aleatoriedade Total**: A ordem das perguntas e das opções de resposta é embaralhada a cada nova partida.
- **Geração Inteligente de Respostas**: As opções incorretas são sorteadas do conjunto total de respostas do nível, tornando o desafio mais realista.
- **Feedback Instantâneo**: O jogador recebe feedback visual imediato (correto ou incorreto) ao escolher uma resposta.
- **Design Responsivo**: Interface que se adapta a desktops, tablets e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**: Lógica encapsulada em uma classe `Quiz`, seguindo boas práticas de orientação a objetos.

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**

    ```bash.
    git clone [https://github.com/Desconexao/ciencia-do-solo.git](https://github.com/Desconexao/ciencia-do-solo.git)
    ```

2. **Navegue até a pasta do projeto:**

    ```bash
    cd ciencia-do-solo
    ```

3. **Abra o arquivo `index.html`:**
    A maneira mais simples é clicar duas vezes no arquivo `index.html` para abri-lo diretamente no seu navegador. Ou, para uma melhor experiência, use um servidor local como o `live-server`.

---

## 🧠 Lógica do Jogo

A interatividade do quiz é controlada pela classe `Quiz` em `ciencia_do_solo.js`. Os aspectos mais interessantes da lógica são:

#### Aleatoriedade

Para garantir que cada partida seja única, o embaralhamento (`.sort(() => Math.random() - 0.5)`) é usado em dois locais:

1. **Ordem das Perguntas**: No início de cada nível.
2. **Ordem das Respostas**: Para cada pergunta exibida.

#### Geração Inteligente de Respostas

As opções incorretas são geradas dinamicamente para aumentar o desafio:

1. O sistema pega a **resposta correta** da pergunta atual.
2. Cria uma "piscina" com todas as outras respostas possíveis do nível.
3. **Sorteia 3 respostas** incorretas.
4. As 4 opções (1 correta + 3 incorretas) são então embaralhadas e exibidas.

---

## 👥 Créditos

Este projeto foi baseado no material de estudo e desenvolvido por:

- **Material Original**: Profs. Luis Eduardo Akiyoshi Sanches Suzuki (UFPel) e Leomar Soares da Rosa Junior (UFPel).
- **Desenvolvimento e Adaptação**: Vinicius da Paz Silva (UFPel) e Vinícius Lameirão de Lima (UFPel).
