const getSize = (width, height, depth) => [2 * (width * (height + depth) + height * depth), width * height * depth]

console.log(getSize(4, 2, 6))