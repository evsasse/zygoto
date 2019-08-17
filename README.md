# zygoto

Kickstart a new Rails project.


### This project promises and intentions:

- Ready for deployment, using Heroku;

- Ready for Typescript and React, using Rails Webpacker;

- Have Customer, User, and Admin models, properly setted up, ready to login;

- Have easy and commented code;

- Prefer ease of use and change, over intricate configurations;

- Prefer edge versions of Ruby and Rails;

- Easy development environment setup for the latest macOS and Ubuntu;

- Ready to test, even features with JS, using Rspec;

- Provide some universal admin and ops tools out-of-the-box;

- Compatible with Bootstrap themes;


### This project does **not** intend to:

- Be backward compatible, with itself, Ruby, Rails or any libs;

- Be cheap to run on scale;

- Run pure JavaScript specs, eg. Jest (Use RSpec feature specs instead)(Could be revised);


## Overview and TODO

* [ ] Pry

  * [ ] pry-rails, `rails c`

  * [ ] pry-meta

    * [ ] pry-byebug shortcuts

* [ ] Admin dashboard

  * [ ] Impersonate Customer and User

    * [ ] Turn off analytics/intercom/...

    * [ ] Alert that you are impersonating

    * [ ] Properly save Whodunnit

* [ ] Kaminari / WillPaginate

  * [ ] Bootstrap styles

* [ ] Simple Form

  * [ ] Bootstrap styles

* [ ] Auditable changes to models

  * [ ] PaperTrail

  * [ ] Whodunnit

  * [ ] Paranoia

* [x] PG Hero

  * [x] Marginalia

  * [ ] More query stats

  * [ ] Auth for dashboard, reusing Admin model

  * [ ] Link to it on Admin dashboard

* [ ] Redis

  * [ ] redis-mutex

* [ ] Sidekiq

  * [ ] Cron

  * [ ] Auth for dashboard, reusing Admin model

  * [ ] Link to it on Admin dashboard

  * [ ] Properly reset Sidekiq::Testing

* [ ] PWA

* [ ] CarrierWave

  * [ ] A `files` endpoint ready to receive uploads and return URLs, accessible from any subdomain

    * [ ] Protection agains spam, etc

    * [ ] May receive an identifier to use a custom uploader

* [ ] Thumbor

* [ ] Seed

  * [ ] Create a Customer, User, and Admin that can be used to login

* [x] NPM scripts

  * [ ] Command to run all tests with coverage an time analysis

  * [ ] Command to run all tests, except feature tests

  * [ ] Commands to setup and seed the databases

  * [ ] **Always on** More forgettable commands

* [x] Husky

  * [ ] Run linters autofix on commit

  * [ ] **Always on** More helpful git hooks

* Webpack / Webpacker

  * [x] .js

  * [x] .ts

  * [x] .jsx

  * [x] .tsx

  * [x] .css

  * [x] .module.css

  * [x] .module.scss

  * [x] Hot Reload

    * [x] CSS / SCSS

    * [x] React components

  * [x] Separate Bundles for each "app"

    * [ ] Separate Bundles for some features

      * [ ] Login screen layout doesn't load React components

* [x] JS / TS

  * [x] JQuery

  * [x] React

  * [ ] Action Cable

  * [ ] Redux

  * [ ] Redux Thunk

    * [ ] Example for request LOADING/DONE/ERROR...

  * [ ] Redux Saga (Could be revised)

* [ ] Styling

  * [ ] Use some Bootstrap theme via package.json but compile it internally

  * [ ] File to override the Bootstrap theme variables

  * [ ] FontAwesome via font, not svg

    * [ ] Easily change into PRO

* [ ] Tests

  * [ ] fakeredis

  * [ ] LetterOpener

  * [ ] RSpec

  * [ ] Add some example model specs

  * [ ] Add some example feature specs

  * [ ] Add some example feature specs that use JS

  * [ ] All specs run easily locally and on CI

  * [ ] FactoryBot

  * [ ] Coverage

  * [ ] TimeCop

  * [ ] Database cleaner

  * [ ] VCR

  * [ ] ShouldaMatchers

* [ ] Login with each model

  * [ ] Using email and password

  * [ ] Using Facebook

  * [ ] Using Google

  * [ ] CanCanCan

* [ ] Look into what could be done to help into CI/CD

  * [ ] Look into Gitlab CI integration

  * [ ] Look into what Heroku can help

  * [ ] Deploy and generate an accessible address for each pull-requested branch

  * [ ] Generate coverage artifacts

* [ ] Look into what could be helped using containers and k8s

  * [ ] How does it perform for the development environment

  * [ ] Is it the easiest solution to auto scale?

* [x] Linters

  * [x] Rubocop

  * [x] ESLint

    * [x] TSLint

  * [ ] Look more into reek/flay/flog/...


## How to install Ruby and Rails, using RVM

This is currently using Ruby 2.6.0 and Rails 6.0.0.beta3

- As edge versions of Ruby are preferred you may need to update your RVM. **Run** `rvm get stable`;

  - This command may raise a problem with the version of GPG you have installed, follow the intructions that are given by the it to fix;

  - If the instructions don't work, you can try `gpg --keyserver hkp://keys.gnupg.net --recv-keys FIRST_KEY SECOND_KEY`, changing the keys to the ones given by the previous instructions.

- Now we can install Ruby. **Run** `rvm install 2.6.0`;

- Confirm that you are using the new Ruby version and your project gemset. **Run** `rvm use ruby-2.6.0@zygoto`;

- Install the latest versions of the commands `bundle` and `rails`, you need to use the `--prerelease` option to get the real latest versions. **Run** `gem install bundler rails --prerelease`;

- Great! You have Ruby, Bundle and Rails properly installed!


## Setting up the project

- After entering the folder of the project for the first time, **run** `bundle install` to install the Ruby dependencies described by the `Gemfile`;

  - This command can pop some errors about xcode/clang/openssl/gmake/redis. Just search for each one on Google, they are easy to solve, usually is something missing, fixable by running `brew install some-missing-lib`;

- Now install the JavaScript dependencies described by the `package.json`. **Run** `yarn install`;

  - This implies you already have `yarn` installed, search on how to install it otherwise.

- With the `gem`s installed you can already run the project, but, to avoid an error on this first running it we need to create our development database. **Run** `rails db:create db:migrate db:seed`.

  - If for some reason the development database already exists, you can remove it **running** `rails db:drop`, and run the previous' step command again.


## Running the project

We need to 3 applications during development:

- The Puma server, where the Rails application will run, **just call** `rails s`;

- The `webpack-dev-server` that allows us to hot-reload JS and CSS, **running** `yarn start`;

- Sidekiq, that runs our background workers. It is not necessary to keep running it at every moment, only when you are developing something that needs the workers running. You will know when it becomes necessary. **Run it with** `sidekiq`.


## Running the tests locally

- We need to set up a database where the tests will run. Just like we configured our development database **Run** `rails db:create db:migrate RAILS_ENV=test`;

  - And again, maybe the database was already created, remove it using `rails db:drop RAILS_ENV=test`, and run the previous commmand again.

- You could simply run `rspec` to run the tests. But we can use Spring to run start the tests much faster. **Run** `bin/rspec` instead.


## Using your UI Kit, and hot reloading on this project

Use [yarn-link](https://yarnpkg.com/lang/en/docs/cli/link/).

- Install the library normally on this project ((`yarn add my-user/my-ui-kit`), but import the uncompiled files (`@import '~my-ui-kit/src/my-ui-kit';`).

- Clone the library on your computer, and inside its folder **run** `yarn link`.

- Back into this project folder **run** `yarn link my-ui-kit`.

- This will add an symlink to your node_modules folder, and hot-reload will start to watch the changes you make on your other folder.


## More interesting libs than can save you time

- https://github.com/ankane/chartkick Easy async charts.

- https://github.com/jnunemaker/flipper Easy feature flipping, with ready to go UI.
