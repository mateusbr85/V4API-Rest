# API Rest V4

Esse projeto consiste no desenvolvimento de uma API integrada com Cron integrado, para uma rotina de importação diaria de dados, dados esses que podem ser consumidos pela API. Essa API disponibiliza algumas rotas, sendo elas:
* Rota do tipo Put, responsavel pelo recebimento de atualizações via cliente ('http://localhost:3001/api/v1/products/:code');
* Rota do tipo Delete, responsavel por atualizar o status do produto para trash ('http://localhost:3001/api/v1/products/:code');
* Rota do tipo Get, responsavel por pegar individualmente cada projeto ('http://localhost:3001/api/v1/products/:code');
* Rota responsavel por listar todos produtos do nosso banco, sendo possivel realizar a paginação dos mesmos ('http://localhost:3001/api/v1/products/list/:currentPage')
  
## Tecnologias Utiliadas para o Desenvolvimeto:
* Fastfy (Responsavel por criar o servidor e gerenciar o ciclo de vida das rotas);
* Mongoose ( Responsavel por criar nossa conexão e entidades do banco dedos);
* Node.js ( Reponsavel por executar a aplicação );

## Sobre documentação 3.0
* A documentação 3.0 esta na rota "https://localhost:3001/documentation"
  

## Algumas considerações sobre as ferramentas
* Uma das considerações mais importantes que eu gostaria de resaltar foi a escolha do Fastfy para a API, pois isso deixou a API mais leve, rapida e facil manutenção. A escoha também foi pela facilidade que existe na criação da documentação do Swagger como vocês vão poder verificar nas rotas.