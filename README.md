# swh-web

This repository holds the development of Software Heritage web applications:

* swh-web API (https://archive.softwareheritage.org/api): enables to query the content of the archive through HTTP requests and get responses in JSON or YAML.

* swh-web browse (https://archive.softwareheritage.org/browse): graphical interface that eases the navigation in the archive.

Documentation about how to use these components but also the details of their URI schemes
can be found in the docs folder. The produced HTML documentation can be read and browsed
at https://docs.softwareheritage.org/devel/swh-web/index.html.

## Technical details

Those applications are powered by:

  * [Django Web Framework](https://www.djangoproject.com/) on the backend side with the following extensions enabled:

    * [django-rest-framework](http://www.django-rest-framework.org/)
    * [django-webpack-loader](https://github.com/owais/django-webpack-loader)
    * [django-js-reverse](http://django-js-reverse.readthedocs.io/en/latest/)

  * [webpack](https://webpack.js.org/) on the frontend side for better static assets management, including:

    * assets dependencies management and retrieval through [npm](https://www.npmjs.com/)
    * linting of custom javascript code (through [eslint](https://eslint.org/)) and stylesheets (through [stylelint](https://stylelint.io/))
    * use of [es6](http://es6-features.org) syntax and advanced javascript feature like [async/await](https://javascript.info/async-await) or [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) thanks to [babel](https://babeljs.io/) (es6 to es5 transpiler and polyfills provider)
    * assets minification (using [UglifyJS](https://github.com/mishoo/UglifyJS2) and [cssnano](http://cssnano.co/)) but also dead code elimination for production use

## How to build and run

### Requirements

First you will need [Python 3](https://www.python.org) and a complete [swh development environment](https://forge.softwareheritage.org/source/swh-environment/) installed.

To run the backend, you need to have the following Python 3 modules installed:
* beautifulsoup4
* django >= 1.10.7
* djangorestframework >= 3.4.0
* django_webpack_loader
* django_js_reverse
* docutils
* file_magic >= 0.3.0
* htmlmin
* lxml
* pygments
* pypandoc
* python-dateutil
* pyyaml
* requests

To compile the frontend assets, you need to have [nodejs](https://nodejs.org/en/) >= 8.x (preferably version 8.x LTS) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/en/)) installed. If you are on Debian stretch, you can easily install an up to date nodejs/npm from the stretch-backports repository or by following the instructions located at https://github.com/nodesource/distributions.

Once you have installed nodejs, issue the following command in the root directory of swh-web in order to retrieve all the frontend dependencies:

```
$ npm install
```

or if you prefer to use yarn (faster than npm):

```
$ yarn install
```

Please note that the static assets bundles generated by webpack are not stored in the git repository. Follow the instructions below in order to generate them in order to be able to run the frontend part of the web applications.

### Make targets

Below is the list of available make targets that can be executed from the root directory of swh-web in order to build and/or execute the web applications under various configurations:

* **run-django-webpack-devserver**: Compile and serve not optimized (without mignification and dead code elimination) frontend static assets using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) and run django server with development settings. This is the recommended target to use when developing swh-web as it enables automatic reloading of backend and frontend part of the applications when modifying source files (*.py, *.js, *.css, *.html).

* **run-django-webpack-dev**: Compile not optimized (no minification, no dead code elimination) frontend static assets using webpack and run django server with development settings. This is the recommended target when one only wants to develop the backend side of the application.

* **run-django-webpack-prod**: Compile optimized (with minification and dead code elimination) frontend static assets using webpack and run django server with production settings. This is useful to test the applications in production mode (with the difference that static assets are served by django). Production settings notably enable advanced django caching and you will need to have [memcached](https://memcached.org/) installed for that feature to work.

* **run-django-server-dev**: Run the django server with development settings but without compiling frontend static assets through webpack.

* **run-django-server-prod**: Run the django server with production settings but without compiling frontend static assets through webpack.

* **run-gunicorn-server**: Run the web applications with production settings in a [gunicorn](http://gunicorn.org/) worker as they will be in real production environment.

Once one of these targets executed, the web applications can be executed by pointing your browser to http://localhost:5004.

### Npm/Yarn targets

Below is a list of available npm/yarn targets in order to only execute the frontend static assets compilation (no web server will be executed):

* **build-dev**: compile not optimized (without mignification and dead code elimination) frontend static assets and store the results in the `swh/web/static` folder.

* **build**: compile optimized (with mignification and dead code elimination) frontend static assets and store the results in the `swh/web/static` folder.

**The build target must be executed prior performing the Debian packaging of swh-web** in order for the package to contain the optimized assets dedicated to production environment.

To execute these targets, issue the following commmand:

```
$ npm run <target_name>
```

or if you prefer using yarn:

```
$ yarn <target_name>
```