import {createSlice} from "@reduxjs/toolkit";
import {Task} from "../../types";

const initialState: Task[] = [];

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {}
});

export const todosReducer = todosSlice.reducer;