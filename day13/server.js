const p  = require("path")
const http = require('http');
const fs  = require("fs")
const users = require("./user.json")
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
 
  
  switch(req.url){
    case '/':{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html') ;
      const html = fs.readFileSync('./main.html');
      res.end(html)
      break ;
    }
   
    case '/stylye.css':{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css') ;
      const css = fs.readFileSync('./style.css');
      res.end(css)
      break ;
    }
    case '/BG3.PNG':{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'messi.jifif') ;
      const img = fs.readFileSync('.');
      res.end(img)
      break ;
    }
    case '/users':{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json') ;
      const json = JSON.stringify(users)
      res.end(json)
      break ;
    }
    case '/faveicon.ico':{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/x-icon') ;
      const favicon = fs.readFileSync('./favicon.ico');
      res.end(favicon)
      break ;
    }

    default :{
      res.statusCode = 404 ;
      res.end('Not found')
      break;
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});