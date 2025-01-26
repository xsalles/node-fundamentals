import http from 'node:http'

// By req we can create a user using name, email, password
// By res we can return a answer to the user

// Routes are like enter points that are provide for the user

// HTTP has a two main points that are method HTTP that is used and the URL 

// GET, POST, PÚT, PATCH, DELETE that are more used in day to day

// GET - search a resource from backend
// POST - create a new resource
// PUT - update a resource from backend
// PATCH - update a specific information from a resource at backend (accept notifications or no)
// DELETE - delete a resource from backend



const server = http.createServer((req, res) => {
   const { method, url } = req;

   if (method === 'GET' && url === '/users') {
    return res.end("user list")
   }

   if (method === 'POST' && url === '/users') {
    return res.end("creating user")
   }

   return res.end('Hello World')
})

server.listen(3333)