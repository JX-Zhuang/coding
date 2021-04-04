function debounce(func, wait = 0, options = {}) {
    var t = null;
    var res;
    var args;
    var { leading, maxWait, trailing } = Object.assign({ leading: false, maxWait: 0, trailing: true }, options);
    return function (...rest) {
        args = rest;
        if (leading) {
            if (t) {
                clearTimeout(t);
                t = setTimeout(() => {
                    res = func(...args);
                    clearInterval(t);
                    t = null;
                }, wait);
            } else {
                res = func(...args);
                t = setTimeout(() => {
                    clearTimeout(t);
                    t = null;
                }, wait);
                return res;
            }
        } else {
            if (t) return res;
            t = setTimeout(() => {
                res = func(...args);
                clearTimeout(t);
                t = null;
            }, wait);
            return res;
        }
    }
}
export default debounce;