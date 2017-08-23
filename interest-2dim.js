// there's probably a more clever way to do this
function getThemNeighbours(x, y, maxX, maxY) {
	// this looks like magic, even to me
	if (y == 0) {
		if (x == 0) {
			 // to the right, and below
			return [[1, 0], [0, 1]]
		}
		if (x == maxX) {
			 // to the left and below
			return [[maxX-1, 0], [maxX, 1]]
		}
		 // to the left, below and to the right
		return [[x-1, y], [x, y+1], [x+1, y]]
	}
	if (y == maxY) {
		if (x == 0) {
			 // to the right and above
			return [[1, maxY], [0, maxY-1]]
		}
		if (x == maxX) {
			// to the left and above
			return [[maxX-1, maxY], [maxX, maxY-1]]
		}
		// to the left, above and to the right
		return [[x-1, y], [x, y-1], [x+1, y]]
	}
	// to the left, above, to the right, below
	return [[x-1, y], [x, y-1], [x+1, y], [x, y+1]]
}
function itemsOfInterest(array) {
	items = []
	for (let y = 0; y < array.length; y++) {
		row = array[y]
		for (let x = 0; x < row.length; x++) {
			neighbours = getThemNeighbours(x, y, row.length, array.length)
			conditonsSatisfied = 0
			for (let j=0; j < neighbours.length; j++) {
				neighbourX = neighbours[j][0]
				neighbourY = neighbours[j][1]
				if (row[x] >= array[neighbourY][neighbourX])
					conditonsSatisfied++;
			}
			if (conditonsSatisfied == neighbours.length) {
				items.push(row[x])
			}
		}
	}
	return items
}