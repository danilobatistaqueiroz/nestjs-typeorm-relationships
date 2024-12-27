
```sh
npm i -g @nestjs/cli
nest new simple-app
cd simple-app/
npm run start:dev
npm install --save @nestjs/typeorm typeorm
npm install --save pg
docker-compose up -d
```

pgAdmin:  
http://localhost:8081

add Server address: postgres

create database: loja

```sh
npm i --save class-validator class-transformer
nest g module product; nest g service product; nest g controller product;
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
