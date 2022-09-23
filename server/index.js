const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd()+'/public/index.html'))
})

app.get('/cars', (req, res) => {
    res.sendFile(path.join(process.cwd()+'/public/index.example.html'))
})

app.use('/public/scripts', express.static(path.join(process.cwd()+'/public/scripts/')))
app.use('/images', express.static(path.join(process.cwd()+'/public/images/')))
app.use('/public/css', express.static(path.join(process.cwd()+'/public/css/')))
app.listen(process.env.port || 3000)

console.log('Running at Port 3000')








// const http = require('http');
// const { PORT = 8000 } = process.env;

// const fs = require('fs');
// const path = require('path');
// const PUBLIC_DIRECTORY = path.join(process.cwd(), 'public'); 
// function onRequest(req, resp) {
//   if (req.url === "/") {
//         fs.readFile('./public/index.example.html', function(error, fileContent){
//             if(error){
//                resp.writeHead(500, {'Content-Type': 'text/plain'});
//                resp.end('Error');
//             }
//            else{
//                resp.writeHead(200, {'Content-Type': 'text/html'});
//                resp.write(fileContent);
//                resp.end();
//             }
//         });
//     } else if (req.url === "/binar.js") {
//         fs.readFile('./public/scripts/binar.js', function(error, fileContent){
//             if(error){
//                resp.writeHead(500, {'Content-Type': 'text/plain'});
//                resp.end('Error');
//             }
//            else{
//                resp.writeHead(200, {'Content-Type': 'text/javascript'});
//                resp.write(fileContent);
//                resp.end();
//             }
//         });
//     }else if (req.url === "/app.example.js") {
//         fs.readFile('./public/scripts/app.example.js', function(error, fileContent){
//             if(error){
//                resp.writeHead(500, {'Content-Type': 'text/plain'});
//                resp.end('Error');
//             }
//            else{
//                resp.writeHead(200, {'Content-Type': 'text/javascript'});
//                resp.write(fileContent);
//                resp.end();
//             }
//         });
//     }else if (req.url === "/car.example.js") {
//         fs.readFile('./public/scripts/car.example.js', function(error, fileContent){
//             if(error){
//                resp.writeHead(500, {'Content-Type': 'text/plain'});
//                resp.end('Error');
//             }
//            else{
//                resp.writeHead(200, {'Content-Type': 'text/javascript'});
//                resp.write(fileContent);
//                resp.end();
//             }
//         });
//     }else if (req.url === "/main.example.js") {
//         fs.readFile('./public/scripts/main.example.js', function(error, fileContent){
//             if(error){
//                resp.writeHead(500, {'Content-Type': 'text/plain'});
//                resp.end('Error');
//             }
//            else{
//                resp.writeHead(200, {'Content-Type': 'text/javascript'});
//                resp.write(fileContent);
//                resp.end();
//             }
//         });
//     } else {
//        resp.writeHead(404);
//        resp.end("Not found");
//     }
// }

// const server = http.createServer(onRequest);

// server.listen(PORT, '127.0.0.1', () => {
//   console.log("Server sudah berjalan, silahkan buka http://127.0.0.1:%d", PORT);
// })