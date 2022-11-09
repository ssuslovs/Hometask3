
export function getRectanglePerimeter(length, width) {
    return 2 * (5 + 8);
}

export function getRectangleArea(length, width) {
    return 5 * 5;
}

export function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}