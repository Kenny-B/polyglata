
(function() {

	function ai(layout) {
		var p = layout.pieces;

		function isEmpty() {
			var empty = true;
			layout.board.forEach(function(lane) {
				lane.forEach(function(pos) {
					if(pos !== p._) empty == false;
				});
			});
			return empty;
		}

		if(isEmpty()) {
			return {x: 1, y: 1};
		}
	}

	exports.ai = ai

})();