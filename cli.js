#!/usr/bin/env node
const meow = require('meow');
const createFpsApp = require('.');

meow(`
  Options
      --typescript  Use TypeScript React Template
  Usage
      $ mkdir my-app
      $ cd my-app

    $ create-fps-app
`);

createFpsApp().catch((error) => {
  console.error(error.stack);
  process.exit(1);
});
