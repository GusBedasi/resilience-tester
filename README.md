# Resilience Tester

![Resilience](https://media.giphy.com/media/xUA7aSf1CJZtUk2oE0/giphy.gif)

Aplicação criada com o objetivo de disponibilizar para o público uma API para testes de resiliência.

# O que é resiliência?

Bom, contextualizando, pense que você têm uma aplicação que têm depêndencia de uma API externa e em alguns momento o retorno dessa API é 404, 500 e 503,
esses retornos podem acontecer por alguns motivos... como: a aplicação ficou fora 500, não deu tempo para o banco processar o seu "registro" por isso retornou 404 ou algum problema de rede causou timeout 503.

Ai que entra a resiliência, ao invés de aceitar que aconteceu um erro você pode implementar um sistema de resiliência na sua aplicação para realizar retentativas, caso muitas
requisições retornem falhas, paramos as requisições por um tempo, aumentamos o tempo de um request para o outro, etc. Existem muitas abordagens quando se trata de resiliência,
existe uma biblioteca chamada [Polly](https://github.com/App-vNext/Polly/wiki) do Dotnet que têm uma wiki linda sobre o assunto.

# O que essa API faz de fato?

Basicamente essa aplicação te retorna as respostas de acordo com a rota e com os parâmetros passados

# Usage

A aplicação já está no ar e pode ser encontra na url: *www.resiliencetestes.com.br*, por enquanto não temos visualização pelo browser, só aceitamos requests.

## Rotas
* Fail
* Timeout
* NotFound

### Tabela de uso:

| Rota  | Parâmetros  | Status code  | Response |
|---|---|---|---|
| /fail  | ?percentage=10 | 200 ou 500  | No body return for response |
| /notfound  | ?percentage=10  | 200 ou 404  | No body return for response |
| /timeout  | ?percentage=10 &timeout=3  | 200 ou 503  | {"ServiceUnavailableError": "Response timeout"} |

# Resumo
O atributo `percentage` representa a chance de acontecer o erro específicado na rota, se for na rota `fail` o erro que acontecerá será o erro `500 Internal Server Error` e assim sucessivamente. A rota timeout conta com mais um parâmetro `timeout`, ao atribuir um valor como 5 por exemplo, a rota irá demorar 5 segundos para representar o timeout.