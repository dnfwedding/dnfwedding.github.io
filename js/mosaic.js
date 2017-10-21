'use strict';

(function () {
    init(5, 5);
    permutation();
})();

function photos() {
    return [
        'photos/IMG_4074.jpg',
        'photos/IMG_4267.jpg',
        'photos/IMG_4286.jpg',
    ];
}

function template(column, row) {
    return '<img src="'
        + randomPhoto()
        + '" style="grid-column-start: '+ (column+1)
        + '; grid-row-start: '+ (row+1)
        + '; height: 120px; width: auto;" id="m-el-'
        + column + '-'+ row
        + '"/>';
}

function randomPhoto() {
    let photosArray = photos();
    return photosArray[Math.floor(Math.random()*photosArray.length)];
}

function init(colNum, rowNum) {
    let pan = document.getElementById('photo-mosaic');
    let column = colNum;
    let row = rowNum;
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            pan.innerHTML = pan.innerHTML + template(i, j);
        }
    }
}

function permutation() {
    while (true) {
        colNum = Math.floor(Math.random() * 5);
        rowNum = Math.floor(Math.random() * 5);
        let element = document.getElementById('m-el-' + colNum + '-'+ rowNum);
    }
}
