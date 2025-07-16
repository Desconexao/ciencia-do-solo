class Quiz {
  constructor() {
    this.quizzes = [
      {
        title: "Principais horizontes e camadas do solo",
        questions: [
          {
            question:
              "Camada subsuperficial com pouca influência de matéria orgânica",
            options: [
              "Horizonte C",
              "Horizonte R",
              "Horizonte B",
              "Horizonte O",
            ],
            answer: "Horizonte B",
          },
          {
            question:
              "Camada com textura arenosa e cor clara por conta de perda de argila, óxidos de ferro e alumínio ou matéria orgânica",
            options: [
              "Horizonte A",
              "Horizonte E",
              "Horizonte C",
              "Horizonte R",
            ],
            answer: "Horizonte E",
          },
          {
            question:
              "Camada constituída de restos orgânicos em condições de boa drenagem",
            options: [
              "Horizonte O",
              "Horizonte H",
              "Horizonte B",
              "Horizonte A",
            ],
            answer: "Horizonte O",
          },
          {
            question:
              "Camada de material consolidado, constituída de material rochoso",
            options: [
              "Horizonte R",
              "Horizonte H",
              "Horizonte E",
              "Horizonte B",
            ],
            answer: "Horizonte R",
          },
          {
            question:
              "Camada constituída de restos orgânicos em condições de má drenagem",
            options: [
              "Horizonte E",
              "Horizonte H",
              "Horizonte O",
              "Horizonte B",
            ],
            answer: "Horizonte H",
          },
          {
            question: "Camada pouco afetada pelos processos pedogenéticos",
            options: [
              "Horizonte A",
              "Horizonte R",
              "Horizonte E",
              "Horizonte C",
            ],
            answer: "Horizonte C",
          },
          {
            question: "Camada mineral enriquecida por matéria orgânica",
            options: [
              "Horizonte O",
              "Horizonte E",
              "Horizonte A",
              "Horizonte B",
            ],
            answer: "Horizonte A",
          },
        ],
      },
      {
        title: "Horizontes diagnósticos superficiais",
        questions: [
          {
            question:
              "Horizonte mineral; geralmente espesso; cor escura; baixa saturação por bases; agregação e grau de desenvolvimento moderado ou forte; teor de carbono orgânico ≥0.6%",
            options: [
              "Horizonte hístico",
              "Horizonte A proeminente",
              "Horizonte A húmico",
              "Horizonte A chernozêmico",
            ],
            answer: "Horizonte A húmico",
          },
          {
            question:
              "Horizonte superficial; cor escura; espesso; formado ou modificado pelo uso contínuo e prolongado do solo pelo homem",
            options: [
              "Horizonte A moderado",
              "Horizonte A chernozêmico",
              "Horizonte A fraco",
              "Horizonte A antrópico",
            ],
            answer: "Horizonte A antrópico",
          },
          {
            question:
              "Horizonte sob condições de excesso de água por longos períodos; ou materiais depositados em condições de drenagem livre; sem estagnação de água; teor de carbono orgânico ≥8%",
            options: [
              "Horizonte A moderado",
              "Horizonte A húmico",
              "Horizonte hístico",
              "Horizonte A proeminente",
            ],
            answer: "Horizonte hístico",
          },
          {
            question:
              "Horizonte com cores claras; teor de carbono ≤ 0.6%; espessura estreita; estrutura fraca; nível de desenvolvimento baixo",
            options: [
              "Horizonte A fraco",
              "Horizonte A chernozêmico",
              "Horizonte A antrópico",
              "Horizonte A proeminente",
            ],
            answer: "Horizonte A fraco",
          },
          {
            question:
              "Horizonte que não se enquadra no conjunto de definições dos demais horizontes diagnósticos superficiais",
            options: [
              "Horizonte A moderado",
              "Horizonte A húmico",
              "Horizonte A antrópico",
              "Horizonte A fraco",
            ],
            answer: "Horizonte A moderado",
          },
          {
            question:
              "Horizonte mineral; cor escura; baixa saturação por base; maior conteúdo de carbono orgânico de acordo com a espessura e profundidade do solo",
            options: [
              "Horizonte A chernozêmico",
              "Horizonte A antrópico",
              "Horizonte A húmico",
              "Horizonte A proeminente",
            ],
            answer: "Horizonte A proeminente",
          },
          {
            question:
              "Horizonte mineral; cor escura; alta saturação por base; em maioria espesso; agregação e grau de desenvolvimento moderado ou forte; teor de carbono orgânico ≥0.6%",
            options: [
              "Horizonte hístico",
              "Horizonte A proeminente",
              "Horizonte A chernozêmico",
              "Horizonte A húmico",
            ],
            answer: "Horizonte A chernozêmico",
          },
        ],
      },
      {
        title: "Horizontes diagnósticos subsuperficiais",
        questions: [
          {
            question:
              "Horizonte fortemente cimentado por sílica, óxido de ferro ou carbono de cálcio; quebradiço e consistência firme ou extremamente firme até mesmo úmido; raízes e água não penetram na parte cimentada",
            options: [
              "Horizonte plíntico",
              "Fragipä",
              "Duripă",
              "Horizonte B incipiente",
            ],
            answer: "Duripă",
          },
          {
            question:
              "Horizonte com mudança textural abrupta; estrutura prismática, colunar ou em blocos; permeabilidade lenta ou muito lenta; pode ser responsável pela formação de lençol d'água; elevados teores de argila dispersa em água; cores acinzentadas ou escurecidas com ou sem mosqueados",
            options: [
              "Horizonte glei",
              "Horizonte B espódico",
              "Horizonte B textural",
              "Horizonte B plânico",
            ],
            answer: "Horizonte B plânico",
          },
          {
            question:
              "Horizonte em estágio avançado de intemperização; intensa dessilicação, lixiviação de bases e concentração de óxidos de ferro e alumínio; minerais resistentes ao intemperismo; argilominerais tipo 1:1; textura franco arenosa ou mais fina; baixo teores de silte; espessura ≥50cm",
            options: [
              "Horizonte vértico",
              "Horizonte B incipiente",
              "Horizonte B latossólico",
              "Horizonte concrecionário",
            ],
            answer: "Horizonte B latossólico",
          },
          {
            question:
              "Horizonte endurecido quando seco, porém diminui a rigidez quando úmido; textura média; teor de matéria orgânica muito baixo; pode dificultar ou impedir a penetração de raízes e da água",
            options: [
              "Horizonte B espódico",
              "Duripä",
              "Fragipä",
              "Horizonte álbico",
            ],
            answer: "Fragipä",
          },
          {
            question:
              "Horizonte com acúmulo de argila por conta do processo de eluviação-iluviação de argila; textura francoarenosa ou mais fina",
            options: [
              "Horizonte B latossólico",
              "Horizonte B nítico",
              "Horizonte B sulfúrico",
              "Horizonte B textural",
            ],
            answer: "Horizonte B textural",
          },
          {
            question:
              "Horizonte de acumulação de carbonato de cálcio; possui espessura ≥ 15cm; contém CaCO3≥15%",
            options: [
              "Horizonte B nítico",
              "Horizonte vértico",
              "Horizonte cálcico",
              "Horizonte B espódico",
            ],
            answer: "Horizonte cálcico",
          },
          {
            question:
              "Horizonte com espessura > 15cm; formado pela oxidação de minerais ou orgânicos ricos em sulfetos; acidez altamente tóxica para a maioria das plantas",
            options: [
              "Horizonte B incipiente",
              "Horizonte plíntico",
              "Horizonte vértico",
              "Horizonte sulfúrico",
            ],
            answer: "Horizonte sulfúrico",
          },
          {
            question:
              "Horizonte apresenta pouca alteração física e química, porém o suficiente para o desenvolvimento de cor e estrutura; espessura ≥ 10cm; mais da metade do volume dos sub-horizontes não deve consistir em estrutura da rocha original",
            options: [
              "Horizonte vértico",
              "Horizonte B latossólico",
              "Horizonte B incipiente",
              "Horizonte B nítico",
            ],
            answer: "Horizonte B incipiente",
          },
          {
            question:
              "Horizonte de textura argilosa ou muito argilosa; não hidromórfico; transição gradual ou difusa entre os sub-horizontes; estrutura em blocos ou prismática em grau de desenvolvimento moderado ou forte; grau de cerosidade moderado ou forte, na forma de superfícies reluzentes",
            options: [
              "Horizonte B textural",
              "Horizonte B latossólico",
              "Horizonte B nítico",
              "Horizonte sulfúrico",
            ],
            answer: "Horizonte B nítico",
          },
          {
            question:
              "Horizonte caracterizado pela presença de plintita em quantidade ≥ 15%; espessura ≥ 15cm; cor geralmente variegada; quando seco é muito compacto, duro a extremamente duro; quando úmido é firme ou muito firme",
            options: [
              "Horizonte plíntico",
              "Horizonte B espódico",
              "Horizonte vértico",
              "Horizonte álbico",
            ],
            answer: "Horizonte plíntico",
          },
          {
            question:
              "Horizonte constituído por 50% ou mais de material grosseiro; predomínio de petroplintita; espessura ≥ 30cm",
            options: [
              "Horizonte plíntico",
              "Horizonte vértico",
              "Horizonte B incipiente",
              "Horizonte concrecionário",
            ],
            answer: "Horizonte concrecionário",
          },
          {
            question:
              "Horizonte apresenta acúmulo iluvial de matéria orgânica; podzolização, favorecidos em solos arenosos com pH muito ácido",
            options: [
              "Horizonte álbico",
              "Horizonte B espódico",
              "Horizonte B nítico",
              "Horizonte cálcico",
            ],
            answer: "Horizonte B espódico",
          },
          {
            question:
              "Horizonte de cor clara; muito empobrecido de argila, matéria orgânica e óxidos de ferro; espessura >= 1cm",
            options: [
              "Horizonte álbico",
              "Horizonte B latossólico",
              "Horizonte cálcico",
              "Horizonte vértico",
            ],
            answer: "Horizonte álbico",
          },
          {
            question:
              "Horizonte argiloso ou muito argiloso; argila tipo 2:1 expansiva; slickensides; cores escuras, acinzentadas, amareladas ou avermelhadas; muito ou extremamente duro quando seco; plástico a muito pegajoso quando úmido; em certas épocas possui fendas >= 1cm de largura; possui espessura ≥ 20cm",
            options: [
              "Horizonte glei",
              "Horizonte vértico",
              "Horizonte concrecionário",
              "Horizonte B latossólico",
            ],
            answer: "Horizonte vértico",
          },
          {
            question:
              "Horizontes de cores acinzentadas claras ou escuras; reações de redução de ferro; espessura >= 15cm; virtualmente livre de oxigênio por conta da estagnação d'água durante um extenso período",
            options: [
              "Horizonte glei",
              "Horizonte álbico",
              "Horizonte B plânico",
              "Horizonte B espódico",
            ],
            answer: "Horizonte glei",
          },
        ],
      },
      {
        title: "Classificação brasileira dos solos",
        questions: [
          {
            question:
              "Sequência: A->R; A->C; A->C->R; A->Cr->R; 0->R; H->C • Solos minerais ou orgânicos; pouco desenvolvido; pouca profundidade, com espessura ≤20cm; geralmente ocorre em regiões de relevo forte ondulado ou montanhoso",
            options: ["Cambissolos", "Neossolos", "Organossolos", "Luvissolos"],
            answer: "Neossolos",
          },
          {
            question:
              "Sequência: A->Bf->C • Solos minerais; horizonte B com coloração mosqueada ou concreções cimentadas; relevo plano a suave ondulado; saturação temporária e oscilações do lençol freático; normalmente ácidos; baixa saturação por bases",
            options: [
              "Vertissolos",
              "Chernossolos",
              "Gleissolos",
              "Plintossolos",
            ],
            answer: "Plintossolos",
          },
          {
            question:
              "Sequência: A->Bt->C; A->E->Bt->C • Solos minerais; horizonte B textural; argila de atividade baixa ou alta; profundos a muito profundos; saturação por bases baixa ou caráter alítico; relevo suave ondulado a forte ondulado; distrófico; forte acidez; alta saturação por alumínio",
            options: [
              "Organossolos",
              "Gleissolos",
              "Argissolos",
              "Espodossolos",
            ],
            answer: "Argissolos",
          },
          {
            question:
              "Horizonte Bh imediatamente abaixo do horizonte E ou A. Horizonte mineral apresenta acumulação iluvial de matéria orgânica; podzolização, favorecido em solos arenosos com pH muito ácido",
            options: [
              "Latossolos",
              "Vertissolos",
              "Espodossolos",
              "Chernossolos",
            ],
            answer: "Espodossolos",
          },
          {
            question:
              "Sequência: A->Bt->C; A->Bi->C • Solos minerais; horizonte superficial escuro; rasos a profundos; teores de material orgânico razoáveis; alta fertilidade química; argila de atividade alta; alta CTC em todo o perfil",
            options: [
              "Cambissolos",
              "Chernossolos",
              "Vertissolos",
              "Planossolos",
            ],
            answer: "Chernossolos",
          },
          {
            question:
              "Sequência: A->Cv; A->Biv->Cv • Solos minerais; pequena variação de textura ao longo do perfil; cores escuras ou cinzentas; argilominerais expansivos; extremamente duros quando secos e muito plásticos e pegajosos quando úmidos; pH ligeiramente alto; elevada fertilidade natural; elevada CTC",
            options: [
              "Vertissolos",
              "Espodossolos",
              "Latossolos",
              "Chernossolos",
            ],
            answer: "Vertissolos",
          },
          {
            question:
              "Sequência: A->B->C • Solos minerais; profundos; solos ácidos; argila de atividade baixa ou caráter alítico; transição difusa ou gradual entre os horizontes; estrutura de blocos angulares ou subangulares com revestimento reluzente; predomínio de caulinita e óxidos de ferro",
            options: ["Cambissolos", "Planossolos", "Latossolos", "Nitossolos"],
            answer: "Nitossolos",
          },
          {
            question:
              "Sequência: A->E->Bt->C • Solos minerais; imperfeitamente ou mal drenados; relevo plano a suave ondulado; mudança textural abrupta; com ou sem mosqueados; apto para o cultivo de arroz inundado",
            options: ["Planossolos", "Espodossolos", "Latossolos", "Neossolos"],
            answer: "Planossolos",
          },
          {
            question:
              "Horizonte H hístico • Espessura ≥40cm solo constituído de material orgânico; baixa densidade do solo",
            options: ["Gleissolos", "Luvissolos", "Argissolos", "Organossolos"],
            answer: "Organossolos",
          },
          {
            question:
              "Sequência: A->Bw->C • Solos minerais; bem drenados; profundos ou muito profundos; muito intemperizados; transição difusa ou gradual; baixa reserva de nutrientes; acidez acentuada; toxidez por alumínio para as plantas",
            options: [
              "Nitossolos",
              "Planossolos",
              "Plintossolos",
              "Latossolos",
            ],
            answer: "Latossolos",
          },
          {
            question:
              "Sequência: A->Cg; A->Bg->Cg; H->Cg • Solos minerais; pouco profundos a profundos; mal drenados; cor acinzentada ou preta",
            options: ["Luvissolos", "Gleissolos", "Cambissolos", "Neossolos"],
            answer: "Gleissolos",
          },
          {
            question:
              "Sequência: A->Bi->C; O->A->Bi->C • Solos minerais; rasos a profundos; solo em processo incipiente de formação; presença de fragmentos de rocha; bem drenados a imperfeitamente drenados",
            options: ["Neossolos", "Latossolos", "Cambissolos", "Nitossolos"],
            answer: "Cambissolos",
          },
          {
            question:
              "Sequência: A->Bt->C • Solos minerais; pouco profundos; acumulação subsuperficial de argila; bem a imperfeitamente drenados; boa fertilidade química natural, que está relacionada ao teor de argila e de matéria orgânica; alta saturação por bases",
            options: ["Chernossolos", "Luvissolos", "Vertissolos", "Neossolos"],
            answer: "Luvissolos",
          },
        ],
      },
    ];

    this.screens = document.querySelectorAll(".screen");
    this.playButton = document.querySelector(".play-btn");
    this.creditsButton = document.querySelector(".credits-btn");
    this.quizTitle = document.querySelector(".quiz-title");
    this.questionContainer = document.querySelector(".question-container");
    this.answersContainer = document.querySelector(".answers-container");
    this.scoreText = document.querySelector(".score-text");
    this.progressText = document.querySelector(".progress-text");
    this.nextQuestionButton = document.querySelector(".next-question-btn");
    this.finalScoreText = document.querySelector(".final-score-text");
    this.playAgainBtn = document.querySelector(".play-again-btn");
    this.currentQuiz = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.addEventListeners();
  }

  addEventListeners() {
    this.playButton.addEventListener("click", () =>
      this.showScreen("level-select-screen"),
    );
    this.creditsButton.addEventListener("click", () =>
      this.showScreen("credits-screen"),
    );
    this.nextQuestionButton.addEventListener("click", () =>
      this.showNextQuestion(),
    );
    this.playAgainBtn.addEventListener("click", () =>
      this.showScreen("level-select-screen"),
    );
    document.querySelectorAll(".back-to-menu-btn").forEach((btn) => {
      btn.addEventListener("click", () => this.showScreen("main-menu-screen"));
    });
    document.querySelectorAll(".level-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const level = parseInt(btn.dataset.level);
        this.startQuiz(level);
      });
    });
  }

  showScreen(screenClass) {
    this.screens.forEach((screen) => {
      screen.classList.toggle("active", screen.classList.contains(screenClass));
    });
  }

  startQuiz(quizIndex) {
    const originalQuiz = this.quizzes[quizIndex];

    const shuffledQuestions = [...originalQuiz.questions].sort(
      () => Math.random() - 0.5,
    );

    this.currentQuiz = {
      title: originalQuiz.title,
      questions: shuffledQuestions,
    };

    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizTitle.textContent = this.currentQuiz.title;
    this.scoreText.textContent = `Pontos: 0`;
    this.showScreen("game-screen");
    this.displayQuestion();
  }

  displayQuestion() {
    this.nextQuestionButton.style.display = "none";
    this.answersContainer.innerHTML = "";

    const questionData = this.currentQuiz.questions[this.currentQuestionIndex];
    const correctAnswer = questionData.answer;

    this.questionContainer.innerHTML = questionData.question.replace(
      /•/g,
      "<br>•",
    );
    this.progressText.textContent = `Questão ${this.currentQuestionIndex + 1} / ${this.currentQuiz.questions.length}`;

    const allAnswersInLevel = [
      ...new Set(this.currentQuiz.questions.map((q) => q.answer)),
    ];

    const distractors = allAnswersInLevel.filter(
      (ans) => ans !== correctAnswer,
    );

    const shuffledDistractors = distractors.sort(() => Math.random() - 0.5);
    const selectedDistractors = shuffledDistractors.slice(0, 3);

    let finalOptions = [correctAnswer, ...selectedDistractors];

    finalOptions.sort(() => Math.random() - 0.5);

    finalOptions.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("answer-btn");
      button.addEventListener("click", () =>
        this.selectAnswer(button, option, correctAnswer),
      );
      this.answersContainer.appendChild(button);
    });
  }

  selectAnswer(button, selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
      this.score++;
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
    Array.from(this.answersContainer.children).forEach((btn) => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
      btn.disabled = true;
    });
    this.scoreText.textContent = `Pontos: ${this.score}`;
    this.nextQuestionButton.style.display = "block";
  }

  showNextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.currentQuiz.questions.length) {
      this.displayQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    this.finalScoreText.textContent = `Sua pontuação final foi: ${this.score} de ${this.currentQuiz.questions.length}.`;
    this.showScreen("results-screen");
  }
}

const quiz = new Quiz();
