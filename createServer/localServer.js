const http = require('http');

//CASE 1:
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1>Hello World</h1>')
//     res.end()
// })

// server.listen(3000, () => {
//     console.log('Server started on port 3000 successfully!');
// })

//CASE 2:
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1>Hello World</h1>')
//     res.end()
// }).listen(3000, () => {
//     console.log('Server started on port 3000 successfully!');
// });

//CaSE 3:
function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})    
    res.write('<h1>Hello World</h1>')
    res.end()            
}

http.createServer(onRequest).listen(3000, () => {
    console.log('Server started on port 3000 successfully!');
});
