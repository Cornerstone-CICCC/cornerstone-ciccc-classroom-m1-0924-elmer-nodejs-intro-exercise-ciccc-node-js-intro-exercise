import http from 'http' //Import HTTP module

const server = http.createServer((request, response) => {

    //Routes
    if (request.url === '/') {
        console.log('Someone is visiting the home route')
        response.writeHead(200, { 'Content-Type': "text/html" })
        response.end(`<h1>Home</h1>`)
        return
    }

    if (request.url === '/about'){
        console.log("Someone is visiting the about page")
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`<h1>About</h1>`)
        return
    }

    if (request.url === '/my-account'){
        console.log("Someone is visiting the about page")
        response.writeHead(403, { 'Content-Type': 'text/plain' })
        response.end(`You have no access to this page`)
        return
    }

    if (request.url === '/contact'){
        console.log("Someone is visiting the about page")
        response.writeHead(404, { 'Content-Type': 'text/plain' })
        response.end(`Page not found`)
        return
    }

})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})