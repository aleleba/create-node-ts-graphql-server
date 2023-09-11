# Create Node TS GraphQL Server

This project aims to have a starter kit for creating a new Node with typescript, GraphQL server and tools that generally go along with it.

Tech(Library or Framework) | Version |
--- | --- |
Jest (Testing) | 29.6.4
Typescript | 5.2.2
GraphQL | 16.8.0
Type GraphQL | 2.0.0-beta.2

## Setup
To create a new project run in the terminal:
```
npx @aleleba/create-node-ts-graphql-server server-app-name
```
Then run:
```
cd server-app-name
```
You will need to create a new .env file at the root of the project for global config.
This is an example of config.
```
#ENVIRONMENT Defauld production
ENVIRONMENT=development
#WHITELIST URLS Default to http://localhost
WHITELIST_URLS=https://someurl.com
#PLAYGROUND GRAPHQL Default to "false"
PLAYGROUND_GRAPHQL=true
# PORT EXPOSE APP Default to 4000
PORT=4000
```
The default environment is production, the server-app port defauld is 4000, the default whitelist is http://localhost and the default graphiql is false.

### For Development
In the terminal run:
```
npm run start:dev
```
The ENV enviroment variable should be "development" and choose the port of your preference with the enviroment variable PORT.

You will find the controllers on:
```
scr/controllers/
```
You will find the models on:
```
scr/models
```
You will find the GraphQL server, resolvers and schema definition on:
```
scr/GraphQL
```

The manage of the routes for custom API you should find on:
```
scr/routes
```

This will start the app in development mode, also use nodemon and webpack to real time coding!
Enjoy coding!

### For Production
In the terminal run:
```
npm run build
```
It will create a build folder and run:
```
npm start
```
This will start the app.

## Cheers
Hope you enjoy this proyect! Sincerely Alejandro Lembke Barrientos.