var fs = require('fs');
var _ = require('lodash');
var log = require('./log.js');

var result;

log.time('timer');

fs.readFile('data.json', function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    result = _.filter(data, function(elem) {
      return elem.cityName.indexOf("臺中市") != -1;
    });
    log.info(result);
    log.timeEnd('timer');
});
