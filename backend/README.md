<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Restro Reviewer Backend

This is the backend service for the Restro Reviewer application, built using NestJS with TypeScript. It features a GraphQL API for efficiently handling requests related to restaurant data.

## Features

- GraphQL API for querying restaurant data.
- Integration with AWS services for data management and authentication.
- Efficient handling of restaurant-related operations.

## Installation

```bash
$ pnpm install
```

## Running the app

### development

```bash
$ pnpm run start
```

### watch mode

```bash
$ pnpm run start:dev
```

### production mode

```bash
$ pnpm run start:prod
```

## GraphQL API

The backend utilizes GraphQL for providing a flexible and efficient API. Access the GraphQL playground at [http://localhost:3000/graphql](http://localhost:3000/graphql) when the server is running.

## Docker Integration

The backend is containerized using Docker for consistent development and deployment environments. It works in conjunction with the frontend and database services in a Dockerized setup.

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Contributing

Contributions to enhance the backend functionality or performance are welcome.
