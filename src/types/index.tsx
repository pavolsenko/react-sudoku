import { List } from 'immutable';

export type TSudokuNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type TSudokuRow = List<TSudokuNumber>;

export type TSudokuPuzzle = List<TSudokuRow>;