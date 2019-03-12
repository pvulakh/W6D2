class View {
    constructor(game, $el) {
        this.game = game;
        this.el = $el;
        this.setupTowers();
        this.render();
    }

    setupTowers() {
        for(let x = 0; x < 3; x++) {
            const $ul = $("<ul></ul>");
            this.el.append($ul);
            for (let y = 2; y >= 0; y--) {
                let $li = $(`<li id="${x}${y}"></li>`);
                $ul.append($li);
            }
        }
    }

    render() {
        const that = this;
        $("li").each(function(index) {
            const $li = $(this);
            const id = Array.from($li.attr('id'));
            const pos = id.map(el => parseInt(el));
            const disk = that.game.towers[pos[0]][pos[1]];
            $li.removeClass('v-1 v-2 v-3 v-undefined');
            $li.addClass(`v-${disk}`);
        });
    }
}

module.exports = View;