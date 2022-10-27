<p align='left'>
    <img src='https://saasradar.b-cdn.net/wp-content/uploads/2022/03/api_rest.png' </img>
</p>

# REST API - Technical

## Project overview

- Build a REST API using NodeJS.

## Setup

1. Clone the repo to your local `git clone '<GITHUB-LINK>' `

### Serve the BACK-END

    **Note:** To serve the back-end and the front-end you must have NodeJS and NPM installed.
    **Attention:** get sure to move to the correct folder before running the commands.

2. When inside /API_REST run `npm install` then `npm run dev`

### Serve the FRONT-END

3. When inside /my-project run `npm install` then `npm run dev`

### Considerations

4. The front-end is served on port `5173` and the back-end on port `3000`.

## Postman

1. Import the template of the routes `RestApiRequest.postman_collection.json`
2. Test the routes with the given data

**IMPORTANT:** You must have the latest stable version of Node and NPM. Make sure you have it to install the dependencies needed to run the project.

Actually the required versions are:

- **Node**: 12.18.3+
- **NPM**: 6.14.16+

## Frontend

The frontend consists of a ReactJS + Vite application that consumes the REST API.

## Requirements

**API Test: Diseño de un REST API en node que consuma algún servicio de internet tipo: JSONPlaceholder - Fake online REST API for developers o ABM de una DB interna (sqlite es suficiente)**

**- Listar jugadores de la DB `mock`**
**- Agregar / Eliminar jugadores**
**- Editar jugadores**

#### Database

For this project we are using a mock database, which is a JSON file that is located in the `root`.

#### Backend

This backend is developed in Node/Express with the following routes:

- [ ] **GET /**:
  - Home with generic message all OK
- [ ] **GET /users**:
  - Fetch a list of users from an external API `JSONPlaceholder`
- [ ] **GET /api/players**:
  - Fetch a list of players from the DB.
- [ ] **GET /api/players/{idPlayer}**:
  - Fetch the details of a player from the DB.
  - Only returns the data requested in the player detail route
- [ ] **PUT /api/players/{idPlayer}**:
  - Send a player object to edit the player in the DB.
- [ ] **POST /api/players**:
  - Should receive an object through which the player will be created, emulates a controlled form
- [ ] **DELETE /api/players/{idPlayer}**:
  - Delete the player with the ID that matches the one sent in the request
