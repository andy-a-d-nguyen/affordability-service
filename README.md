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

### Introduction

In this project, my group is going to rebuild the server and database of an existing application to handle large quantities of data. We are working on a legacy codebase and extending the capabilities of the database and server layer to support production-level traffic.

I am working on a service and a proxy within that application and ensuring that as I scale the server and database to production-level, the UI will continue to function.

I will be using one SQL and one noSQL DBMS and compare their performance.I will be using a simulated dataset of 10 million records to analyze and tune the performance of each DBMS.

The goal of this project is to deploy to a t2.micro instancee in AWS EC2 and have the instanc be able to handle 100 RPS, respond in under 2000ms and have an error rate of less than 1% under load. Before that can be accomplished, each member's proxy aims to handle 1,000 RPS on their local machine.

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## API Endpoints

http://localhost:8020/{id}/db

### GET `listing/:id/mortgage/get`

> Example Response JSON:

```json
{
  id: 1,
  agentInfo: {
    id: 1,
    name: 'House Seller',
    age: 24,
    rating: 4.3,
    quantitySold: 20,
    totalSales: 750000,
    gender: 'male',
    email: 'houseseller@house.com'
  },
  homePrice: 400000,
  propertyTax: 1,
  currentAvgAPR: {
    thirtyYear: 2.80,
    fifteenYear: 2.57,
    sevenOneARM: 3.02,
    fiveOneARM: 2.97,
    VA30Year: 2.51,
    Jumbo30Year: 2.98
  },
  location: 'San Francisco',
}
```

> `id: number`

> `homePrice: number`

> `propertyTax: number`

> `currentAvgAPR: object`

> `currentAvgAPR.30Year: number`

> `currentAvgAPR.15Year: number`

> `currentAvgAPR.7/1ARM: number`

> `currentAvgAPR.5/1ARM: number`

> `currentAvgAPR.VA30Year: number`

> `currentAvgAPR.Jumbo30Year: number`

> Failure HTTP Status Code: `404 Not Found`

> Success HTTP Status Code: `200 OK`

### POST `listing/:id/mortgage/post`

> Example Request JSON:

```json
{
  id: 1,
  agentInfo: {
    id: 1,
    name: 'House Seller',
    age: 24,
    rating: 4.3,
    quantitySold: 20,
    totalSales: 750000,
    gender: 'male',
    email: 'houseseller@house.com'
  },
  homePrice: 400000,
  propertyTax: 1,
  currentAvgAPR: {
    thirtyYear: 2.80,
    fifteenYear: 2.57,
    sevenOneARM: 3.02,
    fiveOneARM: 2.97,
    VA30Year: 2.51,
    Jumbo30Year: 2.98
  },
  location: 'San Francisco',
}
```

> `id: number`

> `homePrice: number`

> `propertyTax: number`

> `currentAvgAPR: object`

> `currentAvgAPR.30Year: number`

> `currentAvgAPR.15Year: number`

> `currentAvgAPR.7/1ARM: number`

> `currentAvgAPR.5/1ARM: number`

> `currentAvgAPR.VA30Year: number`

> `currentAvgAPR.Jumbo30Year: number`

> Failure HTTP Status Code: `406 Not Acceptable`

> Success HTTP Status Code: `200 OK`

> Success HTTP Response: `POST request success to database`

### PUT `listing/:id/mortgage/put`

> Example Request JSON:

```json
{
  id: 1,
  agentInfo: {
    id: 1,
    name: 'House Seller',
    age: 24,
    rating: 4.3,
    quantitySold: 20,
    totalSales: 750000,
    gender: 'male',
    email: 'houseseller@house.com'
  },
  homePrice: 400000,
  propertyTax: 1,
  currentAvgAPR: {
    thirtyYear: 2.80,
    fifteenYear: 2.57,
    sevenOneARM: 3.02,
    fiveOneARM: 2.97,
    VA30Year: 2.51,
    Jumbo30Year: 2.98
  },
  location: 'San Francisco',
}
```

> `id: number`

> `homePrice: number`

> `propertyTax: number`

> `currentAvgAPR: object`

> `currentAvgAPR.30Year: number`

> `currentAvgAPR.15Year: number`

> `currentAvgAPR.7/1ARM: number`

> `currentAvgAPR.5/1ARM: number`

> `currentAvgAPR.VA30Year: number`

> `currentAvgAPR.Jumbo30Year: number`

> Failure HTTP Status Code: `404 Not Found`

> Success HTTP Status Code: `200 OK`

> Success HTTP Response: `PUT request success to database`

### DELETE `listing/:id/mortgage/delete`

> Example Request JSON:

```json
{
  id: 1,
  agentInfo: {
    id: 1,
    name: 'House Seller',
    age: 24,
    rating: 4.3,
    quantitySold: 20,
    totalSales: 750000,
    gender: 'male',
    email: 'houseseller@house.com'
  },
  homePrice: 400000,
  propertyTax: 1,
  currentAvgAPR: {
    thirtyYear: 2.80,
    fifteenYear: 2.57,
    sevenOneARM: 3.02,
    fiveOneARM: 2.97,
    VA30Year: 2.51,
    Jumbo30Year: 2.98
  },
  location: 'San Francisco',
}
```

> `id: number`

> `homePrice: number`

> `propertyTax: number`

> `currentAvgAPR: object`

> `currentAvgAPR.30Year: number`

> `currentAvgAPR.15Year: number`

> `currentAvgAPR.7/1ARM: number`

> `currentAvgAPR.5/1ARM: number`

> `currentAvgAPR.VA30Year: number`

> `currentAvgAPR.Jumbo30Year: number`

> Failure HTTP Status Code: `404 Not Found`

> Success HTTP Status Code: `200 OK`

> Success HTTP Response: `DELETE request success to database`