export interface PortfolioItem {
  id: string;
  vehicle: string;
  brand: 'Porsche' | 'BMW' | 'Audi' | 'Mercedes-AMG' | 'Supercar';
  serviceType: string;
  summary: string;
  executionDays: string;
  yearModel: string;
  protectionApplied: string;
  image: string;
  highlightBadge: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'porsche-gt3',
    vehicle: 'Porsche 911 GT3 (992)',
    brand: 'Porsche',
    serviceType: 'PPF Full Body + Vitrificação 9H',
    summary: 'Instalação completa de película de proteção TPU com corte computadorizado e cobertura total das entradas de ar, asa traseira e paralamas, finalizada com coating cerâmico 9H.',
    executionDays: '4 dias',
    yearModel: '2024 / Jet Black Metallic',
    protectionApplied: 'PPF TPU 200 Microns + Graphene 9H',
    image: '/images/hero_porsche_detailing_1793814173679.jpg',
    highlightBadge: 'Full Body Shield',
  },
  {
    id: 'lamborghini-huracan',
    vehicle: 'Lamborghini Huracán EVO',
    brand: 'Supercar',
    serviceType: 'PPF Frontal + Correção de Pintura',
    summary: 'Eliminação de micro-riscos de entrega e aplicação de PPF no pacote Track (frente integral e laterais inferiores) para suportar track days e rodovias sem marcas de pedriscos.',
    executionDays: '3 dias',
    yearModel: '2023 / Carbon Black & Nero',
    protectionApplied: 'PPF TPU Self-Healing + Polish Stage 3',
    image: '/images/service_ppf_installation_1793814173987.jpg',
    highlightBadge: 'Track Pack Defense',
  },
  {
    id: 'bmw-m3-competition',
    vehicle: 'BMW M3 Competition G80',
    brand: 'BMW',
    serviceType: 'Vitrificação Cerâmica 9H + Rodas',
    summary: 'Descontaminação química e polimento técnico em 2 etapas para realce do pigmento metálico, finalizado com vitrificador cerâmico de dureza 9H na carroceria e pinças de freio.',
    executionDays: '2 dias',
    yearModel: '2024 / Isle of Man Green',
    protectionApplied: 'Ceramic Coating 9H Diamond (5 Anos)',
    image: '/images/service_ceramic_coating_1793814174351.jpg',
    highlightBadge: 'Efeito Hidrofóbico 115°',
  },
  {
    id: 'audi-rs6-avant',
    vehicle: 'Audi RS6 Avant Quattro',
    brand: 'Audi',
    serviceType: 'Correção de Verniz + PPF Frontal',
    summary: 'Restauração milimétrica da pintura Nardo Grey, remoção de contaminações severas de estrada e aplicação de filme de poliuretano nas zonas críticas de choque frontal.',
    executionDays: '3 dias',
    yearModel: '2023 / Nardo Grey',
    protectionApplied: 'Stage 2 Paint Correction + PPF Front',
    image: '/images/service_paint_correction_1793814175498.jpg',
    highlightBadge: 'Brilho Espelhado',
  },
  {
    id: 'mercedes-amg-gt',
    vehicle: 'Mercedes-AMG GT Black Series',
    brand: 'Mercedes-AMG',
    serviceType: 'Blindagem Estética Completa',
    summary: 'Trabalho artesanal de PPF envelopando todas as fibras de carbono expostas, vitrificação de vidros com repelente de chuva e detalhamento com hidratação de couro Nappa no habitáculo.',
    executionDays: '5 dias',
    yearModel: '2023 / Magno Graphite Grey',
    protectionApplied: 'PPF Satin Matte + Ceramic Pro Interior',
    image: '/images/workshop_studio_facility_1793814175901.jpg',
    highlightBadge: 'Carbon Fiber Protection',
  },
];
