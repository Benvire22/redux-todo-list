import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Task, TaskApi} from "../../types";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";

interface TaskApiResponse {
    [key: string]: TaskApi;
}

export interface TodosState {
    tasks: Task[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: TodosState = {
    tasks: [],
    isLoading: false,
    isError: false,
};

export const addTask = createAsyncThunk<void, string, { state: RootState }>(
    'todos/addTask',
    async (title: string) => {
        const newTask: TaskApi = {
            title,
            isDone: false,
        };
        await axiosApi.post('/todos.json', newTask);
    }
);

export const fetchTasks = createAsyncThunk<Task[], void, { state: RootState }>(
    'todos/fetchTasks',
    async () => {
        const {data: tasksData} = await axiosApi.get<TaskApiResponse>('/todos.json');

        if (tasksData !== null) {
            return  Object.keys(tasksData).map((key: string) => ({
                    ...tasksData[key],
                    id: key,
                }
            ));
        } else {
            return [];
        }
    }
);

export const deleteTask = createAsyncThunk<void, string, { state: RootState }>(
    'todos/deleteTask',
    async (id: string) => {
        await axiosApi.delete(`/todos/${id}.json`);
    }
);


export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTask.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(addTask.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(addTask.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        builder.addCase(fetchTasks.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tasks = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        builder.addCase(deleteTask.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(deleteTask.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(deleteTask.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export const todosReducer = todosSlice.reducer;