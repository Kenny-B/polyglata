var board = require('./../src/board.js').board;
var ai = require('./../src/ai.js').ai;

describe("oxo AI", function() {

	var X, O, _;
	var layout;
	beforeEach(function() {
		layout = board('O'); 	// X = AI
		X = layout.pieces.X;
		O = layout.pieces.O;
		_ = layout.pieces._;
	});

	describe("AI", function() {
		it("should always start in the middle on a clean board", function() {
			layout.board = [
				[ _, _, _ ],
				[ _, _, _ ],
				[ _, _, _ ]
			];

			var pos = ai(layout);
			expect(pos.x).toBe(1);
			expect(pos.y).toBe(1);
		});

/*
		it("should set the winning move if two in a row", function() {
			layout.board = [[ X, X, _ ],
							[ O, _, _ ],
							[ _, _, _ ] ];

			var pos = ai(layout);
			expect(pos.x).toBe(0);
			expect(pos.y).toBe(2);
		});*/
	});

});
