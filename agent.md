# Especificação do Projeto: Jogo "Verdadeiro ou Falso" - Tema Odontologia (Cáries)

## 📌 Visão Geral
Atue como um Desenvolvedor Web Sênior e UI/UX Designer. O objetivo é desenvolver um web app simples, interativo e visualmente muito bonito de "Verdadeiro ou Falso" focado na educação em saúde bucal, especificamente sobre **Cáries Dentárias** e seus maiores mitos.

## 🎨 Requisitos de UI/UX e Design (Temática Odontológica)
O design deve transmitir limpeza, saúde, tecnologia e acolhimento.
*   **Estilo:** Moderno, minimalista, com bordas arredondadas (estilo *glassmorphism* ou *soft cards*).
*   **Paleta de Cores sugerida:**
    *   Fundo principal: Tons muito claros de azul ou branco gelo (ex: `#F0F8FF` ou `#F4F7F6`).
    *   Cor Primária (Botões, Destaques): Azul Odontológico (ex: `#0077B6` ou `#00B4D8`).
    *   Cor de "Verdadeiro": Verde Menta (ex: `#2A9D8F`).
    *   Cor de "Falso": Vermelho/Coral suave (ex: `#E76F51`).
    *   Texto: Azul marinho escuro ou cinza chumbo para contraste suave (ex: `#2B2D42`).
*   **Tipografia:** Fonte limpa e amigável, como `Poppins`, `Inter` ou `Quicksand` (via Google Fonts).
*   **Responsividade:** O jogo deve funcionar perfeitamente em telas de celulares (mobile-first), tablets e desktops.
*   **Animações:** Transições suaves ao clicar nos botões, *fade-in* nas perguntas, e um efeito visual de comemoração ou erro ao revelar a resposta.

## ⚙️ Requisitos Técnicos
*   Pode ser feito em **HTML, CSS (TailwindCSS recomendado para estilização rápida) e JavaScript puro (Vanilla JS)**, tudo em um único arquivo (ou arquivos separados bem organizados, conforme sua preferência).
*   A lógica do jogo deve:
    1.  Exibir uma carta/card central com a afirmação.
    2.  Ter dois botões grandes: "Verdadeiro" e "Falso".
    3.  Ao clicar, revelar se o usuário acertou ou errou, e **mostrar uma breve explicação do motivo** (feedback educativo).
    4.  Ter um botão de "Próxima Pergunta".
    5.  Contabilizar a pontuação.
    6.  No final, exibir uma tela de resultados com uma mensagem de incentivo à saúde bucal (ex: "Você é um mestre da escovação!" ou "Precisa visitar o dentista mais vezes!").

## 🦷 Banco de Dados de Perguntas (Mitos e Fatos)
Implemente as seguintes perguntas no array de dados do jogo:

1.  **Afirmação:** "O açúcar é o único causador das cáries."
    *   **Resposta:** Falso
    *   **Explicação:** A cárie é causada por bactérias que produzem ácidos. O açúcar é o alimento favorito delas, mas carboidratos (como pães e massas) também podem causar cáries. O problema real é a má higienização.
2.  **Afirmação:** "Se o dente não está doendo, significa que não tem cárie."
    *   **Resposta:** Falso
    *   **Explicação:** Nas fases iniciais, a cárie só atinge o esmalte (camada externa) e não causa dor. A dor só aparece quando a cárie atinge camadas mais profundas (dentina ou polpa).
3.  **Afirmação:** "Escovar os dentes com muita força limpa melhor e evita cáries."
    *   **Resposta:** Falso
    *   **Explicação:** Força excessiva desgasta o esmalte do dente e retrai a gengiva, causando sensibilidade e facilitando problemas. O importante é a técnica e a regularidade, não a força.
4.  **Afirmação:** "Cárie em dente de leite não é problema, pois ele vai cair de qualquer jeito."
    *   **Resposta:** Falso
    *   **Explicação:** Dentes de leite guardam o espaço para os dentes permanentes. Uma cárie neles pode causar dor, infecções graves e prejudicar a formação do dente adulto que está nascendo.
5.  **Afirmação:** "A saliva ajuda a proteger os dentes contra as cáries."
    *   **Resposta:** Verdadeiro
    *   **Explicação:** A saliva funciona como um detergente natural, lavando os restos de comida e ajudando a neutralizar os ácidos produzidos pelas bactérias. Pessoas com boca muito seca têm maior risco de cáries.
6.  **Afirmação:** "Mascar chiclete sem açúcar pode substituir a escovação em uma emergência."
    *   **Resposta:** Falso
    *   **Explicação:** O chiclete sem açúcar estimula a salivação (o que é bom), mas **não remove** a placa bacteriana que fica colada nos dentes. Ele não substitui a ação mecânica da escova e do fio dental.
7.  **Afirmação:** "O flúor na pasta de dentes é essencial para prevenir e até reverter cáries iniciais."
    *   **Resposta:** Verdadeiro
    *   **Explicação:** O flúor fortalece o esmalte dentário através de um processo chamado remineralização, tornando-o muito mais resistente aos ataques ácidos das bactérias.

## 🚀 Instruções Finais para o Agente
1.  Gere o código completo com comentários explicativos.
2.  Garanta que o layout tenha "respiro" (espaçamentos adequados de *padding* e *margin*).
3.  Inclua ícones (pode usar FontAwesome via CDN ou Emojis estilizados) para deixar a interface mais amigável (um dentinho feliz no título, por exemplo).
4.  Por favor, inicie a implementação focando primeiro na estrutura visual responsiva e depois adicione a lógica JavaScript.


