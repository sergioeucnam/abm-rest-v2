<p align='left'>
    <img src='https://saasradar.b-cdn.net/wp-content/uploads/2022/03/api_rest.png' </img>
</p>

# REST API - Technical

## Objetivos del Proyecto

- Construir una API utlizando NodeJS.

## Comenzando

1.  Clonar el repo al local
2.  En el path del proyecto ejecutar `npm i`
3.  El proyecto se ejecuta en el puerto 3000 por default
4.  Para correr el servidor ejecutar `npm start`

## Postman

1.  Importar template de las rutas `RestApiRequest.postman_collection.json`
2.  Testear las rutas con los templates

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

## Enunciado

API Test: Diseño de un REST API en node que consuma algún servicio de internet tipo: JSONPlaceholder - Fake online REST API for developers o ABM de una DB interna (sqlite es suficiente)

- Listar jugadores de la DB `mock`
- Agregar / Eliminar jugadores
- Editar jugadores

#### Base de datos

Para este proyecto se emula una DB en memoria

#### Backend

Se desarrolla un servidor en Node/Express con las siguientes rutas:

- [ ] **GET /**:
  - Home con mensaje generico todo OK
- [ ] **GET /users**:
  - Obtener un listado de usuarios desde API externa `JSONPlaceholder`
- [ ] **GET /api/players**:
  - Obtener un listado de los jugadores desde la DB.
- [ ] **GET /api/players/{idPlayer}**:
  - Obtener el detalle de un jugador en particular
  - Debe traer solo los datos pedidos en la ruta de detalle del jugador
- [ ] **PUT /api/players/{idPlayer}**:
  - Debe recibir un objeto para editar los valores del jugador
- [ ] **POST /api/players**:
  - Debe recibir un objeto mediante el cual se creara el jugador, emula un formulario controlado
- [ ] **DELETE /api/players/{idPlayer}**:
  - Elimina de la DB el jugador cuyo ID coincida
