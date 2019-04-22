var arr = new Array();
for (var i = 1; i <= 9; i++) {
	arr[i] = new Array();
	for (var j = 1; j <= 9; j++) {
		arr[i][j] = i * j;
	}
}
for (var i = 1; i <= 9; i++) {
	var cell = document.createElement('div');
	for (var j = 1; j <= 9; j++) {
		var cell = document.createElement('div');
		if (i == j) {
			cell.classList.add('green');
		} else if (i > j) {
			cell.classList.add('blue');
		} else {
			cell.classList.add('yellow');
		}
		cell.innerHTML = arr[i][j];
		var container_cell = document.getElementById('main').appendChild(cell);
	}
}
