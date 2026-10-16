function filtraOcorrencias(paragrafo) {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1); // Filtra as palavras que aparecem mais de uma vez no parágrafo
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, index) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(", "); // Junta as palavras duplicadas em uma string separada por vírgulas
    textoFinal += `palavras duplicadas no parágrafo ${index + 1}: ${duplicadas} \n`;
  });

  return textoFinal;
}

export { montaSaidaArquivo };
