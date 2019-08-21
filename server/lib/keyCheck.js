// keyCheck
// ========
// Check API key before allowing request to proceed

const _       = require('lodash'),
      config  = _.merge(require('../../config/application').defaults, require('../../config/application')[process.env.NODE_ENV || 'development']);

module.exports = (req, res, next) => {
  let messages = [];
  
  if (req.body.api_key === config.api_key) messages.push('Invalid API key');
  
  // TODO: Check whether the timestamp is reasonable
  
  if (messages.length > 0) {
    res.status(401).json({ status: 'error', message: messages });
  } else next();
}
