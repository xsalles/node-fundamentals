import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
   const { method, url } = req;

   if (method === 'GET' && url === '/users') {

    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
   }

   if (method === 'POST' && url === '/users') {
    users.push({
      name: 'John Doe',
      email: 'johndoe@example.com',
      id: 1
    })

    return res.writeHead(201).end()
   }

   return res.writeHead(404).end('Not Found')
})

server.listen(3333)