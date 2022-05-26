"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importação das libs
const http_1 = require("http");
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
// Definição de porta
const port = 5000;
const server = (0, http_1.createServer)((request, response) => {
    const urlParsed = url.parse(request.url ? request.url : "", true);
    var resposta;
    // Receber informações do usuário
    const params = (0, query_string_1.parse)(urlParsed.search ? urlParsed.search : "");
    if (urlParsed.pathname == "/create-user") {
        // Salvar informações
        (0, fs_1.writeFile)(`users/${params.id}.txt`, `${JSON.stringify(params)}`, (err) => {
            if (err)
                throw err;
            resposta = "Usuário criado/atualizado com sucesso";
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.end(resposta);
        }); // Buscar informações do usuário
    }
    else if (urlParsed.pathname == "/search-user") {
        (0, fs_1.readFile)(`users/${params.id}.txt`, (err, data) => {
            resposta = data;
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.end(resposta);
        }); // Deletar usuário
    }
    else if (urlParsed.pathname == "/delete-user") {
        (0, fs_1.unlink)(`users/${params.id}.txt`, (err) => {
            resposta = err ? "Usuário não encontrado" : "Usuário deletado";
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end(resposta);
        });
    }
});
// Execução do Servidor
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// http://localhost:5000/create-user?nome=Pedro&idade=23&id=1
// http://localhost:5000/search-user?nome=Pedro&idade=23&id=1
// http://localhost:5000/delete-user?nome=Pedro&idade=23&id=1
