//Node.js

//JavaScript Runtime Environment
//It is used for server side programming.


//* Node.js is not a language, library or framework.


// Node REPL
//Read, Evaluate, Print and Loop

// .help gives us commands


// Node Files 
// node fileName.js 


//Process 
// process: This object provides information about, and control over, the current Node.js process.

// process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.


//moduel.exports 
//requiring files

// require() : a built-in function to include external modules that exist in separate files.

// module.exports : a special object



//NPM (Node Package Manager)
//npm is the standard package manager for Node.js.

// What is the use of NPM?
// 1. Library of packages
// 2. command line tool


//Installing Packages
// . npm install <-package name->

// node_modules - The node_modules folder contains every installed dependency for your project.

// package-lock.json - It records the exact version of every installed dependency, including its sub-dependencies and their versions.


//package.json
//The package.json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies.


//Local v/s Global

// npm install -g <-package name->
//npm link <-package name->


//require v/s import
// import {sum} from "./math.js"

//We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.

//Loading is synchronous for "require" but can be asynchronous for "import".

//Example code:
/* export const sum = (a, b) => {
    return a+b;
}
export const mul = (a, b) => {
    return a*b;
}

export const PI = 3.14;

export const g = 9.8; */

/* import {sum, mul} from "./math.js";

console.log(sum(3, 6));
console.log(mul(3, 6));  */
