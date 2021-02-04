module.exports = function reverse(n) {
    var result;
    if (n < 0) {
        result = parseInt(String(-1*n).split("").reverse().join(""));
    }
    else if (n >= 0) {
        result = parseInt(String(n).split("").reverse().join(""));
    }
    else result = undefined;

    return result;
}
