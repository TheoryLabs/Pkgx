#!/usr/bin/env node


require = require('esm')(module);

const Pkgx = require('../src/cli')


module.exports = (async () => {
  let cli
  
  try {
    // require('../src/cli').cli(process);
    cli = await Pkgx.cli(process)
    return await cli
  }
  catch(err) {
  	console.error(err)
  	process.exitCode = 1
  }
})()
