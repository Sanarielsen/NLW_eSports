# Back-end

## Entidades

### Game
id
title
bannerURL

### AD

id
gameID
name
yaersPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

## Casos de uso

- Listagem de games com contagem de anuncios
- Criação de um novo anuncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anuncio

# HTTP methods / API RESTful / 
# GET, POST, PUT, PATCH, DELETE

# HTTP Codes - Qual o tipo de resposta que estamos recebendo.
# 200> - Sucesso - 300> Redirecionamento - 400> - Código bugado - 500> - erros inesperados

# Query: Através do ponto de interrogação da barra url, para persistir esses dados (Filtros, paginação, dados não sensíveis)
# Route: Parametros não nomeados da url
# Body: Enviar varias informações em uma requisição (Normalmente feito em formulários) e escondido.