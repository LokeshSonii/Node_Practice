const http = require('http'); // Built-in module
const fs = require('fs');
const path = require('path');
const { log } = require('console');

// Create server
const server = http.createServer((req, res) => {
  console.log(`🔗 Request received: ${req.method} ${req.url}`);

  if (req.url == '/' || req.url == '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>🏠 Welcome to My Local Server!</h1>');
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>👤 About Page</h1><p>This is a basic Node.js server.</p>');
  } else if (req.url == '/log') {
    // const logPath = path.join(__dirname, '..','fileSystem/textFiles', 'Sample5.txt');    // Method 1
    const logPath = path.join(__dirname, '..','fileSystem', 'textFiles', 'Sample5.txt');    // Method 2
    console.log(logPath);
    console.log(path.basename(logPath)); // Get the file name from the path
    console.log(path.basename('/fileSystem/textFiles/Sample5.txt')); // Get the file name from the path
    if (fs.existsSync(logPath)) {
      const logData = fs.readFileSync(logPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(logData);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('❌ log.txt not found');
    }
  } else {
    // 404 page
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>🚫 404 Not Found</h1>');
  }
});

// Start server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

