# DMart

> Avenue eCommerce Limited (AEL) owns and operates hypermarkets and supermarkets by the store name DMart. DMart seeks to be a one-stop shopping destination for the entire family, meeting all their daily household needs. A wide selection of home utility products is offered, including foods, toiletries, beauty products, garments, kitchenware, bed and bath linen, home appliances and much more.

* [Creative Demo - dmart.localhost.reviews](http://dmart.localhost.reviews/go/)
* [Local Development Server](http://localhost:3000/)
* [BrowserSync Dashboard](http://localhost:3001/)

### Frontend Technologies

* The front-end development is powered primarily by [Node](https://nodejs.org/), [Bower](http://bower.io/), [Gulp](http://gulpjs.com/). Testing is done with [Jasmine](http://jasmine.github.io/)†.
* The Styles is written in [Sass](http://sass-lang.com/) with the SCSS syntax.
* The Markup is powered by [Nunjucks](https://mozilla.github.io/nunjucks/).
* The Development Server is powered by [BrowserSync](http://www.browsersync.io/).

### Requirements and Installation

1. Install [Node](https://nodejs.org/) with the installer. You can also use [Homebrew](http://brew.sh/) for the installation.
2. Install Bower globally with `$ npm install -g bower`
3. Install Gulp globally with `$ npm install -g gulp`

### Development

Install the required tool, utilities and libraries

```
$ npm i
$ bower i
```

### Tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.

* `gulp serve`: Compiles preprocessors and boots up development server.
* `gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser.
* `gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form.

* `gulp`: Same as `gulp serve`, but will also run `gulp test` and not start up development server.
* `gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server.

* `gulp test`: Lints all `*.js` file in the `source` folder using eslint and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and Jasmine.
* `gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected.

### Deployment

Deploy the Creative Designs with [S3_Website](https://github.com/laurilehmijoki/s3_website) to [tramd.localhost.reviews](http://tramd.localhost.reviews/).

```$ s3_website push```

*Note: The development setup have been tested on Mac OS X and Linux Distros. If you're on Windows, you're on our own and may God help you.*

### Code Drop and Releases

Here are the steps to Code Drop and Releases

1. Checkout the branch from where you want to release the code.
2. Push the final codes to all remotes as a hygiene practice - ```$ git push [remote] [branch]```. You might need to do this for all remotes that you want to push.
3. If you want to push from a different branch to another origin, then do this, ```$ git push dmart dev:master```.
2. Get the commit hash code for the time when you want to release. In git, use the command ```$ git log```. You'll get something like ```ac685356ae146d7646f58bcefe2611468c26f99e```. Copy that looooong code.
2. Now, add a tag, ```git tag [release-version-or-name] ac685356ae146d7646f58bcefe2611468c26f99e```
3. You can now push the tag to the remote which you want to release - ```$ git push [remote] --tags```. Example for DMart, ```$ git push dmart --tags```.
4. Then, got to the Github Release Page for DMart - [github.com/AELDM/RF-RWD/releases](https://github.com/AELDM/RF-RWD/releases).
5. Now, draft the release, add notes, upload the Exported/Compiled Codes.


#### Notes

† We stopped writing test codes altogether after the initial scaffold. This is due to the fact that it will add-up excessive impact to the timeline, in magnitudes of a minimum timeline being double the time taken to write production codes.
