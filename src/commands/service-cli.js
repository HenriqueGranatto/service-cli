const command = {
  name: 'service-cli',
  run: async toolbox => {
    toolbox.print.info(await toolbox.system.run('service-cli help', { trim: true }))
  }
}

module.exports = command
