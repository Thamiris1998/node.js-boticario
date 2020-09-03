# NODE-js

#INSTALAÇÃO
- Instale o node.js através do link https://nodejs.org/en/download/
- Via linha de comando execute o comando ($ yarn install) ou o ($ npm install) o pacote de sua preferência

#CONFIGURAÇÕES
- No arquivo src/controller/dnaController.js encontra-se as rotas das api's'Rest.
- No arquivo src/database/mongo.js é onde estão as configurações para a conexão com o banco de dados.
- No arquivo src/model/Dna.js está a estrutura do DNA onde este é usado como modelo para a criação da tabela no banco de dados e para as consultas api's.


#Para compilar o projeto
- $ npm start

#Para testar o projeto
- $ npm test

#URL DA API (GCLOUD - Google App Engine)
- https://boreal-byte-253016.appspot.com/

#OBS
- Para conexão com o banco de dados foi usado o pacote Mongoose.
- Para requisições do tipo HttpsClient foi usado o pacote cors.
- Foi utilizado o appengine flexible para deploy está configuração encontra-se no arquivo app.yaml


