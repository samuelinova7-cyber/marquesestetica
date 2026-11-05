export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  highlight: string;
  warranty: string;
  timeEstimate: string;
  idealFor: string;
  image: string;
  features: string[];
  packages?: {
    name: string;
    coverage: string;
    ideal: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ppf',
    number: '01',
    title: 'PPF — Paint Protection Film (TPU Premium)',
    shortTitle: 'PPF (Película de Proteção)',
    tagline: 'A proteção física definitiva contra impactos, riscos e detritos de estrada.',
    description:
      'Película de poliuretano termoplástico (TPU) de alta pureza óptica com tecnologia autorregenerativa (Self-Healing). Absorve impactos de pedriscos em rodovias, arranhões superficiais provocados por lavagens e previne o desbotamento causado por raios UV e contaminantes químicos.',
    highlight: 'Tecnologia Self-Healing com cura por calor ambiente',
    warranty: 'Garantia de 5 a 10 anos contra amarelamento e craquelamento',
    timeEstimate: '2 a 4 dias úteis',
    idealFor: 'Superesportivos, veículos recém-saídos da concessionária e motoristas de rodovia',
    image: '/images/service_ppf_installation_1793814173987.jpg',
    features: [
      'Autorregeneração de microrriscos com o calor do sol ou água quente',
      'Proteção contra pedriscos projetados por outros veículos em alta velocidade',
      'Barreira intransponível contra manchas ácidas de fezes de aves e seiva de árvores',
      'Corte computadorizado sob medida (Plotter) sem uso de lâminas na lataria',
      'Acabamento brilhante de alto reflexo ou fosco acetinado (Satin/Matte)',
    ],
    packages: [
      {
        name: 'PPF Frontal (Track Pack)',
        coverage: 'Parachoque dianteiro, capô integral, paralamas dianteiros, faróis e retrovisores',
        ideal: 'Proteção das áreas de maior exposição a pedriscos em pistas e estradas',
      },
      {
        name: 'PPF Full Body (Proteção Total)',
        coverage: '100% da lataria externa, soleiras, colunas de teto e molduras',
        ideal: 'Blindagem estética completa para preservação total do valor de revenda',
      },
    ],
  },
  {
    id: 'vitrificacao',
    number: '02',
    title: 'Vitrificação Cerâmica & Grafeno 9H',
    shortTitle: 'Vitrificação Cerâmica 9H',
    tagline: 'Brilho espelhado com profundidade vítrea e hidrorrepelência extrema.',
    description:
      'Coating nanocerâmico de dureza 9H que se funde molecularmente aos microporos do verniz automotivo. Cria uma película vítrea impermeável com ângulo de contato superior a 110°, repelindo instantaneamente água, terra, poeira e fuligem com facilidade de lavagem inigualável.',
    highlight: 'Ângulo de contato hidrofóbico > 115° com efeito lótus',
    warranty: 'Garantia técnica de 3 a 5 anos com certificado',
    timeEstimate: '1 a 2 dias úteis',
    idealFor: 'Quem busca brilho de showroom contínuo e facilidade máxima na lavagem',
    image: '/images/service_ceramic_coating_1793814174351.jpg',
    features: [
      'Efeito hidrofóbico com escorrimento instantâneo de água e lama',
      'Aumento perceptível na dureza superficial da pintura (9H Pencil Hardness)',
      'Brilho espelhado com efeito molhado permanente ("wet look")',
      'Resistência a temperaturas extremas de até 750°C e radiação UV severa',
      'Manutenções rápidas com lavagens muito mais fáceis e sem esforço mecânico',
    ],
    packages: [
      {
        name: 'Ceramic Coating 9H Diamond',
        coverage: 'Verniz da pintura com dupla camada e selante sintético de acabamento',
        ideal: 'Veículos de passeio e executivos buscando proteção de 3 anos',
      },
      {
        name: 'Graphene Ceramic Pro Ultra',
        coverage: 'Pintura completa com grafeno disperso + rodas e pinças de freio',
        ideal: 'Máxima dissipação térmica e blindagem química extrema por até 5 anos',
      },
    ],
  },
  {
    id: 'correcao-pintura',
    number: '03',
    title: 'Correção & Restauração de Pintura',
    shortTitle: 'Correção de Pintura (Polimento)',
    tagline: 'Restauração óptica minuciosa eliminando marcas de lavagem e hologramas.',
    description:
      'Processo cirúrgico de corte, refino e lustro conduzido com politrizes roto-orbitais e iluminação de inspeção Scangrip. Medimos a espessura da camada de verniz com micrômetro digital para remover apenas o necessário, eliminando até 95% das imperfeições sem desgastar a pintura original.',
    highlight: 'Medição micrométrica digital antes, durante e após o procedimento',
    warranty: 'Verniz recuperado com nivelamento óptico impecável',
    timeEstimate: '1 a 3 dias úteis',
    idealFor: 'Veículos com swirls ("teias de aranha"), marcas circulares e pintura opaca',
    image: '/images/service_paint_correction_1793814175498.jpg',
    features: [
      'Remoção de riscos superficiais, marcas de vassoura e esponjas abrasivas',
      'Eliminação completa de marcas de holograma e marcas de boina de polimentos antigos',
      'Descontaminação ferrosa profunda e remoção de pulverizações industriais',
      'Nivelamento do verniz para reflexão nítida sem distorções ópticas',
      'Preparação obrigatória para aplicação perfeita de PPF ou vitrificador',
    ],
  },
  {
    id: 'detalhamento-interno',
    number: '04',
    title: 'Detalhamento & Higienização Interna',
    shortTitle: 'Detalhamento Interno & Couro',
    tagline: 'Assepsia profunda, hidratação de couros nobres e restauração de cabine.',
    description:
      'Limpeza técnica minuciosa desmontando os pontos necessários para alcançar cada fresta. Aplicamos vapor a 160°C para esterilização sem encharcar componentes eletrônicos, realizamos nutrição com ceras naturais para couro de padrão europeu e proteção cerâmica de plásticos internos.',
    highlight: 'Higienização a vapor 160°C e hidratação com acabamento fosco original',
    warranty: 'Eliminação de 99,9% de ácaros, bactérias e odores',
    timeEstimate: '1 dia útil',
    idealFor: 'Preservação de interiores refinados, bancos de couro, alcantara e carpetes',
    image: '/images/workshop_studio_facility_1793814175901.jpg',
    features: [
      'Nutrição de bancos de couro mantendo o toque sedoso e acabamento fosco original de fábrica',
      'Higienização de cintos de segurança, teto solar, dutos de ar-condicionado e carpetes',
      'Proteção hidrofóbica para tecidos e alcantara contra derramamento de líquidos',
      'Limpeza de painéis digitais e telas multimídia com produtos de pH neutro sem agressão',
      'Oxissanitização com ozônio para purificação microbiológica completa do ar interno',
    ],
  },
];
