export type Tema = { slug: string; titulo: string; descricao: string };
export type Serie = { slug: string; titulo: string; nivel: string; temas: Tema[] };

export const series: Serie[] = [
  {
    slug: "6-ano", titulo: "6º ano", nivel: "Ensino Fundamental",
    temas: [
      { slug: "numeros-naturais", titulo: "Números naturais", descricao: "Operações e propriedades" },
      { slug: "fracoes", titulo: "Frações e decimais", descricao: "Representação, comparação e operações" },
      { slug: "geometria-basica", titulo: "Geometria básica", descricao: "Ângulos, polígonos e perímetro" },
    ],
  },
  {
    slug: "7-ano", titulo: "7º ano", nivel: "Ensino Fundamental",
    temas: [
      { slug: "inteiros", titulo: "Números inteiros", descricao: "Operações com positivos e negativos" },
      { slug: "equacoes-1-grau", titulo: "Equações do 1º grau", descricao: "Resolução e problemas" },
      { slug: "proporcionalidade", titulo: "Razão e proporção", descricao: "Regra de três e porcentagem" },
    ],
  },
  {
    slug: "8-ano", titulo: "8º ano", nivel: "Ensino Fundamental",
    temas: [
      { slug: "potencias-raizes", titulo: "Potências e raízes", descricao: "Propriedades e notação científica" },
      { slug: "fatoracao", titulo: "Produtos notáveis e fatoração", descricao: "Simplificando expressões algébricas" },
      { slug: "sistemas", titulo: "Sistemas de equações", descricao: "Substituição e adição" },
    ],
  },
  {
    slug: "9-ano", titulo: "9º ano", nivel: "Ensino Fundamental",
    temas: [
      { slug: "equacao-2-grau", titulo: "Equação do 2º grau", descricao: "Bhaskara, soma e produto" },
      { slug: "semelhanca", titulo: "Semelhança e Teorema de Tales", descricao: "Razões entre segmentos" },
      { slug: "pitagoras", titulo: "Teorema de Pitágoras", descricao: "Relações no triângulo retângulo" },
    ],
  },
  {
    slug: "1-em", titulo: "1º ano", nivel: "Ensino Médio",
    temas: [
      { slug: "conjuntos", titulo: "Conjuntos", descricao: "Operações e diagramas" },
      { slug: "funcoes", titulo: "Funções", descricao: "Conceito, afim e quadrática" },
      { slug: "progressoes", titulo: "Progressões", descricao: "PA e PG" },
    ],
  },
  {
    slug: "2-em", titulo: "2º ano", nivel: "Ensino Médio",
    temas: [
      { slug: "trigonometria", titulo: "Trigonometria no ciclo", descricao: "Seno, cosseno e tangente" },
      { slug: "matrizes", titulo: "Matrizes e determinantes", descricao: "Operações e sistemas lineares" },
      { slug: "analise-combinatoria", titulo: "Análise combinatória", descricao: "Contagem, permutações e combinações" },
    ],
  },
  {
    slug: "3-em", titulo: "3º ano", nivel: "Ensino Médio",
    temas: [
      { slug: "geometria-analitica", titulo: "Geometria analítica", descricao: "Ponto, reta e circunferência" },
      { slug: "probabilidade", titulo: "Probabilidade e estatística", descricao: "Eventos e medidas de centralidade" },
      { slug: "geometria-espacial", titulo: "Geometria espacial", descricao: "Prismas, cilindros e esferas" },
    ],
  },
];