 /* Calculator

In this exercise, you’ll build a “polish notation calculator”.

Polish notation is a different way to write an artithmetic
expression. For example, instead of writing 1 + 2 * 3, as we would
in normal (“infix”) style, we could write it with the operators to
the left of their arguments. This expression would become + 1 * 2 3.
You can read a polish notation expression backwards to see exactly
what it does — in this case, multiply 2 times 3, and add that
result to 1.
 */

const Stack = require("./stack.js");

function polishCalc(str) {
    const stack = new Stack();
    str.split(" ").forEach((word) => {
        stack.push(word);
    })
    let total;
    let op1;
    let op2;
    while (stack.size > 0) {
        let current = stack.pop();
        if (!op1) {
            op1 = +current;
        } else if (!op2) {
            op2 = +current;
        } else {
            current === "+" ? total = op1 + op2 :
            current === "-" ? total = op2 - op1 :
            current === "*" ? total = op1 * op2 :
            current === "/" ? total = op2 / op1 : null;
            op1 = null;
            op2 = total;
        }
    }
    return total;
}

console.log(polishCalc("+ 3 4")); // 7
console.log(polishCalc("* 3 4")); // 12
console.log(polishCalc("- 9 * 3 4")); // 3
console.log(polishCalc("* 3 + 3 4")); // 21

module.exports = polishCalc;