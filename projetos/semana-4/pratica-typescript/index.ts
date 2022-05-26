// Importação das libs
import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "query-string";
import * as url from "url";
import { writeFile, unlink, readFile } from "fs";

// Definição de porta
const port = 5000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    const urlParsed = url.parse(request.url ? request.url : "", true);

    var resposta;

    // Receber informações do usuário
    const params = parse(urlParsed.search ? urlParsed.search : "");

    if (urlParsed.pathname == "/create-user") {
      // Salvar informações
      writeFile(
        `users/${params.id}.txt`,
        `${JSON.stringify(params)}`,
        (err: any) => {
          if (err) throw err;

          resposta = "Usuário criado/atualizado com sucesso";

          response.statusCode = 200;
          response.setHeader("Content-Type", "application/json");
          response.end(resposta);
        }
      ); // Buscar informações do usuário
    } else if (urlParsed.pathname == "/search-user") {
      readFile(`users/${params.id}.txt`, (err, data) => {
        resposta = data;

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.end(resposta);
      }); // Deletar usuário
    } else if (urlParsed.pathname == "/delete-user") {
      unlink(`users/${params.id}.txt`, (err) => {
        resposta = err ? "Usuário não encontrado" : "Usuário deletado";

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end(resposta);
      });
    }
  }
);

// Execução do Servidor
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// http://localhost:5000/create-user?nome=Pedro&idade=23&id=1
// http://localhost:5000/search-user?nome=Pedro&idade=23&id=1
// http://localhost:5000/delete-user?nome=Pedro&idade=23&id=1
