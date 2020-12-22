const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Input name</title></head>');
        res.write('<body>');
        res.write('<h1>Input the username</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text"  name="create-user"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>User page</title></head>');
        res.write('<body>');
        res.write('<h1>Usernames</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST') {

        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parserBody = Buffer.concat(body).toString();
            console.log(parserBody.split('=')[1]);
            res.statusCode = '302';
            res.setHeader('Location', '/users');
            return res.end();
        });

    }

    res.write('<html>');
    res.write('<head><title>Page not found</title></head>');
    res.write('<body>');
    res.write('<h1>Page not found</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

}

module.exports = {
    handler: requestHandler,
}