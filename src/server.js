import http from 'node:http'

// By req we can create a user using name, email, password
// By res we can return a answer to the user

const server = http.createServer((req, res) => {
   return res.end('Hello World')
})

server.listen(3333)