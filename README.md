# Personal Website

This is the repo of my personal website.
It is built with [Jekyll](https://jekyllrb.com) and the theme is an extension of [`minimal-light`](https://github.com/yaoyao-liu/minimal-light).

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

    bundle exec jekyll serve --livereload

For more info see the [quick-start section](https://jekyllrb.com/docs/quickstart/) in the Jekyll docs.

### Build Site

With the following command the website will be built and exported to `_site`

    bundle exec jekyll build