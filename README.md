# Desafio Codex: Naja Store
##### Membros
- Henrique Lopes Nóbrega
- José Alberto V. da Silva

#### Como o projeto foi estruturado
Optamos por trabalhar com o modelo MVC (Model, View e Controller).

No banco de dados utilizamos MongoDB utilizando o Mongoose como ODM. A escolha do banco de dados foi feita pensando no tamanho do sistema, que contém poucos relacionamentos e acreditamos que seria mais fácil organizar usando um banco não-relacional.

Seguimos os padrões RESTFUL, com rotas seguindo a mesma nomenclatura e com retornos HTTP apropriados para cada requisição.

A API está hospedada no heroku e disponível no link: https://floating-stream-30009.herokuapp.com

| Tipo da Requisição | URI                                | Body                         | Retorno                                     | HTTP Status (Success, Error) |
| ------------------ | ---------------------------------- | ---------------------------- | ------------------------------------------- | ---------------------------- |
| GET                | produtos/                          |                              | Retorna todos os produtos existentes        | 200, 400                     |
| POST               | categorias/*:categoryId*/produtos/ | name, quantity, value, image | Retorna o produto criado                    | 201, 400                     |
| GET                | produtos/*:id*                     |                              | Retorna o produto com o id passado na URI   | 200, 404                     |
| PUT                | produtos/:id                       | name, quantity, value, image | Retorna o produto atualizado                | 200, 400                     |
| DELETE             | produtos/*:id*                     |                              | Deleta o produto. Sem retorno.              | 204, 400                     |
| GET                | categorias/                        |                              | Retorna todas as categorias existentes      | 200, 400                     |
| POST               | categorias/                        | name                         | Retorna a categoria criada                  | 201, 400                     |
| GET                | categorias/*:id*                   |                              | Retorna a categoria com o ID passado na URI | 200, 404                     |
| PUT                | categorias/*:id*                   | name                         | Retorna o produto atualizado                | 200, 400                     |
| DELETE             | categorias/*:id*                   |                              | Deleta a categoria. Sem retorno.            | 204, 400                     |

#### Observação:
As rotas que aceitam imagem com parâmetros são definidas como enctype/multiform-data.
Optamos por armazenar as imagens no serviço Cloudinary.
