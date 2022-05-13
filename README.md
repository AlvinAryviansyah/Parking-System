# Parking-System

## How To Run
1. npm install
2. npm start
3. npm test (for testing)

## Endpoints :

list of available endpoints:

- `POST /park/:plate`
- `DELETE /leave/:plate`
---

## POST /park/:plate

Request:

- data:

```json
-
```

Response:

- status: 200
- body:
  ​

```json
{
  "level": "string",
  "slot": "integer"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "parking lot is full"
}
```

## DELETE /leave/:plate

Request:

- data:

```json
-
```

Response:

- status: 200
- body:
  ​

```json
{
  "message" : "Car with plate number <plate> is accepted to leave"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Car with plate number <plate> is not found"
}
```

## Default State
The only empty slot on default is on level B2 slot 4
```
[
    
    ['B1111AAA','B1111BBB','B1111CCC','B1111DDD','B1111EEE','B1111FFF','B1111GGG', 'B1111HHH', 'B1111III', 'B1111JJJ'], //B1
    ['B2222AAA','B2222BBB','B2222CCC','0','B2222EEE','B2222FFF','B2222GGG', 'B2222HHH', 'B2222III', 'B2222JJJ', 'B2222KKK', 'B2222LLL'], //B2
    ['B3333AAA','B3333BBB','B3333CCC','B3333DDD','B3333EEE','B3333FFF','B3333GGG', 'B3333HHH', 'B3333III', 'B3333JJJ', 'B3333KKK', 'B3333LLL', 'B3333MMM', 'B3333NNN'], //B3
    
]
```