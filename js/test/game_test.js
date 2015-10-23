define(["exports", "app/game", "app/grid"], function (exports, _appGame, _appGrid) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _Game = _interopRequireDefault(_appGame);

  var _Grid = _interopRequireDefault(_appGrid);

  describe("Game", function () {
    describe("#new", function () {
      it("should accept a grid", function () {
        var game = new _Game["default"](new _Grid["default"](4, 4));
      });
    });

    describe("#getGrid", function () {
      it("should return the grid", function () {
        var grid = new _Grid["default"](4, 4);
        var game = new _Game["default"](grid);

        assert.equal(grid, game.getGrid());
      });
    });

    describe("#nextCellState()", function () {
      var game = null,
          grid = null;

      beforeEach(function () {
        grid = new _Grid["default"](4, 4);
        game = new _Game["default"](grid);
      });

      it("should handle under-population", function () {
        assert.equal(false, game.nextCellState(true, 0));
        assert.equal(false, game.nextCellState(true, 1));
      });

      it("should handle survival", function () {
        assert.equal(true, game.nextCellState(true, 2));
        assert.equal(true, game.nextCellState(true, 3));
      });

      it("should handle over-population", function () {
        assert.equal(false, game.nextCellState(true, 4));
        assert.equal(false, game.nextCellState(true, 5));
        assert.equal(false, game.nextCellState(true, 6));
        assert.equal(false, game.nextCellState(true, 7));
        assert.equal(false, game.nextCellState(true, 8));
      });

      it("should handle reproduction", function () {
        assert.equal(true, game.nextCellState(false, 3));
      });

      it("should handle everything else", function () {
        assert.equal(false, game.nextCellState(false, 0));
        assert.equal(false, game.nextCellState(false, 1));
        assert.equal(false, game.nextCellState(false, 2));
        assert.equal(false, game.nextCellState(false, 4));
        assert.equal(false, game.nextCellState(false, 5));
        assert.equal(false, game.nextCellState(false, 6));
        assert.equal(false, game.nextCellState(false, 7));
        assert.equal(false, game.nextCellState(false, 8));
      });
    });

    describe("#step", function () {
      function gridToArray(grid) {
        var arr = [];
        grid.eachCell(function (x, y, state) {
          arr.push(state);
        });
        return arr;
      }

      it("should evolve the game", function () {

        // .X..
        // XXX.
        // ....
        // ....
        var grid = new _Grid["default"](4, 4);
        grid.addCells([[1, 0], [0, 1], [1, 1], [2, 1]]);

        // XXX.
        // XXX.
        // .X..
        // ....
        var expectedGrid = new _Grid["default"](4, 4);
        expectedGrid.addCells([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [1, 2], [2, 1]]);

        var game = new _Game["default"](grid);
        game.step();

        assert.deepEqual(gridToArray(expectedGrid), gridToArray(game.getGrid()));
      });
    });
  });
});

