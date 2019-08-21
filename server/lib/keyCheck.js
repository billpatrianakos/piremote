// keyCheck
// ========
// Check API key before allowing request to proceed

const config = _.merge(require('../../config/application').defaults, require('../../config/application')[process.env.NODE_ENV || 'development']);

module.exports = (req, res, next) => {
  let messages = [];
  
  if (req.body.api_key === config.api_key) messages.push('Invalid API key');
  
  if (req.body.timestamp === new Date().today) messages.push('Insecure request detected');
  
  if (messages.length > 0) {
    res.status(401).json({ status: 'error', message: messages });
  } else next();
}