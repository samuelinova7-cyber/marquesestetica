export interface Testimonial {
  id: string;
  author: string;
  vehicle: string;
  city: string;
  date: string;
  service: string;
  content: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Ricardo Silveira',
    vehicle: 'Porsche 911 Carrera S',
    city: 'São Paulo - SP',
    date: 'Outubro de 2024',
    service: 'PPF Frontal + Vitrificação 9H',
    content:
      'Trabalho de altíssimo nível. A maior preocupação que eu tinha com PPF eram as emendas e bordas visíveis, mas a equipe da Marques fez um acabamento perfeito, praticamente invisível. O brilho da vitrificação no restante do carro é impressionante.',
    rating: 5,
  },
  {
    id: 'test-2',
    author: 'Fernando Albuquerque',
    vehicle: 'BMW M3 Competition G80',
    city: 'Alphaville - SP',
    date: 'Novembro de 2024',
    service: 'Correção de Verniz + Vitrificação Grafeno',
    content:
      'Peguei meu carro zero na concessionária e já veio com micro-riscos de lavagem mal feita. Levei direto na Marques. A correção técnica deixou o verde Isle of Man com uma profundidade surreal. O acompanhamento por fotos no WhatsApp me deixou 100% tranquilo.',
    rating: 5,
  },
  {
    id: 'test-3',
    author: 'Dr. Marcelo Mendonça',
    vehicle: 'Audi RS6 Avant',
    city: 'São Paulo - SP',
    date: 'Dezembro de 2024',
    service: 'PPF Full Body + Detalhe Interno',
    content:
      'Viajo muito por rodovias e estava cansado de ver o parachoque cheio de marcas de pedras. O PPF da Marques já se pagou no primeiro mês. Lavei com jato de água e a sujeira simplesmente desliza. Equipe atenciosa, estúdio impecável e prazo rigorosamente cumprido.',
    rating: 5,
  },
  {
    id: 'test-4',
    author: 'Guilherme Toledo',
    vehicle: 'Mercedes-AMG C63s',
    city: 'Campinas - SP',
    date: 'Janeiro de 2025',
    service: 'Vitrificação Cerâmica Diamond',
    content:
      'A facilidade de lavar o carro agora é inacreditável. A água bate e forma aquelas bolhas perfeitas que escorrem sozinhas na secagem. Parabéns pelo profissionalismo e pelo padrão de atendimento boutique.',
    rating: 5,
  },
];
