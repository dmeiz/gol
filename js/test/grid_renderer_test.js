define(['exports', 'app/grid_renderer', 'app/grid'], function (exports, _appGrid_renderer, _appGrid) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _GridRenderer = _interopRequireDefault(_appGrid_renderer);

  var _Grid = _interopRequireDefault(_appGrid);

  describe("GridRenderer", function () {
    describe("#renderGrid", function () {
      it("should render a grid", function () {
        var grid = new _Grid['default'](4, 4);
        grid.addCells([[1, 0]]);

        var renderer = new _GridRenderer['default']();

        assert.equal(".X..\n....\n....\n....\n", renderer.renderGrid(grid));
      });
    });
  });
});

