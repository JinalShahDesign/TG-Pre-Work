function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//We can use the return value of a functin inside another function. The functions within a function are referred ot as helper functions. We can use functions to section small bits of logic or tasks. 
