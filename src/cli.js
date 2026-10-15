import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";

// Lê o caminho do arquivo a partir dos argumentos da linha de comando
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

// Lê o arquivo e processa o conteúdo
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
  const textoPalavras = montaSaidaArquivo(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("arquivo criado");
  } catch (err) {
    throw err;
  }
}
