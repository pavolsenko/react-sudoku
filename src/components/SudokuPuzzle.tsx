import * as React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

import { TSudokuPuzzle, TSudokuRow } from "../types";

interface ISudokuPuzzleProps {
    puzzle?: TSudokuPuzzle;
}

const useStyles = makeStyles((theme: Theme) => ({
    puzzleRow: {
        borderBottom: '2px solid ' + theme.palette.primary.main,
        borderRight: '2px solid ' + theme.palette.primary.main,

        '&:first-child': {
            borderLeft: '2px solid ' + theme.palette.primary.main,
        },
    },
    puzzleItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        fontSize: '24px',
        borderTop: '2px solid ' + theme.palette.primary.main,
    },
}));

export const SudokuPuzzle: React.FC<ISudokuPuzzleProps> = (props: ISudokuPuzzleProps) => {
    const classes = useStyles();

    const renderRow = (puzzleRow: TSudokuRow | undefined): React.ReactNode[] => {
        const result: React.ReactNode[] = [];

        for (let i = 0; i < 9; i++) {
            result.push(
                <div className={classes.puzzleItem} key={i.toString()}>
                    {puzzleRow?.get(i)}
                </div>
            );
        }

        return result;
    }

    const renderSudoku = () => {
        const result: React.ReactNode[] = [];

        for (let i = 0; i < 9; i++) {
            result.push(
                <div className={classes.puzzleRow} key={i.toString()}>
                    {renderRow(props.puzzle?.get(i))}
                </div>
            )
        }

        return result;
    }

    return (
        <Grid container>
            {renderSudoku()}
        </Grid>
    );
}