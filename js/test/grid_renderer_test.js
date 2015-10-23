define(["exports", "app/grid_renderer"], function (exports, _appGrid_renderer) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _GridRenderer = _interopRequireDefault(_appGrid_renderer);

  describe("GridRenderer", function () {
    describe("#renderGrid", function () {
      it("should render a grid", function () {
        var grid = new Grid(4, 4);
        grid.addCells([[1, 0]]);

        var renderer = new _GridRenderer["default"]();

        assert.equal(".X..\n....\n....\n....\n", renderer.renderGrid(grid));
      });
    });
  });
});

