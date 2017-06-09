"use strict"

const chalk = require("chalk")

/* eslint-disable */
console.log()
console.log()
console.error(chalk.bold.underline.red("ERROR:"))
console.warn(chalk.bold.yellow("This is not a Node package, this is just a collection of FlowJS definitions for the Datus DAL/ORM."))
console.warn(chalk.bold.yellow("To find out more about Datus, head over to our Github repo https://github.com/newworldcode/datus"))
console.log()
console.warn(chalk.bold.yellow("To use this library add this package to your .flowconfig libs: I.E"))
console.warn(chalk.italic(`
[ignore]
tests/.*

[include]

[libs]
node_modules/datus-flow/declarations

[options]

`))
console.log()
console.log()
console.log(chalk.green.bold("Happy developing!"))
console.log()
console.log()
/* eslint-enable */
