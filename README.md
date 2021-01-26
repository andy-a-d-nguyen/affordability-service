# Trulia Backend Scaling

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

### GET `/mortgage/:id/get`

> Example Response JSON:

```json
{
    "id": 10000001,
    "agentid": 2327699,
    "homeprice": 704532,
    "location": "2990 Dimitri Freeway",
    "propertytax": 0.69,
    "thirtyyearapr": 4.6,
    "fifteenyearapr": 2.67,
    "sevenonearmapr": 4.61,
    "fiveonearmapr": 4.81,
    "va30yearapr": 2.42,
    "jumbo30yearapr": 3.72
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

### POST `/mortgage/:id/post`

> Example Request JSON:

```json
{
    "id": 10000001,
    "agentid": 2327699,
    "homeprice": 704532,
    "location": "2990 Dimitri Freeway",
    "propertytax": 0.69,
    "thirtyyearapr": 4.6,
    "fifteenyearapr": 2.67,
    "sevenonearmapr": 4.61,
    "fiveonearmapr": 4.81,
    "va30yearapr": 2.42,
    "jumbo30yearapr": 3.72
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

### PUT `/mortgage/:id/put`

> Example Request JSON:

```json
{
    "id": 10000001,
    "agentid": 2327699,
    "homeprice": 704532,
    "location": "2990 Dimitri Freeway",
    "propertytax": 0.69,
    "thirtyyearapr": 4.6,
    "fifteenyearapr": 2.67,
    "sevenonearmapr": 4.61,
    "fiveonearmapr": 4.81,
    "va30yearapr": 2.42,
    "jumbo30yearapr": 3.72
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

### DELETE `/mortgage/:id/delete`

> Example Request JSON:

```json
{
    "id": 10000001,
    "agentid": 2327699,
    "homeprice": 704532,
    "location": "2990 Dimitri Freeway",
    "propertytax": 0.69,
    "thirtyyearapr": 4.6,
    "fifteenyearapr": 2.67,
    "sevenonearmapr": 4.61,
    "fiveonearmapr": 4.81,
    "va30yearapr": 2.42,
    "jumbo30yearapr": 3.72
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
