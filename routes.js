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

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Main page</title></head>');
    res.write('<body><h1>Welcome the Page!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
}