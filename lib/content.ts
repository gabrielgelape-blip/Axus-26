// ============================================================================
// CONTEÚDO DO SITE — AXUS ENGENHARIA
// ----------------------------------------------------------------------------
// Itens marcados com "// [VALIDAR COM GABRIEL]" são placeholders provisórios.
// ============================================================================

export const company = {
  legalName: "Axus Engenharia e Design LTDA",
  tradeName: "Axus Engenharia",
  cnpj: "35.447.926/0001-04",
  founded: "07/11/2019",
  foundedYear: 2019,
  city: "Belo Horizonte",
  state: "Minas Gerais",
  stateAbbr: "MG",
};

export const hero = {
  // [VALIDAR COM GABRIEL]
  headline: "Confiança construída.",
  subheadline:
    "Obras por administração em BH — transparência total, engenheiro presente do orçamento às chaves.",
  primaryCta: "Falar no WhatsApp",
  scrollCta: "Explorar",
  image:
    "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2400&auto=format&fit=crop",
  imageAlt: "Obra de construção e reforma em andamento",
};

// [VALIDAR COM GABRIEL] — vídeo de apresentação (Gabriel Gelape)
export const presentationVideo = {
  label: "Apresentação",
  title: "A transformação começa com quem conduz a obra",
  subtitle:
    "Conheça a Axus na voz de Gabriel Gelape — como transformamos projetos em obras transparentes, com engenharia presente em cada decisão.",
  // Cole o ID do YouTube ou a URL do arquivo quando o vídeo estiver pronto
  youtubeId: "",
  poster:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
};

// [VALIDAR COM GABRIEL]
export const numbers = [
  { value: "+100", label: "obras entregues" },
  { value: "6+", label: "anos de mercado" },
  { value: "40+", label: "condomínios atendidos" },
  { value: "12 mil", label: "m² reformados" },
];

export const services = [
  {
    title: "Obras por administração",
    short: "Transparência total em materiais e mão de obra",
    description:
      "Você acompanha cada nota fiscal e cada etapa. A Axus gerencia a obra com engenharia presente — sem markup escondido, com controle real de custo e prazo.",
  },
  {
    title: "Reforma residencial",
    short: "Apartamentos e casas do início ao fim",
    description:
      "Projeto, cronograma e execução acompanhados por engenheiro civil — do primeiro orçamento à entrega.",
  },
  {
    title: "Obras em condomínios",
    short: "Fachadas, áreas comuns e estruturas",
    description:
      "Obras de médio e grande porte com laudos técnicos, prazo e comunicação transparente com o síndico.",
  },
  {
    title: "Construção do zero",
    short: "Da fundação à chave na mão",
    description:
      "Gestão completa de equipe, fornecedores e etapas técnicas em projetos construídos desde o início.",
  },
];

export const adminWorks = {
  label: "Nosso modelo",
  title: "Obras por administração",
  subtitle: "Você vê cada real. A engenharia cuida de cada decisão.",
  comparison: {
    traditionalLabel: "Obra comum",
    adminLabel: "Por administração",
    pairs: [
      {
        traditional: "Caixa-preta",
        admin: "Custo transparente",
        description:
          "Notas fiscais, cotações e medições abertas. Você sabe exatamente o que está pagando em cada etapa.",
      },
      {
        traditional: "Surpresas",
        admin: "Sem surpresas",
        description:
          "Relatórios periódicos, canal direto com a equipe e acompanhamento em campo — do início ao fim.",
      },
      {
        traditional: "Sem visibilidade",
        admin: "Engenharia na gestão",
        description:
          "Não é só mão de obra: é planejamento técnico, cronograma e decisões que protegem prazo e qualidade.",
      },
      {
        traditional: "Fora do loop",
        admin: "Controle do investimento",
        description:
          "Ideal para quem quer controle financeiro e presença técnica, sem abrir mão de uma obra bem conduzida.",
      },
    ],
  },
  cta: "Quero entender como funciona",
};

export const process = [
  {
    title: "Diagnóstico",
    description:
      "Visita técnica, levantamento de necessidades e conversa clara sobre escopo, prazo e o modelo por administração.",
  },
  {
    title: "Projeto",
    description:
      "Planejamento técnico, orçamento detalhado e cronograma — com cotações abertas quando a obra for por administração.",
  },
  {
    title: "Execução",
    description:
      "Equipe própria em campo, com Gabriel e Eduardo acompanhando cada etapa e relatórios periódicos de custo e avanço.",
  },
  {
    title: "Entrega",
    description:
      "Vistoria final, ajustes finos e entrega das chaves — com suporte pós-obra quando necessário.",
  },
];

// [VALIDAR COM GABRIEL]
export const portfolioPreview = [
  {
    title: "Fachada — Condomínio Residencial",
    category: "Condomínio",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Reforma completa de apartamento",
    category: "Residencial",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Área comum — Condomínio",
    category: "Condomínio",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Construção residencial do zero",
    category: "Residencial",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Retrofit de telhado — Condomínio",
    category: "Condomínio",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Reforma de cozinha residencial",
    category: "Residencial",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
  },
];

export const portfolioAll = [
  ...portfolioPreview,
  {
    title: "Pintura e revitalização de fachada",
    category: "Condomínio",
    image:
      "https://images.unsplash.com/photo-1590986820013-cb87d5305b7c?q=80&w=1400&auto=format&fit=crop",
  },
];

// [VALIDAR COM GABRIEL] — stills de bastidores
export const bastidores = [
  {
    title: "Planejamento em campo",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Detalhe de execução",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Equipe na obra",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Acabamento",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    quote:
      "Entrega no prazo e comunicação clara em todas as etapas — algo raro nesse mercado.",
    name: "Síndico(a)",
    role: "Condomínio Residencial",
  },
  {
    quote:
      "O Gabriel esteve presente do orçamento até as chaves. Isso fez toda a diferença.",
    name: "Cliente residencial",
    role: "Reforma de apartamento",
  },
  {
    quote:
      "Gestão técnica séria e equipe presente. Sabíamos exatamente o que estava acontecendo.",
    name: "Administradora",
    role: "Obra em condomínio",
  },
];

// [VALIDAR COM GABRIEL] — depoimentos em vídeo de clientes reais
export const videoTestimonials = {
  label: "Na voz de quem contratou",
  title: "Depoimentos em vídeo",
  subtitle: "Clientes reais contando como foi construir com a Axus.",
  items: [
    {
      name: "Cliente 1",
      role: "Obra por administração",
      youtubeId: "",
      poster:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Cliente 2",
      role: "Reforma residencial",
      youtubeId: "",
      poster:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Cliente 3",
      role: "Obra em condomínio",
      youtubeId: "",
      poster:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Cliente 4",
      role: "Construção do zero",
      youtubeId: "",
      poster:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

export const faq = [
  {
    question: "O que é obra por administração?",
    answer:
      "É o modelo em que você paga materiais e mão de obra com total transparência, e a Axus gerencia a obra com engenharia presente — planejamento, compras, fiscalização e entrega. Ideal para quem quer controle de custo sem abrir mão de qualidade técnica.",
    tags: ["Administração"],
  },
  {
    question: "Qual é o prazo médio de uma obra?",
    answer:
      "Depende do escopo. Após a visita técnica, entregamos um cronograma detalhado antes do início.",
    tags: ["Prazo"],
  },
  {
    question: "Vocês emitem ART/RRT e possuem seguro de obra?",
    answer:
      "Sim. A documentação técnica é emitida conforme exigido para cada tipo de obra.",
    tags: ["Documentação"],
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Visita técnica gratuita e orçamento detalhado por etapas — você sabe exatamente pelo que está pagando. Em obras por administração, as cotações e notas ficam abertas ao cliente.",
    tags: ["Orçamento", "Administração"],
  },
  {
    question: "A Axus atende condomínios de qualquer porte?",
    answer:
      "De reparos pontuais a projetos de médio e grande porte, sempre com gestão técnica dedicada.",
    tags: ["Condomínios"],
  },
  {
    question: "Como é feito o acompanhamento durante a obra?",
    answer:
      "Relatórios periódicos e canal direto com a equipe técnica, sem surpresas.",
    tags: ["Acompanhamento"],
  },
];

export const faqChips = [
  "Administração",
  "Prazo",
  "Orçamento",
  "Documentação",
  "Condomínios",
  "Acompanhamento",
] as const;

export const about = {
  title: "Proprietários",
  narrative:
    "Fundada em 07/11/2019 em Belo Horizonte, Minas Gerais, a Axus Engenharia e Design LTDA existe para eliminar a distância entre quem contrata e quem executa — especialmente em obras por administração, onde transparência e presença técnica fazem toda a diferença. Gabriel e Eduardo são proprietários e fundadores: atuam juntos na gestão e na operação, sempre próximos da obra e dos clientes. Gabriel conduz a gestão; Eduardo lidera a operação de obra — com qualidade e dentro do prazo.",
  photos: [
    {
      alt: "Gabriel Gelape — Proprietário e Fundador",
      caption: "Gabriel Gelape",
      role: "Proprietário e Fundador · Gestão",
      image: "/team/gabriel-gelape.png",
    },
    {
      alt: "Eduardo Fortunato — Proprietário e Fundador",
      caption: "Eduardo Fortunato",
      role: "Proprietário e Fundador · Operação de obra",
      image: "/team/eduardo-fortunato.png",
    },
  ],
};

export const contact = {
  whatsappNumber: "5531900000000", // [VALIDAR COM GABRIEL]
  whatsappMessage: "Olá! Vim pelo site da Axus Engenharia e gostaria de saber mais.",
  email: "contato@axusengenharia.com", // [VALIDAR COM GABRIEL]
  address: `${company.city}, ${company.stateAbbr}`,
  cnpj: company.cnpj,
};
