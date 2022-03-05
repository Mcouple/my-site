//防抖
export default function(fn, duration = 10) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, duration)
    }
}