module.exports = function(plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Specify component type',
        choices: ['atom', 'molecule', 'organism'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Specify component name',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'append',
        path: 'src/components/{{type}}s/index.tsx',
        unique: true,
        templateFile: 'plop-templates/export-component.hbs',
      },
    ], // array of actions
  });
};
