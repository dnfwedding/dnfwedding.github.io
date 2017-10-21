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
    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            pan.innerHTML = pan.innerHTML + template(i, j);
        }
    }
}

function permutation() {
    setInterval(() => {
        let colNum = Math.floor(Math.random() * 5);
        let rowNum = Math.floor(Math.random() * 5);
        document.getElementById('m-el-' + colNum + '-'+ rowNum).src = randomPhoto();
    }, 2000);
}
