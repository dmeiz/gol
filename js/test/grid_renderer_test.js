define(["app/grid_renderer"], function(GridRenderer) {

describe("GridRenderer", function() {
  describe("#renderGrid", function() {
    it("should render a grid", function() {
      var grid = new Grid(4, 4);
      grid.addCells([[1,0]]);

      var renderer = new GridRenderer();

      assert.equal(".X..\n....\n....\n....\n", renderer.renderGrid(grid));
    });
  });
});

});
