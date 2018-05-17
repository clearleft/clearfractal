# ClearFractal

The Fractal Pattern Library for the Clearleft website.

## Installation

    npm install
    gulp
    fractal start --sync

Additionally you can watch for asset changes with

    gulp watch

## Syncing with Clearleft.compact

When you've made changes to components that you want to be reflected on clearleft.com, you'll need to make changes in both repos:

In this repo, update the `package.json` file to increment the version number.

In the clearleft.com repo, update the corresponding line in `devDependencies` in the `package.json` file there. Then when you run `elf devbox:build` on the clearleft.com repo, it will pull in the correct versions of the components.
