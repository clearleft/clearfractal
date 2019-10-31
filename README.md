# ClearFractal

The Fractal Pattern Library for the Clearleft website.

## Installation

    npm install
    gulp
    fractal start --sync

Additionally you can watch for asset changes with

    gulp watch

## Syncing with Clearleft.com

When you've made changes to components that you want to be reflected on clearleft.com, you'll need to make changes in both repos:

In this repo, update the `package.json` file to increment the version number. Push the update. Then go to <https://github.com/clearleft/clearfractal/releases/new> and create a new release with the same version number.

In the clearleft.com repo, update the corresponding line in `dependencies` in the `package.json` file there. Then when you run `elf devbox:build` on the clearleft.com repo, it will pull in the correct versions of the components.

## Deploying the pattern library

In order for this pattern library to be effective it's important that the designers have access to the latest patterns.
To deploy the latest version run `elf deploy`, The master branch will be deployed to http://fractal.clearleft.com/