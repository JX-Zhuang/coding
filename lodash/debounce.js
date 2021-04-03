function debounce(func, wait = 0, options = {}) {
    var t = null;
    return function (...args) {
        if (t) return;
        t = setTimeout(() => {
            func(...args);
            clearInterval(t);
            t = null;
        }, wait);
    }
}
export default debounce;