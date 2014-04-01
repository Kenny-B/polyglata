var oxo = require('./../src/oxo.js').oxo;

describe("oxo GAME", function() {

	var X, O, _;
	var game;
	beforeEach(function() {
		game = oxo.newGame('O');	// user is O
		X = game.layout.pieces.X;
		O = game.layout.pieces.O;
		_ = game.layout.pieces._;
	});

	describe("determining the winner", function() {
		it("should return 'nothing yet' when no winner yet determined", function() {
			expect(game.winner()).toBe('nothing yet');
		});

		it("should return X when player X won horizontally", function() {
			game.layout.board = [
				[ _, _, O ],
				[ X, X, X ],
				[ _, O, _ ]
			];
			expect(game.winner()).toBe('Yay, X!');
		});

		it("should return O when player O won vertically", function() {
			game.layout.board = [
				[ _, _, O ],
				[ X, X, O ],
				[ _, O, O ]
			];
			expect(game.winner()).toBe('Yay, O!');
		});

		it("should return O when player O won diagonally right to left", function() {
			game.layout.board = [
				[ _, _, O ],
				[ X, O, X ],
				[ O, O, _ ]
			];
			expect(game.winner()).toBe('Yay, O!');
		});

		it("should return O when player O won diagonally left to right", function() {
			game.layout.board = [
				[ O, _, _ ],
				[ X, O, X ],
				[ _, O, O ]
			];
			expect(game.winner()).toBe('Yay, O!');
		});

		it("should return tie when both players came up empty", function() {
			game.layout.board = [
				[ O, X, O ],
				[ X, X, O ],
				[ X, O, X ]
			];
			expect(game.winner()).toBe('Tie. Exciting!');
		});
	});

	describe("Placing a move", function() {
		it("should update the board when my move has been made", function() {
			game.move(0, 0);

			expect(game.layout.board[0][0]).toBe(O);
		});

		it("should throw an exception when placing a move out of scope on X axis", function() {
			expect(function() {
				game.move(-1, 0);
			}).toThrow();

			expect(function() {
				game.move(3, 0);
			}).toThrow();
		});

		it("should throw an exception when placing a move out of scope on Y axis", function() {
			expect(function() {
				game.move(0, -1);
			}).toThrow();

			expect(function() {
				game.move(0, 3);
			}).toThrow();
		});
	});

});
