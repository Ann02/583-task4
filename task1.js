function calcRectangleArea(width, height){
    let s = width * height;
    if (width <= 0 || height <= 0 ) {
        throw 'Number must be positive';
    }
    return s;
}
    debugger;
try {
    //calcRectangleArea(-2,3);
    //calcRectangleArea(2,3);
} catch (e) {
    console.error(e)
}
