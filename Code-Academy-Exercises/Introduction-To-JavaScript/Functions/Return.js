function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//By default the resting value of a function is undefined. To capture the results you have to use the keyword return.
