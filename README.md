# Context API ReactJS | React Native + TypeScript

Nesse repositório mostro a utilização da Context Api do React na prática, com o exemplo de login e validação de rotas conforme autenticação do usuário.

## Começando

Para ter começar, é necessário ter instalado no computador o [nodejs](https://nodejs.org/), gerenciador de pacote, sendo o **npm** ou **[yarn](https://yarnpkg.com/getting-started/install)** para poder continuar com a aplicação.

## Enfim, por que utilizar a context api ao inves do redux? 
Primeiramente gostaria de deixar claro que a context api **não é melhor e nem pior** que o redux, é sempre importante analisar a sua necessidade, e que cada caso é um caso, nesse caso em específico, como só está sendo utilizado para armanezar dados de usuário o uso da context api se torna mais interessante e simples.

O que a context api?
É uma função que já vem nativa no React, React Native, para prover dados em torno da aplicação inteira, semelhante ao redux. Com a context, você pode criar contexto novos para aplicação, como a autenticação do usuário, temas, dentre outras funcionalidades. Nela você pode gerenciar seus estados e distribuir de forma global para os componentes filhos.

Nos arquivos do repositório, estarão anotações importantes para o entendimento.

**Importante**
A aplicação já conta com o typescript, mas não se preocupe! Tudo estará **comentado no código**.

---

## Instalando
Agora é necessário clonar os arquivos do repositório

```
git clone 
```
instalar os modulos do node (node_modules)
```
npm install
```

para rodar o projeto execute o comando
```
npm start 
```

Comece pela pasta

    src/contexts

* Obs: Se você não utiliza o npm com gerenciador de pacote, mas usa o yarn, é só trocar npm por yarn.



## Autor

* **Érique Toledo**  - [Github](https://github.com/etoledo44)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---
Você pode aprender mais em [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
Para aprender React, veja [React documentation](https://reactjs.org/).
