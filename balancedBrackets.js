/*
Write a function that is passed a string which can contain
any text, including different kinds of brackets: {} [] ().

It should examine the string and decide if the string is
“balanced” — a balanced string is one where the different kinds
of brackets are properly balanced, such that you never close
an bracket that isn’t opened, is out of order, or end up with
unclosed brackets.
*/

const Queue = require("./queue.js");
const Stack = require("./stack.js");

function isBalancedBrackets(str) {
    const stack = new Stack();
    const brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    for (const char of str) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
        } else if ([")", "]", "}"].includes(char)) {
            if (stack.peek() === brackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.size === 0;
}

console.log(isBalancedBrackets("hello")); // true
console.log(isBalancedBrackets("(hi) [there]")); // true
console.log(isBalancedBrackets("(hi [there])")); // true
console.log(isBalancedBrackets("(((hi)))")); // true
console.log(isBalancedBrackets("(hello")); // false
console.log(isBalancedBrackets("(nope]")); // false
console.log(isBalancedBrackets("((ok) [nope)]")); // false

module.exports = isBalancedBrackets;