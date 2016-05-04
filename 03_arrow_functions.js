var inputs = process.argv.slice(2);
var output = inputs.map( x => x.slice(0,1) )
              .reduce( (y,z) => y + z );

console.log(`[${inputs}] becomes \"${output}\"`);
