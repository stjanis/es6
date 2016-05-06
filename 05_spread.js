var numbersList = process.argv.slice(2);
console.log(`The minimum of [${numbersList}] is ${Math.min(...numbersList)}`);
