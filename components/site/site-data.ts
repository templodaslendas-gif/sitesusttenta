export const navigationItems = [
  { label: "Susttenta", href: "#susttenta" },
  { label: "Embiofert", href: "#embiofert" },
  { label: "Embio 3100 e 6000", href: "#linha-embio" },
  { label: "TLC Agro", href: "#tlc-agro" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const solutionSlides = [
  {
    id: "lagoas",
    icon: "waves",
    title: "Tratamento biológico de lagoas e dejetos",
    description:
      "Integração entre bioestimulação, aeração e movimentação para apoiar o manejo de dejetos bovinos e suínos.",
    href: "#embiofert",
    image: "/media/embio-official/embiofert.webp",
  },
  {
    id: "ambiencia",
    icon: "wind",
    title: "Ambiência em granjas de suínos",
    description:
      "Orientação para gases, odores, larvas, moscas e rotina de limpeza conforme o destino dos dejetos.",
    href: "#linha-embio",
    image: "/media/embio-official/embio-3100.webp",
  },
  {
    id: "biodigestor",
    icon: "gauge",
    title: "Soluções para instalações com biodigestor",
    description:
      "Ambiência interna com uma indicação compatível com a preservação da matéria orgânica destinada ao biogás.",
    href: "#linha-embio",
    image: "/media/embio-official/embio-6000.webp",
  },
  {
    id: "moscas",
    icon: "target",
    title: "Controle estratégico de moscas",
    description:
      "Atrativo e armadilha combinados com posicionamento e manejo adequados em áreas rurais e externas.",
    href: "#tlc-agro",
    image: "/media/tlc-official/images/ecomax-produtos.webp",
  },
  {
    id: "orientacao",
    icon: "message",
    title: "Atendimento técnico e orientação de aplicação",
    description:
      "Leitura do ambiente, do sistema de manejo e do objetivo do produtor antes da recomendação.",
    href: "#pedro",
    image: "/favicon-master-1024.png",
  },
] as const;

export const technicalChallenges = [
  {
    icon: "layers",
    title: "Acúmulo de sólidos",
    text: "Sedimentos e matéria orgânica acumulada podem reduzir o volume útil das estruturas e dificultar o manejo do sistema.",
  },
  {
    icon: "wind",
    title: "Gases e odores",
    text: "A decomposição em condições inadequadas favorece a formação de gases e odores que comprometem a ambiência operacional.",
  },
  {
    icon: "target",
    title: "Larvas e moscas",
    text: "Resíduos orgânicos, umidade e áreas de reprodução favorecem o desenvolvimento de larvas e o aumento da população de moscas.",
  },
  {
    icon: "blend",
    title: "Baixa homogeneização",
    text: "A distribuição irregular de sólidos e microrganismos reduz a uniformidade do tratamento e dificulta o aproveitamento do material.",
  },
  {
    icon: "gauge",
    title: "Sistemas com biodigestor",
    text: "Instalações destinadas à produção de biogás precisam controlar a ambiência sem comprometer a matéria orgânica enviada ao biodigestor.",
  },
] as const;

export const faqItems = [
  {
    question: "O que é o Tratamento Embiofert?",
    answer:
      "É uma solução integrada para o manejo de lagoas de dejetos bovinos e suínos que combina o Embio 3000 com o Propulsor Embio. O sistema reúne atuação biológica, aeração e movimentação para favorecer a homogeneização e a degradação da matéria orgânica.",
  },
  {
    question: "Como Embio 3000 e Propulsor trabalham em conjunto?",
    answer:
      "O Propulsor movimenta o conteúdo da lagoa e incorpora oxigênio por microbolhas. O Embio 3000 fornece o componente biológico do tratamento. A combinação deve ser dimensionada conforme o volume, as condições da estrutura e o manejo existente.",
  },
  {
    question: "Qual a diferença entre Embio 3100 e Embio 6000?",
    answer:
      "O Embio 3100 é direcionado à ambiência interna de instalações de suínos sem envio direto dos dejetos ao biodigestor. O Embio 6000 atende instalações que enviam os dejetos à produção de biogás e preserva a matéria orgânica destinada ao processo anaeróbio.",
  },
  {
    question: "Qual produto é indicado quando os dejetos seguem para um biodigestor?",
    answer:
      "O Embio 6000 foi desenvolvido para esse cenário. A indicação final depende da avaliação do fluxo dos dejetos, da existência de lagoas intermediárias e das condições operacionais da propriedade.",
  },
  {
    question: "Como funciona o controle de moscas com Ecomax?",
    answer:
      "O atrativo é colocado na armadilha, que deve ser posicionada em pontos estratégicos. As moscas são atraídas, entram no reservatório e ficam retidas. O manejo exige monitoramento, esvaziamento e reposicionamento quando necessário.",
  },
  {
    question: "A Susttenta realiza avaliação antes da recomendação?",
    answer:
      "Sim. O atendimento começa pela compreensão do ambiente, do sistema de manejo, do destino dos dejetos e do objetivo da propriedade para direcionar uma solução compatível.",
  },
  {
    question: "Os resultados e dosagens são iguais em todas as propriedades?",
    answer:
      "Não. Volume, estrutura, carga orgânica, manejo, água, energia disponível e histórico do sistema podem alterar a recomendação. Dosagem e aplicação devem ser definidas após avaliação técnica.",
  },
  {
    question: "Como solicitar atendimento técnico?",
    answer:
      "Use um dos botões de WhatsApp do site para conversar diretamente com a Susttenta. Se possível, descreva o tipo de operação, o desafio observado e o destino dos dejetos.",
  },
] as const;

export const mediaItems = [
  {
    id: "ecomax-demonstracao",
    kind: "demonstration",
    eyebrow: "Demonstração oficial",
    title: "Como o conjunto Ecomax é utilizado",
    description:
      "Demonstração publicada pela TLC Agro. O vídeo é carregado somente quando você solicita a reprodução.",
    src: "/media/tlc-official/videos/ecomax-como-funciona.mp4",
    poster: "/media/tlc-official/thumbnails/ecomax-como-funciona.webp",
    preload: "none",
  },
  {
    id: "tlc-relato-01",
    kind: "tlc-report",
    eyebrow: "Relato publicado pela TLC Agro",
    title: "Experiência apresentada no canal oficial da fabricante",
    description:
      "A publicação original não apresenta identificação pública suficiente para atribuir nome, propriedade ou vínculo com a Susttenta.",
    src: "/media/tlc-official/videos/tlc-relato-01.mp4",
    poster: "/media/tlc-official/thumbnails/tlc-relato-01.webp",
    preload: "none",
  },
  {
    id: "tlc-relato-02",
    kind: "tlc-report",
    eyebrow: "Relato publicado pela TLC Agro",
    title: "Registro compartilhado no site oficial da TLC Agro",
    description:
      "O material é apresentado em seu contexto original, sem transcrição, resultado atribuído ou identificação não confirmada.",
    src: "/media/tlc-official/videos/tlc-relato-02.mp4",
    poster: "/media/tlc-official/thumbnails/tlc-relato-02.webp",
    preload: "none",
  },
] as const;
