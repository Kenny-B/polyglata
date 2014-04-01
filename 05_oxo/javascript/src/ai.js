
(function(arrs) {

	function ai(layout) {
		var p = layout.pieces;

		function isEmpty() {
			return layout.board.every(function(lane) {
				return lane.every(function(pos) {
					return pos == p._;
				});
			});
		}

		function findWinningSpot() {
			var spot;
			function findHorizontally(board) {
				var horziontalSpot;
				board.forEach(function(lane, laneIndex) {
					var dict = arrs.dict(lane);
					function onlyOneHoleForAIToFill() {
						return !dict[layout.thePlayer] && dict[p._] && dict[p._].length == 1;
					}

					if(onlyOneHoleForAIToFill()) {
						horziontalSpot = { x: laneIndex, y: dict[p._][0] };
					}
				});
				if(horziontalSpot) {
					spot = horziontalSpot;
					return true;
				}
				return false;
			}
			function findVertically() {
				if(findHorizontally(arrs.rotate90(layout.board))) {
					spot = arrs.reverseRotate90Coords(spot, layout.mid());
				}
			}

			findHorizontally(layout.board);
			findVertically();

			return spot;
		}

		if(isEmpty()) {
			return {x: 1, y: 1};
		}
		var winner = findWinningSpot();
		if(winner) return winner;
		return {x: 2, y: 2};	// TODO what else?
	}

	exports.ai = ai

})(require('./arrays.js'));