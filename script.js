/**
 * ============================================================================
 * OdontoQuiz Pro — Cariologia: Mitos & Verdades sobre Cáries Dentárias
 * Banco de Dados Expandido (18 Questões), Modos de Jogo e UI Reativa
 * ============================================================================
 */

/**
 * 🦷 Banco de Dados Completo (18 Questões divididas em 3 Níveis de Complexidade)
 * - difficulty: 'easy' (Essencial) | 'medium' (Intermediário) | 'hard' (Clínico Avançado)
 */
const questionsDatabase = [
    // ========================================================================
    // NÍVEL ESSENCIAL (As 7 questões fundamentais + aprofundamento clínico)
    // ========================================================================
    {
        id: 1,
        category: "Dieta & Biofilme",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "O açúcar é o único causador das cáries.",
        answer: false,
        explanation:
            "A cárie é causada por bactérias do biofilme que metabolizam carboidratos fermentáveis e produzem ácidos. O açúcar (sacarose) é o substrato favorito delas, mas amidos cozidos (pães, massas, biscoitos) também são fermentados. O fator determinante é a desorganização inadequada do biofilme.",
        clinicalTip:
            "Alimentos ultraprocessados ricos em amido gelatinizado ficam retidos nos sulcos oclusais por mais tempo, prolongando a queda do pH."
    },
    {
        id: 2,
        category: "Sintomatologia & Histologia",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "Se o dente não está doendo, significa que não tem cárie.",
        answer: false,
        explanation:
            "Nas fases iniciais, a cárie atinge apenas o esmalte dentário — um tecido acelular e sem terminações nervosas. A sensibilidade ou dor só aparece quando a desmineralização alcança a dentina (pelos túbulos dentinários) ou a polpa.",
        clinicalTip:
            "O diagnóstico precoce em consultas de rotina permite identificar lesões em esmalte antes que haja qualquer sintoma doloroso ou cavitação."
    },
    {
        id: 3,
        category: "Higiene Oral & Abrasão",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "Escovar os dentes com muita força limpa melhor e evita cáries.",
        answer: false,
        explanation:
            "Força excessiva não remove mais bactérias; pelo contrário, curva as cerdas da escova, causa desgaste mecânico do esmalte (abrasão) e retração gengival, expondo a raiz do dente. O que limpa é a técnica correta com escova macia.",
        clinicalTip:
            "A exposição da dentina radicular por escovação traumática deixa o dente ainda mais vulnerável à cárie radicular, que progride rapidamente."
    },
    {
        id: 4,
        category: "Odontopediatria",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "Cárie em dente de leite não é problema, pois ele vai cair de qualquer jeito.",
        answer: false,
        explanation:
            "Os dentes decíduos (de leite) têm esmalte mais fino, guiam a erupção e guardam o espaço para os dentes permanentes. Uma cárie não tratada neles causa dor intensa, infecções periapicais e pode manchar ou deformar o dente permanente que está se formando logo abaixo.",
        clinicalTip:
            "A infecção no ápice de um dente decíduo pode causar hipoplasia ou hipomineralização no sucessor permanente (conhecida como Dente de Turner)."
    },
    {
        id: 5,
        category: "Fisiologia Salivar",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "A saliva ajuda a proteger os dentes contra as cáries.",
        answer: true,
        explanation:
            "A saliva atua como um sistema de defesa natural: realiza a limpeza mecânica dos resíduos, neutraliza os ácidos bacterianos (capacidade tampão) e fornece íons de cálcio e fosfato que repõem os minerais perdidos pelo esmalte.",
        clinicalTip:
            "O sistema tampão bicarbonato-ácido carbônico da saliva estimulada é o principal responsável por elevar o pH bucal de volta à neutralidade (~7,0)."
    },
    {
        id: 6,
        category: "Controle Mecânico",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "Mascar chiclete sem açúcar pode substituir a escovação em uma emergência.",
        answer: false,
        explanation:
            "Gomas de mascar sem açúcar (especialmente com xilitol) estimulam o fluxo salivar e ajudam a neutralizar ácidos, mas não têm capacidade de remover o biofilme bacteriano aderido às superfícies dentárias e interproximais.",
        clinicalTip:
            "O biofilme maduro possui uma matriz polimérica altamente aderente que só é desorganizada pelo atrito mecânico das cerdas da escova e do fio dental."
    },
    {
        id: 7,
        category: "Terapêutica do Flúor",
        difficulty: "easy",
        difficultyLabel: "Nível Essencial",
        statement: "O flúor na pasta de dentes é essencial para prevenir e até reverter cáries iniciais.",
        answer: true,
        explanation:
            "O fluoreto presente no creme dental (a partir de 1.000 ppm) acelera a remineralização do esmalte e inibe a desmineralização, podendo paralisar e reverter lesões iniciais antes que se tornem cavidades (buracos).",
        clinicalTip:
            "Na presença constante de flúor na saliva/biofilme, o dente forma minerais semelhantes à fluorapatita, muito mais resistentes aos ataques ácidos."
    },

    // ========================================================================
    // NÍVEL INTERMEDIÁRIO (Dinâmica Des-Re, Curva de Stephan, Clínica Moderna)
    // ========================================================================
    {
        id: 8,
        category: "Curva de Stephan & Dieta",
        difficulty: "medium",
        difficultyLabel: "Nível Intermediário",
        statement: "Comer uma sobremesa inteira de uma só vez causa menos risco de cárie do que beliscar a mesma quantidade de doce várias vezes ao longo do dia.",
        answer: true,
        explanation:
            "Para a cárie, a frequência de ingestão de açúcar é muito mais perigosa do que a quantidade absoluta consumida de uma vez. Cada vez que você belisca açúcar, o pH da placa cai abaixo do nível crítico por 20 a 40 minutos.",
        clinicalTip:
            "Segundo a Curva de Stephan, ingestões frequentes impedem o tempo necessário para a saliva tamponar os ácidos, mantendo o esmalte em desmineralização contínua."
    },
    {
        id: 9,
        category: "Erosão Ácida vs. Escovação",
        difficulty: "medium",
        difficultyLabel: "Nível Intermediário",
        statement: "Após tomar refrigerante, vinho ou suco cítrico, o ideal é escovar os dentes imediatamente para impedir a ação ácida.",
        answer: false,
        explanation:
            "Bebidas ácidas causam um amolecimento químico superficial do esmalte (erosão). Se você passar a escova imediatamente, o atrito mecânico removerá essa camada mineral fragilizada. O ideal é enxaguar com água e aguardar 20 a 30 minutos antes de escovar.",
        clinicalTip:
            "Esse intervalo de 30 minutos permite que os íons cálcio e fosfato da saliva reendureçam a superfície dos prismas de esmalte antes da ação mecânica da escova."
    },
    {
        id: 10,
        category: "Odontologia de Mínima Intervenção",
        difficulty: "medium",
        difficultyLabel: "Nível Intermediário",
        statement: "Toda lesão de cárie diagnosticada pelo dentista precisa necessariamente ser tratada com broca ('motorzinho') e restauração.",
        answer: false,
        explanation:
            "A Odontologia moderna atua com Mínima Intervenção: lesões de cárie iniciais não cavitadas (como manchas brancas restritas ao esmalte) podem ser totalmente paralisadas com controle de biofilme, ajuste na dieta e aplicação de flúor ou selantes, sem usar broca!",
        clinicalTip:
            "A restauração operatória só é indicada quando há cavitação que impede a limpeza do biofilme pelo paciente ou comprometimento estrutural/estético."
    },
    {
        id: 11,
        category: "Dentística & Restaurações",
        difficulty: "medium",
        difficultyLabel: "Nível Intermediário",
        statement: "Um dente que já recebeu uma restauração em resina ou coroa de porcelana está protegido e não pode sofrer cárie novamente.",
        answer: false,
        explanation:
            "O material restaurador em si não sofre cárie, mas a estrutura dentária ao redor dele continua vulnerável! Na interface entre o dente e a restauração pode surgir a chamada 'cárie secundária' (ou recorrente) se houver acúmulo de placa.",
        clinicalTip:
            "A cárie secundária na margem gengival das restaurações é a principal causa de substituição de restaurações na prática clínica odontológica."
    },
    {
        id: 12,
        category: "Etiologia Contemporânea",
        difficulty: "medium",
        difficultyLabel: "Nível Intermediário",
        statement: "Atualmente, a cárie é classificada como uma doença infecciosa clássica contagiosa, bastando adquirir a bactéria de outra pessoa para desenvolver a doença.",
        answer: false,
        explanation:
            "O consenso científico atual (ORCA/IADR) define a cárie não como uma infecção clássica contagiosa, mas como uma disbiose (desequilíbrio ecológico) do biofilme nativo, estritamente dependente do consumo frequente de açúcares livres.",
        clinicalTip:
            "Bactérias acidogênicas fazem parte da microbiota residente; é o excesso de açúcar que seleciona microrganismos acidúricos (que sobrevivem em meio ácido) e causa a doença."
    },

    // ========================================================================
    // NÍVEL CLÍNICO AVANÇADO (Bioquímica, pH Crítico, Histopatologia e Clínica)
    // ========================================================================
    {
        id: 13,
        category: "Bioquímica Mineral & pH Crítico",
        difficulty: "hard",
        difficultyLabel: "Clínico Avançado",
        statement: "O pH crítico para dissolução da hidroxiapatita do esmalte é de aproximadamente 5,5, mas na presença de fluorapatita esse limite cai para cerca de 4,5.",
        answer: true,
        explanation:
            "Exato! Quando o pH do biofilme cai entre 5,5 e 4,5 na presença de íons fluoreto, ao mesmo tempo em que a hidroxiapatita tende a se dissolver, ocorre a precipitação superficial de fluorapatita, protegendo o esmalte contra a perda mineral líquida.",
        clinicalTip:
            "Esse fenômeno físico-químico explica por que o flúor precisa estar presente constantemente em baixas concentrações nos fluidos bucais (saliva e fluido do biofilme)."
    },
    {
        id: 14,
        category: "Diagnóstico Diferencial Visual",
        difficulty: "hard",
        difficultyLabel: "Clínico Avançado",
        statement: "No exame clínico, uma lesão de mancha branca opaca e rugosa indica cárie inativa (paralisada), enquanto uma mancha branca lisa e brilhante indica lesão ativa.",
        answer: false,
        explanation:
            "É exatamente o inverso! Uma lesão de mancha branca ATIVA apresenta aspecto opaco (giz) e superfície porosa/rugosa devido à erosão superficial dos prismas. Já a mancha branca INATIVA (cicatrizada) é lisa e brilhante.",
        clinicalTip:
            "Por isso a profilaxia e a secagem com jato de ar por 5 segundos na cadeira odontológica são indispensáveis para diferenciar a refletividade e a textura da lesão."
    },
    {
        id: 15,
        category: "Microbiologia Molecular",
        difficulty: "hard",
        difficultyLabel: "Clínico Avançado",
        statement: "A sacarose é o carboidrato mais cariogênico porque é o único substrato que permite ao Streptococcus mutans sintetizar polissacarídeos extracelulares insolúveis (glucanos).",
        answer: true,
        explanation:
            "Perfeito! Através das enzimas glicosiltransferases (GTFs), a quebra da ligação energética da sacarose permite formar glucanos insolúveis (mutano), que funcionam como uma 'cola biológica' e deixam a matriz do biofilme mais porosa à difusão de açúcares.",
        clinicalTip:
            "Matrizes ricas em glucanos insolúveis impedem a entrada dos tampões salivares até a interface do esmalte, mantendo bolsos ácidos profundos junto ao dente."
    },
    {
        id: 16,
        category: "Histopatologia Dentinária",
        difficulty: "hard",
        difficultyLabel: "Clínico Avançado",
        statement: "A dentina é mais resistente aos ácidos do que o esmalte, exigindo um pH muito mais ácido (abaixo de 4,0) para começar a sofrer desmineralização.",
        answer: false,
        explanation:
            "Pelo contrário! A dentina possui menor conteúdo mineral (~70% contra ~96% do esmalte) e cristais de apatita muito menores e mais ricos em carbonato. Por isso, o pH crítico da dentina é muito mais alto: cerca de 6,0 a 6,5!",
        clinicalTip:
            "Isso explica por que a cárie radicular (em idosos ou pacientes com recessão gengival) inicia e avança tão rapidamente mesmo com quedas discretas de pH."
    },
    {
        id: 17,
        category: "Farmacologia & Pacientes Especiais",
        difficulty: "hard",
        difficultyLabel: "Clínico Avançado",
        statement: "Pacientes que usam medicamentos xerostômicos (como antidepressivos e anti-hipertensivos) ou fazem radioterapia de cabeça e pescoço podem desenvolver 'cáries rampantes' mesmo em superfícies normalmente imunes.",
        answer: true,
        explanation:
            "A redução severa do fluxo salivar (hipossalivação) elimina a capacidade tampão, a autolimpeza e a oferta de cálcio/fosfato. Isso leva a cáries agressivas que atacam até bordas incisais e superfícies cervicais lisas.",
        clinicalTip:
            "Nesses pacientes, o manejo exige substitutos salivares, dentifrícios de alto teor de flúor (5.000 ppm) e vernizes fluoretados frequentes."
    },
    {
        id: 18,
        category: "Radiologia & Semiologia",
        difficulty: "hard",
        difficultyLabel: "Clínico Avançado",
        statement: "A chamada 'cárie oculta' apresenta grande destruição na dentina visível em radiografias interproximais, apesar de a superfície oclusal do esmalte parecer praticamente intacta a olho nu.",
        answer: true,
        explanation:
            "Ocorre quando a lesão se inicia no fundo de uma fissura oclusal estreita: o esmalte superficial rico em flúor resiste ao colapso, mas o processo ácido se espalha lateralmente ao atingir a junção amelodentinária, solapando a dentina em silêncio.",
        clinicalTip:
            "Radiografias bitewing (interproximais) associadas à inspeção visual criteriosa evitam que lesões dentinárias ocultas só sejam descobertas após fratura do esmalte ou pulpite."
    }
];

/**
 * Estado Global da Partida
 */
let selectedMode = "all"; // 'all' (18), 'clinical' (11), 'quick' (10 sorteadas)
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentStreak = 0;
let bestStreak = 0;
let hasAnsweredCurrent = false;
let userHistory = [];
let currentReviewFilter = "all";

/**
 * Referências aos Elementos do DOM
 */
const dom = {
    // Cabeçalho e Mascote
    mascotFace: document.getElementById("mascot-face"),
    mascotMoodDot: document.getElementById("mascot-mood-dot"),
    mascotBtn: document.getElementById("mascot-btn"),
    headerStats: document.getElementById("header-stats"),
    streakBadge: document.getElementById("streak-badge"),
    currentStreak: document.getElementById("current-streak"),
    currentScore: document.getElementById("current-score"),
    totalQuestionsBadge: document.getElementById("total-questions-badge"),
    headerScoreBadge: document.getElementById("header-score-badge"),

    // Telas
    startScreen: document.getElementById("start-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultScreen: document.getElementById("result-screen"),

    // Botões de Modo na Tela Inicial
    modeBtnAll: document.getElementById("mode-btn-all"),
    modeBtnClinical: document.getElementById("mode-btn-clinical"),
    modeBtnQuick: document.getElementById("mode-btn-quick"),

    // Elementos do Jogo
    questionCounter: document.getElementById("question-counter"),
    stepperDots: document.getElementById("stepper-dots"),
    progressPercentage: document.getElementById("progress-percentage"),
    progressBar: document.getElementById("progress-bar"),
    questionCard: document.getElementById("question-card"),
    questionCategory: document.getElementById("question-category"),
    questionDifficulty: document.getElementById("question-difficulty"),
    questionText: document.getElementById("question-text"),

    // Botões Verdadeiro e Falso
    btnTrue: document.getElementById("btn-true"),
    btnFalse: document.getElementById("btn-false"),

    // Feedback Educativo & Clínico
    feedbackContainer: document.getElementById("feedback-container"),
    feedbackBox: document.getElementById("feedback-box"),
    feedbackIconWrapper: document.getElementById("feedback-icon-wrapper"),
    feedbackIcon: document.getElementById("feedback-icon"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackTitleMobile: document.getElementById("feedback-title-mobile"),
    correctAnswerPill: document.getElementById("correct-answer-pill"),
    correctAnswerPillMobile: document.getElementById("correct-answer-pill-mobile"),
    feedbackExplanation: document.getElementById("feedback-explanation"),
    feedbackClinicalTip: document.getElementById("feedback-clinical-tip"),
    btnNext: document.getElementById("btn-next"),
    btnNextLabel: document.getElementById("btn-next-label"),
    btnNextIcon: document.getElementById("btn-next-icon"),

    // Tela de Resultados
    resultScoreCircle: document.getElementById("result-score-circle"),
    resultEmoji: document.getElementById("result-emoji"),
    finalScore: document.getElementById("final-score"),
    finalTotal: document.getElementById("final-total"),
    resultBadgeText: document.getElementById("result-badge-text"),
    resultTitle: document.getElementById("result-title"),
    resultMessage: document.getElementById("result-message"),
    statAccuracy: document.getElementById("stat-accuracy"),
    statBestStreak: document.getElementById("stat-best-streak"),
    statAdvancedHits: document.getElementById("stat-advanced-hits"),
    reviewList: document.getElementById("review-list"),
    filterAll: document.getElementById("filter-all"),
    filterWrong: document.getElementById("filter-wrong"),
    filterCorrect: document.getElementById("filter-correct"),

    // Canvas de Confetes
    confettiCanvas: document.getElementById("confetti-canvas")
};

/**
 * Atualiza a expressão facial do Mascote Dente em SVG conforme o momento
 * @param {'happy' | 'thinking' | 'celebrate' | 'surprised'} mood
 */
function setMascotMood(mood) {
    if (!dom.mascotFace) return;

    if (mood === "celebrate") {
        // Olhinhos fechados sorrindo + grande sorriso aberto
        dom.mascotFace.innerHTML = `
            <path d="M19.5 25C20.5 22.8 24.5 22.8 25.5 25" stroke="#1F9D8B" stroke-width="3" stroke-linecap="round"/>
            <path d="M38.5 25C39.5 22.8 43.5 22.8 44.5 25" stroke="#1F9D8B" stroke-width="3" stroke-linecap="round"/>
            <circle cx="18" cy="29" r="3" fill="#FF9EAA"/>
            <circle cx="46" cy="29" r="3" fill="#FF9EAA"/>
            <path d="M24.5 29.5C26 35.5 38 35.5 39.5 29.5Z" fill="#1E2538" stroke="#1E2538" stroke-width="2" stroke-linejoin="round"/>
        `;
        if (dom.mascotMoodDot) dom.mascotMoodDot.textContent = "🎉";
    } else if (mood === "surprised") {
        // Olhinhos arregalados + boquinha de "oh!" educativa
        dom.mascotFace.innerHTML = `
            <circle cx="23" cy="25" r="2.6" fill="#1E2538"/>
            <circle cx="41" cy="25" r="2.6" fill="#1E2538"/>
            <path d="M19.5 20.5L25.5 21.5" stroke="#1E2538" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M44.5 20.5L38.5 21.5" stroke="#1E2538" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="18.5" cy="29.5" r="2.3" fill="#FF9EAA"/>
            <circle cx="45.5" cy="29.5" r="2.3" fill="#FF9EAA"/>
            <circle cx="32" cy="32" r="3.2" stroke="#E76F51" stroke-width="2.8" fill="none"/>
        `;
        if (dom.mascotMoodDot) dom.mascotMoodDot.textContent = "😮";
    } else if (mood === "thinking") {
        // Olhar curioso analisando a pergunta
        dom.mascotFace.innerHTML = `
            <circle cx="23" cy="25" r="2.5" fill="#1E2538"/>
            <circle cx="41" cy="25" r="2.5" fill="#1E2538"/>
            <path d="M19.5 21C21.5 19.5 24.5 19.5 26 21" stroke="#0077B6" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M38 20.5L44 20.5" stroke="#0077B6" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="18.5" cy="29.5" r="2.3" fill="#FF9EAA"/>
            <circle cx="45.5" cy="29.5" r="2.3" fill="#FF9EAA"/>
            <path d="M27.5 31.5C30 33 34 33 36.5 31" stroke="#1E2538" stroke-width="2.8" stroke-linecap="round"/>
        `;
        if (dom.mascotMoodDot) dom.mascotMoodDot.textContent = "🤔";
    } else {
        // 'happy' padrão acolhedor
        dom.mascotFace.innerHTML = `
            <path d="M20.5 25.5C20.5 24 21.8 23 23 23C24.2 23 25.5 24 25.5 25.5" stroke="#1E2538" stroke-width="3" stroke-linecap="round"/>
            <path d="M38.5 25.5C38.5 24 39.8 23 41 23C42.2 23 43.5 24 43.5 25.5" stroke="#1E2538" stroke-width="3" stroke-linecap="round"/>
            <circle cx="18.5" cy="29.5" r="2.5" fill="#FF9EAA"/>
            <circle cx="45.5" cy="29.5" r="2.5" fill="#FF9EAA"/>
            <path d="M26 30.5C27.5 34.2 36.5 34.2 38 30.5" stroke="#1E2538" stroke-width="3" stroke-linecap="round"/>
        `;
        if (dom.mascotMoodDot) dom.mascotMoodDot.textContent = "✨";
    }

    if (dom.mascotMoodDot) {
        dom.mascotMoodDot.style.transform = "scale(1.25)";
        setTimeout(() => {
            if (dom.mascotMoodDot) dom.mascotMoodDot.style.transform = "scale(1)";
        }, 220);
    }
}

/**
 * Seleciona o modo de jogo na Tela Inicial
 * @param {'all' | 'clinical' | 'quick'} mode
 */
function selectGameMode(mode) {
    selectedMode = mode;

    [dom.modeBtnAll, dom.modeBtnClinical, dom.modeBtnQuick].forEach((btn) => {
        btn.classList.remove("mode-card-active");
    });

    if (mode === "all") {
        dom.modeBtnAll.classList.add("mode-card-active");
        dom.totalQuestionsBadge.textContent = questionsDatabase.length;
    } else if (mode === "clinical") {
        dom.modeBtnClinical.classList.add("mode-card-active");
        const count = questionsDatabase.filter((q) => q.difficulty !== "easy").length;
        dom.totalQuestionsBadge.textContent = count;
    } else if (mode === "quick") {
        dom.modeBtnQuick.classList.add("mode-card-active");
        dom.totalQuestionsBadge.textContent = "10";
    }
}

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 */
function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

/**
 * Exibe a Tela Inicial de Seleção de Modo
 */
function showStartScreen() {
    setMascotMood("happy");
    dom.quizScreen.classList.add("hidden");
    dom.resultScreen.classList.add("hidden");
    dom.startScreen.classList.remove("hidden", "animate-fade-slide");
    void dom.startScreen.offsetWidth;
    dom.startScreen.classList.add("animate-fade-slide");
    if (window.innerWidth < 640) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

/**
 * Inicia a partida de acordo com o modo selecionado
 */
function startSelectedQuiz() {
    if (selectedMode === "all") {
        // Trilha Completa: 18 questões em ordem progressiva de dificuldade
        activeQuestions = [...questionsDatabase];
    } else if (selectedMode === "clinical") {
        // Desafio Clínico: Apenas Intermediárias e Avançadas (11 questões)
        activeQuestions = questionsDatabase.filter((q) => q.difficulty === "medium" || q.difficulty === "hard");
    } else {
        // Rodada Rápida: 10 questões sorteadas de todos os níveis
        activeQuestions = shuffleArray(questionsDatabase).slice(0, 10);
    }

    currentQuestionIndex = 0;
    score = 0;
    currentStreak = 0;
    bestStreak = 0;
    hasAnsweredCurrent = false;
    userHistory = [];

    dom.currentScore.textContent = "0";
    dom.currentStreak.textContent = "0";
    dom.totalQuestionsBadge.textContent = activeQuestions.length;
    dom.finalTotal.textContent = activeQuestions.length;

    dom.startScreen.classList.add("hidden");
    dom.resultScreen.classList.add("hidden");
    dom.quizScreen.classList.remove("hidden");

    renderQuestion();
    if (window.innerWidth < 640) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

/**
 * Reinicia imediatamente o modo atual
 */
function restartCurrentMode() {
    startSelectedQuiz();
}

/**
 * Atualiza as bolinhas de evolução (Stepper Dots) no topo do quiz
 */
function renderStepperDots() {
    dom.stepperDots.innerHTML = "";

    activeQuestions.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.className = "step-dot ";

        if (idx < userHistory.length) {
            dot.className += userHistory[idx].isCorrect ? "step-dot-correct" : "step-dot-wrong";
            dot.title = `Questão ${idx + 1}: ${userHistory[idx].isCorrect ? "Acertou" : "Errou"}`;
        } else if (idx === currentQuestionIndex) {
            dot.className += "step-dot-current";
            dot.title = `Questão atual (${idx + 1})`;
        } else {
            dot.className += "step-dot-pending";
        }

        dom.stepperDots.appendChild(dot);
    });
}

/**
 * Renderiza a pergunta atual na tela
 */
function renderQuestion() {
    hasAnsweredCurrent = false;
    setMascotMood("thinking");

    const currentQ = activeQuestions[currentQuestionIndex];
    const total = activeQuestions.length;
    const questionNumber = currentQuestionIndex + 1;
    const progressPercent = Math.round((questionNumber / total) * 100);

    // Atualiza contadores e barra
    dom.questionCounter.innerHTML = `<i class="fa-regular fa-circle-question"></i> Questão ${questionNumber} de ${total}`;
    dom.progressPercentage.textContent = `${progressPercent}% concluído`;
    dom.progressBar.style.width = `${(questionNumber / total) * 100}%`;

    renderStepperDots();

    // Animação de entrada do card
    dom.questionCard.classList.remove("animate-fade-slide", "animate-celebrate", "animate-shake");
    void dom.questionCard.offsetWidth;
    dom.questionCard.classList.add("animate-fade-slide");

    // Especialidade e Nível de Complexidade
    dom.questionCategory.innerHTML = `<i class="fa-solid fa-tooth"></i> ${currentQ.category}`;

    dom.questionDifficulty.className = "inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-lg ";
    if (currentQ.difficulty === "easy") {
        dom.questionDifficulty.classList.add("badge-easy");
        dom.questionDifficulty.innerHTML = `<i class="fa-solid fa-seedling text-[10px]"></i> ${currentQ.difficultyLabel}`;
    } else if (currentQ.difficulty === "medium") {
        dom.questionDifficulty.classList.add("badge-medium");
        dom.questionDifficulty.innerHTML = `<i class="fa-solid fa-flask text-[10px]"></i> ${currentQ.difficultyLabel}`;
    } else {
        dom.questionDifficulty.classList.add("badge-hard");
        dom.questionDifficulty.innerHTML = `<i class="fa-solid fa-microscope text-[10px]"></i> ${currentQ.difficultyLabel}`;
    }

    // Texto da afirmação
    dom.questionText.textContent = `"${currentQ.statement}"`;

    // Restaura botões Verdadeiro e Falso (mantendo responsividade mobile/PC)
    dom.btnTrue.disabled = false;
    dom.btnFalse.disabled = false;
    dom.btnTrue.className =
        "btn-answer btn-true rounded-2xl py-3.5 px-3.5 sm:py-4 sm:px-6 font-semibold text-sm sm:text-lg flex items-center justify-center sm:justify-between focus:outline-none focus:ring-4 focus:ring-odonto-mint/40";
    dom.btnFalse.className =
        "btn-answer btn-false rounded-2xl py-3.5 px-3.5 sm:py-4 sm:px-6 font-semibold text-sm sm:text-lg flex items-center justify-center sm:justify-between focus:outline-none focus:ring-4 focus:ring-odonto-coral/40";

    // Oculta feedback
    dom.feedbackContainer.classList.add("hidden");
}

/**
 * Processa o clique do jogador em Verdadeiro (true) ou Falso (false)
 * @param {boolean} userChoice
 */
function handleAnswer(userChoice) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const currentQ = activeQuestions[currentQuestionIndex];
    const isCorrect = userChoice === currentQ.answer;

    // Bloqueia botões
    dom.btnTrue.disabled = true;
    dom.btnFalse.disabled = true;

    // Estilo de seleção nos botões
    if (userChoice === true) {
        dom.btnFalse.classList.add("btn-dimmed");
        dom.btnTrue.classList.add(isCorrect ? "btn-selected-winner" : "btn-selected-loser");
    } else {
        dom.btnTrue.classList.add("btn-dimmed");
        dom.btnFalse.classList.add(isCorrect ? "btn-selected-winner" : "btn-selected-loser");
    }

    // Atualiza pontuação e combo (streak)
    if (isCorrect) {
        score++;
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
        }
        dom.currentScore.textContent = score;
        dom.currentStreak.textContent = currentStreak;

        setMascotMood("celebrate");

        dom.headerScoreBadge.classList.remove("animate-celebrate");
        void dom.headerScoreBadge.offsetWidth;
        dom.headerScoreBadge.classList.add("animate-celebrate");
    } else {
        currentStreak = 0;
        dom.currentStreak.textContent = "0";
        setMascotMood("surprised");
    }

    // Salva no histórico da partida
    userHistory.push({
        question: currentQ,
        userChoice,
        isCorrect
    });

    // Atualiza bolinha atual no stepper
    renderStepperDots();

    // Revela a explicação científica e nota clínica
    showEducationalFeedback(isCorrect, currentQ);
}

/**
 * Exibe a explicação detalhada + nota clínica ao usuário
 */
function showEducationalFeedback(isCorrect, questionObj) {
    const answerLabel = questionObj.answer ? "Verdadeiro" : "Falso";

    dom.feedbackBox.classList.remove("feedback-correct", "feedback-wrong");
    dom.feedbackIconWrapper.classList.remove("bg-odonto-mint", "bg-odonto-coral");
    dom.feedbackTitle.classList.remove("text-odonto-mint", "text-odonto-coral");
    dom.correctAnswerPill.classList.remove(
        "bg-odonto-mint/15",
        "text-odonto-mint",
        "bg-odonto-coral/15",
        "text-odonto-coral"
    );

    if (dom.feedbackTitleMobile) {
        dom.feedbackTitleMobile.classList.remove("text-odonto-mint", "text-odonto-coral");
    }
    if (dom.correctAnswerPillMobile) {
        dom.correctAnswerPillMobile.classList.remove(
            "bg-odonto-mint/15",
            "text-odonto-mint",
            "bg-odonto-coral/15",
            "text-odonto-coral"
        );
    }

    if (isCorrect) {
        const titleText =
            currentStreak >= 3 ? `Mandou muito bem! (${currentStreak}x 🔥)` : "Excelente! Você acertou!";
        dom.feedbackBox.classList.add("feedback-correct");
        dom.feedbackIconWrapper.classList.add("bg-odonto-mint");
        dom.feedbackIcon.className = "fa-solid fa-check";
        dom.feedbackTitle.textContent = titleText;
        dom.feedbackTitle.classList.add("text-odonto-mint");
        dom.correctAnswerPill.classList.add("bg-odonto-mint/15", "text-odonto-mint");

        if (dom.feedbackTitleMobile) {
            dom.feedbackTitleMobile.textContent = titleText;
            dom.feedbackTitleMobile.classList.add("text-odonto-mint");
        }
        if (dom.correctAnswerPillMobile) {
            dom.correctAnswerPillMobile.classList.add("bg-odonto-mint/15", "text-odonto-mint");
        }

        dom.questionCard.classList.remove("animate-fade-slide");
        void dom.questionCard.offsetWidth;
        dom.questionCard.classList.add("animate-celebrate");
        launchConfetti(30);
    } else {
        const titleText = "Pegadinha clínica! Veja o motivo:";
        dom.feedbackBox.classList.add("feedback-wrong");
        dom.feedbackIconWrapper.classList.add("bg-odonto-coral");
        dom.feedbackIcon.className = "fa-solid fa-lightbulb";
        dom.feedbackTitle.textContent = "Pegadinha clínica! Veja o motivo científico:";
        dom.feedbackTitle.classList.add("text-odonto-coral");
        dom.correctAnswerPill.classList.add("bg-odonto-coral/15", "text-odonto-coral");

        if (dom.feedbackTitleMobile) {
            dom.feedbackTitleMobile.textContent = titleText;
            dom.feedbackTitleMobile.classList.add("text-odonto-coral");
        }
        if (dom.correctAnswerPillMobile) {
            dom.correctAnswerPillMobile.classList.add("bg-odonto-coral/15", "text-odonto-coral");
        }

        dom.questionCard.classList.remove("animate-fade-slide");
        void dom.questionCard.offsetWidth;
        dom.questionCard.classList.add("animate-shake");
    }

    dom.correctAnswerPill.textContent = `Gabarito: ${answerLabel}`;
    if (dom.correctAnswerPillMobile) {
        dom.correctAnswerPillMobile.textContent = `Gabarito: ${answerLabel}`;
    }
    dom.feedbackExplanation.textContent = questionObj.explanation;
    dom.feedbackClinicalTip.textContent = questionObj.clinicalTip;

    const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;
    if (isLastQuestion) {
        dom.btnNextLabel.textContent = "Ver Diagnóstico Final";
        dom.btnNextIcon.className = "fa-solid fa-chart-pie";
    } else {
        dom.btnNextLabel.textContent = "Próxima Questão";
        dom.btnNextIcon.className = "fa-solid fa-arrow-right";
    }

    dom.feedbackContainer.classList.remove("hidden", "animate-fade-slide");
    void dom.feedbackContainer.offsetWidth;
    dom.feedbackContainer.classList.add("animate-fade-slide");
}

/**
 * Avança para a próxima questão ou finaliza o jogo
 */
function nextQuestion() {
    if (!hasAnsweredCurrent) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < activeQuestions.length) {
        renderQuestion();
        if (window.innerWidth < 640) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    } else {
        showResultsScreen();
        if (window.innerWidth < 640) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
}

/**
 * Exibe a Tela Final de Resultados com estatísticas detalhadas
 */
function showResultsScreen() {
    dom.quizScreen.classList.add("hidden");
    dom.resultScreen.classList.remove("hidden", "animate-fade-slide");
    void dom.resultScreen.offsetWidth;
    dom.resultScreen.classList.add("animate-fade-slide");

    const total = activeQuestions.length;
    const ratio = score / total;
    const percentage = Math.round(ratio * 100);

    // Calcula acertos em questões avançadas/intermediárias
    const complexQuestions = userHistory.filter((h) => h.question.difficulty !== "easy");
    const complexHits = complexQuestions.filter((h) => h.isCorrect).length;

    dom.finalScore.textContent = score;
    dom.statAccuracy.textContent = `${percentage}%`;
    dom.statBestStreak.textContent = `${bestStreak}x 🔥`;
    dom.statAdvancedHits.textContent = `${complexHits}/${complexQuestions.length}`;

    // Anima o gráfico circular
    const circumference = 326.72;
    const offset = circumference - ratio * circumference;
    dom.resultScoreCircle.style.strokeDashoffset = circumference;
    setTimeout(() => {
        dom.resultScoreCircle.style.strokeDashoffset = offset;
    }, 100);

    // Mensagem personalizada conforme desempenho percentual
    if (percentage >= 90) {
        setMascotMood("celebrate");
        dom.resultEmoji.textContent = "🦷👑";
        dom.resultBadgeText.textContent = `Excelência em Cariologia • ${percentage}%`;
        dom.resultTitle.textContent = "Você é um mestre da escovação e da Cariologia!";
        dom.resultMessage.textContent =
            "Desempenho brilhante! Você domina desde os cuidados preventivos diários até os mecanismos bioquímicos de des-remineralização e diagnóstico clínico.";
        launchConfetti(95);
    } else if (percentage >= 70) {
        setMascotMood("celebrate");
        dom.resultEmoji.textContent = "🦷✨";
        dom.resultBadgeText.textContent = `Ótimo Domínio Clínico • ${percentage}%`;
        dom.resultTitle.textContent = "Mandou muito bem na saúde bucal!";
        dom.resultMessage.textContent =
            "Você acertou a grande maioria dos casos e conhece os pilares da proteção do esmalte. Confira abaixo os detalhes das questões mais complexas!";
        launchConfetti(55);
    } else if (percentage >= 50) {
        setMascotMood("happy");
        dom.resultEmoji.textContent = "🪥😊";
        dom.resultBadgeText.textContent = `Bom Conhecimento • ${percentage}%`;
        dom.resultTitle.textContent = "No caminho certo, mas cuidado com as pegadinhas!";
        dom.resultMessage.textContent =
            "Você já conhece conceitos essenciais, mas alguns mitos sobre pH ácido, lesão de mancha branca ou frequência do açúcar ainda confundiram. Revise o gabarito comentado!";
    } else {
        setMascotMood("surprised");
        dom.resultEmoji.textContent = "🦷🩺";
        dom.resultBadgeText.textContent = `Hora de Revisar • ${percentage}%`;
        dom.resultTitle.textContent = "Precisa visitar o dentista mais vezes!";
        dom.resultMessage.textContent =
            "A Cariologia tem muitos detalhes surpreendentes! Use o filtro 'Erros' abaixo para revisar as explicações científicas e aprender como proteger seu sorriso.";
    }

    filterReview("all");
}

/**
 * Filtra a lista de revisão final ('all' | 'wrong' | 'correct')
 */
function filterReview(filterType) {
    currentReviewFilter = filterType;

    // Atualiza estilo das abas de filtro
    const tabs = {
        all: dom.filterAll,
        wrong: dom.filterWrong,
        correct: dom.filterCorrect
    };

    Object.keys(tabs).forEach((key) => {
        if (key === filterType) {
            tabs[key].className = "px-3 py-1 rounded-lg bg-white text-odonto-primary shadow-sm transition";
        } else {
            tabs[key].className = "px-3 py-1 rounded-lg text-slate-500 hover:text-odonto-dark transition";
        }
    });

    dom.reviewList.innerHTML = "";

    const filteredItems = userHistory.filter((item) => {
        if (filterType === "wrong") return !item.isCorrect;
        if (filterType === "correct") return item.isCorrect;
        return true;
    });

    if (filteredItems.length === 0) {
        dom.reviewList.innerHTML = `
            <div class="bg-white/75 border border-slate-200/70 rounded-2xl p-6 text-center text-slate-500 text-sm">
                Nenhum item encontrado para este filtro.
            </div>
        `;
        return;
    }

    filteredItems.forEach((item) => {
        const gabaritoTexto = item.question.answer ? "Verdadeiro" : "Falso";
        const statusBadge = item.isCorrect
            ? `<span class="w-7 h-7 rounded-xl bg-odonto-mint/15 text-odonto-mint flex items-center justify-center text-xs shrink-0 mt-0.5"><i class="fa-solid fa-check"></i></span>`
            : `<span class="w-7 h-7 rounded-xl bg-odonto-coral/15 text-odonto-coral flex items-center justify-center text-xs shrink-0 mt-0.5"><i class="fa-solid fa-xmark"></i></span>`;

        const card = document.createElement("div");
        card.className =
            "bg-white/90 border border-slate-200/80 rounded-2xl p-4 text-xs sm:text-sm flex items-start gap-3.5 shadow-sm";
        card.innerHTML = `
            ${statusBadge}
            <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                    <span class="text-[11px] font-bold text-odonto-primary bg-odonto-ice px-2 py-0.5 rounded-md">
                        ${item.question.category}
                    </span>
                    <span class="text-[11px] font-semibold text-slate-400">
                        • ${item.question.difficultyLabel}
                    </span>
                </div>
                <p class="font-semibold text-odonto-dark mb-1.5">
                    "${item.question.statement}"
                </p>
                <p class="text-slate-600 text-xs leading-relaxed mb-2">
                    <strong class="${item.question.answer ? "text-odonto-mint" : "text-odonto-coral"}">
                        Gabarito: ${gabaritoTexto}.
                    </strong>
                    ${item.question.explanation}
                </p>
                <p class="text-[11px] text-slate-500 bg-slate-50 border border-slate-200/60 rounded-lg px-2.5 py-1.5">
                    <i class="fa-solid fa-flask-vial text-odonto-primary mr-1"></i>
                    <strong>Visão Clínica:</strong> ${item.question.clinicalTip}
                </p>
            </div>
        `;
        dom.reviewList.appendChild(card);
    });
}

/**
 * ============================================================================
 * Efeito Visual de Confetes
 * ============================================================================
 */
let confettiParticles = [];
let confettiAnimationId = null;

function launchConfetti(count = 40) {
    const canvas = dom.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const palette = ["#0077B6", "#00B4D8", "#1F9D8B", "#CAF0F8", "#E76F51"];

    for (let i = 0; i < count; i++) {
        confettiParticles.push({
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 280,
            y: window.innerHeight * 0.45,
            r: Math.random() * 6 + 4,
            color: palette[Math.floor(Math.random() * palette.length)],
            vx: (Math.random() - 0.5) * 11,
            vy: Math.random() * -12 - 4,
            gravity: 0.35,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    if (!confettiAnimationId) {
        animateConfetti(ctx, canvas);
    }
}

function animateConfetti(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.012;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r * 1.4, p.r);
        ctx.restore();
    });

    confettiParticles = confettiParticles.filter((p) => p.opacity > 0 && p.y < canvas.height + 20);

    if (confettiParticles.length > 0) {
        confettiAnimationId = requestAnimationFrame(() => animateConfetti(ctx, canvas));
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiAnimationId = null;
    }
}

/**
 * Atalhos de Teclado:
 * - 'V' ou Seta Esquerda: Verdadeiro
 * - 'F' ou Seta Direita: Falso
 * - 'Enter' ou 'Espaço': Próxima Questão
 */
document.addEventListener("keydown", (event) => {
    if (dom.quizScreen.classList.contains("hidden")) return;

    const key = event.key.toLowerCase();
    if (!hasAnsweredCurrent) {
        if (key === "v" || event.key === "ArrowLeft") {
            handleAnswer(true);
        } else if (key === "f" || event.key === "ArrowRight") {
            handleAnswer(false);
        }
    } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        nextQuestion();
    }
});

// Inicializa na Tela de Boas-Vindas e Seleção de Modo
document.addEventListener("DOMContentLoaded", () => {
    selectGameMode("all");
});
