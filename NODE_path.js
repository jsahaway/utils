// tips:
// https://shapeshed.com/writing-cross-platform-node/

process.cwd(); // refer to global app (where the node process is fire)
__dirname; // refer to local file

// Project
// ├── app.js	      // root of the app : porcess.cwd() === __dirname
// └──lib
//    └── script.js // script of the app.js : process.cwd() !== __dirname
