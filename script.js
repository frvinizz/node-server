// requisição do http
const http = require('http');
const PORT = 3000;

// criação do server com requerimento e respota como argumentos
http.createServer((request, response)=>{
    // escrita do cabeçalho indicando o tipo de texto e como deve ser compilado
    response.writeHead(200, {'Content-Type':'text/plain'});
    // resposta para o usuário
    response.end("Estamos on")
    // indicação da porta e verificação de erro na criação do servidor
}).listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Estamos on na porta ${PORT}`);
    }
})