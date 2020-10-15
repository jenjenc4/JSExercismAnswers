//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor(queens = { white: [0, 3], black: [7, 3] }) {
        this.white = queens.white;
        this.black = queens.black;

        if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
            throw new Error('Queens cannot share the same space');
        }

        this.rows = [];

        for (let i = 0; i < 8; i++) {
            this.rows[i] = new Row();
        }

        this.rows[this.white[0]].columns[this.white[1]] = 'W';
        this.rows[this.black[0]].columns[this.black[1]] = 'B';
    }

    toString() {
        return this.rows.join('\n') + '\n';
    }

    canAttack() {
        if (this.white[0] === this.black[0]) {
            return true;
        }

        if (this.white[1] === this.black[1]) {
            return true;
        }

        return Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]);
    }
}

class Row {
    constructor() {
        this.columns = [];
        this.columns.length = 8;
        this.columns.fill('_');
    }

    toString() {
        return this.columns.join(' ');
    }
}
