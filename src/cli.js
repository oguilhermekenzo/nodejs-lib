import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";

// Lê o caminho do arquivo a partir dos argumentos da linha de comando
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

// Verifica se o caminho do arquivo foi fornecido e chama a função para ler o arquivo
fs.readFile(link, "utf8", (err, texto) => {
  try {
    if (err) throw err;
    const resultado = contaPalavras(texto);
    criaESalvaArquivo(resultado, endereco);
  } catch (err) {
    trataErros(err);
  }
});

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras); // Converte o objeto em uma string JSON formatada
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("arquivo criado");
  } catch (err) {
    throw err;
  }
}
