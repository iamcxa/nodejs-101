var string = '';    
for (i=1; i<=9; i++) {
	for(j=1; j<=9; j++) {
		if (i * j >= 10) {
			string += i + ' * ' + j + ' = ' + i * j + '  ';
		} else {
			string += i + ' * ' + j + ' = ' + i * j + '   ';
		}
	}
	string += '\n';
}
console.log(string)