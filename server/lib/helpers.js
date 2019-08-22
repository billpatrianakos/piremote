// View helpers
// ============

const _       = require('lodash'),
      config  = _.merge(require('../../config/application').defaults, require('../../config/application')[process.env.NODE_ENV || 'development']);

module.exports = {
  humanize: (string) => { // Credit: https://stackoverflow.com/questions/4149276/how-to-convert-camelcase-to-camel-case
    let humanizedName = '';
    for (var keyName in config.alternateKeynames) {
      if (string === keyName) {
        humanizedName = config.alternateKeynames[keyName];
      }
    }

    if (humanizedName.length > 0) {
      return humanizedName;
    } else {
      return string
        // Insert a space before all caps
        .replace(/([A-Z])/g, ' $1')
        // Uppercase the first character
        .replace(/^./, function(str) { return str.toUpperCase(); });
    }
  }
};
