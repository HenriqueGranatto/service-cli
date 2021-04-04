const command = {
  name: 'module',
  run: async toolbox => {
    toolbox.print.info("Adicionando gerenciador de módulos")
    toolbox.print.info(await toolbox.system.run('npm install https://github.com/HenriqueGranatto/service-cli-module.git', { trim: true }))
    toolbox.print.success("Gerenciador de módulos instalado")
  }
}

module.exports = command
