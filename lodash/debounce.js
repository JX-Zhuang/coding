function debounce(func, wait = 0, options = {}) {
    var t = null;
    var res;
    var args;
    return function (...rest) {
        args = rest;
        if (t) return res;
        t = setTimeout(() => {
            res = func(...args);
            clearInterval(t);
            t = null;
        }, wait);
        return res;
    }
}
export default debounce;