# MI-Client

## How to use:
This project requires node.js v9.x.x or higher and npm 5.x.x or higher to be able to work properly.

```sh
# Install the nvm (node version manager).
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# Reload the .bashrc
$ source ~/.bashrc

# Clone the repository to your local drive.
$ git clone https://github.com/knightburton/mi-client.git

# Enter to the directory.
$ cd mi-client

# Install the selected node version (v9. in this case).
$ nvm install 9

# Install the project dependencies.
$ npm install

# To run the live reload development build.
# This will start a webpack development server and the project will run on the
# http://localhost:5001 address.
$ npm start

# To run the production build.
# The project will be builded into the /dist folder.
$ npm run build

# To run unit tests.
$ npm run test

# To check the ESLint errors.
$ npm run lint

# To fix the auto fixable ESLint errors.
$ npm run lint-autofix
```
