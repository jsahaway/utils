// tips:
// https://shapeshed.com/writing-cross-platform-node/

process.cwd(); // refer to global app (where the node process is fire)
__dirname; // refer to local file

// Project
// ├── app.js	      // root of node process : porcess.cwd() === __dirname // "/home/path/to/Project"
// └──lib
//    └── script.js // file of node process : process.cwd() !== __dirname // "/home/path/to/Project" !== "/home/path/to/Project/lib"
