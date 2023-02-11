/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@assets': `${__dirname}/path/to/your/assets`,
});

module.exports = config;