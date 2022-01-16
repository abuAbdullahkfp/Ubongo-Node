const yargs = require('yargs')
const {board, play, pieceOne, pieceTwo, pieceThree} = require('./ubongo')



// run the below command, with selected option from 1 to 3
// node index select --option=1 or 2 or 3
// example node index select --option=1
// Please Visit the images folder to see the shapes and option chosen


yargs.command({
  command: 'select',
  describe: 'select set of shape from 1 to 3',
  builder: {
     option: {
       describe: 'Select a set from 1 to 3',
       demandOption: true,
       type: 'number'
     }
  },
  handler: function (argv) {
    if (argv.option > 3) {
      console.log('Please select from 1 to 3')
    } else if (argv.option === 1){
      play(board,pieceOne)
    } else if (argv.option === 2) {
      play(board,pieceTwo)
    } else {
      play(board, pieceThree)
    }
  }
})

yargs.argv




