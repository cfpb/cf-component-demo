fj-component-demo
=================

Topdoc templates for demoing fj components.

## Getting started

Use these templates in conjunction with Topdoc or grunt-topdoc.

The rest of this readme is from the perspective of a fj-component repo.

For example in fj-buttons we list these packages as devDependencies in package.json.

```JSON
"devDependencies": {
  "grunt-topdoc": "~0.2.0",
  "fj-component-demo": "git://fake.ghe.domain/flapjack/fj-component-demo.git"
}
``

Set up grunt-topdoc in Gruntfile.js.

```JSON
topdoc: {
  docs: {
    options: {
      source: 'docs/static/css/',
      destination: 'docs/',
      template: 'node_modules/fj-component-demo/' + ( grunt.option('tpl') || 'code_examples' ) + '/',
      templateData: {
        family: '<%= pkg.name %>',
        title: '<%= pkg.name %> demo',
        repo: '<%= pkg.repository.url %>'
      }
    }
  }
}
```

Install the dependencies and devDependencies.

`$ npm install`  

Run the topdoc task

`$ grunt topdoc`
