const command = {
  name: 'init',
  run: async toolbox => {
    toolbox.print.info(await toolbox.system.run('npm install https://github.com/HenriqueGranatto/service-cli-module.git', { trim: true }))
  }
}

module.exports = command
