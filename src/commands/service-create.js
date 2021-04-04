/**
 * Module dependencies.
 */
const fs = require("fs")
const path = require("path")

const command = {
    name: 'service:create',
    description: 'Cria um novo serviço em branco',
    run: async toolbox => {
      const modules = await toolbox.validate(toolbox, toolbox.parameters.array)

      /**
       * Include all service template files and directories 
       */
      fs.readdir(path.resolve(__dirname, "..", "templates", "service"), (err, templates) => {
        templates.map(async template => {
          switch (template) {
            case "domain":
              await toolbox.print.success(`- Adicionando diretório: domain`)
              await toolbox.filesystem.dir('service/domain')
            break;

            case "package.ejs":
              await toolbox.print.success(`- Adicionando: ${template}`)
              await toolbox.template.generate({
                  props: {name: toolbox.parameters.options.name, description: `Versão 1.0.0 do serviço ${toolbox.parameters.options.name}`},
                  template: `service/${template}`,
                  target: `service/package.json`,
              }) 
            break;
          
            default:
              await toolbox.print.success(`- Adicionando: ${template}`)
              await toolbox.template.generate({
                  template: `service/${template}`,
                  target: `service/${template}`,
              }) 
            break;
          }
        })
      })
    }
  }
  
  module.exports = command
  