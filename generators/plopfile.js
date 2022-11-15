module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{name}}.tsx',
        templateFile: 'templates/pages/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/styles/{{name}}.styles.ts',
        templateFile: 'templates/pages/styles.ts.hbs',
      },
    ],
  });
};
