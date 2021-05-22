import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {SimplePage} from "../layout/SimplePage";

export const Homepage: React.FC = () => {
    return (
        <SimplePage>
            <Grid container>
                <Grid item>
                    <Typography variant={'h1'}>Sudoku</Typography>

                    <div>
                    Sudoku (数独, sūdoku, digit-single) (originally called Number Place) is a logic-based,
                    combinatorial number-placement puzzle. In classic sudoku, the objective is to fill a 9×9 grid
                    with digits so that each column, each row, and each of the nine 3×3 subgrids that compose
                    the grid (also called "boxes", "blocks", or "regions") contains all of the digits from 1 to 9.
                    The puzzle setter provides a partially completed grid, which for a well-posed puzzle
                    has a single solution.
                    </div>

                    <div>
                    French newspapers featured variations of the Sudoku puzzles in the 19th century,
                    and the puzzle has appeared since 1979 in puzzle books under the name Number Place.
                    However, the modern Sudoku only began to gain widespread popularity in 1986 when it was published
                    by the Japanese puzzle company Nikoli under the name Sudoku, meaning "single number".
                    It first appeared in a U.S. newspaper, and then The Times (London), in 2004,
                    thanks to the efforts of Wayne Gould, who devised a computer program to rapidly produce unique puzzles.
                    </div>
                </Grid>

            </Grid>
        </SimplePage>
    );
}