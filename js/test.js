// QUESTION: What's the right way to handle the mocha arg? I'm just giving it a throw-away arg.
require(["lib/mocha", "lib/chai"], function(mochaArg, chai) {
  mocha.setup('bdd');
  assert = chai.assert;
  require(["test/grid_test"], function() {
    mocha.checkLeaks();
    mocha.run();
  });
});
