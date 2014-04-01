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
			expect(pos).toEqual({x: 1, y: 1});
		});

		describe("sets the winning move", function() {
			it("should win horizontally if two in a row, first row", function() {
				layout.board = [[ X, X, _ ],
								[ O, _, _ ],
								[ _, _, _ ] ];

				var pos = ai(layout);
				expect(pos).toEqual({x: 0, y: 2});
			});

			it("should win horizontally if two in a row, last row", function() {
				layout.board = [[ X, O, _ ],
								[ O, _, _ ],
								[ _, X, X ] ];

				var pos = ai(layout);
				expect(pos).toEqual({x: 2, y: 0});
			});

			it("should win vertically if two in a row, first column", function() {
				layout.board = [[ X, O, _ ],
								[ X, _, _ ],
								[ _, _, _ ] ];

				var pos = ai(layout);
				expect(pos).toEqual({x: 0, y: 2});
			});

			it("should win vertically if two in a row, last column", function() {
				layout.board = [[ X, O, X ],
								[ O, _, _ ],
								[ _, _, X ] ];

				var pos = ai(layout);
				expect(pos).toEqual({x: 1, y: 2});
			});
		});
	});

});
