# SEMANA OmniStack 8.0
## Estou atrasado, mas o que vale é fazer...

### Quem é esse tal de Cafesão? :question:

Ola, meu nome é Gabriel, apelido **Cafesão**.
Sou apenas um cara que **ama programar** e gosta de desafios, e desta vez o desafio foi criar um Server (Back-End) em NodeJS, que houvesse um banco de dados MongoDB, usasse React para a aplicação web (Uma novidade para mim) e claro, usar React-Native para Mobile (Android mais especificamente).

> Olha, muita coisa nova...

### Nossa, ta meio atrasado ein :rage:

Pois é, não faz tanto tempo assim, eu foquei em aprender JavaScript e NodeJS, eu sabia o que era (por cima) um React e React-Native, mas nunca tinha usado de fato eles.
Por que, de primeiro momento, eu queria ser um programador Back-End e **só** Back-End, mas as coisas mudam nesta vida...

> Oh, se muda...

## Por que decidiu mudar para um full-stack? :question:

Quando percebi que o mercado estava mais interessado em um desenvolver full-stack do que apenas um cara do Back-End e outro do Front-End, eu comecei a estudar aos poucos sobre React e React-Native.
Foi interessante, surpreendente e assustador, ver todo aquele conteúdo novo, era JS, mas usando React, e claro, tem as suas propriedades, particularidades, enfim, toda essa Stack, e grande... **bem grande**.

## Uau, e como foi esse progresso? :question:

Bom, como eu disse, de primeiro momento, assustador, mas depois, trabalhando mais com o React e React-Native, comecei a entender o que, de fato, eu estava fazendo, e criei coragem para criar um projeto pessoal, que usasse um pouco deste projeto, como alguns estilos, mas que fosse sobre outro assunto e com um visual, um pouco diferente.
O primeiro projeto que criei sem ser este da OmniStack é o [Café](https://github.com/cafesao/Cafe_Front_Back).

### E como faço para rodar? :open_mouth:

Primeiramente você precisa ter o [Yarn](https://yarnpkg.com/pt-BR/) instalado, junto com o [Node.JS](https://nodejs.org/pt-br/).

Feito isso e verificado se o Yarn e o Node.JS esta devidamente instalado, e só entrar nas pastas do 'frontend', 'backend' e 'mobile' via terminal e colocar o comando `yarn install`, feito isso ele ira instalar todas as dependências. (**O esperado é esse, mas...nunca se sabe**)

Explicação do comando:

>O comando yarn install é usado para instalar todas as dependências de um projeto. As dependências são recuperadas do arquivo package.json do seu projeto, e armazenadas no arquivo yarn.lock.

Depois de ter instalado as dependências e só colocar `yarn dev` dentro da pasta do 'backend', `yarn start` na pasta do 'frontend' e `yarn react-native run-android` na pasta do 'mobile'.
No caso do mobile, não esqueça de executar `npx react-native init [NOME_DO_APP]`, para que ele baixe os arquivos para rodar, tanto no Android, quanto no Iphone.

Caso algum erro aconteça no 'frontend', execute `yarn create react-app [NOME_DO_APP]` e apenas realoque as pastas e apague os arquivos que você não ira usar.

### Opcional :exclamation:

Você precisa ter instalado o [Docker](https://www.docker.com) ou o banco de dados do MongoDB, dentro de 'backend/src/server.js', encontre a linha 21 e modifique.

**DICA**: Se você quiser ter um banco de dados MongoDB na nuvem **TOTALMENTE DE GRAÇA**, use o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).