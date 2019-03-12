class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    const $ul = this.el.find("ul");
    $ul.on("click", "li", (event) => {
      const li = event.currentTarget;
      const id = Array.from(li.id);
      const pos = id.map(el => parseInt(el));
      this.makeMove($(li));
      this.game.playMove(pos);
      this.displayWinner();
    });
  }

  displayWinner() {
    if (this.game.isOver()) {
      if (this.game.winner()) {
        const $div = $(`<div>${this.game.winner()} has won!</div>`);
        const $body = $('body');
        $body.append($div);
      } else {
        const $div = $(`<div>It's a draw!</div>`);
        const $body = $('body');
        $body.append($div);
      }
    }
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    this.el.append($ul);

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        let $li = $(`<li id="${x}${y}"></li>`);
        $ul.append($li);
      }
    }
  }
}

module.exports = View;
