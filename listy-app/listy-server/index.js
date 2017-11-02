const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const jwt = require('jsonwebtoken');
const sodium = require('sodium').api;
const cookieParser = require('cookie-parser');
const elements = require('./elements');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(cookieParser());
app.use(function(req, res, next) {
  const user = checkJWT(req.cookies['auth-token']);
  if(user){
    req.authStatus = {'user': user, 'loggedIn': true};
    return next();
  }
  req.authStatus = {'user': null, 'loggedIn': false};
  next();
});

const httpServer = http.createServer(app);

let users = [];

const issueJWT = (user) => {
  return jwt.sign({'type': 'auth'},
    'shhhh',
    {issuer: 'www.example.com',
    subject: user,
    algorithm: 'HS256',
    expiresIn: '1h'
    }
  );
}

const checkJWT = (token) => {
  try{
    const payload = jwt.verify(token, 'shhhh', {
      'algorithms': 'HS256',
      'issuer': 'www.example.com',
    });
    return payload.sub;
  }
  catch(err){
    return false;
  }
}

app.post('/api/v1/login', (req, res) => {
  if (validatePw(req.body.username, req.body.password)) {
    res.status(200);
    res.cookie('auth-token',
      issueJWT(req.body.username),
      { httpOnly: true,
      //secure: true
      }
    );
    return res.json({'message': 'Logged in'});
  }
  res.status(403);
  return res.json({'message': 'Invalid credentials'});
});

// Request URL: POST example.com/api/v1/element
// Request Body:
// { element: 'value' }
app.post('/api/v1/element', (req, res) => {
  if(!req.authStatus.loggedIn){
    res.status(401);
    return res.json({status: 'error', 
      message: 'Not logged in.'});
  }
  if(!req.body.element){
    res.status(400);
    return res.json({status: 'error', 
      message: 'No "element" property in request JSON.'});
  }
  res.status(200);
  return res.json({status: 'okay',
    newElement: elements.addElement(req.body.element)});
})

// Request URL: GET url.com/api/v1/elements
// Request Params: sorted: (true|false)
// Response Body: 
// { elements: ['value1', 'value2'] } 
app.get('/api/v1/elements', (req, res) => {
  res.status(200);
  return res.json(elements.getElements(req.query.sorted));
});

httpServer.listen(4000);

const getPwBuffer = (password) => {
  return passwordBuffer = new Buffer(password);
}

const getHashedPw = (password) => {
  let hash = new Buffer(sodium.crypto_pwhash_STRBYTES);
  hash = sodium.crypto_pwhash_str(
    getPwBuffer(password),
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE, 
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  );
  return hash;
}

const getUser = (username) => {
  return users.find((user) => user.user === username);
}

const addUser = (username, password) => {
  if(getUser(username)) return false;
  users.push({user: username, password: getHashedPw(password)});
  return true;
}

const validatePw = (username, password) => {
  const user = getUser(username);
  if(!user) return false;
  return sodium.crypto_pwhash_str_verify(
    user.password,
    getPwBuffer(password)
  );
}

addUser('testuser', 'testpass');
//console.log(users);
//console.log(validatePw('testuser', 'testpass'));
//console.log(validatePw('testuser', 'testpas'));
//console.log(validatePw('testuse', 'testpass'));
//const jwt1 = issueJWT('test');
//console.log(checkJWT(jwt1));