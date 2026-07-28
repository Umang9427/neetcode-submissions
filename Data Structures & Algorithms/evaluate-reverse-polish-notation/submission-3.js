class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    /**
 * @param {string[]} tokens
 * @return {number}
 */
evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === '+') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a + b);
        } else if (token === '-') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
        } else if (token === '*') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a * b);
        } else if (token === '/') {
            const b = stack.pop();
            const a = stack.pop();
            // Math.trunc handles truncation towards zero (e.g. Math.trunc(-1.5) = -1)
            stack.push(Math.trunc(a / b));
        } else {
            // Convert numerical string to integer
            stack.push(Number(token));
        }
    }

    return stack[0];
}
}
