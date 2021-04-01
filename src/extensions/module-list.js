module.exports = (toolbox) =>
{
    toolbox.updateListModules = updateListModules
    toolbox.showlistModules = showlistModules
}

const showlistModules = (toolbox) =>
{
    let modules = toolbox.filesystem.read('modules.json', 'json')
    let list = [['Name', 'Package', 'Install', 'Link']]

    modules.map((plugin) => {
      list.push([plugin.name, plugin.package, `service-cli module:install ${plugin.name}`, plugin.link])
    })

    toolbox.print.table(list, { format: 'lean' })
}

const updateListModules = () =>
{
    
}