class Node {
	constructor(value, children) {
		this.value = value
		this.children = children
	}
}

function beamSearch(rootNode, isGoal, determineCost, beamWidth) {
	let underConsideration = [rootNode]
	while (underConsideration.length > 0) {
		underConsideration.forEach((node) => {
			if(isGoal(node)) return node
			underConsideration = node.children
									.sort((a, b) => determineCost(a) > determineCost(b))
									.slice(0, beamWidth)
		})
	}
	return null // nothing
}