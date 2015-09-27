describe("Grid", function() {
  describe("#new", function() {
    it("should create a MxN grid of false values", function() {
      var grid = new Grid(4, 4);
      grid.eachCell(function(x, y, state) {
        assert.equal(false, state, "at position (" + x + "," + y + ")" );
      })
    });
  });

  describe("#width", function() {
    it("should return the grids width", function() {
      var grid = new Grid(5, 4);

      assert.equal(5, grid.width());
    });
  });

  describe("#height", function() {
    it("should return the grids height", function() {
      var grid = new Grid(5, 4);

      assert.equal(4, grid.height());
    });
  });

  describe("#eachCell()", function() {
    it ("should iterate through each cell in the grid", function() {
      var grid = new Grid(2, 2);
      grid.addCells([[1,0]])

      var callbacks = [];
      var thisArg = new String("thisArg")

      grid.eachCell(function(x, y, state) {
        callbacks.push([x, y, state, this]);
      }, thisArg);

      assert.equal(4, callbacks.length);
      assert.deepEqual([0, 0, false, thisArg], callbacks[0]);
      assert.deepEqual([1, 0, true, thisArg], callbacks[1]);
      assert.deepEqual([0, 1, false, thisArg], callbacks[2]);
      assert.deepEqual([1, 1, false, thisArg], callbacks[3]);
    });
  });

  describe("#eachNeighbor", function() {
    var
      grid = null,
      callbacks = null,
      thisArg = new String("thisArg");

    function recordNeighbor(x, y, state) { callbacks.push([x, y, state, this]); }

    beforeEach(function() {
      // X...
      // .X..
      // ..X.
      // ...X
      grid = new Grid(4, 4);
      grid.addCells([[0,0], [1,1], [2,2], [3,3]]);

      callbacks = [];
    });

    it("should iterate through top-left corner neighbors", function() {
      grid.eachNeighbor(0, 0, recordNeighbor, thisArg);

      assert.equal(3, callbacks.length);
      assert.deepEqual([1, 0, false, thisArg], callbacks[0], "0");
      assert.deepEqual([0, 1, false, thisArg], callbacks[1], "1");
      assert.deepEqual([1, 1, true, thisArg], callbacks[2], "2");
    });

    it("should iterate through top edge neighbors", function() {
      grid.eachNeighbor(1, 0, recordNeighbor, thisArg);

      assert.equal(5, callbacks.length);
      assert.deepEqual([0, 0, true, thisArg], callbacks[0], "0");
      assert.deepEqual([2, 0, false, thisArg], callbacks[1], "1");
      assert.deepEqual([0, 1, false, thisArg], callbacks[2], "2");
      assert.deepEqual([1, 1, true, thisArg], callbacks[3], "3");
      assert.deepEqual([2, 1, false, thisArg], callbacks[4], "4");
    });

    it("should iterate through top-right corner neighbors", function() {
      grid.eachNeighbor(3, 0, recordNeighbor, thisArg);

      assert.equal(3, callbacks.length);
      assert.deepEqual([2, 0, false, thisArg], callbacks[0], "0");
      assert.deepEqual([2, 1, false, thisArg], callbacks[1], "1");
      assert.deepEqual([3, 1, false, thisArg], callbacks[2], "2");
    });

    it("should iterate through left edge neighbors", function() {
      grid.eachNeighbor(0, 1, recordNeighbor, thisArg);

      assert.equal(5, callbacks.length);
      assert.deepEqual([0, 0, true, thisArg], callbacks[0], "0");
      assert.deepEqual([1, 0, false, thisArg], callbacks[1], "1");
      assert.deepEqual([1, 1, true, thisArg], callbacks[2], "2");
      assert.deepEqual([0, 2, false, thisArg], callbacks[3], "3");
      assert.deepEqual([1, 2, false, thisArg], callbacks[4], "4");
    });

    it("should iterate through inner cell neighbors", function() {
      grid.eachNeighbor(1, 1, recordNeighbor, thisArg);

      assert.equal(8, callbacks.length);
      assert.deepEqual([0, 0, true, thisArg], callbacks[0], "0");
      assert.deepEqual([1, 0, false, thisArg], callbacks[1], "1");
      assert.deepEqual([2, 0, false, thisArg], callbacks[2], "2");
      assert.deepEqual([0, 1, false, thisArg], callbacks[3], "3");
      assert.deepEqual([2, 1, false, thisArg], callbacks[4], "4");
      assert.deepEqual([0, 2, false, thisArg], callbacks[5], "5");
      assert.deepEqual([1, 2, false, thisArg], callbacks[6], "6");
      assert.deepEqual([2, 2, true, thisArg], callbacks[7], "7");
    });

    it("should iterate through right edge neighbors", function() {
      grid.eachNeighbor(3, 1, recordNeighbor, thisArg);

      assert.equal(5, callbacks.length);
      assert.deepEqual([2, 0, false, thisArg], callbacks[0], "0");
      assert.deepEqual([3, 0, false, thisArg], callbacks[1], "1");
      assert.deepEqual([2, 1, false, thisArg], callbacks[2], "2");
      assert.deepEqual([2, 2, true, thisArg], callbacks[3], "3");
      assert.deepEqual([3, 2, false, thisArg], callbacks[4], "4");
    });

    it("should iterate through bottom-left corner neighbors", function() {
      grid.eachNeighbor(0, 3, recordNeighbor, thisArg);

      assert.equal(3, callbacks.length);
      assert.deepEqual([0, 2, false, thisArg], callbacks[0], "0");
      assert.deepEqual([1, 2, false, thisArg], callbacks[1], "1");
      assert.deepEqual([1, 3, false, thisArg], callbacks[2], "2");
    });

    it("should iterate through bottom edge neighbors", function() {
      grid.eachNeighbor(1, 3, recordNeighbor, thisArg);

      assert.equal(5, callbacks.length);
      assert.deepEqual([0, 2, false, thisArg], callbacks[0], "0");
      assert.deepEqual([1, 2, false, thisArg], callbacks[1], "1");
      assert.deepEqual([2, 2, true, thisArg], callbacks[2], "2");
      assert.deepEqual([0, 3, false, thisArg], callbacks[3], "3");
      assert.deepEqual([2, 3, false, thisArg], callbacks[4], "4");
    });

    it("should iterate through bottom-right corner neighbors", function() {
      grid.eachNeighbor(3, 3, recordNeighbor, thisArg);

      assert.equal(3, callbacks.length);
      assert.deepEqual([2, 2, true, thisArg], callbacks[0], "0");
      assert.deepEqual([3, 2, false, thisArg], callbacks[1], "1");
      assert.deepEqual([2, 3, false, thisArg], callbacks[2], "2");
    });
  });


  describe("#seedGrid", function() {
    it("should seed the grid randomly per a random factor", function() {
      var grid = new Grid(4, 4)
      grid.seed();

      var liveCount = 0;
      grid.eachCell(function(x, y, state) {
        if (state) { liveCount++; }
      })

      assert(liveCount > 0, "there are some live cells");
    });
  });

  describe("#addCells()", function() {
    var grid;

    before(function() {
      grid = new Grid(4, 4)
    });

    it("should add cells to the grid", function() {
      grid.addCells([[0,0], [2,3]])

      assert.equal(true, grid.cells[0][0]);
      assert.equal(true, grid.cells[2][3]);
    });
  });

});
