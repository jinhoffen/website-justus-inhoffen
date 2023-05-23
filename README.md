# My Personal Website

[![Build Status](https://github.com/jinhoffen/website-justus-inhoffen/actions/workflows/build_deploy.yml/badge.svg)](https://github.com/jinhoffen/website-justus-inhoffen/actions)

This is the repo of my personal website.
The page is built with [Jekyll](https://jekyllrb.com).
The production version can be found [here](https://www.justus-inhoffen.com).

Table of Contents:

- [My Personal Website](#my-personal-website)
  - [Build](#build)
    - [Ruby](#ruby)
    - [Bundler and Jekyll](#bundler-and-jekyll)
    - [Develop](#develop)
    - [Build Site](#build-site)
  - [Continuous Deployment](#continuous-deployment)
  - [Frameworks and Libraries](#frameworks-and-libraries)

## Build

[Jekyll](https://jekyllrb.com) is a Ruby CLI and used as engine for Github Pages.

### Ruby

The following steps largely mimic the [Jekyll docs](https://jekyllrb.com/docs/installation/macos/).

Jekyll requires Ruby 2.5.0 or higher so you might be required to install it.

Install Ruby itself:

    apt-get update
    apt-get install ruby-full
    apt-get install nodejs

Install rbenv, a version manager tool for Ruby, for easier switching of ruby versions

```bash
sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
```

Configure your shell by adding this to `~/.zshrc`

```
echo 'export PATH="$HOMe/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-doctor | bash
```

Install the desired ruby version in rbenv

```bash
rbenv install 3.2.1
rbenv global 3.2.1
ruby -v
```

Update the gems, the Ruby package manager

    gem update


### Bundler and Jekyll

Install the `bundler`, an environment manager for Ruby projects:

    gem install bundler

You may want to set the default gem path, so you don't need `sudo`

    bundle config path vendor/bundle

In the project root folder, install all the dependencies with

    bundle install

You should be able to run jekyll now with

    bundle exec jekyll -v

### Develop

With this command a development web-server will be started on [http://localhost:4000](http://localhost:4000)

    JEKYLL_ENV=production bundle exec jekyll serve --livereload --config "_config.yml"

For more info see the [quick-start section](https://jekyllrb.com/docs/quickstart/) in the Jekyll docs.

### Build Site

With the following command the website will be built and exported to `_site`

    bundle exec jekyll build

## Continuous Deployment

Every Pull-Request automatically deploys to a temporary Firebase Staging environment (link posted as comment in the PR by Github Actions).

Every main commit triggers deployment to the live channel of [Firbase Hosting](https://website-justus-inhoffen.web.app) through [Github Actions](https://github.com/jinhoffen/website-justus-inhoffen/actions).
Only this build is executed with the production flag.

Note that the main branch is protected in GitHub and only allows merges through pull requests.

## Frameworks and Libraries

* [Jekyll](https://jekyllrb.com) with plugins Minifier, Webp, Last-Modified, Sitemap
* Theme [`minimal-light`](https://github.com/yaoyao-liu/minimal-light)
* [Firebase Hosting](https://www.firebase.com)