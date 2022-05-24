// Incluindo biblioteca
const http = require('http')
const queryString = require('query-string')
const url = require('url')
const fs = require('fs')

// Definição de endereço e URL no localhost:3000
const hostname = '127.0.0.1'
const port = 3000

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

    let resposta
    const urlParsed = url.parse(req.url, true)

    // Receber informações do usuário
    const params = queryString.parse(urlParsed.search)

    // Criar um usuário & Atualizar arquivo
    if (urlParsed.pathname == '/create-user') {

        // Salvar informações 
        fs.writeFile(`users/${params.id}.txt`, `${JSON.stringify(params)}`, err => {
            if (err) throw err
            
            resposta = 'Usuário criado/atualizado com sucesso'

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(resposta)
        })
    } else if (urlParsed.pathname == '/search-user') {
        fs.readFile(`users/${params.id}.txt`, (err, data) => {
            resposta = data

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(resposta)
        })
    } else if(urlParsed.pathname == '/delete-user') {
        fs.unlink(`users/${params.id}.txt`, err => {
            resposta = err ? "Usuário não encontrado" : 'Usuário deletado'

            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end(resposta)
        })
    }

    
})

// Execução do servidor
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})


// http://localhost:3000/create-user?nome=Pedro&idade=23&id=1
// http://localhost:3000/search-user?nome=Pedro&idade=23&id=1
// http://localhost:3000/delete-user?nome=Pedro&idade=23&id=1