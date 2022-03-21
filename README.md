# Simple Rest API to identify number

## Installation Steps

1. Install npm 
    - npm install
2. Run Linting Tool
    - npm run lint
3. Run Test cases
    - npm run test
4. Run this project
    - npm start


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