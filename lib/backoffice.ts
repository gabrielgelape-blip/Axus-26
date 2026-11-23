// ============================================================================
// LANDING BACKOFFICE DE OBRAS — AXUS ENGENHARIA
// ----------------------------------------------------------------------------
// Itens marcados com "// [VALIDAR COM GABRIEL]" são placeholders provisórios.
// ============================================================================

export const backofficeMeta = {
  title: "Axus Backoffice de Obras | Departamento técnico sob demanda",
  description:
    "Retaguarda de orçamentos, planejamento e controle físico-financeiro para pequenas construtoras de Belo Horizonte e região. Sem custo fixo e sem vínculo empregatício.",
};

export const backofficeBrand = {
  name: "Axus Engenharia & Backoffice de Obras",
  tagline: "Seu departamento técnico sob demanda.",
};

// [VALIDAR COM GABRIEL] — a URL do LinkedIn no site ainda é genérica
export const backofficeSocial = {
  instagram: "https://www.instagram.com/axusengenharia",
  linkedin: "https://www.linkedin.com",
};

export const backofficeNav = [
  { label: "Dores", href: "#dores" },
  { label: "Entregas", href: "#entregas" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Modelos", href: "#modelos" },
  { label: "FAQ", href: "#faq" },
];

export const backofficeHero = {
  headline:
    "Você foca no canteiro e no cliente. Nós blindamos o orçamento e o lucro da sua obra.",
  subheadline:
    "A Axus é a retaguarda completa de orçamentos, planejamento e controle físico-financeiro para pequenas construtoras de BH e Região. Sem custo fixo, sem vínculo empregatício e com senioridade de ponta.",
  primaryCta: "Quero uma auditoria gratuita",
  secondaryCta: "Falar com um engenheiro agora",
  proof:
    "A estrutura de uma grande construtora, operando sob demanda para a sua empresa.",
  seals: ["Sem custo fixo", "100% remoto", "BH e RMBH"],
  image: "/obras/telhado-condominio/02.webp",
  imageAlt: "Vista ampla de cobertura executada em condomínio de Belo Horizonte",
  whatsappMessage:
    "Olá, quero falar com um engenheiro sobre o backoffice de obras da Axus.",
};

export const pains = {
  eyebrow: "A dor",
  title: "Mais tempo para prospectar e construir, menos tempo apagando incêndios no Excel.",
  items: [
    {
      id: "planilhas",
      text: "Você passa o dia apagando incêndios na obra e só consegue abrir as planilhas à noite?",
    },
    {
      id: "propostas",
      text: "Demora a enviar propostas comerciais e acaba perdendo bons clientes para a concorrência?",
    },
    {
      id: "margem",
      text: "Sua margem de lucro sangra por conta de compras emergenciais de material não planejadas?",
    },
    {
      id: "financeiro",
      text: "O financeiro das suas obras fica misturado no WhatsApp e você não sabe o lucro real até o fim do projeto?",
    },
  ],
  mark: "Isso acontece comigo",
  transitionLead: "Se você respondeu “sim” para alguma dessas perguntas, o problema não é a sua gestão de obra. O problema é que ",
  transitionStrong: "você precisa de um Backoffice.",
};

export const solution = {
  eyebrow: "A solução",
  title: "Conheça a Axus Engenharia & Backoffice de Obras",
  description:
    "Nós não vendemos softwares complexos que você não tem tempo de alimentar, nem planilhas milagrosas. Nós somos uma equipe técnica sênior que opera os bastidores da sua empresa sob demanda. Orçamento preciso. Execução controlada. Margem garantida.",
  pillars: [
    {
      id: "custo",
      title: "Custo Variável Inteligente",
      text: "Tenha a inteligência de um departamento técnico inteiro pagando apenas quando tiver demanda. Adeus custo fixo de estagiários ou CLT.",
    },
    {
      id: "precisao",
      title: "Precisão Extrema",
      text: "Curva ABC rigorosa, BDI calibrado com a sua realidade e orçamentos que não deixam dinheiro na mesa.",
    },
    {
      id: "velocidade",
      title: "Velocidade Comercial",
      text: "Entregue propostas executivas impecáveis para seus clientes no prazo, aumentando sua taxa de conversão.",
    },
  ],
};

export const deliverables = {
  eyebrow: "Entregas",
  title: "O que fazemos na prática",
  items: [
    {
      id: "orcamento",
      title: "Orçamento Executivo",
      text: "Levantamento quantitativo detalhado, cotação de insumos e fechamento de margem.",
    },
    {
      id: "cronograma",
      title: "Cronograma Físico-Financeiro",
      text: "Previsibilidade de caixa. Saiba exatamente quando o dinheiro vai entrar e sair ao longo das semanas de obra.",
    },
    {
      id: "suprimentos",
      title: "Gestão de Suprimentos",
      text: "Planejamento de compras focado na Curva ABC para negociação direta com fornecedores.",
    },
    {
      id: "medicao",
      title: "Controle e Medição",
      text: "Relatórios periódicos de acompanhamento do realizado vs. orçado.",
    },
  ],
};

export const fit = {
  eyebrow: "Encaixe",
  title: "A Axus é o parceiro ideal para a sua empresa?",
  yesLabel: "Para quem é",
  noLabel: "Para quem não é",
  yes: [
    "Pequenas construtoras e escritórios de reformas (1 a 2 sócios).",
    "Empresas atuando em BH, Nova Lima e Região Metropolitana.",
    "Engenheiros que querem escalar o faturamento, pegar obras maiores, mas bateram no teto operacional.",
  ],
  no: [
    "Profissionais que fazem apenas pequenas manutenções ou reparos (ex: troca de chuveiro, pintura de um cômodo).",
    "Construtores que não valorizam processos e preferem fazer orçamentos no chute.",
    "Empresas sem fluxo mínimo de captação de clientes.",
  ],
};

// [VALIDAR COM GABRIEL] — cenário ilustrativo do briefing, não é um case nomeado
export const scenario = {
  eyebrow: "Na prática",
  title: "Veja como blindamos o lucro na prática",
  disclaimer:
    "Cenário ilustrativo de uma construtora em Nova Lima. Os números mostram o tipo de resultado do backoffice — não identificam um cliente.",
  image: "/obras/area-comum-condominio/03.webp",
  imageAlt: "Área comum de condomínio durante intervenção em Belo Horizonte",
  steps: [
    {
      label: "O problema",
      text: "Construtora em Nova Lima perdia 8% de margem no desperdício de aço e compras picadas de cimento.",
    },
    {
      label: "A solução",
      text: "Implementação do planejamento prévio de suprimentos e medição quinzenal pelo backoffice da Axus.",
    },
    {
      label: "O resultado",
      text: "Economia no custo direto da obra e horas semanais devolvidas para o sócio prospectar.",
    },
  ],
  stats: [
    { value: 8, prefix: "", suffix: "%", label: "de margem que escapava no desperdício" },
    { value: 15000, prefix: "R$ ", suffix: "", label: "de economia no custo direto" },
    { value: 15, prefix: "", suffix: " h", label: "semanais devolvidas ao sócio" },
  ],
};

export type BackofficeModelId = "projeto" | "fee";

export const models = {
  eyebrow: "Como atuar",
  title: "Estrutura sob demanda para o seu momento atual",
  cta: "Consultar valores para minha empresa",
  items: [
    {
      id: "projeto" as const,
      title: "Por Projeto",
      kicker: "Pay per use",
      text: "Ideal para propostas pontuais, orçamentos executivos de novas licitações privadas ou concorrências.",
    },
    {
      id: "fee" as const,
      title: "Fee Mensal",
      kicker: "Assinatura de Backoffice",
      text: "Ideal para empresas com 2 ou mais obras simultâneas rodando. Acompanhamento recorrente, medições e controle contínuo.",
    },
  ],
};

export const backofficeFaq = {
  eyebrow: "Objeções",
  title: "Perguntas que travam a decisão",
  items: [
    {
      id: "software",
      question: "E se eu já tiver um software de gestão?",
      answer:
        "O software não trabalha sozinho. Nós não competimos com o seu sistema, nós o operamos por você. Se você já tem, nós usamos o seu; se não tem, nós estruturamos e entregamos os relatórios prontos para sua tomada de decisão.",
    },
    {
      id: "erro",
      question: "E se o orçamento ficar errado, quem assume?",
      answer:
        "Nossa metodologia possui validação cruzada. Entregamos o memorial de cálculo aberto. Você atua como diretor validando a estratégia, poupando 90% do seu tempo braçal de digitação.",
    },
    {
      id: "visita",
      question: "Vocês vão até a minha obra?",
      answer:
        "Nosso trabalho é de backoffice e inteligência de dados, 100% remoto, focado na gestão. A visita física, gestão de equipe e relacionamento com o cliente continuam sob seu domínio — onde está o seu maior valor.",
    },
  ],
};

export const audit = {
  eyebrow: "Auditoria",
  title: "Conte o momento da sua empresa",
  subtitle:
    "A conversa é direta com um engenheiro. O envio abre o WhatsApp com o retrato da sua operação.",
  submit: "Quero uma auditoria gratuita",
  obrasOptions: ["0", "1", "2+"],
};

export const backofficeDock = {
  label: "Auditoria gratuita",
  whatsappMessage:
    "Olá, quero uma auditoria gratuita do backoffice de obras da Axus.",
};
