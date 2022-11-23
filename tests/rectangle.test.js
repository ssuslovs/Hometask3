import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should properly output Perimeter', () => {
    const outputNumber = getRectanglePerimeter(5, 8);
    expect(outputNumber).toBe(26);  
});

test('should properly output Area', () => {
    const Number = getRectangleArea(5, 5);
    expect(Number).toBe(25); 
});

test('should properly output Info', () => {
    const outputNumber = getRectangleInfo(26,25)
    expect(outputNumber).toBe(outputNumber,Number);  
})
