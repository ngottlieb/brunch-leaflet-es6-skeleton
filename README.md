# Brunch + LeafletJS

This is a skeleton for building map applications with LeafletJS and [Brunch](http://brunch.io).

## Installation

Clone this repo manually or use `brunch new dir -s leaflet`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## LeafletJS

The skeleton ships with an example LeafletJS map defined in `app/map.js` and rendered in `index.html`. You can easily
modify or expand this map to suit your purposes.

Leaflet has a [bunch of great tutorials](https://leafletjs.com/examples.html).

## New to Javascript Applications?

This skeleton allows you to create a static single-page application with a Leaflet map. You'll
have to figure out how to write enough JS to build your Leaflet map on your own, but once
you've done that, this skeleton -- with Brunch -- allows you to generate a static application really
easily.

Running `npm run build` generates all the files needed to open your map in a web browser and puts them
in the `public/` directory. In other words, you can take the contents of `public/` and put it on a
web server for the whole world to see. You can host this just about anywhere, but some good options are:
  * [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
  * [Github Pages](https://pages.github.com/)

## Github Pages Workflow

I often run these apps using Github pages, so I'll go through the workflow here.

  * [Set up a repository on Github](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for your new Leaflet app
  * Run `npm start` to continuously watch your files and run a webserver for local development
  * Make and commit your changes
  * Clear out the `public/` dir with `rm -rf public/*`
  * run `npm run build`
  * move the resulting files out of your working tree temporarily: `mv public ../public`
  * switch to (or create) your `gh-pages` branch: `git checkout -b gh-pages`
  * remove all files in the repository: `rm -rf *`
  * move the compiled application back into the repository: `mv ../public/* .`
  * commit the app to the gh-pages branch: `git commit -a -m 'build with new feature X'`
  * push gh-pages to Github: `git push origin gh-pages`

Note: for this to work, you'll need to
[enable GitHub pages on your repository](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) 
and set it to use the `gh-pages` branch as your publishing source.
