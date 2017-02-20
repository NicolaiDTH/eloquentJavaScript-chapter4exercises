var boardsize = 8;

var board = '';

for (var down = 0; down < boardsize; down++) {
 for (var across = 0; across < boardsize; across++) {
  if ((down + across) % 2 == 0)
   board += ' ';
  else
   board += '#';
 }

 board += '\n';
}

console.log(board);