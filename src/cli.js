import fs from "fs";
import path from "path";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from "commander";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "caminho do texto a ser processado")
  .option(
    "-d, --destino <string>",
    "caminho da pasta onde salvar o arquivo de resultados",
  )
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error("erro: favor inserir caminho de origem e destino");
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log("Processamento concluído com sucesso!");
    } catch (err) {
      console.error("ocorreu um erro", err);
    }
  });

program.parse();

function processaArquivo(texto, destino) {
  // Lê o arquivo e processa o conteúdo
  fs.readFile(texto, "utf8", (err, texto) => {
    try {
      if (err) throw err;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (err) {
      trataErros(err);
    }
  });
}

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
