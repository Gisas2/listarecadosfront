import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
    id: string;
    name: string;
    token?: string;
}

export interface CreateUser {
    name: string;
    pass: string;
    tpass: string
}

const initialState: User = {
    id: "", 
    name: ""
};

export const createUser = createAsyncThunk("users/create", async(user: CreateUser, thunkAPI) => {
    const response = await axios.post(
        "https://api-tasks-list.herokuapp.com/user/", user
    )

    return response.data.data
})

const sliceNameSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
  extraReducers(builder){
    builder.addCase(createUser,isFulfilled, (state, action) => {
        return {
            id: action.payload.id,
            name: action.payload.name,
            taskList: action.payload.taskList
        }
    })
  },
});

export const { create, clear } = sliceNameSlice.actions;
export default sliceNameSlice.reducer;
