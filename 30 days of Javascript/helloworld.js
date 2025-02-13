// https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @return {Function}
 */
// default createHelloWorld function created by leetcode
var createHelloWorld = function() {
    return function(...args) {
        // remove all elements from args array
        args.splice(0, args.length);
        // push string element "Hello World" into args array
        args.push("Hello World");
        // return pushed string element
        return args[0];
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
