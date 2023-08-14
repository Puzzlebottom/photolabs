# Photolabs API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Create a database with the command `CREATE DATABASE photolabs_development;`.

The `node-postgres` library uses these environment variables by default:

```
PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432
```

## Seeding

Run the development server with `npm start` in the Host environment. 

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.<br/>
OR<br/>
- click [here](http://localhost:8001/api/debug/reset).

## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```