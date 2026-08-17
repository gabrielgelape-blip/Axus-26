export type ObraCategory = "Residencial" | "Condomínio" | "Institucional";
export type PhotoOrientation = "portrait" | "landscape";
export type PhotoRole = "cover" | "gallery" | "process";

export type ObraPhoto = {
  src: string;
  alt: string;
  orientation: PhotoOrientation;
  role: PhotoRole;
};

export type ObraVideo = {
  src: string;
  poster: string;
  orientation: PhotoOrientation;
  title: string;
};

export type Obra = {
  slug: string;
  title: string;
  summary: string;
  category: ObraCategory;
  service: string;
  photos: ObraPhoto[];
  videos?: ObraVideo[];
};

export const obraCategories = [
  "Todos",
  "Residencial",
  "Condomínio",
  "Institucional",
] as const;

export const obras: Obra[] = [
  {
    slug: "reforma-residencial-01",
    title: "Reforma residencial — Belo Horizonte",
    summary:
      "Apartamento entregue com living integrado, quarto e banheiro — acabamento, marcenaria e ambientação no mesmo fio.",
    category: "Residencial",
    service: "Reforma residencial",
    photos: [
      {
        src: "/obras/reforma-residencial-01/01.webp",
        alt: "Sala e jantar integrados após reforma residencial em Belo Horizonte",
        orientation: "landscape",
        role: "cover",
      },
      {
        src: "/obras/reforma-residencial-01/02.webp",
        alt: "Living com parede revestida e área de jantar",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/reforma-residencial-01/03.webp",
        alt: "Estar com sofá e marcenaria após a entrega",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/reforma-residencial-01/04.webp",
        alt: "Banheiro preto e branco com box de vidro",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/reforma-residencial-01/05.webp",
        alt: "Quarto com cabeceira e iluminação de leitura",
        orientation: "portrait",
        role: "gallery",
      },
    ],
    videos: [
      {
        src: "/obras/reforma-residencial-01/video.mp4",
        poster: "/obras/reforma-residencial-01/poster.webp",
        orientation: "portrait",
        title: "Percurso do apartamento entregue",
      },
    ],
  },
  {
    slug: "zoologico-recinto",
    title: "Recinto — Zoológico de BH",
    summary:
      "Obra institucional no recinto: estrutura, fechamentos e instalações para o espaço público da Prefeitura de Belo Horizonte.",
    category: "Institucional",
    service: "Obras em condomínios",
    photos: [
      {
        src: "/obras/zoologico-recinto/01.webp",
        alt: "Edícula do recinto no Zoológico de Belo Horizonte",
        orientation: "portrait",
        role: "cover",
      },
      {
        src: "/obras/zoologico-recinto/02.webp",
        alt: "Portão metálico instalado no recinto",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/03.webp",
        alt: "Fachada do recinto entre as árvores",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/04.webp",
        alt: "Bebedouros instalados na cerca do recinto",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/05.webp",
        alt: "Detalhe da cerca e da estrutura do recinto",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/06.webp",
        alt: "Vista geral do recinto após a intervenção",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/07.webp",
        alt: "Fechamento metálico e pilar do recinto",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/08.webp",
        alt: "Estrutura de madeira e tela no recinto",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/09.webp",
        alt: "Cobertura e fechamento lateral do recinto",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/zoologico-recinto/10.webp",
        alt: "Área externa do recinto com vegetação",
        orientation: "landscape",
        role: "gallery",
      },
    ],
  },
  {
    slug: "banheiro-residencial",
    title: "Banheiro residencial — Belo Horizonte",
    summary:
      "Reforma de banheiro compacto: louças, metais pretos, box e revestimento em formato grande.",
    category: "Residencial",
    service: "Reforma residencial",
    photos: [
      {
        src: "/obras/banheiro-residencial/01.webp",
        alt: "Banheiro compacto entregue com box e bancada",
        orientation: "portrait",
        role: "cover",
      },
      {
        src: "/obras/banheiro-residencial/02.webp",
        alt: "Bancada, cuba e metais pretos do banheiro",
        orientation: "portrait",
        role: "gallery",
      },
    ],
    videos: [
      {
        src: "/obras/banheiro-residencial/video.mp4",
        poster: "/obras/banheiro-residencial/poster.webp",
        orientation: "portrait",
        title: "Percurso do banheiro entregue",
      },
    ],
  },
  {
    slug: "telhado-condominio",
    title: "Telhado — condomínio em Belo Horizonte",
    summary:
      "Substituição de cobertura em telha ondulada, com rufos e arremates para proteger a laje do edifício.",
    category: "Condomínio",
    service: "Obras em condomínios",
    photos: [
      {
        src: "/obras/telhado-condominio/01.webp",
        alt: "Cobertura em telha ondulada entregue em condomínio",
        orientation: "landscape",
        role: "cover",
      },
      {
        src: "/obras/telhado-condominio/02.webp",
        alt: "Vista ampla do telhado com casa de máquinas",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/telhado-condominio/03.webp",
        alt: "Detalhe de rufo e arremate na cobertura",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/telhado-condominio/04.webp",
        alt: "Painéis da cobertura alinhados após a troca",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/telhado-condominio/05.webp",
        alt: "Encontro da cobertura com a platibanda",
        orientation: "landscape",
        role: "gallery",
      },
    ],
  },
  {
    slug: "area-comum-condominio",
    title: "Área comum — condomínio em Belo Horizonte",
    summary:
      "Impermeabilização e intervenção em área comum: teste de lâmina d’água, caminhos e fechamentos — registro técnico da execução.",
    category: "Condomínio",
    service: "Obras em condomínios",
    photos: [
      {
        src: "/obras/area-comum-condominio/01.webp",
        alt: "Teste de impermeabilização com lâmina d’água em área comum",
        orientation: "landscape",
        role: "cover",
      },
      {
        src: "/obras/area-comum-condominio/02.webp",
        alt: "Caminho e fechamento na área comum do condomínio",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/area-comum-condominio/03.webp",
        alt: "Vista da área comum durante a intervenção",
        orientation: "landscape",
        role: "gallery",
      },
      {
        src: "/obras/area-comum-condominio/04.webp",
        alt: "Execução de piso na área comum",
        orientation: "portrait",
        role: "process",
      },
      {
        src: "/obras/area-comum-condominio/05.webp",
        alt: "Etapa de concreto na área comum",
        orientation: "portrait",
        role: "process",
      },
    ],
    videos: [
      {
        src: "/obras/area-comum-condominio/video.mp4",
        poster: "/obras/area-comum-condominio/poster.webp",
        orientation: "portrait",
        title: "Teste de impermeabilização na área comum",
      },
    ],
  },
  {
    slug: "reforma-residencial-02",
    title: "Pisos e acabamento — Belo Horizonte",
    summary:
      "Reforma residencial com piso de madeira e pintura — corredor e ambientes vazios no momento da entrega.",
    category: "Residencial",
    service: "Reforma residencial",
    photos: [
      {
        src: "/obras/reforma-residencial-02/01.webp",
        alt: "Corredor com piso de madeira e portas após a reforma",
        orientation: "portrait",
        role: "cover",
      },
      {
        src: "/obras/reforma-residencial-02/02.webp",
        alt: "Piso de madeira em espinha e rodapé",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/reforma-residencial-02/03.webp",
        alt: "Ambiente interno com piso de madeira entregue",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/reforma-residencial-02/04.webp",
        alt: "Detalhe do piso e das paredes recém-pintadas",
        orientation: "portrait",
        role: "gallery",
      },
      {
        src: "/obras/reforma-residencial-02/05.webp",
        alt: "Cômodo vazio após o acabamento da reforma",
        orientation: "portrait",
        role: "gallery",
      },
    ],
  },
];

export function coverOf(obra: Obra): ObraPhoto {
  return obra.photos.find((photo) => photo.role === "cover") ?? obra.photos[0];
}

export function galleryPhotos(obra: Obra): ObraPhoto[] {
  return obra.photos.filter((photo) => photo.role === "gallery");
}

export function processPhotos(obra: Obra): ObraPhoto[] {
  return obra.photos.filter((photo) => photo.role === "process");
}

export function getObra(slug: string): Obra | undefined {
  return obras.find((obra) => obra.slug === slug);
}

export const portfolioPreview = obras;

export const bastidores = [
  {
    title: "Teste de impermeabilização",
    image: "/obras/area-comum-condominio/01.webp",
  },
  {
    title: "Rufo e arremate",
    image: "/obras/telhado-condominio/03.webp",
  },
  {
    title: "Piso em execução",
    image: "/obras/area-comum-condominio/04.webp",
  },
  {
    title: "Fechamento do recinto",
    image: "/obras/zoologico-recinto/02.webp",
  },
];
