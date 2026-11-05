export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'PPF' | 'Vitrificação' | 'Cuidados';
}

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'PPF',
    question: 'Qual a diferença entre PPF (Película de Proteção) e Vitrificação Cerâmica?',
    answer:
      'O PPF é uma película física de poliuretano termoplástico (TPU) de alta espessura (~200 microns) que absorve impactos mecânicos reais de pedriscos, batidas de portas e riscos intencionais, contando ainda com autorregeneração térmica. A vitrificação cerâmica é uma proteção química nanotecnológica de espessura micrométrica que proporciona brilho espelhado, extrema repelência à água e sujeira, e proteção contra raios solares e fezes de aves, mas não impede lascas provocadas por pedras em alta velocidade. O melhor dos dois mundos é aplicar PPF nas áreas de choque frontal e vitrificação no restante.',
  },
  {
    id: 'faq-2',
    category: 'PPF',
    question: 'O PPF amarela com o passar dos anos ou altera a cor original do carro?',
    answer:
      'Não. Trabalhamos exclusivamente com películas TPU ópticas de última geração com estabilizadores UV avançados. Nossos filmes possuem garantia certificada de 5 a 10 anos contra amarelamento, delaminação e craquelamento. A película é 100% transparente e preserva exatamente a tonalidade e reflexo original da pintura.',
  },
  {
    id: 'faq-3',
    category: 'Vitrificação',
    question: 'Quanto tempo dura a vitrificação e como funciona a garantia?',
    answer:
      'Nossos coatings cerâmicos e com grafeno possuem durabilidade comprovada de 3 a 5 anos, acompanhados de certificado técnico de garantia. Para manter o efeito hidrofóbico e o brilho máximo, recomendamos uma manutenção preventiva semestral no nosso estúdio com inspeção e aplicação de booster de sílica.',
  },
  {
    id: 'faq-4',
    category: 'Geral',
    question: 'Quanto tempo o veículo precisa ficar no estúdio?',
    answer:
      'Depende do pacote escolhido: uma Vitrificação com polimento técnico de 2 etapas leva de 1 a 2 dias úteis; a instalação de PPF Frontal Track Pack leva cerca de 2 a 3 dias úteis; já um PPF Full Body completo demanda de 4 a 5 dias úteis, garantindo tempo adequado de cura, desmontagem cuidadosa de frisos e inspeção final de qualidade.',
  },
  {
    id: 'faq-5',
    category: 'Cuidados',
    question: 'Como devo lavar o veículo após a aplicação do PPF ou Vitrificador?',
    answer:
      'A lavagem se torna muito mais simples e rápida. Recomendamos o uso do método de dois baldes com xampu automotivo de pH neutro e luva de microfibra de alta gramatura. Evite lavagens automáticas com escovas rotativas e produtos alcalinos/ácidos agressivos. No momento da entrega, você recebe nosso manual exclusivo de cuidados pós-aplicação.',
  },
  {
    id: 'faq-6',
    category: 'Geral',
    question: 'Como funciona o processo de orçamento e agendamento?',
    answer:
      'Você pode utilizar nosso Simulador Express no site para escolher seu modelo e os serviços desejados. Ao clicar em enviar, você será direcionado para uma conversa direta no WhatsApp com nosso consultor técnico, onde poderá tirar dúvidas, enviar fotos do veículo e agendar uma avaliação presencial com medição de verniz.',
  },
];
