export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []; // Ignora parágrafos vazios
    return verificaPalavrasDuplicadas(paragrafo); // Chama a função para verificar palavras duplicadas em cada parágrafo
  });
  return contagem;
}

function extraiParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n"); // Quebra o texto em parágrafos usando a quebra de linha como delimitador
  return paragrafos;
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // Remove pontuação da palavra
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};

  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      // Verifica se a palavra tem pelo menos 3 caracteres
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // Incrementa a contagem da palavra no objeto resultado
    }
  });

  return resultado;
}
