# Project Name

> Trulia SDC

## Related Projects

  - https://github.com/twoLA/main_gallery_sdc
  - https://github.com/twoLA/image-carousel-service
  - https://github.com/twoLA/reviews
  - https://github.com/twoLA/affordability-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API Endpoints](#APIendpoints)

## Usage

- "npm run start" : runs the express server and watches for changes
- "npm run react-dev" : compiles components and watches for changes
- "npm run seed" : seed the database with dummy data

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## API Endpoints

http://localhost:8020/{id}/db

### GET `{id}/db`

> Response JSON:

> [ { id: 1, homePrice: 500000}]

> `id: number`

> `homePrice: number`

### POST `{id}/db`

> Request JSON:

> [ { id: 1, homePrice: 500000}]

> `id: number`

> `homePrice: number`

### PUT `{id}/db`

> Request JSON:

> [ { id: 1, homePrice: 500000}]

> `id: number`

> `homePrice: number`

### DELETE `{id}/db`

> Request JSON:

> [ { id: 1, homePrice: 500000}]

> `id: number`

> `homePrice: number`