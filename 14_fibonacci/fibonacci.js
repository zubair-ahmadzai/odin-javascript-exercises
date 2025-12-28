const fibonacci = function(indexArg) {
    let index;
    if (typeof indexArg !== "number") {
        index = parseInt(indexArg);
    } else {
        index = indexArg;
    }
    
    if (index < 0) { return "OOPS" };
    if (index == 0) { return 0 };

    let prevPrev = 0;
    let prev = 1;
    let current;
    for (let i = 2; i <= index; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    } return prev;
};

// Do not edit below this line
module.exports = fibonacci;
