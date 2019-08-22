// keyCheck
// ========
// Check API key before allowing request to proceed

const _       = require('lodash'),
      config  = _.merge(require('../../config/application').defaults, require('../../config/application')[process.env.NODE_ENV || 'development']),
      ApiKey  = require('../models/apiKey');

module.exports = (req, res, next) => {  
  if (req.body.api_key === config.api_key) {
    next();
  } else {
    new ApiKey({ key: req.body.api_key })
      .fetch({ require: true })
      .then((key) => {
        if (key.get('key') === req.body.api_key) next();
      })
      .catch((err) => {
        next(err);
      });
  }
};
