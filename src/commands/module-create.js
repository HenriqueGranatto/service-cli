/**
 * Module dependencies.
 */
const fs = require("fs")
const path = require("path")

const command = {
    name: 'module:create',
    description: 'Cria um novo plugin para a CLI',
    run: async toolbox => {
      await toolbox.print.success(`- Adicionando diretório: commands`)
      await toolbox.filesystem.dir('module/domain')

      await toolbox.print.success(`- Adicionando diretório: docs`)
      await toolbox.filesystem.dir('module/docs')

      await toolbox.print.success(`- Adicionando diretório: extensions`)
      await toolbox.filesystem.dir('module/extensions')

      await toolbox.print.success(`- Adicionando diretório: templates`)
      await toolbox.filesystem.dir('module/templates')

      await toolbox.print.success(`- Adicionando: gitignore`)
      await toolbox.template.generate({
          template: `module/gitignore`,
          target: `module/.gitignore`,
      }) 

      await toolbox.print.success(`- Adicionando: license`)
      await toolbox.template.generate({
          template: `module/LICENSE`,
          target: `module/LICENSE`,
      }) 

      await toolbox.print.success(`- Adicionando: package.json`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `module/package.ejs`,
          target: `module/package.json`,
      }) 

      await toolbox.print.success(`- Adicionando: readme.md`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `module/readme.ejs`,
          target: `module/readme.md`,
      }) 

      await toolbox.print.success(`- Adicionando: package.json`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `module/package.ejs`,
          target: `module/package.json`,
      }) 

      await toolbox.print.success(`- Adicionando: commands.md`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `module/docs/commands.ejs`,
          target: `module/docs/commands.md`,
      }) 

      await toolbox.print.success(`- Adicionando: plugins.md`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `module/docs/plugins.ejs`,
          target: `module/docs/plugins.md`,
      }) 
    }
  }
  
  module.exports = command
  