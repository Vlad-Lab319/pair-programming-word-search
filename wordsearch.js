const transpose = function (matrix) {
    let transposedMatrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex])); //https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
    return transposedMatrix;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        // console.log(l);
        if (l.includes(word)) return true
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        // console.log(l);
        if (l.includes(word)) return true
    }

    return false;
    
}

module.exports = wordSearch