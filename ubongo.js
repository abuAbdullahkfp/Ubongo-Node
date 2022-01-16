const board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0],
];

const pieceOne = {
  shapes: [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2],                                  
    [3, 3],
    [4, 4, 4, 4],
  ],
  algo: {
    0: [[0,0], [0,1], [1,0], [2,0], [3,0]],

    1: [[0,2], [0,3], [1,3], [2,3]],

    2: [[1,1], [1,2]],

    3: [[2,1], [2,2], [3,1], [3,2]]
  }
};

const pieceTwo = {
  shapes: [
    [1,1,1],
    [2,2,2],
    [3,3,3,3],
    [4,4,4,4,4]
  ],
  algo: {
    0: [[0,3],[1,3],[2,3]],
    1: [[2,1],[3,1],[3,2]],
    2: [[0,1], [0,2],[1,2],[2,2]],
    3: [[0,0], [1,0], [2,0],[3,0],[1,1]]
  }
}

const pieceThree = {
  shapes: [
    [1, 1, 1, 1],
    [2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4],
  ],
  algo: {
    0: [
      [0, 0],[0,1], [0,2], [0,3]
    ],

    1: [
      [3,0],[3,1]
    ],

    2: [
      [1,0],
      [1,1],
      [1,2],
      [2,0],
      [2,1]
    ],

    3: [
      [3,2],
      [2,2],
      [2,3],
      [1,3]
    ],
  },
};



const play = (board, {shapes, algo}) => {
     
    for (let i =0; i < shapes.length; i++) {
      for (let j=0; j< algo[i].length; j++) {
        if (i == 3 && j == 3) {
          board[i][j] = "[x] Not a PlayGround";
        }
         let [one, two] = algo[i][j]
         board[one][two] = shapes[i][j]
      }
    }

    console.log(board)
}

module.exports = {
  board,
  play,
  pieceOne,
  pieceTwo,
  pieceThree
}


