
# Getir Node.Js Week 3 Homework

A backend environment writen in Node.Js and Express.


## Installation

Install packages with

```bash
  npm install
```
then

```bash
  npm start
```
    
## API Reference
**Only authenticated users can access. So Authorization token in Header is a must.**
#### Get all users

```http
  GET /api/get-users
```
#### Get a single user

```http
  GET /api/get-user
```

| Parameter | Type     | Description                       |Required|
| :-------- | :------- | :-------------------------------- |:------ |
| `id`      | `string` | | Yes|

#### Get a single user

```http
  POST /api/add-user
```

| Parameter | Type     | Description                       |Required|
| :-------- | :------- | :-------------------------------- |:------ |
| `name` | `string` |          |      Yes|
| `balance` | `string` |                                   |      No|
| `picture` | `string` | Picture Url of the user           |      No|
|    `age`  | `Numeric` |          |      No|
| `gender` | `string` |           |      No|
| `company` | `string` |          |      No|
| `email` | `string` |           |      No|

#### Delete a single user

```http
  DELETE /api/delete-user
```

| Parameter | Type     | Description                       |Required|
| :-------- | :------- | :-------------------------------- |:------ |
| `id`      | `string` | | Yes|

#### Update a single user

```http
  PATCH /api/update-user
```

| Parameter | Type     | Description                       |Required|
| :-------- | :------- | :-------------------------------- |:------ |
| `id` | `string` |          |      Yes|
| `name` | `string` |          |      No|
| `balance` | `string` |                                   |      No|
| `picture` | `string` | Picture Url of the user           |      No|
|    `age`  | `Numeric` |          |      No|
| `gender` | `string` |           |      No|
| `company` | `string` |          |      No|
| `email` | `string` |           |      No|

#### Change a single user
```http
  PUT /api/change-user
```

| Parameter | Type     | Description                       |Required|
| :-------- | :------- | :-------------------------------- |:------ |
| `id` | `string` |          |      Yes|
| `name` | `string` |          |      Yes|
| `balance` | `string` |                                   |      Yes|
| `picture` | `string` | Picture Url of the user           |      Yes|
|    `age`  | `Numeric` |          |      Yes|
| `gender` | `string` |           |      Yes|
| `company` | `string` |          |      Yes|
| `email` | `string` |           |      Yes|

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SECRET_KEY`  , `NODE_ENV`   , `PORT`

You can use env-example.

