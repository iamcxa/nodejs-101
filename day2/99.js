for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    console.log((i+1) + " * " + (j+1) + " = " + (i+1)*(j+1));
    if (j === 9 - 1) console.log("\n");
  }
}
