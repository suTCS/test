#Sample API Project

GET /api/v1/sayHello/:name

Will respond with a JSON object with one property named "message" and a value of "Hello :name!" when called.

Example:

Request:
```
http://url:port/api/v1/sayHello/Dan
```

Response:
```javascript
{
  'message': 'Hello Dan!'
}
```