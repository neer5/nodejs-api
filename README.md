# Simple Rest API to identify number

## Installation Steps

1. Clone the repo
   ```sh
   git clone https://github.com/neer5/nodejs-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run Linting Tool
   ```sh
    npm run lint
   ```
4. Run this project
   ```sh
    npm start
   ```
5. After successfully run, follow steps of  `How to use API`


## Run test cases

   ```sh
    npm run test
   ```

## How to use API

```javascript
curl --location --request POST 'http://localhost:3030/numbers' \
--header 'Content-Type: application/json' \
--data-raw '{
    "input": 10
}'
```

| Params        | Type     | Required | Description                                                                           |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------- |
| `input`       | `Number` | Yes      | Any Positive number                                                                   |
|               |          |          | if divided by 3 & 5 then output 'CXZTatasoft'                                         |
|               |          |          | if divided by 3 then output 'CXZ'                                                     |
|               |          |          | if divided by 5 then output 'Tatasoft'                                                |
|               |          |          | Otherwise negative of input number                                                    |