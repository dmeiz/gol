define(["exports", "module"], function (exports, module) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var GridRenderer = (function () {
    function GridRenderer() {
      _classCallCheck(this, GridRenderer);
    }

    _createClass(GridRenderer, [{
      key: "renderGrid",
      value: function renderGrid(grid) {
        var text = [];

        grid.eachCell(function (x, y, state) {
          return text[y * grid.width() + x] = state ? "X" : ".";
        });

        for (var i = grid.height(); i > 0; i--) {
          text.splice(i * grid.width(), 0, "\n");
        }

        return text.join('');
      }
    }]);

    return GridRenderer;
  })();

  module.exports = GridRenderer;
});

