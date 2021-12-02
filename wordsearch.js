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

const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK');

//   wordSearch(result);
