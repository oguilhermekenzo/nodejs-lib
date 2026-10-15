import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";

// Lê o caminho do arquivo a partir dos argumentos da linha de comando
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

// Verifica se o caminho do arquivo foi fornecido e chama a função para ler o arquivo
fs.readFile(link, "utf8", (err, texto) => {
  try {
    if (err) throw err;
    contaPalavras(texto);
  } catch (err) {
    trataErros(err);
  }
});
