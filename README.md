# Flashcard Game - Soil Science 🧪

![Status](https://img.shields.io/badge/status-completed-green)

An interactive and dynamic flashcard game, created as a study tool for the Soil Science discipline. The project was developed based on a PDF study material and transformed into a lightweight and responsive web application.

![Game Demonstration](./quiz.png)

---

## ✨ Features

- **Interactive Quiz**: Four levels of increasing difficulty, based on the topics of the study material.
- **Total Randomness**: The order of questions and answer options is shuffled with each new game.
- **Intelligent Answer Generation**: Incorrect options are drawn from the total set of answers for the level, making the challenge more realistic.
- **Instant Feedback**: The player receives immediate visual feedback (correct or incorrect) when choosing an answer.
- **Responsive Design**: An interface that adapts to desktops, tablets, and mobile devices.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**: Logic encapsulated in a `Quiz` class, following good object-oriented programming practices.

---

## 🚀 How to Run the Project

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Desconexao/ciencia-do-solo.git
    ```

2.  **Navigate to the project folder:**

    ```bash
    cd ciencia-do-solo
    ```

3.  **Open the `index.html` file:**
    The simplest way is to double-click the `index.html` file to open it directly in your browser. Or, for a better experience, use a local server like `live-server`.

---

## 🧠 Game Logic

The quiz's interactivity is controlled by the `Quiz` class in `ciencia_do_solo.js`. The most interesting aspects of the logic are:

#### Randomness

To ensure that each game is unique, shuffling (`.sort(() => Math.random() - 0.5)`) is used in two places:

1.  **Order of Questions**: At the beginning of each level.
2.  **Order of Answers**: For each question displayed.

#### Intelligent Answer Generation

The incorrect options are dynamically generated to increase the challenge:

1.  The system takes the **correct answer** for the current question.
2.  It creates a "pool" with all other possible answers from that level.
3.  **It draws 3 incorrect answers** from this pool.
4.  The 4 options (1 correct + 3 incorrect) are then shuffled and displayed.

---

## 👥 Credits

This project was based on study material and developed by:

-   **Original Material**: Profs. Luis Eduardo Akiyoshi Sanches Suzuki (UFPel) and Leomar Soares da Rosa Junior (UFPel).
-   **Development and Adaptation**: Vinicius da Paz Silva (UFPel) and Vinícius Lameirão de Lima (UFPel).
