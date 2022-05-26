// Incluindo a biblioteca do protocolo http
const http = require('http')
const url = require('url')
const queryString = require('query-string')

// Definindo o IP (localhost) e a porta (url)
const hostname = '127.0.0.1'
const port = 3000

// Implementação da Regra de negócio
const server = http.createServer((req, res) => {

    // Pegar a pergunta na URL
    const params = queryString.parse(url.parse(req.url, true).search)
    // Verificar a pergunta e escolher uma resposta
    let resposta
    
    if(params.pergunta == 'melhor-filme') {
        resposta = 'prisioners'
    } else if(params.pergunta == 'melhor-tecnologia-backend') {
        resposta = 'nodejs'
    } else {
        resposta = 'não sei, desculpe 🤔'
    }
   
    // Retornar a resposta escolhida

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(resposta)
})

// Código para execução do servidor
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})  