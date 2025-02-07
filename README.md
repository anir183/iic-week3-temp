# Week 3

## What is Node.js?
NodeJS is a javascript runtime environment which is open-source and cross-platform. It runs the V8 javascript engine built for Chrome outside of the Chrome browser. NodeJS is a single threaded and performant javascript engine which helps developers create javascript apps and servers outside of the browser.
`From: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs`

## Installation and Setup
NodeJS can be installed directly (on Windows) using the .msi installer provided on the website.
`From: https://nodejs.org/en/download`

However, for easy updates and version-switching I decided to go with Node Version Manager which lets the use install and use any version of node using a simple command.
`From: https://github.com/coreybutler/nvm-windows`

## Node.js Architecture
NodeJS itself is built on the V8 javascript engine which is meant for use in the Chrome browser and makes it accessible outside of the browser.

A traditional application architecture consists of the following components -
* Client - The frontend being used by the user which actually sends requests to the server for different operations.
* Server - Performs necessary processes on the client's requests and returns required data to the client to show to the end user.
* Database - Holds, stores and returns important data.

A NodeJS server's design is a Single Thread Event Loop. All other components interact with this event loop to ensure correct flow of the program.
![image](https://media.geeksforgeeks.org/wp-content/uploads/20211017212721/NWAGFGdrawio.png)`From: https://www.geeksforgeeks.org/node-js-web-application-architecture/`

## Node.js Ecosystem
NodeJS was initially written by its author Ryan Dahl in 2009. The package manager NPM was developed in 2010 and a native Windows version was released in 2011. Since then the ecosystem has grown tremendously with millions of developers using this to build incredible applications. Similarly the tooling and support around this ecosystem has also developed tremendously. With so much corporate and personal investment to the project, the NodeJS ecosystem has become one of the biggest in size.
`From: https://en.wikipedia.org/wiki/Node.js`

The creation of a package manager and an incredibly easy to use module system, user made packages and extensions has been booming in quantity. 
With architectural packages like `express.js`, and frameworks like `React.js`,  Angular, Vue, `Next.js`, there is some framework or library for every usecase.

`From: Memory and Several Sources`

## Node.js REPL
REPL stands for Read-Eval-Print-Loop and is an environment to run javascript code interactively. In simple terns, it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code. An example of a REPL is the console window in most browsers. Node.js also has a similar component for easy testing.
`From: https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl`

## Modules in Node.js
Modules in Node.js are blocks of encapsulated code that can be reused throughout your application. These modules can include functions, objects, and variables that are exported from the code files.
Node.js has two types of module systems, the old CommonJS system and the new ES Modules system.

CommonJS Module Example:
* Module creation and export
	```js
	module.exports.add = function(a, b) {  
		return a + b;  
	}
	module.exports.subtract = function(a, b) {
		return a - b;
	}
	```
* Module import and usage
	```js
	const {add, subtract} = require('./util')
	console.log(add(5, 5)) // 10
	console.log(subtract(10, 5)) // 5
	```

ES Module Example:
* Module creation and export
	```js
	export function add(a, b) {
		return a + b;
	}
	export function subtract(a, b) {
		return a - b;
	}
	```
* Module import and usage
	```js
	import {add, subtract} from './util.mjs
	console.log(add(5, 5)) // 10
	console.log(subtract(10,  5)) // 5
	```

`From: https://blog.logrocket.com/commonjs-vs-es-modules-node-js/`

## Package.json
Package.json is a special file used by NPM (Node Package Manager) for several purposes. It stores data about the project itself like - Name, Author(s), Description, License, Website, etc.

It also includes special sections for NPM to perform tasks on. Like build command, test commands and other user-defined commands which can be run using `npm run <command-name>`. It also includes sections which lists the dependencies of the project (installed packages).

`From: https://blog.logrocket.com/commonjs-vs-es-modules-node-js/`

## File System Module
The NodeJS file system (fs) module enables the program to interact with the file system of the machine it is running on. It is modeled on standard POSIX (Portable Operating System Interface is a set of standards set by the IEEE Computer Society)  functions.

Importing the package - 
```js
const fs = require('node:fs');
```

Basic Usage -
```js
const { unlink } = require('node:fs');

// delete the path /tmp/hello
// this path is in unix format but windows paths can also be used on windows programs
unlink('/tmp/hello', (err) => {
	if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
```

`From: https://nodejs.org/api/fs.html`

## HTTP Module
This module contains prebuilt client and server code which can be imported to quickly get a server up and running. This module is built to support many features of the hyper-text transfer protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

Importing the module -
```js
const http = require('node:http');
```

Basic usage -
```js
const http = require('http');

// Create a server
http.createServer((request, response) => {
  // Sends a chunk of the response body
  response.write('Hello World!');
  
  // Signals the server that all of
  // the response headers and body
  // have been sent
  response.end();
}).listen(3000);  // Server listening on port 3000

console.log("Server started on port 3000");

let options = {
  host: 'www.geeksforgeeks.org',
  path: '/courses',
  method: 'GET'
};

// Making a get request to
// 'www.geeksforgeeks.org'
http.request(options, (response) => {
  // Printing the statusCode
  console.log(`STATUS: ${response.statusCode}`);
}).end();
```

`From: https://nodejs.org/api/http.html and https://www.geeksforgeeks.org/node-js-http-module`

## Events Module
As already mentioned above, NodeJS is based on a Single Event Loop architecture. Similarly the API architecture is idiomatic asynchronous event driven. Hence, events are an integral part of any NodeJS project. This module allows the user to create their own event-based systems.

Importing the module -
```js
const EventEmitter = require('node:events');
```

Basic usage -
```js
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
```

`From: https://nodejs.org/api/events.html`

## Util Module
Has utility components used by the NodeJS internal API. These components can also be useful for the developers in their projects.

Importing the module - 
```js
const util = require('node:util');
```

Basic usage (one of many examples) -
```js
const util = require('node:util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
```

`From: https://nodejs.org/api/util.html`

## Path Module
This module contains utilities for working with file and directory paths. There is a small variation is usage for Windows and POSIX systems.

Importing the package -
```js
const path = require('node:path');
```

Example usage -
```js
// POSIX
path.basename('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'

// WINDOWS
path.basename('C:\\temp\\myfile.html');
// Returns: 'myfile.html'

// To achieve consistent results when working with Windows file paths on any operating system (POSIX or Windows)
path.win32.basename('C:\\temp\\myfile.html');
// Returns: 'myfile.html'
```

`From: https://nodejs.org/api/path.html`

## NPM Basics
NPM is a package manager. As the name suggests, it handles, installation, updating and general management of packages or dependencies used in the project. Without a package manager, the developer would need to manually download the dependency files and link the module to their project. NPM makes this easy by allowing the developer to do this with a simple one line command. In September of 2022, NPM was reported to have over 2.1 million packages in their registry which is the biggest amount out of any package manager. Hence, there exists a package for almost any use case.

NPM creates the `package.json` file at the root of the project which keeps tracks of the installed packages among other project details. It also allows the user to setup commands to run during different events - like build, test, debug, etc.

Installing a single package is as easy as -
```bash
npm install <package-name>
```

`From: https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager`

## Installing Packages
Installation of packages can be of three types - global, local and development. Global dependencies get installed globally for any node project running in the computer, in a node_modules folder in the user root directory. Local files get installed in the node_modules directory at the root of the project and can be used only in the project. Development dependencies are the same, except they are only loaded during development tests or debug runs. These may include type definitions or other useful development features.

Installing a single local package -
```bash
npm install <package-name>
```

Installing a single global package -
```bash
npm install --global <package-name>
```

Installing a single development package -
```bash
npm install --save-dev <package-name>
```

Installing multiple dependencies at once (write write all the packages with a space)  -
```bash
npm install <flags> <package-1> <package-2> <package-3> ... <package-n>
```

`From: https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager`

## Creating a Package
NPM packages are basically NodeJS modules packaged together. To create one -
* Create the package.json file at the root directory and run the `npm init` command which initializes the npm project.
* Then the main file is created which is used when the package is used by other applications.
	```js
	exports.printMsg = function() {
		console.log("This is a message from the demo package");
	}
	```
* Publish the package using the `npm publish` command

This is the very basic interpretation of creating a NPM package. The NPM commands also supply several flags for different use cases and scopes.

`From: https://docs.npmjs.com/creating-node-js-modules`

## Version Management
To update installed packages to their latest version, the following command is used.
```bash
npm update <package-name>
```

To bump the version of a custom NPM package, the following command is used.
```bash
npm version [<newversion>  | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

For managing version of NodeJS and NPM itself, I use Node Version Manager as discussed previously.
```bash
nvm install <version>
nvm use <version>
```

For version management of project files, another tool called `git` is used.

`From: https://docs.npmjs.com/cli/v10/commands/npm-version and https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager and `

## NPM Scripts
The `"scripts"` property of your `package.json` file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts. These all can be executed by running `npm run-script <stage>` or `npm run <stage>` for short. _Pre_ and _post_ commands with matching names will be run for those as well (e.g. `premyscript`, `myscript`, `postmyscript`). Scripts from dependencies can be run with `npm explore <pkg> -- npm run <stage>`.

`From: https://docs.npmjs.com/cli/v8/using-npm/scripts?v=true`

# Assignment
###  Create a simple server using Node.js, send request, get response, and get the idea of how a server is created and how it manages requests, responses
There are several methods of creating a simple server in NodeJS. The built-it HTTP module (mentioned in above sections) can be used for doing so. Another popular method is using the Express.js NPM package for this. I use both methods for demonstration.

##### Creating a node project -
In the directory of the project, I run the `npm init` command which generates the boiler-plate files. Then I install the express.js package using the `npm install express` command. The HTTP is already included with the node installation.

##### Creating the HTTP server -
In the index.js file, I first use the HTTP module method -
```js
// Importing the http module
const http = require("node:http")

// Creating server 
const server = http.createServer((req, res) => {
  // Sending the response
  res.write("This is the response from the server")
  res.end();
})

// Server listening to port 3000
server.listen((3000),  ()  =>  {
  console.log("Server is Running");
})
```

We get the following output after sendign a GET request to the server via the browser (opening localhost at port 3000) -  
  
![image](https://media.geeksforgeeks.org/wp-content/uploads/20210622002747/44.png)

##### Creating the Express.js server -
```js
const express = require("express")
const app = express()

// Handling GET / request
app.use("/", (req,  res,  next) => {
  res.send("This is the express server")
})

// Handling GET /hello request
app.get("/hello",  (req,  res,  next) => {
  res.send("This is the hello response");
})

// Server setup
app.listen(3000, () => {
  console.log("Server is Running")
})
```

We get the following output after sendign a GET request to the server via the browser (opening localhost at port 3000) -  
  
![image](https://media.geeksforgeeks.org/wp-content/uploads/20210622002617/1.png)  
  
Similarly we would get the text "This is the hello message" on accessing `localhost:3000/hello`.

##### Finally
I combine the two servers into one files by changing the server ports for simplicity.
```js
// Importing the http module
const http = require("node:http")

// Importing the express package
const express = require("express")
const app = express()

// HTTP ---------------------------------------------------
// Creating http module server 
const server = http.createServer((req, res) => {
  // Sending the response
  res.write("This is the response from the server")
  res.end();
})

// Http server listening to port 3000
server.listen((3000),  ()  =>  {
  console.log("Server is Running");
})

// EXPRESS.JS --------------------------------------------
// Handling GET / request
app.use("/", (req,  res,  next) => {
  res.send("This is the express server")
})

// Handling GET /hello request
app.get("/hello",  (req,  res,  next) => {
  res.send("This is the hello response");
})

// Server setup
app.listen(4000, () => {
  console.log("Server is Running")
})s
```

---
