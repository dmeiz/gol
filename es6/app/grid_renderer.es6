export default class GridRenderer {
  renderGrid(grid) {
    var text = [];

    grid.eachCell((x, y, state) => text[y * grid.width() + x] = state ? "X" : ".");

    for (var i = grid.height(); i > 0; i--) {
      text.splice(i * grid.width(), 0, "\n");
    }

    return text.join('');
  }
}
