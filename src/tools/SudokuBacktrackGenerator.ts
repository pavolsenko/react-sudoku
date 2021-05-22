import { List } from 'immutable';

import { TSudokuNumber, TSudokuPuzzle, TSudokuRow } from '../types';

export class SudokuBacktrackGenerator {
    private puzzle: TSudokuPuzzle;

    constructor() {
        this.createEmptyPuzzle = this.createEmptyPuzzle.bind(this);
        this.generateRandomNiner = this.generateRandomNiner.bind(this);
        this.isValidNumber = this.isValidNumber.bind(this);
        this.addNextNumberToPuzzle = this.addNextNumberToPuzzle.bind(this);
        this.generatePuzzle = this.generatePuzzle.bind(this);

        this.puzzle = this.createEmptyPuzzle();
    }

    protected createEmptyPuzzle(): TSudokuPuzzle {
        let result: TSudokuPuzzle = List();

        for (let i = 0; i < 9; i++) {
            result = result.set(i, List());
        }

        return result;
    }

    protected generateRandomNiner(): TSudokuRow {
        let startNiner = List(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        let resultNiner = List();

        while (startNiner.count() > 0) {
            const randomIndex = Math.floor(Math.random() * startNiner.count());
            resultNiner = resultNiner.push(startNiner.get(randomIndex));

            startNiner = startNiner.delete(randomIndex);
        }

        return resultNiner;
    }

    protected isValidNumber(
        sudokuNumber: TSudokuNumber,
        puzzle: TSudokuPuzzle,
        row: number,
        column: number,
    ): boolean {
        for (let i = 0; i < 9; i++) {
            if (puzzle.getIn([row, i]) === sudokuNumber) {
                return false;
            }

            if (puzzle.getIn([i, column]) === sudokuNumber) {
                return false;
            }
        }

        const sectorRow = 3 * Math.floor(row / 3);
        const sectorColumn = 3 * Math.floor(column / 3);

        const row1 = (row + 2) % 3;
        const row2 = (row + 4) % 3;

        const column1 = (column + 2) % 3;
        const column2 = (column + 4) % 3;

        if (puzzle.getIn([row1 + sectorRow, column1 + sectorColumn]) === sudokuNumber) {
            return false;
        }

        if (puzzle.getIn([row2 + sectorRow, column1 + sectorColumn]) === sudokuNumber) {
            return false;
        }

        if (puzzle.getIn([row1 + sectorRow, column2 + sectorColumn]) === sudokuNumber) {
            return false;
        }

        if (puzzle.getIn([row2 + sectorRow, column2 + sectorColumn]) === sudokuNumber) {
            return false;
        }

        return true;
    };

    protected addNextNumberToPuzzle(puzzle: TSudokuPuzzle, row: number, column: number): boolean {
        if (row === 9 || !puzzle) {
            this.puzzle = puzzle;
            return true;
        }

        const randomNiner = this.generateRandomNiner();
        for (let i = 0; i < 9; i++) {
            const nextNumber = randomNiner.get(i) || '1';

            const isValidNumber = this.isValidNumber(
                nextNumber,
                puzzle,
                row,
                column
            );

            if (!isValidNumber) {
                continue;
            }

            puzzle = puzzle.setIn([row, column], nextNumber);
            console.log(puzzle.toArray());

            if (column === 8) {
                if (this.addNextNumberToPuzzle(puzzle, row + 1, 0)) {
                    return true;
                }
            } else {
                if (this.addNextNumberToPuzzle(puzzle, row, column + 1)) {
                    return true;
                }
            }
        }

        return false;
    };

    public generatePuzzle(): TSudokuPuzzle | undefined {
        this.puzzle = this.createEmptyPuzzle();

        this.puzzle = this.puzzle.set(0, this.generateRandomNiner());
        this.addNextNumberToPuzzle(this.puzzle, 1, 0);

        return this.puzzle;
    };
}





