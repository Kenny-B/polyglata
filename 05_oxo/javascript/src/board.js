
(function() {
	var O = 'O';
	var X = 'X';
	var _ = ' ';

	function newBoard(player) {
		var board = [
			[ _, _, _ ],
			[ _, _, _ ],
			[ _, _, _ ]
		];

		function mid() {
			return {x: 1, y: 1};
		}

		return {
			board: board,
			mid: mid,
			pieces: {
				X: X,
				O: O,
				_: _
			},
			thePlayer: player,
			theAi: player === O ? X : O
		};
	}

	exports.board = newBoard;

})();
