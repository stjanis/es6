// module.exports = function average(...args) {
//   var total = 0;
//   args.forEach( x => total += x);
//   return total / args.length;
// }

// shorter with reduce
module.exports = function average(...args) {
  var total = args.reduce( (a, b) => a + b );
  return total / args.length;
}
