module.exports = {
	intersection(f, s) {
        if (s.length > f.length) {
            [f, s] = [s, f];
        }
        const setF = new Set(f);
        return s.filter(x => setF.has(x));
    }
}