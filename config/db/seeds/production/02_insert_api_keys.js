const performance = require('perf_hooks');

// Generate an API key if using with IFTTT
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('api_keys').del()
    .then(function () {
      // Inserts seed entries
      return knex('api_keys').insert([
        { id: 1, key: generateUUID(), created_at: Date.now(), updated_at: Date.now(), active: true }
      ]);
    });
};
