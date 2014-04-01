
# OXO game

This kata should touch on a few things; OO and design; a tiny bit of algorithms etc. We're trying to lean towards more "complete" mini-applications instead of simple methods to implement.

## Assignment

Yay, it's [OXO](http://en.wikipedia.org/wiki/OXO)/Tictactoe! Does this need an introduction? 

```
| | |X|
|O|X| |
|X| | |
```

X wins.

```
| | |X|
|O|X| |
|X| | |
```

O wins. 
There's nothing more to it:

* Three of the same symbols in a row (horizontally, vertically or diagonally) = win.
* It's turn based. There's a player (for instance, `move(pos)`) and an AI which auto-moves.
* The AI always chooses the "most optimal" position. 

### AI

Free to interprete however you'd like, except for the obvious: 

```
| | |X|
|O| | |
|X| | |
```

* Next move of the AI, if playing with X, should be the winning move in the center.
* Next move of the AI, if playing with O, should be the O in the center, to block the player.

There are "perfect tic-tac-toe" games, see the [Wikipedia Strategy reference](http://en.wikipedia.org/wiki/Noughts_and_crosses), but it's not required to implement all these rules. 

Remember to do this test-first, especially the AI algorithm, as this will help you pin it down. 