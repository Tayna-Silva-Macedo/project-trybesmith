# Bem-vindo ao Projeto Trybesmith!

Este é um projeto da [Trybe](https://www.betrybe.com/) que foi desenvolvido no módulo de Back-end. Trata-se de uma loja de itens medievais, no formato de uma API, utilizando TypeScript.
Em seu desenvolvimento foi utilizada a arquitetura MSC (Model-Service-Controller), em conjunto com o módulo mysql2 que permite que sejam feitas manipulações no banco de dados MySQL.

## Tecnologias utilizadas

Para o desenvolvimento desta API foi utilizado ***Node.js*** juntamente com o framework ***Express***, que forneceu toda a estrutura para construir os endpoints da aplicação seguindo os princípios de arquitetura REST.

Fora isso, foi utilizado o módulo ***mysql2***, que nos permite fazer manipulações no banco de dados, como escrita, leitura, atualizações e exclusões (CRUD).

Para a geração e verificação de tokens foi utilizado o ***JWT*** (JSON Web Token), com ele é possível verificar se o usuário está devidamente logado para poder registrar um novo pedido.

## O que foi desenvolvido

  - Endpoints que lêem e escrevem em um banco de dados MySQL;
  - Middlewares que realizam verificações dos dados enviados nas requisições e se o usuário está logado para poder cadastrar um novo pedido;
  - Divisão da aplicação em camadas, o que permite uma maior organização do código e maior facilidade de manutenção.

## Como rodar o projeto na sua máquina utilizando o Docker:

1. Navegue até o local onde deseja clonar o repositório e utilize o **git clone**:
```
git clone git@github.com:Tayna-Silva-Macedo/project-trybesmith.git
```

2. Acesse o diretório do projeto **project-trybesmith** e rode os serviços **node** e **db** com os seguintes comandos:
```
cd project-trybesmith
docker-compose up -d
```

3. Acesse o terminal interativo do container criado:
```
docker exec -it trybesmith bash
```

4. Por fim, dentro do container, instale as dependências, crie o banco de dados e rode a aplicação utilizando os comandos:
```
npm install
npm run restore
npm start
```

