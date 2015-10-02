define(function() {

GridRenderer = function() {
}

GridRenderer.prototype.renderGrid = function(grid) {
  var text = [];

  grid.eachCell(function(x, y, state) {
    text[y * grid.width() + x] = state ? "X" : "."
  });

  for (var i = grid.height(); i > 0; i--) {
    text.splice(i * grid.width(), 0, "\n");
  }

  return text.join('');
}

return GridRenderer;
});
