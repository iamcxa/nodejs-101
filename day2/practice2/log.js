function info(d) {
  console.info(d);
}

function time(d) {
  console.time(d);
}

function timeEnd(d) {
  console.timeEnd(d);
}

exports.info = info;
exports.time = time;
exports.timeEnd = timeEnd;