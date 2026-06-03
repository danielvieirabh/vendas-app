// export const converterEmBigDecimal = (value) : number => {
//     if (!value) {
//         return 0;
//     } 
//     // 2.000,00 -> 2000,00
//     return value.replace(".", "").replace(",", "."); // Resultado : 2000.00
//     //Troca o ponto por nada e depois troca a , pelo .
// }


export const converterEmBigDecimal = (value: string): number => {
    if (!value) {
        return 0;
    } 
    // Remove pontos de milhar, limpa o símbolo de R$ e espaços, e troca a vírgula por ponto
    const cleanValue = value
        .replace(/\./g, '')
        .replace(',', '.')
        .replace(/[^\d.-]/g, ''); // Garante que fiquem apenas números, ponto e sinal de menos

    return parseFloat(cleanValue) || 0;
};

export const formatReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
