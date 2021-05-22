import * as React from 'react';

import { Button } from '@material-ui/core';

import {SimplePage} from "../layout/SimplePage";
import {SudokuBacktrackGenerator} from "../tools/SudokuBacktrackGenerator";
import {TSudokuPuzzle} from "../types";
import {SudokuPuzzle} from "../components/SudokuPuzzle";

const generator = new SudokuBacktrackGenerator();

export const Game: React.FC = () => {
    const [puzzle, setPuzzle] = React.useState<TSudokuPuzzle | undefined>();

    const onClick = (): void => {
        const puzzle = generator.generatePuzzle();
        setPuzzle(puzzle);
    }

    const renderPuzzle = (): React.ReactNode | undefined => {
        if (!puzzle) {
            return;
        }

        return (
            <SudokuPuzzle puzzle={puzzle}/>
        );
    }

    return (
        <SimplePage>
            <Button
                color={'primary'}
                variant={'contained'}
                onClick={onClick}
            >
                Generate Sudoku
            </Button>

            {renderPuzzle()}
        </SimplePage>
    );
}