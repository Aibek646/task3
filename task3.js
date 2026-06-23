const http = require('http');

function gcd(a, b) {
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (!url.pathname.endsWith('/sunem_family_gmail_com')) {
        res.end('Not found');
        return;
    }
    const params = new URL(req.url, 'http://localhost').searchParams;
    const x = parseInt(params.get('x'));
    const y = parseInt(params.get('y'));

    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1) {
        res.end('NaN');
    } else {
        res.end(String(lcm(x, y)));
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000!');
});