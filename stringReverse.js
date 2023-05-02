const Stack = require("./stack.js");

function stringReverse (str) {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let out = "";
    while (stack.size > 0) {
        out += stack.pop();
    }
    return out;
}

module.exports = stringReverse;