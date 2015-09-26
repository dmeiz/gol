describe("Grid", function() {
  describe("#new", function() {
    it("should create a MxN grid of false values", function() {
      var grid = new Grid(4, 4);
      grid.eachCell(function(x, y, state) {
        assert.equal(false, state, "at position (" + x + "," + y + ")" );
      })
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
