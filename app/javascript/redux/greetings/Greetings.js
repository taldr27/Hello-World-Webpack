import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/greetings/random';

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (_, action) => action.payload);
    builder.addCase(fetchGreetings.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(fetchGreetings.pending, (_, action) => action.payload);
  },
});

export const fetchGreetings = createAsyncThunk('FETCH_MESSAGE', () => axios.get(url)
  .then((response) => {
    const greetings = response.data;
    return greetings;
}));

export default greetingsSlice.reducer;

