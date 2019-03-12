const View = require("./ttt-view");
const Game = require("./game.js");

  $(() => {
    const game = new Game();
    const view = new View(game, $(".ttt"));
    view.setupBoard();
    view.bindEvents();
  });
