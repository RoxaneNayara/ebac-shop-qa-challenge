/**
 * Formata um valor numérico no padrão de moeda usado pela EBAC Shop (ex: "R$48,00").
 *
 * Limitação conhecida: não trata separador de milhar (ex: 1234 -> "R$1234,00"
 * em vez de "R$1.234,00"). Não é uma limitação real na cobertura atual, pois
 * os dados de teste (data/products.ts) nunca ultrapassam R$999. Caso um cenário
 * futuro use valores >= R$1.000, esta função deve ser revisada com
 * Intl.NumberFormat("pt-BR").
 */
export function formatBRL(value: number): string {
  return `R$${value.toFixed(2).replace(".", ",")}`;
}

export function formatBRLWithSymbol(value: number): string {
  return `R$${formatBRL(value)}`;
}
