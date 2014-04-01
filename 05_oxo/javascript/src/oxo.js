(function(ai, board, arrs) {

	function newGame(thePlayer) {
		var layout = board(thePlayer);

		function place(x, y, player) {
			layout.board[x][y] = player;
		}

		function move(x, y) {
			function notOutOfBounds(mv) {
				if(mv < 0 || mv > 2) {
					throw "move is out of bounds";
				}
			}
			notOutOfBounds(x);
			notOutOfBounds(y);

			place(x, y, layout.thePlayer);
			var aiPos = ai(layout);
			place(aiPos.x, aiPos.y, layout.theAi);
		}

		function winner() {
			var winningPiece;

			function emptyPosition() {
				return [].concat.apply([], layout.board).some(function(p) {
					return p === layout.pieces._;
				});
			}
			function uniqueLineIsWinner(line) {
				if(arrs.unique(line)) {
					winningPiece = line[0];
					return true;
				}				
			}

			function horizontally(board) {
				board.some(function(line) {
					if(uniqueLineIsWinner(line)) {
						return true;
					}
				});
			}
			function vertically() {
				horizontally(arrs.rotate90(layout.board));
			}
			function diagonallyLeftToRight() {
				var diagonal = [];
				for(var i = 0; i < layout.board.length; i++) {
					diagonal.push(layout.board[i][i]);
				}
				uniqueLineIsWinner(diagonal);
			}
			function diagonallyRightToLeft() {
				var diagonal = [];
				for(var i = 1; i <= layout.board.length; i++) {
					diagonal.push(layout.board[i - 1][layout.board.length - i]);
				}
				uniqueLineIsWinner(diagonal);
			}

			horizontally(layout.board);
			vertically();
			diagonallyLeftToRight();
			diagonallyRightToLeft();
			if(winningPiece && winningPiece != layout.pieces._) return "Yay, " + winningPiece + "!";
			if(emptyPosition()) return "nothing yet";

			return "Tie. Exciting!";
		}

		return {
			layout: layout,
			ai: ai,
			move: move,
			winner: winner
		};
	}

	exports.oxo = {
		newGame: newGame
	};

})(require('./ai.js').ai, require('./board.js').board, require('./arrays.js'));
