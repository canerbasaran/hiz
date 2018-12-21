module.exports = {
	intersection(f, s) {
        if (s.length > f.length) {
            [f, s] = [s, f];
        }
        const setF = new Set(f);
        return s.filter(x => setF.has(x));
    },
    date6() {
        return (Date.now()/1000|0).toString(16);
    },
    rand8() {
        return Math.random().toString(16).substr(2,8);
    },
    objectId() {
        return this.date6() + this.rand8() + this.rand8();
    },
    body(req) {
        const buffers = [];
        req.on('data', (chunk) => { buffers.push(chunk); });
        req.on('end', () => {
            return JSON.parse(Buffer.concat(buffers).toString());
        });
    }
}