cf-component-demo
=================

[Jade](http://jade-lang.com/) templates for creating docs and demos for
Capital Framework components.

cf-component-demo comes with the following templates:

## code_examples

A CSS documentation template. This template lists, labels. and exposes the CSS and HTML code for each pattern. It uses [Rainbow](http://craig.is/making/rainbows) for syntax highlighting and [html5shiv](https://github.com/aFarkas/html5shiv) to polyfill the styling of HTML5 elements in older browsers. *Note that this template uses light CSS and JS that might affect your patterns.*

## simple

A simple template to list and label each pattern. No markup or CSS is shown. *Note that this template uses light CSS that might affect your patterns.*

## raw

A bare bones template that simply renders the markup for each pattern. This is a good template if you want to browser test your patterns without the interference of any other CSS.

## Getting started

A template for rendering each pattern as HTML. These templates are built to be consumed by [Topdoc](https://github.com/topcoat/topdoc) (A tool for generating usage guides for css). We use Topdoc in our Gruntfile via the [grunt-topdoc](https://github.com/topcoat/grunt-topdoc) task.

First familiarize yourself with Topdoc and the [Topdoc comment specification](https://github.com/topcoat/topdoc#topdoc-comment-specification). The general idea is that you place special Topdoc comments in your stylesheet which Topdoc parses and then merges with a [Jade](http://jade-lang.com/) template. This repository contains custom templates and uses custom Topdoc comment formatting.

### Custom Topdoc comment specification

```CSS
/* topdoc
    name: Example group name
    family: cf-example-component
    patterns:
    - name: Example pattern name
      codenotes:
        - "Code notes are wrapped in pre and code tags and appear in a list."
        - "..."
        - "..."
      notes:
        - "Notes appear in a list as normal text."
        - "..."
        - "..."
      markup: |
        <p>You can write HTML in here and two things will happen.</p>
        <ol>
          <li>The HTML will be rendered on the page.</li>
          <li>The code will be exposed in pre code tags.</li>
        </ol>
    tags:
    - example-tag
*/
```

We have expanded the YAML structure of what Topdoc handles out of the box. Data that is unique to these templates are labeled with *cf-only*.

- `name` (required): A name for a group of patterns.
- `family` (required, *cf-only*): This should match the Capital Framework repository name in package.json. It is used to identify the current components Topdoc comments so that i can ignore any other Topdoc comments from dependencies.
- `tags`: An array of obligatory tags. Right now we are tagging each pattern group with the current component family and any dependency family. In the future we hope to use these tags for enhancements such as listing all patterns with a specific dependency.
- `patterns` (*cf-only*): An array containing pattern objects. Patterns are broken up into groups, for example default buttons, secondary buttons, and tertiary buttons would all be good candidates for pattern groups. Within each group you can list the available patterns for example `.btn` and `.btn:hover` would each be their own pattern.
- `patterns[i].name` (*cf-only*): The name of the pattern.
- `patterns[i].codenotes`: An array of notes. Code notes are wrapped in `<pre>` and `<code>` tags and appear in a list.
- `patterns[i].notes` (*cf-only*): An array of notes. Notes appear in a list as normal text.
- `patterns[i].markup` (*cf-only*): You can write HTML in here and two things will happen. 
 - The HTML will be rendered on the page. 
 - The code will be exposed in pre code tags. 

### Custom grunt-topdoc options

The code_examples and raw templates support the following options within the `grunt-topdoc` task:

```JS
topdoc: {
  demo: {
    options: {
      source: 'demo/static/css/',
      destination: 'demo/',
      template: 'node_modules/fj-component-demo/' + ( grunt.option('tpl') || 'raw' ) + '/',
      templateData: {
        ltIE9AltSource: 'static/css/main.lt-ie9.min.css',
        ltIE8Source: 'static/css/main.lt-ie8.min.css',
        html5Shiv: true,
        family: '<%= pkg.name %>',
        title: '<%= pkg.name %> demo',
        repo: '<%= pkg.repository.url %>',
        custom: '<%= grunt.file.read("demo/custom.html") %>'
      }
    }
  }
}
```

- 

## Using these templates with a Capital Framework component

These instructions are from the perspective of a Captial Framework component repository which uses grunt-topdoc to generate demos and docs.

**Requirements**

You need NPM and grunt-cli.

**Step 1**

In `package.json` list the `grunt-topdoc` and `cf-component-demo` npm packages as `devDependencies`.

```JSON
"devDependencies": {
  "grunt-topdoc": "~0.2.0",
  "cf-component-demo": "git://fake.ghe.domain/flapjack/cf-component-demo.git"
}
```

**Step 2**

Install the `devDependencies`.

`$ npm install`  

**Step 3**

Load the `grunt-topdoc` task in `Gruntfile.js`.

```JS
grunt.loadNpmTasks('grunt-topdoc');
```

**Step 4**

Set up the `grunt-topdoc` task in `Gruntfile.js`.

Remember that the `source` option is a directory containing the CSS to be parsed by Topdoc and that `destination` is the directory you want the Jade template to be exported to after merging in the Topdoc data.

```JS
topdoc: {
  demo: {
    options: {
      source: 'demo/static/css/',
      destination: 'demo/',
      template: 'node_modules/fj-component-demo/' + ( grunt.option('tpl') || 'raw' ) + '/',
      templateData: {
        ltIE9AltSource: 'static/css/main.lt-ie9.min.css',
        ltIE8Source: 'static/css/main.lt-ie8.min.css',
        html5Shiv: true,
        family: '<%= pkg.name %>',
        title: '<%= pkg.name %> demo',
        repo: '<%= pkg.repository.url %>',
        custom: '<%= grunt.file.read("demo/custom.html") %>'
      }
    }
  }
}
```

**Step 5**

Run the `grunt-topdoc` task.

`$ grunt topdoc`

Your page will be exported to the `destination` path.
