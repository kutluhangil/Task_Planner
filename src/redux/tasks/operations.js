import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/tasks");
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (text, thunkAPI) => {
        try {
            const res = await axios.post("/tasks", { text });
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (taskId, thunkAPI) => {
        try {
            const res = await axios.delete(`/tasks/${taskId}`);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const toggleCompleted = createAsyncThunk(
    "tasks/toggleCompleted",
    async (task, thunkAPI) => {
        try {
            const res = await axios.patch(`/tasks/${task.id}`, {
                completed: !task.completed,
            });
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
